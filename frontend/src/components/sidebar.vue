<template>
    <div class="sidebar">
        <div class="main_threads_bar">
            <div @click="mainSelect('ホーム', 1, $event)" v-bind:class="{ 'active': mainTab == 1 }" id="home" class="sidebar_icon">
                <img src="@/assets/home.svg" class="icon">
                <router-link to="/"></router-link>
            </div>
            <div @click="mainSelect('マイページ', 2, $event)" v-bind:class="{ 'active': mainTab == 2 }" id="mypage" class="sidebar_icon">
                <img src="@/assets/mypage.svg" class="icon">
                <router-link to="/mypage/1"></router-link>
            </div>
            <div @click="mainSelect('研究室', 3, $event)" v-bind:class="{ 'active': mainTab == 3 }" id="lab" class="sidebar_icon">
                <img src="@/assets/lab.svg" class="icon">
                <router-link to="/lab/1"></router-link>
            </div>
            <div @click="mainSelect('DM', 4, $event)" v-bind:class="{ 'active': mainTab == 4 }" id="lab" class="sidebar_icon">
                <img src="@/assets/dm.svg" class="icon">
                <router-link to="/dm/1"></router-link>
            </div>
            <div @click="mainSelect('管理機能', 5, $event)" v-bind:class="{ 'active': mainTab == 5 }" id="manage" class="sidebar_icon">
                <img src="@/assets/manage.svg" class="icon">
                <router-link to="/manage"></router-link>
            </div>
        </div>
        <div class="sub_threads_bar">
            <div class="sub_threads_header">
                {{ title }}
            </div>
            <template v-for="(s, index) of subThreads" :key="index">
                <div v-bind:id="'sub_thread_' + index">
                    <div @click="subSelect(s, index, $event)" v-bind:class="{ 'active': subTab == index }" class="sub_thread">
                        {{ s.name }}
                        <!-- <router-link to=""></router-link> -->
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Methods from '@/api/methods'


export default {
    name: 'sidebar',
    data() {
        return {
            title: '',
            mainTab: 1,
            subTab: 0,
            subThreads: null
        }
    },
    async created() {
        let res = await Methods.sendReq('/')
        this.title = 'ホーム'
        this.subThreads = res.data.subThreads
        this.$emit('subThread', this.subThreads[0])
    },
    methods: {
        mainSelect(title, num, event) {
            this.title = title
            this.mainTab = num
        },
        subSelect(thread, num, event) {
            this.subTab = num
            this.$emit('subThread', thread)
        }
    }
}
</script>