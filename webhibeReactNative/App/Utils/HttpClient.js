// import Helpers from '@Utils/Helpers';

import AuthService from '../Service/Auth';

 // const BASE_URL = 'http://137.184.218.7:3098/api/';

const BASE_URL = 'http://skychat.easytodb.com/Nursing/api/data1/';
function get(endpoint, params) {
  return request(endpoint, params);
}

function post(endpoint, params) {
  return request(endpoint, params, 'POST');
}

function put(endpoint, params) {
  return request(endpoint, params, 'PUT');
}

// function delete(endpoint, params) {
//     return fetch(endpoint, params, "DELETE");
// }

async function request(endpoint, params = {}, method = 'GET') {
  let token = await AuthService.getToken();
  console.log('token>>>>>>>>>>>', token)
  var xmlRequest = new XMLHttpRequest();

  return new Promise(function (resolve, reject) {
    xmlRequest.open(method, BASE_URL + endpoint, true);

    console.log('url', BASE_URL + endpoint);

    xmlRequest.setRequestHeader('Accept', '*/*');
    xmlRequest.setRequestHeader('Content-Type', 'application/json');
    // xmlRequest.setRequestHeader('Authorization', token);
    if (method == 'GET') {
      xmlRequest.send();
    } else {
      xmlRequest.send(JSON.stringify(params));
      // console.log("done");
    }

    xmlRequest.onreadystatechange = function () {
      // Call a function when the state changes.
   
      if (
        xmlRequest.readyState === XMLHttpRequest.DONE &&
        xmlRequest.status === 200
      ) {
        //
        if (xmlRequest.response == "Invalid Username or password.") {
          resolve(xmlRequest.response);
        }else if (xmlRequest.response =='Your no.of attempts left is 0,please contact Administrator for further assistance') {
          resolve(xmlRequest.response);
        }
         else {
          resolve(JSON.parse(xmlRequest.response));
          
        }
      }
      if (
        xmlRequest.readyState === XMLHttpRequest.DONE &&
        xmlRequest.status === 400
      ) {
        resolve(JSON.parse(xmlRequest.response));
        // resolve(xmlRequest.respons);
      }
    };
  });
}
const upload = async (file, endpoint) => {
  var formdata = new FormData();
  // let get_originalname = await getOriginalname(file.path, file.mime);
  formdata.append('image', {
    uri: file.path,
    type: file.mime,
    name: 'file.path',
  });

  // let objArray = Object.keys(object_get);

  // objArray.forEach((element) => {
  //   data.append(element, object_get[element]);
  // });
  // console.log('data9999', data);

  return fetch(apiUrl, {
    headers,
    method: 'post',
    body: data,
    redirect: 'follow',
  }).then(response => response.json());
  // .then(response => {
  //     return response;
  // });
  // console.log("getApi", getApi)

  // let dData = await decrypt(getApi.data);
  // getApi.data = JSON.parse(getApi.data)
  // return JSON.parse(getApi);
};

const newFileUpload = async (url, file,imageFieldName = 'image', object_get = {}) => {
  return new Promise(async function (resolve, reject) {
    let apiUrl = BASE_URL + url;

    console.log('apiUrl', apiUrl, file);

    var data = new FormData();

    let objArray = Object.keys(object_get);

    objArray.forEach(element => {
      data.append(element, object_get[element]);
    });

    if (file.path != '') {
      // let get_originalname = await getOriginalname(file.path);
      // console.log('originalname', get_originalname);
      data.append(imageFieldName, {
        uri: file.path,
        type: file.mime,
        // name: get_originalname,
      });
    }
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
      // console.log("xhr.response", xhr.response)
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      }
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400) {
        resolve(JSON.parse(xhr.response));
      }
    };

    xhr.open('POST', apiUrl);
    xhr.setRequestHeader('Accept', '/');
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.setRequestHeader('cache-control', 'no-cache');
    xhr.send(data);
  });
};

const getOriginalname = async data => {
  console.log("data", data)
  let arr = data.split('/');
  let lent = Number(arr.length - 1);
  return arr[lent];
};

export default {
  get,
  post,
  put,
  // delete,
  upload,
  newFileUpload,
};
