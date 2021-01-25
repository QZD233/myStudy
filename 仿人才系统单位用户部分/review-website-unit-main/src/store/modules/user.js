import MUTATIONS from '@/constants/mutations'
import ACTIONS from '@/constants/actions'
import userAPI from '@/api/user'
import auth from '@/utils/auth'
const state = {
  userInfo: {
    UnitUserid: 0,
    UnitUsername: '',
    password: '',
    email: '',
    phonenumber: '',
    headphoto: '',
    createdate: ''
  }
}
const mutations = {
  [MUTATIONS.USER.SET_ID] (state, id) {
    state.userInfo.UnitUserid = id
  },
  [MUTATIONS.USER.SET_NAME] (state, name) {
    state.userInfo.UnitUsername = name
  },
  [MUTATIONS.USER.SET_PASSWORD] (state, password) {
    state.userInfo.password = password
  },
  [MUTATIONS.USER.SET_EMAIL] (state, email) {
    state.userInfo.email = email
  },
  [MUTATIONS.USER.SET_PHONE] (state, phone) {
    state.userInfo.phonenumber = phone
  },
  [MUTATIONS.USER.SET_AVATAR] (state, avatar) {
    state.userInfo.headphoto = avatar
  },
  [MUTATIONS.USER.SET_CREATEDATE] (state, createdate) {
    state.userInfo.createdate = createdate
  }
}
const actions = {
  async [ACTIONS.USER.LOGIN] ({ commit }, { phone, password }) {
    const res = await userAPI.login(phone, password)
    auth.setToken(phone, password)
    return res
  },
  async [ACTIONS.USER.REGISTER] (
    { commit },
    {
      UnitUserid,
      UnitUsername,
      password,
      email,
      phonenumber,
      headphoto,
      createdate
    }
  ) {
    const res = await userAPI.register({
      UnitUserid,
      UnitUsername,
      password,
      email,
      phonenumber,
      headphoto,
      createdate
    })
    commit(MUTATIONS.USER.SET_ID, UnitUserid)
    commit(MUTATIONS.USER.SET_NAME, UnitUsername)
    commit(MUTATIONS.USER.SET_PASSWORD, password)
    commit(MUTATIONS.USER.SET_EMAIL, email)
    commit(MUTATIONS.USER.SET_PHONE, phonenumber)
    commit(MUTATIONS.USER.SET_AVATAR, headphoto)
    commit(MUTATIONS.USER.SET_CREATEDATE, createdate)
    auth.setToken(phonenumber, password)
    return res
  },
  [ACTIONS.USER.LOGOUT] ({ commit }) {
    commit(MUTATIONS.USER.SET_ID, 0)
    commit(MUTATIONS.USER.SET_NAME, '')
    commit(MUTATIONS.USER.SET_PASSWORD, '')
    commit(MUTATIONS.USER.SET_EMAIL, '')
    commit(MUTATIONS.USER.SET_PHONE, '')
    commit(MUTATIONS.USER.SET_AVATAR, '')
    commit(MUTATIONS.USER.SET_CREATEDATE, '')
    auth.removeToken()
  },
  async [ACTIONS.USER.USERINFO] ({ commit }, phone) {
    const res = await userAPI.getUser(phone)
    const {
      UnitUserid,
      UnitUsername,
      password,
      email,
      phonenumber,
      headphoto,
      createdate
    } = res.data
    commit(MUTATIONS.USER.SET_ID, UnitUserid)
    commit(MUTATIONS.USER.SET_NAME, UnitUsername)
    commit(MUTATIONS.USER.SET_PASSWORD, password)
    commit(MUTATIONS.USER.SET_EMAIL, email)
    commit(MUTATIONS.USER.SET_PHONE, phonenumber)
    commit(MUTATIONS.USER.SET_AVATAR, headphoto)
    commit(MUTATIONS.USER.SET_CREATEDATE, createdate)
    auth.setToken(phonenumber, password)
  }
}
const user = {
  state,
  mutations,
  actions
}
export default user
