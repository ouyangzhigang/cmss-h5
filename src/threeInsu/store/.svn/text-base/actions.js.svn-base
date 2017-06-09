import Http from '../http';
import Api from './api';

export default {
  getBaike({state}, code) {
    return new Promise((resolve, reject) => {
      Http.post(Api['getTransmitData'], {
        requestData: '{encyclopediaType: "' + code + '"}',
        urlMapping: 'claim.selfClaim.getCarEncyclopediaTitle',
        ERROR_CODE: 'none'
      }).then(res => {
        if (res.validate) {
          resolve(res.data.data.data);
        }
      }).catch(err => {
        console.error(err);
      });
    });
  }
};

