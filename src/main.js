import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

/* https://yobaji.github.io/vue3-google-login */
import vue3GoogleLogin from 'vue3-google-login'

const firebaseConfig = {
    apiKey: "AIzaSyBmU35vDMmqfac0hJmndkOpzcC4Kp-idPo",
    authDomain: "qolmonitor.firebaseapp.com",
    projectId: "qolmonitor",
    storageBucket: "qolmonitor.appspot.com",
    messagingSenderId: "202065532022",
    appId: "1:202065532022:web:bb625912fa06264b563b57",
    measurementId: "G-6TS64QEDYE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let gauthClientId = "202065532022-8c628861eqi5evnee3vm6f1jga6t4a6k.apps.googleusercontent.com";

const app = createApp(App)
app.use(vue3GoogleLogin, {
    clientId: gauthClientId
})

app.use(router)
app.mount('#app')
