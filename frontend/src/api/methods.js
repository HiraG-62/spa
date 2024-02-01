import Api from './index'

export default {
  async sendReq() {
    const res = await Api().get('/')
    return res
  },

  sendPost(path, content) {
    return Api().post(path, content)
  }
}