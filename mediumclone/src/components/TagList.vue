<template>
    <ul class="tag-list">
            <li  v-for="(tag, index) in tags" :key="index"
                class="tag-default tag-pill tag-outline">
                {{tag}}
            </li> 
        
        
    </ul>
</template>
<script>

export default {
    props: {
        tags: {
            type: Array,
            required: true,
            
        }
    },
    component: 'McvTagList',

}
</script>