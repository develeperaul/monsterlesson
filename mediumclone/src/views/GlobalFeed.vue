<template>
    <div class="home-page">
        BANNER
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <McvFeed :apiURL="apiURL"/>
                </div>
                <div class="col-md-3">
                    POPULAR-TAGS
                </div> 
            </div>   
            
        </div> 
    </div>
</template>
<script>
import McvFeed from '@/components/Feed';
export default {
    name: 'McvGlobaLFeed',
    components: {
        McvFeed
    },
    data(){
        return {
            apiURL: '/articles'
        }
    }
}
</script>