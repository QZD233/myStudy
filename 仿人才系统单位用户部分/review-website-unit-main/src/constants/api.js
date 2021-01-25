const BASEURL = process.env.VUE_APP_BASEURL
const TIMEOUT = 5000

const LOGIN = '/Unituser/unituserlogin'
const REGISTER = '/Unituser/Unituser_add'
const USERINFO_UPDATE = '/Unituser/Unituser_Update'
const USERINFO_GET = '/Unituser/selectUnitusermessage'

const USERINFO_BY_ID = '/person/finduserbyid'

const REVIEW_GET = '/Unituser/selectreviewallbyphonenumber'
const REVIEW_STATE_UPDATE = '/Unituser/Changeuserstate'

export default {
  BASEURL,
  TIMEOUT,
  LOGIN,
  REGISTER,
  USERINFO_UPDATE,
  USERINFO_GET,
  REVIEW_GET,
  USERINFO_BY_ID,
  REVIEW_STATE_UPDATE
}
