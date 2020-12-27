<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col cols="10">
    <v-text-field
      label="タイトル"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field label="キーワード"></v-text-field>
  <v-btn
  elevation="6"
>OK</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "New.vue"
    }
</script>

<style scoped>

</style>
