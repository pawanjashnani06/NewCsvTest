#!/usr/bin/env bash

# more bash-friendly output for jq
JQ="jq --raw-output --exit-status"

configure_aws_cli(){
	aws --version
	aws configure set default.region ap-southeast-1
	aws configure set default.output json
}

deploy_cluster() {

    family="greenbankstub-task"

    make_task_def
    register_definition
		# aws ecs update-service --cluster greenbankstub --service greenbank-service --task-definition ${family}:${task_revision} --desired-count 2 > /dev/null
		if [[ $(aws ecs update-service --cluster greenbankstub --service greenbank-service --task-definition ${family}:${task_revision} | \
								 $JQ '.service.taskDefinition') != $revision ]]; then
			echo "Error updating service."
			return 1
	fi

	# wait for older revisions to disappear
	# not really necessary, but nice for demos
	for attempt in {1..30}; do
			if stale=$(aws ecs describe-services --cluster greenbankstub --service greenbank-service | \
										 $JQ ".services[0].deployments | .[] | select(.taskDefinition != \"$revision\") | .taskDefinition"); then
					echo "Waiting for stale deployments:"
					echo "$stale"
					sleep 5
			else
					echo "Deployed!"
					return 0
			fi
	done
	echo "Service update took too long."
	return 1
}

make_task_def(){
	task_template='[
		{
			"name": "greenbankstub-container",
			"image": "365228081331.dkr.ecr.ap-southeast-1.amazonaws.com/greenbankstub:'${CIRCLE_SHA1}'",
			"essential": true,
			"memory": 500,
			"cpu": 10,
			"portMappings": [
				{
					"hostPort": 80,
					"containerPort": 10010,
					"protocol": "tcp"
				},
				{
					"hostPort": 10011,
					"containerPort": 10011,
					"protocol": "tcp"
				}
			]
		}
	]'
  echo $task_template
	task_def=$(printf "$task_template" $AWS_ACCOUNT_ID $CIRCLE_SHA1)
}

register_definition() {

    if revision=$(aws ecs register-task-definition --container-definitions "$task_def" --family $family | $JQ '.taskDefinition.taskDefinitionArn'); then
        echo "Revision: $revision"
    else
        echo "Failed to register task definition"
        return 1
    fi
		task_revision=`aws ecs describe-task-definition --task-definition greenbankstub-task | egrep "revision" | tr "/" " " | awk '{print $2}' | sed 's/"$//'`
    DESIRED_COUNT=`aws ecs describe-services  --cluster greenbankstub --services greenbank-service | egrep "desiredCount" | tr "/" " " | awk '{print $2}' | sed 's/,$//'`
}
push_ecr_image(){
	eval $(aws ecr get-login --region ap-southeast-1)
	docker tag greenbankstub $AWS_ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com/greenbankstub:$CIRCLE_SHA1
	docker push $AWS_ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com/greenbankstub:$CIRCLE_SHA1
}

configure_aws_cli
push_ecr_image
deploy_cluster
