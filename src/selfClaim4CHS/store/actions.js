import Http from '../http';
import Api from './api';

export default {
  // 微信免登陆
  wechatSinglesignOn({commit, state}) {
    // 如果openID存在，发送免登陆请求
    if (state.userId) {
      Http.post(Api['wechatSinglesignOn'], {
        userId: state.userId,
        userSource: state.userSource,
        ERROR_CODE: 'none'
      }).then(res => {
        if (res.validate) {
          commit('putCache', [
            {
              name: 'certificateNo',
              value: res.data.certificateNo || ''
            }, {
              name: 'certificateType',
              value: res.data.certificateType || 1
            }, {
              name: 'personnelName',
              value: res.data.personnelName || ''
            }
          ]);
        }
      }).catch(err => {
        console.error(err);
      });
    }
  },
  // 验证客户信息
  checkUserInfo(context, param) {
    return new Promise((resolve, reject) => {
      Http.post(Api['checkUserInfo'], param).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  // 获取支付信息
  paymentInfoQuery({state}) {
    return new Promise((resolve, reject) => {
      // 如果reportNo存在，发送获取支付信息请求
      if (state.reportNo) {
        Http.post(Api['paymentInfoQuery'], {
          reportNo: state['reportNo'],
          ERROR_CODE: 'none'
        }).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      } else {
        resolve('');
      }
    });
  },
  // 报案
  selfReportClaim({commit, state}, param) {
    return new Promise((resolve, reject) => {
      Http.post(Api['selfReportClaim'], {
        ...param,
        userId: state.userId,
        userSource: state.userSource,
        personnelName: state.personnelName,
        telephone: state.telephone,
        certificateType: state.certificateType,
        certificateNo: state.certificateNo
      }).then(res => {
        if (res.validate) {
          commit('putCache', [
            {
              name: 'reportNo',
              value: res.data.reportNo
            }, {
              name: 'isAdult',
              value: res.data.isAdult
            }, {
              name: 'claimType',
              value: param.claimType
            }, {
              name: 'accidentDate',
              value: param.accidentTime
            }, {
              name: 'accidentCause',
              value: param.accidentCause
            }, {
              name: 'accidentPlace',
              value: param.accidentPlace
            }
          ]);
        }
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  // 修改报案
  updateReport({commit, state}, param) {
    return new Promise((resolve, reject) => {
      Http.post(Api['updateReport'], {
        ...param,
        reportNo: state.reportNo
      }).then(res => {
        if (res.validate) {
          commit('putCache', [
            {
              name: 'claimType',
              value: param.claimType
            }, {
              name: 'telephone',
              value: param.telephone
            }
          ]);
        }
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  // 查询列表
  queryList({state}, url) {
    return new Promise((resolve, reject) => {
      if (state.certificateNo) {
        Http.post(Api[url], {
          certificateNo: state.certificateNo,
          ERROR_CODE: 'none'
        }).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      } else {
        resolve({});
      }
    });
  },
  // 根据报案号查询
  queryByReportNo({commit}, {url, param}) {
    return new Promise((resolve, reject) => {
      Http.post(Api[url], param).then(res => {
        if (res.validate) {
          commit('putCache', [
            {
              name: 'reportNo',
              value: res.data.reportNo || ''
            },
            {
              name: 'accidentDate',
              value: res.data.accidentDate || ''
            },
            {
              name: 'telephone',
              value: res.data.telephone || ''
            },
            {
              name: 'personnelName',
              value: res.data.personnelName || ''
            },
            {
              name: 'caseStatus',
              value: res.data.caseStatus || ''
            },
            {
              name: 'claimType',
              // 返回值可能为'4|3'，需要重新排序
              value: (res.data.claimType && res.data.claimType.split('|').sort().join('|')) || ''
            },
            {
              name: 'claimTypeText',
              value: res.data.claimTypeText || ''
            },
            {
              name: 'backReason',
              value: res.data.backReason || ''
            },
            {
              name: 'receiveName',
              value: res.data.receiveName || ''
            },
            {
              name: 'claimAmount',
              value: res.data.claimAmount || ''
            },
            {
              name: 'isAdult',
              value: res.data.isAdult || ''
            }
          ]);
        }
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  // 查询单证关系
  getDocuTypesByClaimType({state}) {
    return new Promise((resolve, reject) => {
      Http.post(Api['getDocuTypesByClaimType'], {
        claimType: state['claimType'],
        isAdult: state['isAdult'],
        clientName: state['receiveName'],
        reportNo: state['reportNo']
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  // 上传单证
  materialUpload({state}, param) {
    return new Promise((resolve, reject) => {
      Http.post(Api['materialUpload'], {
        ...param,
        reportNo: state['reportNo']
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  // 删除单证
  delImgByMediaids({state}, param) {
    return new Promise((resolve, reject) => {
      Http.post(Api['delImgByMediaids'], {
        ...param,
        reportNo: state['reportNo']
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  // 完成报案
  wechatSelfApplySubmit({state}) {
    return new Promise((resolve, reject) => {
      Http.post(Api['wechatSelfApplySubmit'], {
        reportNo: state['reportNo'],
        clientName: state['receiveName'],
        bankCode: state['bankCode'],
        account: state['account'],
        bankName: state['bankName'],
        province: '',
        city: '',
        ERROR_CODE: 'none'
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
};

