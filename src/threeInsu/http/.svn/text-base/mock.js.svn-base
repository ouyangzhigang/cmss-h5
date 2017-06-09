import Axios from 'axios';
import Mock from '../../common/http/mock';

const mock = new Mock(Axios);

const SUCCESS_CODE = 200;

mock.onPost('getTransmitData').then(SUCCESS_CODE, {
  returnCode: '1',
  returnMsg: '成功',
  data: {
    result: {message: '查询创保收入数据成功', code: '1'},
    data: {
      'incomeAll': 0,
      'certificateNo': '110110198308250519',
      'incomeCurr': 100
    }
  }
});

mock.onPost('getTransmitData').then(SUCCESS_CODE, {
  data: {
    data: {
      // 需促成转保,距保险到期时间还有0-90
      'needToBeAssited': [
        {
          'carBrandLogoUrl': '../assets/images/carLogo.jpg',
          'ownerName': '转保1',
          'carMark': '粤B12345',
          'mobileNo': null,
          'insuranceDueDays': 0,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保2',
          'carMark': '粤B28433',
          'mobileNo': '13426547852',
          'insuranceDueDays': 2,
          'insuranceWill': '1',
          'customerType': '1'// 家用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤A37216',
          'mobileNo': '18826547852',
          'insuranceDueDays': 3,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤Z45678',
          'mobileNo': '13626547852',
          'insuranceDueDays': 7,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤B 88888',
          'mobileNo': '13926547852',
          'insuranceDueDays': 8,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤B 88888',
          'mobileNo': '17026547852',
          'insuranceDueDays': 9,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保1',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 11,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保2',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 22,
          'insuranceWill': '1',
          'customerType': '1'// 家用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 33,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 43,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 53,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 58,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保1',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 59,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保2',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 62,
          'insuranceWill': '1',
          'customerType': '1'// 家用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 63,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 64,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 83,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }, {
          'carBrandLogoUrl': '/images/asda.png',
          'ownerName': '转保3',
          'carMark': '粤B 88888',
          'mobileNo': '13526547852',
          'insuranceDueDays': 90,
          'insuranceWill': '0',
          'customerType': '0'// 商用
        }],
      // 需关怀互动,距保险到期时间还有91-180
      'needMoreInteractionAndCare': [{
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '杨小娅',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 98,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '杨小娅',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 108,
        'insuranceWill': '2',
        'customerType': '0'// 商用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '杨小娅',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 118,
        'insuranceWill': '0',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 128,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保3',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 138,
        'insuranceWill': '0',
        'customerType': '0'// 商用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保3',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 148,
        'insuranceWill': '0',
        'customerType': '0'// 商用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保3',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 158,
        'insuranceWill': '0',
        'customerType': '0'// 商用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保3',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 180,
        'insuranceWill': '0',
        'customerType': '0'// 商用
      }],
      // 需赠送实物,距保险到期时间还有181-270
      'needMoreGift4Care': [{
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '杨小娅',
        'carMark': '粤B 88888',
        'mobileNo': '18826547852',
        'insuranceDueDays': 188,
        'insuranceWill': '2',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '杨小娅',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 270,
        'insuranceWill': '0',
        'customerType': '1'// 家用
      }],
      // 关怀客户,距保险到期时间大于270天
      'needCare': [{
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '杨小娅',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 298,
        'insuranceWill': '2',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13626547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      }, {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B 88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保2',
        'carMark': '粤B88888',
        'mobileNo': '13726547852',
        'insuranceDueDays': 398,
        'insuranceWill': '1',
        'customerType': '1'// 家用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保3',
        'carMark': '粤B88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 498,
        'insuranceWill': '0',
        'customerType': '0'// 商用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保3',
        'carMark': '粤B88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 598,
        'insuranceWill': '0',
        'customerType': '0'// 商用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保3',
        'carMark': '粤B88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 698,
        'insuranceWill': '0',
        'customerType': '0'// 商用
      },
      {
        'carBrandLogoUrl': '/images/asda.png',
        'ownerName': '转保3',
        'carMark': '粤B88888',
        'mobileNo': '13526547852',
        'insuranceDueDays': 798,
        'insuranceWill': '0',
        'customerType': '0'// 商用
      }]
    }
  }
});

