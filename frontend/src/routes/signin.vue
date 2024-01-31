<template>
    <div class="sign_wrapper">
        <div class="sign_body">
            <h1>サインイン</h1>
            <form action="/signin" method="post">
                <div class="form_text">
                    <label>メールアドレス</label>
                    <input required type="email" name="email" />
                </div>
                <div class="form_text">
                    <label>パスワード</label>
                    <input required type="password" name="password" />
                </div>
                <input type="submit" value="サインイン" class="submit_button redButton"/>

            </form>
            <router-link to="/signup">アカウント登録</router-link>
        </div>
    </div>
</template>