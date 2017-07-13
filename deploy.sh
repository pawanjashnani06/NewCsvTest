#!/usr/bin/env bash

# more bash-friendly output for jq
JQ="jq --raw-output --exit-status"

configure_aws_cli(){
	aws --version
	aws configure set default.region ap-southeast-1
	aws configure set default.output json
}


push_ecr_image(){
	eval $(aws ecr get-login --region ap-southeast-1)
	docker tag greenbankstub $AWS_ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com/greenbankstub:$CIRCLE_SHA1
	docker push $AWS_ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com/greenbankstub:$CIRCLE_SHA1
}

configure_aws_cli
push_ecr_image
