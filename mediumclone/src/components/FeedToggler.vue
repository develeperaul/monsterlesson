<template>
    <div class="feed-toggle">
        <ul class="nav nav-pills outline-active">
            <li 
                class="nav-item"
                v-if="isLogedIn"
            >
                <router-link
                    :to="{name: 'yourFeed'}"
                    class="nav-link"
                    :class="{active: routName ===  'yourFeed'}"
                >
                    YourFeed
                </router-link>
            </li>
            <li 
                class="nav-item"
            >
                <router-link
                    :to="{name: 'globalFeed'}"
                    class="nav-link"
                    :class="{active: routName ===  'globalFeed'}"
                >
                    GlobalFeed
                </router-link>
            </li>
            <li 
                class="nav-item"
                v-if="tagName"
            >
                <router-link
                    :to="{name: 'tag'}"
                    class="nav-link"
                    :class="{active: routName ===  'tag'}"
                >
                    <i class="ion-pound"></i>
                    {{tagName}}
                </router-link>
            </li>
        </ul>
       
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import {getterTypes} from '@/store/modules/auth'
export default {
    name: 'McvFeedToggler',
    props: {
        tagName: {
            type: String,
            required: false
        }
    }, 
    computed: {
        ...mapGetters({
            isLogedIn : getterTypes.isLogedIn
        }), 
        routName(){
            return this.$route.name
        }
    }
}
</script>