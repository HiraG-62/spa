<template>
    <sidebarComponent @subTitle="changeSubTitle"></sidebarComponent>
    <div class="main_wrapper">
        <headerComponent :title="subTitle"></headerComponent>
        <bodyComponent></bodyComponent>
    </div>
</template>

<script>
import Methods from '@/api/methods'

import sidebarComponent from '@/components/sidebar.vue'
import headerComponent from '@/components/header.vue'
import bodyComponent from '@/components/body.vue'

export default {
    name: 'index',
    data() {
        return {
            subTitle: ''
        }
    },
    components: {
        sidebarComponent,
        headerComponent,
        bodyComponent
    },
    methods: {
        changeSubTitle(val) {
            this.subTitle = val;
        }
    },
    async mounted() {
        const res = await Methods.sendReq('/')
        if (!res.data.isAuth) {
            this.$router.push('/signin')
        }
    }
}


</script>