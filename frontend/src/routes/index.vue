<template>
    <sidebarComponent @mainThread="changeMainThread" @subThread="changeSubThread" @logout="logout" :data="postData"></sidebarComponent>
    <div class="main_wrapper">
        <headerComponent @searchText="searchWords" :title="subTitle"></headerComponent>
        <router-view :threadId="subThreadId" :data="postData" :searchWord="word"></router-view>
    </div>
</template>

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
        logout() {
            this.$emit('logout')
        },
        searchWords(val) {
            this.word = val
        }
    },
    async mounted() {

    }
}


</script>