<template>
    <div class="home-page">
        <McvBanner/>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <McvFeedToggler/>
                    <McvFeed :apiURL="apiURL"/>
                </div>
                <div class="col-md-3">
                    <McvPopularTag :apiURL="apiURL"/>
                </div> 
            </div>   
            
        </div> 
    </div>
</template>
<script>
import McvFeed from '@/components/Feed';
import McvPopularTag from '@/components/PopularTag'
import McvBanner from '@/components/Banner'
import McvFeedToggler from '@/components/FeedToggler'

export default {
    name: 'McvYouFeed',
    components: {
        McvFeed, 
        McvPopularTag,
        McvBanner,
        McvFeedToggler
    },
    data(){
        return {
            apiURL: '/articles/feed'
        }
    }
}
</script>