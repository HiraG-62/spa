<template>
    <div class="sign_wrapper">
        <div class="sign_body">
            <h1>サインイン</h1>
            <div class="form_text">
                <label>メールアドレス</label>
                <input required type="email" name="email" v-model="email" />
            </div>
            <div class="form_text">
                <label>パスワード</label>
                <input required type="password" name="password" v-model="password"/>
            </div>
            <input @click="post()" type="button" value="サインイン" class="submit_button redButton"/>
            <router-link to="/signup">アカウント登録</router-link>
        </div>
    </div>
</template>

<script>
import Methods from '@/api/methods'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async post() {
            let form = {
                email: this.email,
                password: this.password
            }
            let res = await Methods.sendPost('/signin', form)
            console.log(res)
        }
    }
}

</script>