<template>
    <router-view></router-view>
</template>

<script>
import Methods from '@/api/methods'
// import sidebar from '@/components/sidebar.vue'
// import headerComponent from '@/components/header.vue'


export default {
  name: 'App',
  components: {
    // sidebar,
    // headerComponent,
  },
  mounted() {
    // const path = this.$route.path
    // window.onload = async function () {
    //   if (path == '/signin' || path == '/signup') {
    //     const res = await Methods.sendReq()
    //     if (!res.data.isAuth) {
    //       location.href = '/signin'
    //       console.log('test')
    //     }
    //   }
    // }
  }
}


</script>