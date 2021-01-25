import METHODS from '@/constants/method'
import API from '@/constants/api'
import request from '@/utils/request'
function login (phone, password) {
  return request({
    url: API.LOGIN,
    method: METHODS.POST,
    params: {
      phonenumber: phone,
      password: password
    }
  })
}
function register ({
  UnitUserid,
  UnitUsername,
  password,
  email,
  phonenumber,
  headphoto,
  createdate
}) {
  return request({
    url: API.REGISTER,
    method: METHODS.POST,
    data: {
      UnitUserid,
      UnitUsername,
      password,
      email,
      phonenumber,
      headphoto,
      createdate
    }
  })
}
function updateUser ({
  UnitUserid,
  UnitUsername,
  password,
  email,
  phonenumber,
  headphoto,
  createdate
}) {
  return request({
    url: API.USERINFO_UPDATE,
    method: METHODS.POST,
    data: {
      UnitUserid,
      UnitUsername,
      password,
      email,
      phonenumber,
      headphoto,
      createdate
    }
  })
}

function getUser (phone) {
  return request({
    url: API.USERINFO_GET,
    method: METHODS.POST,
    params: {
      phonenumber: phone
    }
  })
}

function getUserById (id) {
  return request({
    url: API.USERINFO_BY_ID,
    method: METHODS.POST,
    params: {
      PersonalUserid: id
    }
  })
}

export default {
  login,
  register,
  updateUser,
  getUser,
  getUserById
}
