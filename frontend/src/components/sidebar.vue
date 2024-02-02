<template>
    <div class="sidebar">
        <div class="main_threads_bar">
            <div @click="mainSelect(1, $event)" v-bind:class="{ 'active': mainTab == 1 }" id="home" class="sidebar_icon">
                <img src="@/assets/home.svg" class="icon">
                <router-link to="/"></router-link>
            </div>
            <div @click="mainSelect(2, $event)" v-bind:class="{ 'active': mainTab == 2 }" id="mypage" class="sidebar_icon">
                <img src="@/assets/mypage.svg" class="icon">
                <router-link to="/mypage"></router-link>
            </div>
            <div @click="mainSelect(3, $event)" v-bind:class="{ 'active': mainTab == 3 }" id="lab" class="sidebar_icon">
                <img src="@/assets/lab.svg" class="icon">
                <router-link to="/lab"></router-link>
            </div>
            <div @click="mainSelect(4, $event)" v-bind:class="{ 'active': mainTab == 4 }" id="lab" class="sidebar_icon">
                <img src="@/assets/dm.svg" class="icon">
                <router-link to="/dm"></router-link>
            </div>
            <div @click="mainSelect(5, $event)" v-bind:class="{ 'active': mainTab == 5 }" id="manage" class="sidebar_icon">
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
                    <div @click="subSelect(index, $event)" v-bind:class="{ 'active': subTab == index }" class="sub_thread">
                        {{ s.name }}
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
    async created() {
        let res = await Methods.sendReq('/')
        this.subThreads = res.data.subThreads
        this.$emit('subTitle', this.subThreads[0].name)
    },
    data() {
        return {
            title: 'title',
            mainTab: 1,
            subTab: 0,
            subThreads: null
        }
    },
    methods: {
        mainSelect(num, event) {
            this.mainTab = num
        },
        subSelect(num, event) {
            this.subTab = num
            let subTitle = event.target.innerHTML
            this.$emit('subTitle', subTitle)
        }
    }
}
</script>