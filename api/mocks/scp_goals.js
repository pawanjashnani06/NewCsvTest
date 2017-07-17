'use strict'

module.exports = {
  goals: goals,
  goaltypes: goaltypes,
  goalsForPost: goalsForPost
}

function goals (req, res, next) {
  res.json([
    [
      {
        'GoalIdentifier': '',
        'GoalTypeId': '1',
        'TargetAmount': 5000,
        'TargetDate': '2016-08-10',
        'ContributionAmount': 0,
        'GoalAccount': '1009427709',
        'GoalName': 'Laptop',
        'GoalPicture': '/content/dam/nedbank-scp/site-assets/goals/laptop.jpg'
      }
    ]
  ])
}

function goaltypes (req, res, next) {
  res.json([
    [
      {
        'GoalTypeId': 'Sample text',
        'GoalTypeDescription': 'Sample text',
        'GoalIconClass': 'Sample text',
        'GoalCategoryImageTag': 'Sample text',
        'GoalDefaultImageTag': 'Sample text'
      }
    ]
  ])
}

function goalsForPost (req, res, next) {
  res.json([
    [
      {
        'GoalIdentifier': '',
        'GoalTypeId': '1',
        'TargetAmount': 5000,
        'TargetDate': '2016-08-10',
        'ContributionAmount': 0,
        'GoalAccount': '1009427709',
        'GoalName': 'Laptop',
        'GoalPicture': '/content/dam/nedbank-scp/site-assets/goals/laptop.jpg'
      }
    ]
  ])
}
