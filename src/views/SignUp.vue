<template>
    <section class="sign-in-page">
        <div class="container sign-in-page-bg mt-5 p-0">
            <div class="row no-gutters">
                <div class="col-md-6 text-center">
                    <div class="sign-in-detail text-white">
                        <a class="sign-in-logo mb-5" href="#"><img :src="require('@/assets/images/logos/healthful-logo-white.png')" class="img-fluid" alt="logo"></a>
                        <div class="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="0">
                        <div class="item">
                            <img :src="require('@/assets/images/login/1.svg')" class="img-fluid mb-4" alt="logo">
                            <h4 class="mb-1 text-white">Manage your orders</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <div class="item">
                            <img :src="require('@/assets/images/login/2.svg')" class="img-fluid mb-4" alt="logo">
                            <h4 class="mb-1 text-white">Manage your orders</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <div class="item">
                            <img :src="require('@/assets/images/login/3.svg')" class="img-fluid mb-4" alt="logo">
                            <h4 class="mb-1 text-white">Manage your orders</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 position-relative">
                    <div class="sign-in-from" style="bottom: 5%">
                        <h1 class="mb-0">Sign Up</h1>
                        <div class="mt-4">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Your Full Name</label>
                                <input type="email" class="form-control mb-0" id="exampleInputEmail1" placeholder="Your Full Name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail2">Email address</label>
                                <input type="email" class="form-control mb-0" id="exampleInputEmail2" placeholder="Enter email" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control mb-0" id="exampleInputPassword1" placeholder="Password" v-model="password">
                            </div>
                            <div class="d-inline-block w-100">
                                <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="termsCheck">
                                    <label class="custom-control-label" for="customCheck1">I accept <a href="#">Terms and Conditions</a></label>
                                </div>
                                <button @click="register" type="submit" class="btn btn-primary float-right">Sign Up</button>
                            </div>
                            <div class="sign-info">
                                <span class="dark-color d-inline-block line-height-2">
                                    Already Have Account?
                                    <router-link to="/sign-in">Sign in</router-link>
                                </span>                            
                                <span class="dark-color d-inline-block line-height-2">You can also Sign-in with your Google account?</span>
                                
                                <GoogleLogin :callback="googleCallback" auto-login style="width: 100%; margin-top: 10px;"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { decodeCredential } from 'vue3-google-login'

    import firebase from 'firebase/compat/app'
    import 'firebase/compat/auth';

    const email = ref('')
    const password = ref('')
    const termsCheck = ref(false)
    const router = useRouter()

    const register = () => {
        if(!termsCheck.value){
            alert('You need to accept our terms and conditions first!')
            return
        }

        firebase
            .auth() // get the auth api
            .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
            .then((data) => {
                console.log('Successfully registered!', data)
                localStorage.setItem('isLogged', 'true')
                // redirect to the dashboard
                router.push('/')
            })
            .catch(error => {
                console.log(error.code)
                alert(error.message)
            });
    }
    
    const googleCallback = (response) => {
        // decodeCredential will retrive the JWT payload from the credential
        const userData = decodeCredential(response.credential)
        console.log("Handle the userData", userData)
    }
</script>

<script>
  
  export default {
    name: 'SignUp',
    props: {
      msg: String
    },
    mounted: function () {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            window.performCustomOperations()
        })
    },
    data(){
        return {
            user: 'Blank user name',
            isSignedIn: false
        }
    },
    methods: {
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
