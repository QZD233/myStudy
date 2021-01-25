const TOKEN_KEY = {
  REVIEW_UNIT_PHONE: 'REVIEW_UNIT_PHONE',
  REVIEW_UNIT_PASSWORD: 'REVIEW_UNIT_PASSWORD'
}

function setToken (phone, password) {
  window.sessionStorage.setItem(TOKEN_KEY.REVIEW_UNIT_PHONE, phone)
  window.sessionStorage.setItem(TOKEN_KEY.REVIEW_UNIT_PASSWORD, password)
}

function getToken () {
  const phone = window.sessionStorage.getItem(TOKEN_KEY.REVIEW_UNIT_PHONE)
  const password = window.sessionStorage.getItem(TOKEN_KEY.REVIEW_UNIT_PASSWORD)
  return { phone, password }
}

function removeToken () {
  window.sessionStorage.removeItem(TOKEN_KEY.REVIEW_UNIT_PHONE)
  window.sessionStorage.removeItem(TOKEN_KEY.REVIEW_UNIT_PASSWORD)
}

export default {
  setToken,
  getToken,
  removeToken
}
