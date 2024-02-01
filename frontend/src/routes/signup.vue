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

            <input type="submit" value="Sign up" class="submit_button redButton" />
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
            let res = await Methods.sendPost('/signin',)
            console.log(res)
        }
    }
}

</script>