<template>
<div class="iq-top-navbar">
    <div class="iq-navbar-custom">
        <div class="iq-sidebar-logo">
            <div class="top-logo">
                <router-link to="/" class="logo">
                <img :src="require('@/assets/images/logos/healthful-logo-white.png')" class="img-fluid" alt="">
                </router-link>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light p-0">
            <div class="iq-search-bar">
                <form action="#" class="searchbox">
                <input type="text" class="text search-input" placeholder="Type here to search...">
                <a class="search-link" href="#"><i class="ri-search-line"></i></a>
                </form>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="ri-menu-3-line"></i>
            </button>
            <div class="iq-menu-bt align-self-center">
                <div class="wrapper-menu">
                <div class="main-circle"><i class="ri-more-fill"></i></div>
                <div class="hover-circle"><i class="ri-more-2-fill"></i></div>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto navbar-list">
                
                <li class="nav-item iq-full-screen">
                    <a href="#" class="iq-waves-effect" id="btnFullscreen"><i class="ri-fullscreen-line"></i></a>
                </li>
                <li class="nav-item">
                    <a href="#" class="search-toggle iq-waves-effect">
                    <i class="ri-notification-3-fill"></i>
                    <span class="bg-danger dots"></span>
                    </a>
                    <div class="iq-sub-dropdown">
                        <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body p-0 ">
                            <div class="bg-primary p-3">
                                <h5 class="mb-0 text-white">All Notifications<small class="badge  badge-light float-right pt-1">4</small></h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="search-toggle iq-waves-effect">
                    <i class="ri-mail-open-fill"></i>
                    <span class="bg-primary count-mail"></span>
                    </a>
                    <div class="iq-sub-dropdown">
                        <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body p-0 ">
                            <div class="bg-primary p-3">
                                <h5 class="mb-0 text-white">All Messages<small class="badge  badge-light float-right pt-1">5</small></h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
            <ul class="navbar-list">
                <li>
                <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
                    <img :src="require('@/assets/images/user/' + getProfileImg() +  '.jpg')" class="img-fluid rounded mr-3" alt="user">
                    <div class="caption">
                        <h6 class="mb-0 line-height">{{ username }}</h6>
                        <span class="font-size-12">Available</span>
                    </div>
                </a>
                <div class="iq-sub-dropdown iq-user-dropdown">
                    <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body p-0 ">
                            <div class="bg-primary p-3">
                            <h5 class="mb-0 text-white line-height">Hello, {{ username }}</h5>
                            <span class="text-white font-size-12">Available</span>
                            </div>
                            <a href="profile.html" class="iq-sub-card iq-bg-primary-hover">
                            <div class="media align-items-center">
                                <div class="rounded iq-card-icon iq-bg-primary">
                                    <i class="ri-file-user-line"></i>
                                </div>
                                <div class="media-body ml-3">
                                    <h6 class="mb-0 ">My Profile</h6>
                                    <p class="mb-0 font-size-12">View personal profile details.</p>
                                </div>
                            </div>
                            </a>
                            <a href="profile-edit.html" class="iq-sub-card iq-bg-primary-hover">
                            <div class="media align-items-center">
                                <div class="rounded iq-card-icon iq-bg-primary">
                                    <i class="ri-profile-line"></i>
                                </div>
                                <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Edit Profile</h6>
                                    <p class="mb-0 font-size-12">Modify your personal details.</p>
                                </div>
                            </div>
                            </a>
                            <a href="account-setting.html" class="iq-sub-card iq-bg-primary-hover">
                            <div class="media align-items-center">
                                <div class="rounded iq-card-icon iq-bg-primary">
                                    <i class="ri-account-box-line"></i>
                                </div>
                                <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Account settings</h6>
                                    <p class="mb-0 font-size-12">Manage your account parameters.</p>
                                </div>
                            </div>
                            </a>
                            <a href="privacy-setting.html" class="iq-sub-card iq-bg-primary-hover">
                            <div class="media align-items-center">
                                <div class="rounded iq-card-icon iq-bg-primary">
                                    <i class="ri-lock-line"></i>
                                </div>
                                <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Privacy Settings</h6>
                                    <p class="mb-0 font-size-12">Control your privacy parameters.</p>
                                </div>
                            </div>
                            </a>
                            <div class="d-inline-block w-100 text-center p-3">
                            <a v-if="isLoggedIn" @click.stop="signOut" class="bg-primary iq-sign-btn" href="#" role="button">Sign out<i class="ri-login-box-line ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                </li>
            </ul>
        </nav>
    </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import firebase from 'firebase/compat/app'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const isLoggedIn = ref(true)

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          isLoggedIn.value = true; // if we have a user
          localStorage.setItem('isLogged', 'true');
        } else if(localStorage.getItem('isLogged') == 'true'){
            // Signed in with Google Account
            console.log('Sign in with Google')
        } else {
          isLoggedIn.value = false; // if we do not
          localStorage.setItem('isLogged', 'false');
        }
    })

    const signOut = () => {
      firebase.auth().signOut()
      localStorage.setItem('isLogged', 'false');
      router.push('/sign-in')
    }
</script>

<script>
    export default {
        props: {
            username: String,
            usergender: String
        },
        computed: {
            
        },
        methods:{
            checkPage(linkname, name){                
                if(linkname === name){
                    return 'active';
                }else{
                    return '';
                }
                
            },
            getProfileImg(){
                if(this.usergender == 'male'){
                    return '2';
                }else{
                    return '1'
                }
            }
        }
    }
</script>