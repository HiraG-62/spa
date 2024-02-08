<template>
    <div class="sidebar">
        <div class="main_threads_bar">
            <div @click="mainSelect(0, $event)" v-bind:class="{ 'active': mainTab == 0 }" id="home" class="sidebar_icon">
                <img src="@/assets/home.svg" class="icon">
                <router-link to="/"></router-link>
            </div>
            <div @click="mainSelect(1, $event)" v-bind:class="{ 'active': mainTab == 1 }" id="mypage" class="sidebar_icon">
                <img src="@/assets/mypage.svg" class="icon">
                <router-link to="/mypage/1"></router-link>
            </div>
            <div @click="mainSelect(2, $event)" v-bind:class="{ 'active': mainTab == 2 }" id="lab" class="sidebar_icon">
                <img src="@/assets/lab.svg" class="icon">
                <router-link to="/lab/1"></router-link>
            </div>
            <div @click="mainSelect(3, $event)" v-bind:class="{ 'active': mainTab == 3 }" id="lab" class="sidebar_icon">
                <img src="@/assets/dm.svg" class="icon">
                <router-link to="/dm/1"></router-link>
            </div>
            <div @click="mainSelect( 4, $event)" v-bind:class="{ 'active': mainTab == 4 }" id="manage" class="sidebar_icon">
                <img src="@/assets/manage.svg" class="icon">
                <router-link to="/manage"></router-link>
            </div>
        </div>
        <div class="sub_threads_bar">
            <div class="sub_threads_header">
                {{ title }}
            </div>
            <div class="sub_threads">
                <template v-for="(thread, index) of threads" :key="index">
                    <div v-bind:id="'sub_thread_' + index">
                        <div @click="subSelect(thread, index, $event)" v-bind:class="{ 'active': subTab == index }" class="sub_thread">
                            {{ thread.sub_name }}
                            <router-link :to="{name: mainPath, params: {id: thread.sub_id} }"></router-link>
                        </div>
                    </div>
                </template>
            </div>
            <div class="add_thread">
                <img src="@/assets/plus.svg" alt="送信" class="plus_button button-icon icon">
                <span>スレッドを追加</span>
                <button type="button"></button>
            </div>
        </div>
    </div>
</template>

<script>
import Methods from '@/api/methods'

let res

export default {
    name: 'sidebar',
    data() {
        return {
            title: '',
            mainTab: 0,
            mainPath: 'index',
            subTab: 0,
            subThreads: null
        }
    },
    async created() {
        res = await Methods.sendReq('/')
        this.title = res.data.mainThreads[0].name
        this.threads = res.data.threads
        this.$emit('subThread', this.threads[0])
    },
    methods: {
        mainSelect(num, event) {
            let mainThread = res.data.mainThreads[num]
            this.title = mainThread.name
            this.mainTab = num
            this.mainPath = mainThread.path
            this.subTab = 0
        },
        subSelect(thread, num, event) {
            this.subTab = num
            this.$emit('subThread', thread)
            console.log(thread)
        }
    }
}
</script>