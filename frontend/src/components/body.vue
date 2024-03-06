<template>
    <div class="main_body">
        <div id="post_area">
            <div v-for="post of posts" :key="post.id">
                <div v-if="post.sub_thread_id == threadId">
                    <div v-if="this.searchWord == ''">
                        <li class="post">
                            <div class="post_data">
                                <div  class="name">
                                    {{ users[0].name }}
                                </div>
                                <div class="date">
                                    {{ post.date }}
                                </div>
                            </div>
                            <div v-html="post.contents" class="ql-snow post_content">
                            </div>
                        </li>
                    </div>
                    <div v-else-if="post.contents.indexOf(this.searchWord) !== -1">
                        <li class="post">
                            <div class="post_data">
                                <div class="name">
                                    {{ name }}
                                </div>
                                <div class="date">
                                    {{ post.date }}
                                </div>
                            </div>
                            <div v-html="post.contents" class="ql-snow post_content">
                            </div>
                        </li>
                    </div>
                </div>
            </div>

        </div>
        <form action="/content" method="post" name="post">
            <div class="form_area">
                <div class="writing_quill_area">
                    <textarea name="contents" style="display:none" id="contents"></textarea>
                    <QuillEditor :options="options" ref="myEditor"></QuillEditor>
                </div>
                <div class="buttons">
                    <div class="toolbar_switch">
                        <img src="@/assets/toolbar.svg" class="toolbar_button button-icon icon">
                        <!-- <button type="button" @click="toggleEditor()"></button> -->
                    </div>
                    <div class="enter_area">
                        <img src="@/assets/post.svg" alt="送信" class="enter_button button-icon icon">
                        <button type="button" @click="clickSubmit()"></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill';
import Methods from '@/api/methods';


export default {
    name: 'body',
    props: ['threadId', 'searchWord'],
    data() {
        return {
            name: '',
            posts: [],

            options: {
                modules: {
                    toolbar: toolbarOptions
                },
                placeholder: 'Enterで改行します。',
                theme: 'snow'
            }
        };
    },
    async mounted() {
        this.loadData()
    },
    methods: {
        async loadData() {
          let res = await Methods.sendReq('/')
          this.posts = res.data.posts
          this.threads = res.data.threads
          this.users = res.data.users
          console.log(this.posts)
        },
        async clickSubmit() {
            let content = document.querySelectorAll('div.ql-editor > p');
            for (let c of content) {
                if (c.innerText.match(/\S/g)) {
                    const form = { content: this.$refs.myEditor.getQuill().root.innerHTML, subThreadId: this.threadId }
                    let res = await Methods.sendPost('/content', form)
                    if (res.data == 'posted') {
                        this.$refs.myEditor.getQuill().root.innerHTML = ''
                        this.loadData()
                    }
                    return
                }
            }
        },
        toggleEditor() {
            
        }
    },
    components: { QuillEditor }

}

const toolbarOptions = [
    ['bold', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block', 'link'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'align': [] }],

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }, { 'font': [] }],          // dropdown with defaults from theme
];
</script>
  