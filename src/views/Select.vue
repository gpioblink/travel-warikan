<template>
  <v-container>
    <v-form>
      <v-row
        justify="center"
      >
        <v-col
          cols="6"
        >
          <v-text-field
            label="キーワードを入力"
            single-line
          ></v-text-field>
          <v-btn class="ma-2" tile color="indigo" dark>送信</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
    export default {
        name: "Select.vue"
    }
</script>

<style scoped>

</style>
