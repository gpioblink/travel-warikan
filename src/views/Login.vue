<template>
    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-alert type="info">
                    「タイトル」の旅行へ招待されています。承認する場合は以下のリンクからログインしてください。
                </v-alert>
            </v-col>
            <v-col cols="12">
                <v-spacer></v-spacer>
            </v-col>
            <v-col cols="12">
                <v-spacer></v-spacer>
            </v-col>
            <v-col cols="12">
                <v-btn block large v-on:click="signInWithGitHub">
                    GitHubを使用してログイン
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-spacer></v-spacer>
            </v-col>
            <v-col cols="12">
                <v-btn block large v-on:click="signInWithFacebook">
                    Facebookを使用してログイン
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-spacer></v-spacer>
            </v-col>
            <v-col cols="12">
                <v-btn block large v-on:click="signInWithGoogle">
                    Googleを使用してログイン
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: "Login.vue",
        methods: {
            signInWithGitHub: function () {
                const provider = new firebase.auth.GithubAuthProvider();

                firebase.auth().signInWithPopup(provider).then(function(result) {
                    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                    const token = result.credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...
                    console.log("OK", token, user);
                }).catch(function(error) {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    const credential = error.credential;
                    // ...
                    console.log("NG", errorCode, errorMessage, email, credential);
                });
            },
            signInWithFacebook: function () {
                const provider = new firebase.auth.FacebookAuthProvider();

                firebase.auth().signInWithPopup(provider).then(function(result) {
                    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                    const token = result.credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...
                    console.log("OK", token, user);
                }).catch(function(error) {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    const credential = error.credential;
                    // ...
                    console.log("NG", errorCode, errorMessage, email, credential);
                });
            },
            signInWithGoogle: function () {
                const provider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithPopup(provider).then(function(result) {
                    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                    const token = result.credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...
                    console.log("OK", token, user);
                }).catch(function(error) {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    const credential = error.credential;
                    // ...
                    console.log("NG", errorCode, errorMessage, email, credential);
                });
            }
        }
    }
</script>

<style scoped>

</style>
