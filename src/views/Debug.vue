<template>
    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-btn block large v-on:click="createNewTravel">
                    新しい旅行を作成
                </v-btn>
                <v-btn block large v-on:click="addLog">
                    ログの記憶
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: "Debug.vue",
        methods: {
            createNewTravel: function () {
                const db = firebase.firestore();
                db.collection("travels").doc("nagoya202012").set({
                    name: "2020年12月名古屋旅行",

                })
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
            },
            addLog: function () {
                const db = firebase.firestore();
                db.collection("travels").doc("nagoya202012").collection("log").add({
                    name: "フェラーリ",
                    paymentUser: {
                        user: "c@example.com",
                        price: 8000
                    },
                    dutyUsers: [
                        {
                            user: "a@example.com",
                            price: 2000
                        },{
                            user: "b@example.com",
                            price: 2000
                        },
                        {
                            user: "d@example.com",
                            price: 2000
                        },
                        {
                            user: "e@example.com",
                            price: 2000
                        },
                    ]
                })
                    .then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
