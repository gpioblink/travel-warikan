<template>
    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-btn height="200px" block large v-on:click="pushCreate">
                    新しい旅行帳簿を作成
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-spacer></v-spacer>
            </v-col>
            <v-col cols="12">
                <v-btn height="200px" block large v-on:click="pushSelect">
                    旅行に参加
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Start.vue",
        methods: {
            pushCreate: function(){
                this.$router.push({name: 'New'});
            },
            pushSelect: function(){
                this.$router.push({name: 'Select'});
            }
        }
    }
</script>

<style scoped>

</style>
