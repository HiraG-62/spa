<template>
  <div class="app">
    <div class="sidebar">
      <div class="main_threads_bar">
        <label for="check_home">
          <div id="home" class="sidebar_icon">
            <img src="@/images/home.svg" class="icon">
            <a href="/"></a>
            <input type="checkbox" name="" id="check_home" class="check_sidebar">
          </div>
        </label>
        <label for="check_mypage">
          <div id="mypage" class="sidebar_icon">
            <img src="@/images/mypage.svg" class="icon">
            <a href="/mypage"></a>
            <input type="checkbox" name="" id="check_mypage" class="check_sidebar">
          </div>
        </label>
        <label for="check_lab">
          <div id="lab" class="sidebar_icon">
            <img src="@/images/lab.svg" class="icon">
            <a href="/lab"></a>
            <input type="checkbox" name="" id="check_lab" class="check_sidebar">
          </div>
        </label>
        <label for="check_DM">
          <div id="lab" class="sidebar_icon">
            <img src="@/images/dm.svg" class="icon">
            <a href="/dm"></a>
            <input type="checkbox" name="" id="check_DM" class="check_sidebar">
          </div>
        </label>
        <label for="check_manage">
          <div id="manage" class="sidebar_icon">
            <img src="@/images/manage.svg" class="icon">
            <a href="/manage"></a>
            <input type="checkbox" name="" id="check_manage" class="check_sidebar">
          </div>
        </label>
      </div>
      <div class="sub_threads_bar">
        <div class="sub_threads_header">
          <p>
            {{ title }}
          </p>
        </div>
        <template v-for="(s, key, index) of subThreads">
          <label v-bind:for="'check' + index">
            <div v-bind:id="'sub_thread_' + index">
              <div class="sub_thread">
                <p>
                  {{ s.name }}
                </p>
                <input type="radio" name="sub" id="check_<%=index%>" value="<%=s.name%>" class="check_sub_thread"
                  style="display: none;">
              </div>
            </div>
          </label>
        </template>
      </div>
    </div>
    <div class="main_wrapper">
      <div class="main_header">
        <div id="header_content">
          {{ subThread.name }}
        </div>
        <div class="search_area">
          <label for="check_search">
            <div id="search" class="header_icon">
              <img src="@/images/search.svg" class="icon">
              <input type="checkbox" name="" id="check_search" class="check_header" style="display: none;">
            </div>
          </label>
          <div class="search_form">
            <input type="text" title="検索" name="" id="">
          </div>
        </div>
      </div>
      <div class="main_body">
        <div id="post_area">
          <template v-for="post of posts">
            <li class="post">
              <div class="post_data">
                <div class="name">
                  <p>name</p>
                </div>
                <div class="date">
                  {{ post.date }}
                </div>
              </div>
              <div class="ql-snow post_content">
                {{ post.content }}
              </div>
            </li>
          </template>
        </div>
        <template v-if="mainThreadId == 1">
          <form action="/content" method="post" name="post">
            <div class="form_area">
              <div class="writing_quill_area">
                <textarea name="contents" style="display:none" id="contents"></textarea>
                <div id="editor"></div>
              </div>
              <div class="buttons">
                <div class="toolbar_switch">
                  <img src="@/images/toolbar.svg" class="toolbar_button button-icon icon">
                </div>
                <div class="enter_area">
                  <img src="@/images/post.svg" alt="送信" class="enter_button button-icon icon">
                  <button type="button" onclick="clickSubmit()"></button>
                </div>
              </div>
            </div>
            <input type="text" id="main_thread_name" name="main_thread_name" value="<%=mainThread%>"
              style="display: none;">
            <input type="text" id="main_thread_id" name="main_thread_id" value="<%=mainThreadId%>" style="display: none;">
            <input type="text" id="sub_thread_index" name="sub_thread_index" value="<%=subThreadIndex%>"
              style="display: none;">
          </form>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Methods from '@/api/methods'

export default {
  name: 'index',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    async post() {
      let element = { text: this.text }
      let response = await Methods.testPosting(element)
      console.log(response.data.message)
    }
  }
}
</script>
