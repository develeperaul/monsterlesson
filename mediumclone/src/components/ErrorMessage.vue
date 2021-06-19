<template>
    <div>
        {{massage}}
    </div>
</template>
<script>
export default {
    name: 'McvMessage',
    props: {
        message: {
            required: false,
            type: String,
            default: 'Something went wrong'
        }
    }
}
</script>