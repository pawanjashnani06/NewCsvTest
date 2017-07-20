'use strict'

module.exports = {
  beneficiariesDetailsGet: beneficiariesDetailsGet,
  beneficiariesDetailsPost: beneficiariesDetailsPost,
  beneficiariesGroupPut: beneficiariesGroupPut,
  beneficiariesGroupsGet: beneficiariesGroupsGet,
  beneficiariesGroupsPost: beneficiariesGroupsPost,
  beneficiaryGet: beneficiaryGet,
  beneficiaryPut: beneficiaryPut,
  beneficiaryGroupGet: beneficiaryGroupGet
}

function beneficiariesDetailsGet (req, res, next) {
  res.json({
    'data': {
      'bfDetails': [
        {
          'beneficiaryID': 1,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Mark Twain',
          'bank': 'Green Bank',
          'sortCode': '001101',
          'acctType': 'BD',
          'acctNumber': '787970102030',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 2,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Mark Twain',
          'bank': 'Green Bank',
          'sortCode': '001101',
          'acctType': 'BD',
          'acctNumber': '787970102030',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 3,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Mark Twain',
          'bank': 'Green Bank',
          'sortCode': '001101',
          'acctType': 'BD',
          'acctNumber': '787970102030',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 3,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Adam Sandler',
          'bank': 'Green Bank',
          'sortCode': '001101',
          'acctType': 'BD',
          'acctNumber': '787970102030',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 3,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'AA Smith',
          'bank': 'Green Bank',
          'sortCode': '001101',
          'acctType': 'BD',
          'acctNumber': '787970102030',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 3,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Black Stone',
          'bank': 'Green Bank',
          'sortCode': '001101',
          'acctType': 'BD',
          'acctNumber': '787970102030',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 3,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Bane',
          'bank': 'Green Bank',
          'sortCode': '001101',
          'acctType': 'BD',
          'acctNumber': '787970102030',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        }
      ],
      'bfSortOrder': {
        'custPrefField': 'BENF_NO',
        'custPrefOrder': 'ASC'
      }
    },
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function beneficiariesDetailsPost (req, res, next) {
  res.json({
    'data': {
      'bfDetails': [
        {
          'beneficiaryID': 1,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Mark Twain',
          'bank': 'Green Bank',
          'sortCode': '001101',
          'acctType': 'BD',
          'acctNumber': '787970102030',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        }
      ],
      'bfSortOrder': {
        'custPrefField': 'BENF_NO',
        'custPrefOrder': 'ASC'
      }
    },
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function beneficiariesGroupPut (req, res, next) {
  res.json({
    'data': [
      {
        'bfListID': 1,
        'bfListName': 'Sample text',
        'bfListMember': [
          {
            'bfTypeID': 'ALL',
            'bfType': 'BDF',
            'beneficiaryID': '789034561210'
          },
          {
            'bfTypeID': 'BNF',
            'bfType': 'INT',
            'beneficiaryID': '907856341012'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ]
    }
  })
}

function beneficiariesGroupsGet (req, res, next) {
  res.json({
    'data': [
      {
        'bfListID': 1,
        'bfListName': 'AccountDetails',
        'bfListMember': [
          {
            'bfTypeID': 'ALL',
            'bfType': 'BDF',
            'beneficiaryID': '789034561210'
          },
          {
            'bfTypeID': 'BNF',
            'bfType': 'INT',
            'beneficiaryID': '907856341012'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function beneficiariesGroupsPost (req, res, next) {
  res.json({
    'data': [
      {
        'bfListID': 1,
        'bfListName': 'AccountDetails',
        'bfListMember': [
          {
            'bfTypeID': 'ALL',
            'bfType': 'BDF',
            'beneficiaryID': '789034561210'
          },
          {
            'bfTypeID': 'BNF',
            'bfType': 'INT',
            'beneficiaryID': '907856341012'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ]
    }
  })
}

function beneficiaryGet (req, res, next) {
  res.json({
    'data': [
      {
        'beneficiaryID': 9283787651423,
        'bfTypeID': 'ALL',
        'bfType': 'BDF',
        'bfState': 'ACT',
        'bfName': 'Mark Twain',
        'bank': 'Green Bank',
        'sortCode': '001101',
        'acctType': 'BD',
        'acctNumber': '787970102030',
        'defaultDrNarrative': 'My Statement Details',
        'defaultCrNarrative': 'My Beneficiary Statements',
        'instantPayment': true,
        'creditCard': true,
        'notificationDetails': [
          {
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationId': 1,
            'notificationDefaultInd': true
          }
        ],
        'bfRecentPayDetail': [
          {
            'paymentDate': '2017-07-11',
            'paymentAmount': 1,
            'acctNumber': '787970102030',
            'paymentDRNarration': 'Debit statement',
            'paymentCRNarration': 'Credit statement',
            'execEngineRef': ''
          }
        ],
        'ElectricityMeterDetails': {
          'municipality': 'Area Code',
          'customerName': 'John Dow',
          'customerAddress': 'Address Details'
        }
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function beneficiaryPut (req, res, next) {
  res.json({
    'data': [
      {
        'beneficiaryID': 1,
        'bfTypeID': 'ALL',
        'bfType': 'BDF',
        'bfState': 'ACT',
        'bfName': 'Mark Twain',
        'bank': 'Green Bank',
        'sortCode': '001101',
        'acctType': 'BD',
        'acctNumber': '787970102030',
        'defaultDrNarrative': 'My Statement Details',
        'defaultCrNarrative': 'My Beneficiary Statements',
        'instantPayment': true,
        'creditCard': true,
        'notificationDetails': [
          {
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationId': 1,
            'notificationDefaultInd': true
          }
        ],
        'bfRecentPayDetail': [
          {
            'paymentDate': '2017-07-11',
            'paymentAmount': 1,
            'acctNumber': '787970102030',
            'paymentDRNarration': 'Debit statement',
            'paymentCRNarration': 'Credit statement',
            'execEngineRef': ''
          }
        ],
        'ElectricityMeterDetails': {
          'municipality': 'Area Code',
          'customerName': 'John Dow',
          'customerAddress': 'Address Details'
        }
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function beneficiaryGroupGet (req, res, next) {
  res.json({
    'data': [
      {
        'bfListID': 123,
        'bfListName': 'AccountDetails',
        'bfListMember': [
          {
            'bfTypeID': 'ALL',
            'bfType': 'BDF',
            'beneficiaryID': '789034561210'
          },
          {
            'bfTypeID': 'BNF',
            'bfType': 'INT',
            'beneficiaryID': '907856341012'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}
