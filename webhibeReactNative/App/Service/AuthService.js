import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';


async function updateprofile(data) {
  let endpoint = 'user/update';
  return HttpClient.post(endpoint, data);
}
async function login(data) {
  let endpoint = 'customerlogin';
  return HttpClient.post(endpoint, data);
}
async function register(data) {
  let endpoint = 'customerreg';
  return HttpClient.post(endpoint, data);
}



async function getAccount() {
  return await Storage.get('account');
}

async function setAccount(data) {
  return await Storage.set('account', data);
}

async function getToken() {
  return await Storage.get('token');
}
async function setToken(data) {
  return await Storage.set('token', data);
}


async function logout() {
  return await Storage.set('account', null);
}
async function getCourses(data) {
  let endpoint = 'Courses/CourseDetails';
  return HttpClient.post(endpoint, data);
}








export default {
  register,
  updateprofile,
  getAccount,
  setAccount,
  getToken,
  setToken,
  logout,
  login,getCourses
};
