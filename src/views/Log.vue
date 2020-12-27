<template>
  <div>
    <v-row justify="center">
      <v-col cols="1">
        <v-dialog
          v-model="dialog"
          scrollable
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              決済を新規作成
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">新しい決済を追加する</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      :items="items"
                      label="支払者"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">

                    <strong>請求先を決める</strong>

                    <v-container fluid>
                      <v-checkbox
                        v-model="switchJohn"
                        label="John"
                      ></v-checkbox>
                      <v-text-field
                        label="金額"
                        required
                        v-if="switchJohn"
                      ></v-text-field>
                      <v-checkbox
                        v-model="switchJacob"
                        label="Jacob"
                      ></v-checkbox>
                      <v-text-field
                        label="金額"
                        required
                        v-if="switchJacob"
                      ></v-text-field>
                    </v-container>
                  </v-col>
                  <v-col cols="12">
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >

                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                キャンセル
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                追加
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    export default {
      name: "Log.vue",
      data: () => ({
        items: ['Jhon', 'Bob', 'takashi'],
        selected: [],
        switch1: true,
        switchJohn: false,
        switchJacob: false,
        dialog: false,
      }),

    }
</script>

<style scoped>

</style>
