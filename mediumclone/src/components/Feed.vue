<template>
    <div>
        <McvLoading  v-if="isLoading"/>
        
        
        <McvMessage v-if="error"/>
        <div v-if="feed">
            <div 
                class="article-preview" 
                v-for="(article, index) in feed.articles" 
                :key="index"
            >
                <div class="article-meta">
                    <router-link
                        :to="{name: 'userProfile', params: { slug: article.author.username}}"
                    >
                        <img :src="article.author.image" />
                    </router-link>
                    <div class="info">
                        <router-link
                            :to="{name: 'userProfile', params: { slug: article.author.username}}"
                            class="author"
                        >
                            {{article.author.username}}
                        </router-link>
                        <span class="date">{{article.createdAt}}</span>
                    </div>
                    <div class="pull-xs-right">
                        ADD TO FAVORITES
                    </div>
                </div>
                <router-link
                    :to="{name: 'article', params: {slug: article.slug}}"
                    class="preview-link"
                >
                    <h1>{{article.title}}</h1>
                    <p>{{article.description}}</p>
                    <span>Read more ...</span>
                    
                    <McvTagListVue :tags="article.tagList"/>
                    
                </router-link> 
            </div>
            <McvPagination
                :total="feed.articlesCount"
                :limit="limit"
                :currentPage="currentPage"
                :url="BaseUrl"
            />
        </div>
    </div>
</template>
<script>
import McvPagination from '@/components/Pagination'
import {actionTypes} from '@/store/modules/feed'
import {mapState} from 'vuex';
import {limit} from '@/helpers/vars';
import {stringify, parseUrl} from 'query-string';
import McvLoading from '@/components/Loading';
import McvMessage from '@/components/ErrorMessage'
import McvTagListVue from '@/components/TagList.vue';


export default {
    name: 'McvFeed',
    components: {
        McvPagination,
        McvLoading, 
        McvMessage,
        McvTagListVue
    },
    props:{
        apiURL:{
            required: true,
            type: String
        }
    },
    data(){
        return {
            limit,
        }
    },

    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        }),
        currentPage(){
            return Number(this.$route.query.page || '1')
        },
        BaseUrl(){
            return this.$route.path
        },
        offset(){
            return this.currentPage * limit - limit
        }
    },
    methods:{
        fetchFeed(){
            const parsedUrl = parseUrl(this.apiURL)
            const stringifieldParams = stringify({
                limit, 
                offset: this.offset,
                ...parsedUrl.query
            })
            console.log(stringifieldParams)
            const apiWithParams = `${parsedUrl.url}?${stringifieldParams}`
            this.$store.dispatch(actionTypes.getFeed, {apiURL:apiWithParams})
        }
    },
    mounted(){
        this.fetchFeed();
    },
    watch:{
        currentPage(){
            this.fetchFeed();
        }
    },

}
</script>