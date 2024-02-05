<script>
import Methods from '@/api/methods'

export default {
    async mounted() {
        let res = await Methods.sendReq('/logout')
        if(res.data == 'success') {
            this.$router.push('/signin')
        }
    }
}
</script>