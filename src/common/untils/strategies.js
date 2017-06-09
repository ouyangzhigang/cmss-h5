const REG = {
  // 姓名 /^[\u4e00-\u9fa5a-zA-Z0-9]{1,50}$/
  name: /^\S{1,50}$/,
  // 手机号码
  mobile: /^1\d{10}$/,
  // 护照
  passport: /^[a-zA-Z0-9]{3,21}$/,
  // 身份证
  idCard: /^\d{1,17}[\d|X|x]$/,
  // 军官证
  officer: /^[a-zA-Z0-9]{7,21}$/,
  // 港澳通行证
  hkPasser: /^[c|w]\d{8}$/i,
  // 银行卡号
  bank: /^\d{1,19}$/
};

export default {
  required: function(value) {
    if (!value) {
      if (this.cache['required'].msg) {
        return this.cache['required'].msg;
      } else {
        return '必填项不能为空';
      }
    }
  },
  maxlength: function(value) {
    if (value.length > this.cache['maxlength'].param) {
      if (this.cache['maxlength'].msg) {
        return this.cache['maxlength'].msg;
      } else {
        return '最大长度不能超过' + this.cache['maxlength'].param;
      }
    }
  },
  minlength: function(value) {
    if (value.length < this.cache['minlength'].param) {
      if (this.cache['minlength'].msg) {
        return this.cache['minlength'].msg;
      } else {
        return '最大长度不能超过' + this.cache['minlength'].param;
      }
    }
  },
  name(value) {
    if (!REG['name'].test(value)) {
      if (this.cache['name'].msg) {
        return this.cache['name'].msg;
      } else {
        return '请输入正确的姓名';
      }
    }
  },
  mobile: function(value) {
    if (!(REG['mobile'].test(value))) {
      if (this.cache['mobile'].msg) {
        return this.cache['mobile'].msg;
      } else {
        return '请输入正确的手机号码';
      }
    }
  },
  idCard: function(value) {
    if (!(REG['idCard'].test(value))) {
      if (this.cache['idCard'].msg) {
        return this.cache['idCard'].msg;
      } else {
        return '请输入正确的身份证号码';
      }
    }
  },
  carCard: function(value) {
    if (!(REG['idCard'].test(value))) {
      if (this.cache['carCard'].msg) {
        return this.cache['carCard'].msg;
      } else {
        return '请输入正确的驾驶证';
      }
    }
  },
  passport: function(value) {
    if (!(REG['passport'].test(value))) {
      if (this.cache['passport'].msg) {
        return this.cache['passport'].msg;
      } else {
        return '请输入正确的护照';
      }
    }
  },
  officer: function(value) {
    if (!(REG['officer'].test(value))) {
      if (this.cache['officer'].msg) {
        return this.cache['officer'].msg;
      } else {
        return '请输入正确的军官证';
      }
    }
  },
  hkPasser: function(value) {
    if (!(REG['hkPasser'].test(value))) {
      if (this.cache['hkPasser'].msg) {
        return this.cache['hkPasser'].msg;
      } else {
        return '请输入正确的港澳通行证';
      }
    }
  },
  bank: function(value) {
    if (!(REG['bank'].test(value))) {
      if (this.cache['bank'].msg) {
        return this.cache['bank'].msg;
      } else {
        return '请输入正确的银行卡号';
      }
    }
  }
};
