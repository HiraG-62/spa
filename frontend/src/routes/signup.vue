<template>
    <div class="sign_wrapper">
        <div class="sign_body">
            <h1>アカウント登録</h1>
            <div class="form_text">
                <label>メールアドレス</label>
                <input required type="email" name="email" v-model="email"/>
            </div>
            <div class="form_text">
                <label>パスワード</label>
                <input required type="password" name="password" v-model="password"/>
            </div>
            <div class="form_text">
                <label>パスワード再入力</label>
                <input required type="password" name="repassword" v-model="repassword"/>
            </div>

            <input @click="post()" type="button" value="サインアップ" class="submit_button redButton" />
            <router-link to="/signin">サインイン</router-link>
        </div>
    </div>
</template>

<script>
import Methods from '@/api/methods'

export default {
    data() {
        return {
            email: '',
            password: '',
            repassword: ''
        }
    },
    methods: {
        async post() {
            let form = {
                email: this.email,
                password: this.password,
                repassword: this.repassword
            }
            let res = await Methods.sendPost('/signup', form)
            console.log(res.data)
            if(res.data == 'success') {
                this.$router.push('/')
            }
        }
    }
}

</script>