import artricleApi from '@/api/article';

const state = {
    data: null,
    isLoading: false,
    error: null
}

export const mutationTypes = {
    getArticleStart: '[article] getArticleStart',
    getArticleSuccess: '[article] getArticleSuccess',
    getArticleFailure: '[article] getArticleFailure',
}

export const actionTypes = {
    getArticle: '[article] getArticle'
}

const mutations = {
    [mutationTypes.getArticleStart](state){
        state.isLoading = true,
        state.data = null
    },
    [mutationTypes.getArticleSuccess](state, tags) {
        state.isLoading = false,
        state.data = tags
    },
    [mutationTypes.getArticleFailure](state){
        state.isLoading = false
    },
}

const actions = {
    [actionTypes.getArticle](context, {slug}){
        return new Promise(resolve=>{
            context.commit(mutationTypes.getArticleStart)
            artricleApi
                .getArticle(slug)
                .then(article =>{
                    context.commit(mutationTypes.getArticleSuccess, article)
                    resolve(article)
                    
                })
                .catch(()=>{
                    context.commit(mutationTypes.getArticleFailure)
                })
        })
    }
}

export default {
    state,
    actions,
    mutations
} 
