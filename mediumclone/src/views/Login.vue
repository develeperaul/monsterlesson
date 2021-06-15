<template>
    <div class="auth-page ng-scope">
        <div class="container page">
            <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center ng-binding" >Sign in</h1>
                <p class="text-xs-center">
                    <router-link :to="{name: 'register'}">
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
                    >Sign in
                    </button>
                </form>
                {{isSubmitting}}
            </div>

            </div>
        </div>
    </div>
</template>

<script>

import McvValidationError from '@/components/ValidationErrors';
import {actionTypes} from '@/store/modules/auth' 
import { mapState } from 'vuex';
export default {
    name: 'McvRegister',
    components: {
        McvValidationError
    },
    data(){
        return{
            email: '',
            password: '',
        }
    },
    computed:{
        ...mapState({
            isSubmitting: (state)=>state.auth.isSubmitting,
            validationErrors: (state)=>state.auth.validationErrors,
        })
        // isSubmitting(){
            
        //     return this.$store.state.auth.isSubmitting;
        // },
        // validationErrors(){
        //     return this.$store.state.auth.validationErrors;
        // }
    },
    methods: {
        onSubmit(){
            console.log("submited");
            this.$store.dispatch (actionTypes.login,
                {
                    email: this.email,
                    password: this.password 
                })
                .then(()=>{
                    console.log('Hi Ural')
                    this.$router.push({name: 'globalFeed'});
                })

        },
        
    },
}
</script>

<style>

</style>