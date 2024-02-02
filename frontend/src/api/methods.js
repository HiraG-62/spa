import Api from './index'

export default {
  async sendReq(path) {
    const res = await Api().get(path)
    return res
  },

  sendPost(path, content) {
    return Api().post(path, content)
  }
}