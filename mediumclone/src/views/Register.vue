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
                <McvValidationError 
                    v-if="validationErrors"
                    :validationErrors="validationErrors"
                    />

                <form 
                    @submit.prevent="onSubmit" 
                    class="ng-pristine ng-valid ng-valid-email"
                >
                    

                    <fieldset class="form-group" >
                    <input 
                        class="form-control form-control-lg" 
                        type="text" 
                        placeholder="Username" 
                        v-model="username"
                    >
                    </fieldset>
                    <fieldset class="form-group" >
                    <input 
                        class="form-control form-control-lg" 
                        type="text" 
                        placeholder="Email" 
                        v-model="email"
                    >
                    </fieldset>
                    <fieldset class="form-group" >
                    <input 
                        class="form-control form-control-lg" 
                        type="password" 
                        placeholder="Password" 
                        v-model="password"
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
import McvValidationError from '@/components/ValidationErrors'
export default {
    name: 'McvRegister',
    components: {
        McvValidationError
    },
    data(){
        return{
            email: '',
            password: '',
            username: ''
        }
    },
    computed:{
        isSubmitting(){
            
            return this.$store.state.auth.isSubmitting;
        },
        validationErrors(){
            return this.$store.state.auth.validationErrors;
        }
    },
    methods: {
        onSubmit(){
            console.log("submited");
            this.$store.dispatch ('register',
                {
                    email: this.email,
                    username: this.username,
                    password: this.password 
                })
                .then(user=>{
                    console.log('successfully register user', user);
                    this.$router.push({name: 'home'});
                })

        },
        
    },
}
</script>

<style>

</style>