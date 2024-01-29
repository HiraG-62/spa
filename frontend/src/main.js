import { createApp } from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script'
import Router from '@/router/index'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

import '@/stylesheets/reset.css'
import '@/stylesheets/style.css'



const app = createApp(App)
app.use(LoadScript)
app.use(Router)
app.component('QuillEditor', QuillEditor)

app.mount('#app')