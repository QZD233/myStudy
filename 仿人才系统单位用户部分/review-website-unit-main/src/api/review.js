import request from '@/utils/request'
import API from '@/constants/api'
import METHOD from '@/constants/method'
import auth from '@/utils/auth'
function getReviews () {
  const { phone } = auth.getToken()
  return request({
    url: API.REVIEW_GET,
    method: METHOD.POST,
    params: {
      phonenumber: phone
    }
  })
}
function updateReivewState (PersonalUserid, PersonalreviewID, reviewstate) {
  return request({
    url: API.REVIEW_STATE_UPDATE,
    method: METHOD.POST,
    params: {
      PersonalUserid,
      PersonalreviewID,
      reviewstate
    }
  })
}

export default {
  getReviews,
  updateReivewState
}
