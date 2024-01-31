<template>
    <sidebarComponent></sidebarComponent>
    <div class="main_wrapper">
        <headerComponent></headerComponent>
        <bodyComponent></bodyComponent>
    </div>
</template>

<script>
import Methods from '@/api/methods'

import sidebarComponent from '@/components/sidebar.vue'
import headerComponent from '@/components/header.vue'
import bodyComponent from '@/components/body.vue'

export default {
    name: 'index',
    components: {
        sidebarComponent,
        headerComponent,
        bodyComponent
    },
    mounted() {
        window.onload = async function () {
            const res = await Methods.sendReq()
            if (!res.data.isAuth) {
                location.href = '/signin'
                console.log('test')
            }
        }
    }
}


</script>