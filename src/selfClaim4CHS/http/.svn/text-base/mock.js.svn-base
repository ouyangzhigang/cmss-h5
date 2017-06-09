import Axios from 'axios';
import Mock from '../../common/http/mock';

const mock = new Mock(Axios);

const SUCCESS_CODE = 200;

mock.onPost('wechatSinglesignOn').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功',
  'data': {
    'certificateNo': '12345678901234567X',
    'personnelName': '张三',
    'certificateType': '1'
  }
});

mock.onPost('checkUserInfo').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功'
});

mock.onPost('selfReportClaim').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功',
  'data': {
    'reportNo': 'MC08000043514060',
    'canClaim': 'Y',
    'isAdult': 'Y'
  }
});

mock.onPost('getDocuTypesByClaimType').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '查询单证类型成功',
  'data': {
    'docuTypeList': [{
      'docuSmallTypes': [{
        'fileids': [],
        'delflags': [],
        'smallType': '1'
      }, {
        'fileids': ['122', '12334', '122', '12334'],
        'mediaids': ['1', '2', '3', '4'],
        'delflags': ['Y', 'N', 'Y', 'Y'],
        'smallType': '2'
      }, {
        'fileids': [],
        'delflags': [],
        'smallType': '3'
      }],
      'docuCode': '2',
      'docuName': '被保险人身份证件',
      'docuType': '1'
    }, {
      'docuSmallTypes': [{
        'fileids': [],
        'delflags': [],
        'smallType': '2'
      }, {
        'fileids': ['11111'],
        'mediaids': ['1'],
        'delflags': ['Y'],
        'smallType': '4'
      }],
      'docuCode': '1',
      'docuName': '监护关系证明',
      'docuType': '1'
    }, {
      'docuCode': '3',
      'docuName': '门诊病历、诊断证明',
      'docuType': '1',
      'delflags': [],
      'fileids': []
    }, {
      'docuCode': '4',
      'docuName': '门诊发票原件',
      'docuType': '1',
      'fileids': ['111', '11121212'],
      'mediaids': ['1', '2'],
      'delflags': ['Y', 'N']
    }, {
      'docuCode': 5,
      'docuName': '门诊处方/费用清单',
      'docuType': '0',
      'delflags': [],
      'fileids': []
    }, {
      'docuCode': '13',
      'docuName': '承运人出具的延误证明',
      'docuType': '0',
      'fileids': ['212121'],
      'delflags': ['Y', 'N'],
      'mediaids': ['1']
    }]
  }
});

mock.onPost('getImgByteByFiledId').then(SUCCESS_CODE, 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1794894692,1423685501&fm=117&gp=0');

mock.onPost('materialUpload').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功',
  'data': {
    'mediaids': ['09090909']
  }
});

mock.onPost('delImgByMediaids').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '失败失败'
});

mock.onPost('wechatSelfApplySubmit').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功'
});

mock.onPost('wechatSelfApplySubmit').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功'
});

mock.onPost('paymentInfoQuery').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '查询支付信息成功',
  'data': {
    'reportNo': 'MC08000043514071',
    'clientName': '港澳证',
    'bankName': '中国工商银行',
    'bankCode': '102',
    'bankAccount': '622777777777777777',
    'CODE': '00'
  }
});

mock.onPost('documentAddQueryByReportNo').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功',
  'data': {
    'reportNo': 'M12121121',
    'accidentDate': '2014-10-10',
    'telephone': '18022220000',
    'personnelName': '李四',
    'claimType': '4|3|1|5',
    'claimTypeText': '医疗住院',
    'caseStatus': '2',
    'backReason': '112121212',
    'receiveName': '王小二',
    'claimAmount': '1000.00',
    'isAdult': 'Y'
  }
});

mock.onPost('documentAddQuery').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功',
  'data': {
    'reportList': [
      {
        'reportNo': 'M1212121',
        'accidentDate': '2016-10-10',
        'personnelName': '王二',
        'caseStatus': '1'
      },
      {
        'reportNo': 'M1212121',
        'accidentDate': '2016-10-10',
        'personnelName': '王二',
        'caseStatus': '2'
      },
      {
        'reportNo': 'M1212121',
        'accidentDate': '2016-10-10',
        'personnelName': '王二',
        'caseStatus': '3'
      }

    ]
  }
});

mock.onPost('updateReport').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功'
});

mock.onPost('queryClaimRecords').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功',
  data: {
    'reportList': [
      {
        'caseStatus': '1',
        'reportNo': 'MC08000043540227',
        'personnelName': 'PA留汗·居马汗',
        'accidentDate': '2014-02-17'
      },
      {
        'caseStatus': '1',
        'reportNo': 'MC08000043540227',
        'personnelName': 'PA留汗·居马汗',
        'accidentDate': '2014-02-17'
      }
    ]
  }
});

mock.onPost('queryClaimRecordByReportNo').then(SUCCESS_CODE, {
  'returnCode': '1',
  'returnMsg': '成功',
  'data': {
    'reportNo': 'M12121121',
    'accidentDate': '2014-10-10',
    'telephone': '18022220000',
    'personnelName': '李四',
    'claimType': '0|1',
    'claimTypeText': '医疗住院',
    'caseStatus': '3',
    'backReason': '错误错误错误',
    'receiveName': '王小二',
    'claimAmount': '1000.00'
  }
});
