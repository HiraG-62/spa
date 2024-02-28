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
            <div @click="mainSelect(4, $event)" v-bind:class="{ 'active': mainTab == 4 }" id="manage" class="sidebar_icon">
                <img src="@/assets/manage.svg" class="icon">
                <router-link to="/manage"></router-link>
            </div>
            <div id="logout" class="sidebar_icon">
                <img src="@/assets/logout.svg" class="icon">
                <router-link to="/logout"></router-link>
            </div>
        </div>
        <div class="sub_threads_bar">
            <div class="sub_threads_header">
                {{ title }}
            </div>
            <div class="sub_threads">
                <template v-for="(thread, index) of threads" :key="index">
                    {{ thread.main_id }}
                    <template v-if="thread.main_thread_id == mainTab+1">
                        <div v-bind:id="'sub_thread_' + index">
                            <div @click="subSelect(thread, index, $event)" v-bind:class="{ 'active': subTab == index }"
                                class="sub_thread">
                                {{ thread.sub_name }}
                                <router-link :to="{ name: mainPath, params: { id: thread.sub_id } }"></router-link>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
            <div @click="showPopup" class="add_thread">
                <img src="@/assets/plus.svg" alt="送信" class="plus_button button-icon icon">
                <span>スレッドを追加</span>
                <button type="button"></button>
            </div>
            <div v-show="visPop" class="popup_overlay">
                <div class="popup_window">
                    <div style="font-size: 24px;">スレッドを追加</div>
                    <br>
                    <p style="font-weight: lighter;">メインスレッド：  {{ title }}</p>
                    <div style="font-weight: lighter;">スレッドタイトル：  <input type="text" v-model="subName"></div>
                    <div @click="addSubThread" class="cyanButton">追加</div>
                    <label @click="hidePopup" class="popup_close">
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="18" y2="18" stroke="white" stroke-width="3"></line>
                            <line x1="0" y1="18" x2="18" y2="0" stroke="white" stroke-width="3"></line>
                        </svg>
                    </label>
                </div>
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
            mainTab: 1,
            mainPath: 'mypage',
            subTab: 0,
            subThreads: null,
            visPop: false,
            threads: []
        }
    },
    async mounted() {
        this.loadData()
    },
    methods: {
        async loadData() {
            res = await Methods.sendReq('/')
            this.title = res.data.mainThreads[1].name
            this.threads = res.data.threads
            this.$emit('subThread', this.threads[0])
        },
        mainSelect(num, event) {
            let mainThread = res.data.mainThreads[num]
            this.title = mainThread.name
            this.mainTab = num
            this.mainPath = mainThread.path
            this.subTab = 0
            this.$emit('mainThread', this.mainTab+1)
        },
        subSelect(thread, num, event) {
            this.subTab = num
            this.$emit('subThread', thread)
        },
        showPopup() {
            this.visPop = true
        },
        hidePopup() {
            this.visPop = false
        },
         async addSubThread() {
            let form = {
                threadName: this.subName
            }
            let res = await Methods.sendPost('/addSubThread', form)
            if(res.data == 'added') {
                this.loadData()
                this.visPop = false
            }
        }
    }
}
</script>