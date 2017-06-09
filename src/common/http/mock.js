export default class mock {
  constructor(axiosInstance, options) {
    if (axiosInstance) {
      this.axiosInstance = axiosInstance;
      this.originAdapter = axiosInstance.defaults.adapter;
      axiosInstance.defaults.adapter = this.adapter.bind(this);
      this.handlers = {};
    }
  }

  adapter(config) {
    let self = this;
    return new Promise((resolve, reject) => {
      let url = config.url.split('/');
      url = url[url.length - 1];
      if (self.handlers[url]) {
        resolve({
          data: self.handlers[url].data,
          status: self.handlers[url].status,
          statusText: self.handlers[url].status + '',
          headers: config.headers,
          config: config
        });
      } else {
        reject(new Error(config.url + ' is not register'));
      }
    });
  }

  onPost(url, data) {
    let self = this;
    return {
      then: (...rest) => {
        let args = [...rest];
        if (url) {
          let path = url;
          if (path[0] === '/') {
            path = path.substr(1);
          }
          self.handlers[path] = {
            status: args[0],
            data: args[1]
          };
        }
      }
    };
  }
};
