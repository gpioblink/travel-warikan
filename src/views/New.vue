<template>
    <v-container>
        <div>
    <v-text-field
      label="Main input"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field label="Another input"></v-text-field>
  </div>
        <v-row dense>
            <v-col cols="12">
                <v-btn height="200px" block large>
                    旅行に参加
                </v-btn>
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
