'use strict'

module.exports = {
  investorNumber: investorNumber,
  linkedSourceOfFunds: linkedSourceOfFunds,
  fundSourceDescriptions: fundSourceDescriptions

}

function investorNumber (req, res, next) {
  res.json(
      '12345'
    )
}

function linkedSourceOfFunds (req, res, next) {
  res.json([
    {
      'identifier': '5224772',
      'number': '50045199',
      'type': 'Current Account',
      'name': 'Mr DS COOPER',
      'institutionName': 'STANDARD BANK S.A',
      'institutionBranchNumber': '40026',
      'institutionBranchName': 'KINGSMEAD'
    },

    {
      'identifier': '5196341',
      'number': '50045199',
      'type': 'Current Account',
      'name': 'Mr DS COOPER',
      'institutionName': 'STANDARD BANK S.A',
      'institutionBranchNumber': '51001',
      'institutionBranchName': 'STANDARD BANK SOUTH AFRICA'
    }

  ])
}

function fundSourceDescriptions (req, res, next) {
  res.json([

    'This is a fund reosurce description'

  ]
    )
}
