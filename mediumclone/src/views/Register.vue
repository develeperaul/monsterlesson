<template>
    <div class="auth-page ng-scope">
        <div class="container page">
            <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center ng-binding" >Sign up</h1>
                <p class="text-xs-center">
                    <router-link :to="{name: 'login'}">
                        Need an account?
                    </router-link>
                </p>
                Validation errors

                <form 
                    @submit.prevent="onSubmit" 
                    class="ng-pristine ng-valid ng-valid-email"
                >
                    

                    <fieldset class="form-group" >
                    <input 
                        class="form-control form-control-lg" 
                        type="text" 
                        placeholder="Username" 
                    >
                    </fieldset>
                    <fieldset class="form-group" >
                    <input 
                        class="form-control form-control-lg" 
                        type="text" 
                        placeholder="Email" 
                    >
                    </fieldset>
                    <fieldset class="form-group" >
                    <input 
                        class="form-control form-control-lg" 
                        type="password" 
                        placeholder="Password" 
                    >
                    </fieldset>
                    <button 
                        class="btn btn-lg btn-primary pull-xs-right"
                        :disabled="isSubmitting"
                    >Sign up
                    </button>
                </form>
                {{isSubmitting}}
            </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'McvRegister',
    computed:{
        isSubmitting(){
            return this.$store.state.auth.isSubmitting
        }
    },
    methods: {
        onSubmit(){
            console.log("submited");
            this.$store.commit('registerStart')
        },
        
    },
}
</script>

<style>

</style>