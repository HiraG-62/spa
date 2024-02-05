<template>
    <sidebarComponent @subThread="changeSubThread"></sidebarComponent>
    <div class="main_wrapper">
        <headerComponent :title="subTitle"></headerComponent>
        <bodyComponent :threadId="subThreadId"></bodyComponent>
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
            subTitle: '',
            subThreadId: ''
        }
    },
    components: {
        sidebarComponent,
        headerComponent,
        bodyComponent
    },
    methods: {
        changeSubThread(val) {
            this.subTitle = val.name;
            this.subThreadId = val.id;
        }
    },
    async mounted() {
        const res = await Methods.sendReq('/')
        console.log(res.data)
        if (!res.data.isAuth) {
            this.$router.push('/signin')
        }
    }
}


</script>