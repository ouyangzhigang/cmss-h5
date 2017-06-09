import {Common} from '../../common/untils';

let urlParams = Common.getRequest();

/**
 * @param [personnelName] 被保险人姓名
 * @param [telephone] 手机号码
 * @param [certificateType] 证件类型
 * @param [certificateNo] 证件号
 * @param [reportNo] 保单号
 * @param [isAdult] 是否成年
 * @param [claimType] 申请类型
 * @param [accidentDate] 出险时间
 * @param [caseStatus] 案件状态
 * @param [claimTypeText] 理赔类型描述
 * @param [backReason] 退回原因
 * @param [receiveName] 领款人
 * @param [claimAmount] 赔付金额
 * @param [bankName] 银行名称
 * @param [bankCode] 银行编码
 * @param [account] 银行号码
 * @param [accidentCause] 出险经过
 *
 */
export default {
  userId: urlParams.userId || '',
  userSource: urlParams.userSource || '',
  personnelName: '',
  telephone: '',
  certificateType: 1,
  certificateNo: '',
  reportNo: '',
  isAdult: '',
  claimType: '',
  accidentDate: '',
  caseStatus: '',
  claimTypeText: '',
  backReason: '',
  receiveName: '',
  claimAmount: '',
  bankName: '',
  bankCode: '',
  account: '',
  accidentCause: '',
  accidentPlace: ''
};
