<template>
  <sidebar></sidebar>
  <div class="main_wrapper">
    <headerComponent></headerComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar.vue'
import headerComponent from '@/components/header.vue'


export default {
    name: 'App',
    components: {
      sidebar,
      headerComponent,
    }
}
</script>