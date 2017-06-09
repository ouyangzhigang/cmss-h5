import strategies from './strategies';

export default class validator {
  constructor(rule) {
    this.cache = {};
    this.msg = [];
    if (rule instanceof Array) {
      for (let item of rule) {
        this.cache[item.strategy] = {
          msg: item.msg,
          param: item.param
        };
      }
    } else if (typeof rule === 'object') {
      this.cache[rule.strategy] = {
        msg: rule.msg,
        param: rule.param
      };
    } else {
      throw new Error('validator rule is must Array or Object');
    }
  }

  check(value) {
    this.msg = [];
    for (let rule in this.cache) {
      if (!strategies[rule]) {
        console.warn(rule + ' is not defined');
        continue;
      }
      let msg = strategies[rule].call(this, value);
      if (msg) {
        this.msg.push({
          strategy: rule,
          msg: msg
        });
      }
    }
    return this.msg;
  }

  isValid() {
    return this.msg.length === 0;
  }
};

