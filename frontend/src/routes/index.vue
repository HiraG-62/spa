<template>
    <sidebarComponent @mainThread="changeMainThread" @subThread="changeSubThread" :data="postData"></sidebarComponent>
    <div class="main_wrapper">
        <headerComponent @searchText="searchWords" :title="subTitle"></headerComponent>
        <assignLabs v-if="mainThread==5"></assignLabs>
        <bodyComponent v-else :threadId="subThreadId" :data="postData" :searchWord="word"></bodyComponent>
    </div>
</template>
imipo
<script>
import Methods from '@/api/methods'

import sidebarComponent from '@/components/sidebar.vue'
import headerComponent from '@/components/header.vue'
import bodyComponent from '@/components/body.vue'
import assignLabs from '@/components/assignlabs.vue'

export default {
    name: 'index',
    data() {
        return {
            postData: '',
            subTitle: '',
            subThreadId: '',
            word: '',
            mainThread: ''
        }
    },
    components: {
        sidebarComponent,
        headerComponent,
        bodyComponent,
        assignLabs
    },
    methods: {
        changeMainThread(val) {
            this.mainThread = val
        },
        changeSubThread(val) {
            this.subTitle = val.sub_name
            this.subThreadId = val.sub_id
        },
        searchWords(val) {
            this.word = val
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