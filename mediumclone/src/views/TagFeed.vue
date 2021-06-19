<template>
    <div class="home-page">
        <McvBanner/>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <McvFeedToggler :tagName="tagName"/>
                    <McvFeed :apiURL="apiURL"/>
                </div>
                <div class="col-md-3">
                    <McvPopularTag />
                </div> 
            </div>   
            
        </div> 
    </div>
</template>
<script>
import McvFeed from '@/components/Feed';
import McvPopularTag from '@/components/PopularTag';
import McvBanner from '@/components/Banner';
import McvFeedToggler from '@/components/FeedToggler'

export default {
    name: 'McvTagFeed',
    components: {
        McvFeed, 
        McvPopularTag,
        McvBanner,
        McvFeedToggler
    },
    computed :{
        tagName(){
            return this.$route.params.slug
        },
        apiURL(){
            return `./articles?tag=${this.tagName}`
        }
    }
}
</script>