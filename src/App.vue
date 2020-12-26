<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>トラベル割り勘</v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-if="isSignedIn">
        <span class="mr-2">ようこそ、{{this.userName}}さん</span>
        <v-avatar>
          <img
                  :src="userImage"
                  alt="John"
          >
        </v-avatar>
      </div>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from "firebase";

export default Vue.extend({
  name: 'App',

  components: {
  },

  created(): void {
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.displayName && user.photoURL) {
        this.isSignedIn = true;
        this.userName = user.displayName;
        this.userImage = user.photoURL;
      } else {
        this.isSignedIn = false;
        this.userName = "";
        this.userImage = "";
      }
    });
  },

  data: () => ({
    userName: "",
    userImage: "",
    isSignedIn: false
  }),
});
</script>
