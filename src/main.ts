import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBbT8jSksYs19vUW7lDpyYpBSl_MIPfiV4",
  authDomain: "travel-warikan.firebaseapp.com",
  projectId: "travel-warikan",
  storageBucket: "travel-warikan.appspot.com",
  messagingSenderId: "986546171332",
  appId: "1:986546171332:web:2cca0f4795c7a01d804891",
  measurementId: "G-H10MET9Y1T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
