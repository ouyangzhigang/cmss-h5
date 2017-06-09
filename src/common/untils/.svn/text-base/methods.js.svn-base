const SUB_INDEX = 1;
const VALUE_INDEX = 2;
export default {
  getParams(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(SUB_INDEX).match(reg);
    if (r) {
      return decodeURI(r[VALUE_INDEX]);
    }
    return null;
  }
};
