<template>
    <div class="main_header">
        <div id="header_content">
            {{ title }}
        </div>
        <div class="search_area">
            <label @click="searchWord" for="check_search">
                <div id="search" class="header_icon">
                    <img src="@/assets/search.svg" class="icon">
                </div>
            </label>
            <div class="search_form">
                <input type="text" title="検索" v-model="search_text">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        'title'
    ],
    methods: {
        searchWord() {
            this.$emit('searchText', this.search_text)
        }
    }
}

</script>