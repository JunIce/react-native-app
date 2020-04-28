const baseUrl = 'http://mock.alafrase.com/mock/5ea7bb9bf39549001c8db5f1/rn/api';

const getAction = (url, params = {}) => {
  if (params) {
    let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key =>
      paramsArray.push(key + '=' + params[key]),
    );
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
  }
  return fetch(`${baseUrl}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};

export const getBannerList = () => getAction('/banner');
export const getHomeCityList = () => getAction('/home/city');
