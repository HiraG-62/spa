<template>
    <div class="main_header">
        <div id="header_content">
            {{ title }}
        </div>
        <div class="search_area">
            <label for="check_search">
                <div id="search" class="header_icon">
                    <img src="@/assets/search.svg" class="icon">
                    <input type="checkbox" name="" id="check_search" class="check_header" style="display: none;">
                </div>
            </label>
            <div class="search_form">
                <input type="text" title="検索" name="" id="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        'title'
    ]
}

</script>