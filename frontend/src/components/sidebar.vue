<template>
    <div class="sidebar">
        <div class="main_threads_bar">
            <div @click="select(1), get()" v-bind:class="{ 'active': mainTab == 1 }" id="home" class="sidebar_icon">
                <img src="@/assets/home.svg" class="icon">
                <router-link to="/"></router-link>
            </div>
            <div @click="select(2)" v-bind:class="{ 'active': mainTab == 2 }" id="mypage" class="sidebar_icon">
                <img src="@/assets/mypage.svg" class="icon">
                <router-link to="/mypage"></router-link>
            </div>
            <div @click="select(3)" v-bind:class="{ 'active': mainTab == 3 }" id="lab" class="sidebar_icon">
                <img src="@/assets/lab.svg" class="icon">
                <router-link to="/lab"></router-link>
            </div>
            <div @click="select(4)" v-bind:class="{ 'active': mainTab == 4 }" id="lab" class="sidebar_icon">
                <img src="@/assets/dm.svg" class="icon">
                <router-link to="/dm"></router-link>
            </div>
            <div @click="select(5)" v-bind:class="{ 'active': mainTab == 5 }" id="manage" class="sidebar_icon">
                <img src="@/assets/manage.svg" class="icon">
                <router-link to="/manage"></router-link>
            </div>
        </div>
        <div class="sub_threads_bar">
            <div class="sub_threads_header">
                <p>
                    {{ title }}
                </p>
            </div>
            <template v-for="(s, key, index) of subThreads" :key="key">
                <label v-bind:for="'check_' + index">
                    <div v-bind:id="'sub_thread_' + index">
                        <div class="sub_thread">
                            <p>
                                {{ s.name }}
                            </p>
                            <input type="radio" name="sub" id="check_<%=index%>" value="<%=s.name%>"
                                class="check_sub_thread" style="display: none;">
                        </div>
                    </div>
                </label>
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
            title: 'title',
            mainTab: 1,
            subThreads: [
                { name: 'a', test: 'test' },
                { name: 'b', test: 'test' },
                { name: 'c', test: 'test' },
            ]
        }
    },
    methods: {
        select(num) {
            this.mainTab = num
        },
        async get() {
            const res = await Methods.sendReq()
            console.log(res.data)
        }
    }
}
</script>