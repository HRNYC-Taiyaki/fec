const axios = require('axios');
const { API_TOKEN } = require('../../../env/config.js');
const Authorization = API_TOKEN || process.env.API_KEY;

// TODO: consider deployment_ e.g. process.env.URL
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc';
const altUrl = 'http://3.137.152.183:80'; // This is the port your SDC API is running on
let testEndpoint = 'qa/'; // This string should uniquely identify the endpoints coming in to redirect

const searchEngine = {

  get: (endPoint, params = {}) => {
    let newUrl = url;
    if (endPoint.includes(testEndpoint)) {
      newUrl = altUrl;
    }
    return axios.get(`${newUrl}/${endPoint}`, {
      headers: { Authorization },
      params: params,
    });
  },

  post: (endPoint, data) => {
    let newUrl = url;
    if (endPoint.includes(testEndpoint)) {
      newUrl = altUrl;
    }
    return axios.post(`${url}/${endPoint}`, data, {
      headers: { Authorization },
    });
  },

  put: (endPoint) => {
    let newUrl = url;
    if (endPoint.includes(testEndpoint)) {
      newUrl = altUrl;
    }
    return axios.put(`${url}/${endPoint}`, {}, {
      // headers: { Authorization },
    });
  },

};

export default searchEngine;
