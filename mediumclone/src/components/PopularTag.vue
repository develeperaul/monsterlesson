<template>
    <div>
        <div v-if="isLoading" >...Loading</div>
        
        <div 
            v-if="error"
        >
            Something bad happened    
        </div>
        <div
            v-if="popularTags"
            class="sidebar"
        >
            <p>Popular Tags</p>
            <div class="tag-list">
                <router-link
                    v-for="popularTag in popularTags"
                    :key="popularTag"
                    :to="{name: 'tag', params: {slug: popularTag}}"
                    class="tag-default tag-pill"
                >
                    {{popularTag}}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'
// import McvLoading from '@/components/Loading'
export default {
    name: 'McvPopularTag',
    computed: {
        ...mapState({
            isLoading: state => state.popularTags.isLoading,
            error: state => state.popularTags.error,
            popularTags: state => state.popularTags.data
        })
    },
    mounted(){
        this.$store.dispatch(actionTypes.getPopularTags)
    },
    // components: {
    //     McvLoading
    // }
    
}
</script>