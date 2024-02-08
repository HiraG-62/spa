<template>
    <sidebarComponent @subThread="changeSubThread" :data="postData"></sidebarComponent>
    <div class="main_wrapper">
        <headerComponent :title="subTitle"></headerComponent>
        <bodyComponent :threadId="subThreadId" :data="postData"></bodyComponent>
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
            postData: '',
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
            this.subTitle = val.sub_name;
            this.subThreadId = val.sub_id;
        }
    },
    async mounted() {
        const res = await Methods.sendReq('/')
        this.postData = res
        if (!res.data.isAuth) {
            this.$router.push('/signin')
            return
        }
    }
}


</script>