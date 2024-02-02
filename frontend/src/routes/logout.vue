<script>
import Methods from '@/api/methods'

export default {
    async mounted() {
        let res = await Methods.sendReq('/logout')
        console.log(res)
        if(res.data == 'success') {
            this.$router.go({ path: '/', force: true})
        }
    }
}
</script>