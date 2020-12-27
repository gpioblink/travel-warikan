<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col cols="10">
    <v-text-field
      label="タイトル"
      hide-details="auto"
      v-model="title"
    ></v-text-field>
    <v-text-field label="キーワード" v-model="keyword"></v-text-field>
  <v-btn
  elevation="6" v-on:click="submitTravel"
>OK</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "New.vue",
        methods: {
            submitTravel: function() {
                const db = firebase.firestore();

                db.collection("travels").doc(this.keyword).set({
                    name: this.title,
                })
                .then(() => {
                    console.log("Document successfully written!");
                    this.$router.push({name: 'Share', params: {keyword: this.keyword}});
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
            }
        },
        data: () => ({
            title: "",
            keyword: ""
        })
    }
</script>

<style scoped>

</style>
