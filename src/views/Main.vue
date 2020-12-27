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
        </v-col>
      </v-row>
    </v-form>



    <template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            debt 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="calc in calcSumPayment"
          :key="calc.user"
        >
          <td>{{ calc.user}}</td>
          <td>{{ calc.price}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
     <!-- じぶりんテスト {{calcSumPayment}} -->
     <!-- <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Single-line item</v-list-item-title>
      </v-list-item-content>
    </v-list-item>  -->


    <!-- <v-list-item-title v-for="(log, i) in logs " v-bind:key="">
      <v-list-item-title>
        {{log.paymentUser.user}}: +{{log.paymentUser.price}}
        <v-list-item-title v-for="(a, i) in log.dutyUsers">
          {{a.user}}: -{{a.price}}
        </v-list-item-title>
      </v-list-item-title>
    </v-list-item-title> -->



    <template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Payer
          </th>
          <th class="text-left">
            other 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="log in logs"
          :key="log.paymentUser"
        >
          <td>{{log.paymentUser.user}}: +{{ log.paymentUser.price}} </td>
          <td>
            <v-list-item-title v-for="a, in log.dutyUsers" :key="a.user">
             {{a.user}}: -{{a.price}}
            </v-list-item-title>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

  <!-- {{logs}} -->
</template>
  </v-container>
</template>

<script>
import firebase from 'firebase';
    export default {
        name: "Main.vue",
        // methods: {
        //     createNewTravel: function () {
        //         const db = firebase.firestore();
        //         db.collection("travels").doc("atami202107").set({
        //           name: "熱海旅行",
        //         });
        //     },
        //     addLog: function () {
        //         const db = firebase.firestore();
        //         db.collection("travels").doc("atami202107").collection("log").add({
        //             name: "肉まん",
        //             paymentUser: "gpioblink@gmail.com",
        //             dutyUsers: [
        //                 {
        //                     user: "gpioblink@gmail.com",
        //                     price: 300
        //                 }
        //             ]
        //         })
        //             .then(function(docRef) {
        //                 console.log("Document written with ID: ", docRef.id);
        //             })
        //             .catch(function(error) {
        //                 console.error("Error adding document: ", error);
        //             });
        //     }
        // },
        created: function() {
          const db = firebase.firestore();
          const travelRef = db.collection("travels").doc('nagoya202012');

          travelRef.collection("log").get()
            .then(doc => {
              doc.forEach(log => {
                this.logs.push(log.data());
              });
            })

          travelRef.get()
            .then(doc => {
              if (!doc.exists) {
                console.log('No such document!');
              } else {
                console.log('Document data:', doc.data());
                this.travelName = doc.data().name;
                this.members = doc.data().members;
              }
            })
            .catch(err => {
              console.log('Error getting document', err);
            });
        },
        computed: {
          calcSumPayment() {
            // ユーザー一人ひとりごとに対象の料金を求める。
            const sumUsers = [];
            this.members.forEach(member => {
              let sumPrice = 0;
              this.logs.forEach(log => {
                const index = log.dutyUsers.findIndex(({user}) => user === member);
                if(index >= 0) {
                  sumPrice -= log.dutyUsers[index].price; 
                } else if(member === log.paymentUser.user) {
                  sumPrice += log.paymentUser.price;
                }
              });
              sumUsers.push({user: member, price: sumPrice});
            });
            return sumUsers;
          }
        },
        data: () => ({
          travelName: "",
          logs: [],
          members: []
        }) 
    }

</script>

<style scoped>

</style>
