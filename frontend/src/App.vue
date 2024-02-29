<template>
  <signin v-if="!isAuth && sign == true" @signin="loadData" @transSignup="toggleSignPage"></signin>
  <signup v-else-if="!isAuth && sign == false" @signup="loadData" @transSignin="toggleSignPage"></signup>
  <index v-else @logout="loadData"></index>
</template>

<script>
import Methods from '@/api/methods'
import index from '@/routes/index.vue'
import signin from '@/routes/signin.vue'
import signup from '@/routes/signup.vue'

export default {
  name: 'App',
  data() {
    return {
      isAuth: false,
      sign: true
    }
  },
  components: {
    index,
    signin,
    signup
  },
  methods: {
    async loadData() {
      const res = await Methods.sendReq('/')
      this.isAuth = res.data.isAuth
    },
    toggleSignPage() {
      this.sign = !this.sign
    }
  },
  async mounted() {
    this.loadData()
  }
}


</script>