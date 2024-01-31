<template>
    <div class="sign_wrapper">
        <div class="sign_body">
            <h1>アカウント登録</h1>
            <form action="/signup" method="post">
                <div class="form_text">
                    <label>メールアドレス</label>
                    <input required type="email" name="email" />
                </div>
                <div class="form_text">
                    <label>パスワード</label>
                    <input required type="password" name="password" />
                </div>
                <div class="form_text">
                    <label>パスワード再入力</label>
                    <input required type="password" name="repassword" />
                </div>

                <input type="submit" value="Sign up" class="submit_button redButton" />

            </form>
            <router-link to="/signin">サインイン</router-link>
        </div>
    </div>
</template>