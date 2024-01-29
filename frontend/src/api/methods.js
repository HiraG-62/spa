import Api from './index'

export default {
  async sendReq() {
    // const content = { text: arg }
    const res = await Api().get('/')
    return res
  }
}