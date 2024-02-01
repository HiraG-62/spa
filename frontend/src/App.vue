<template>
  <router-view></router-view>
</template>

<script>
import Methods from '@/api/methods'


export default {
  name: 'App',
  components: {
  },
  async mounted() {
    const path = this.$route.path
    console.log(path)
    // if (path !== 'signin' || path !== '/signup') {
    //   const res = await Methods.sendReq()
    //   if (!res.data.isAuth) {
    //     this.$router.push('/signin')
    //   }
    // }
  }
}


</script>