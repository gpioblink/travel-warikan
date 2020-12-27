<template>
  <v-container>
    <v-form v-on:submit.prevent="">
      <v-row
        justify="center"
      >
        <v-col
          cols="6"
        >
          <v-text-field
            label="キーワードを入力"
            single-line
            v-model="keyword"
          ></v-text-field>
          <v-btn class="ma-2" tile color="indigo" dark v-on:click="sendKeyword">送信</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
    export default {
      name: "Select.vue",
      methods: {
        sendKeyword: function() {
          console.log("key", this.keyword);
          if(this.keyword !== "") {
            this.$router.push({name: 'Login', params: {keyword: this.keyword}});
          }
        }
      },
      data: () => ({
        keyword: ""
      })
    }
</script>

<style scoped>

</style>
