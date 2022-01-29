<template>
    <div>
        <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li v-for="item in mainNav" :key="item.id"><router-link :to="item.path" tag="a">{{item.title}}</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

import router from "../router";

export default ({
    data: function() {
        return{
            mainNav: router.options.routes,
        }
    },
    mounted: function() {
        console.log(this.mainNav)
    },
})

</script>
