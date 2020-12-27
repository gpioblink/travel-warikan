<template>
    <v-container>
        <v-alert
                type="success"
        >旅行が作成されました🎉</v-alert>

        <v-card
        >
            <v-card-title class="headline">
                キーワード「」を参加者に伝え参加させてください
            </v-card-title>

            <v-card-subtitle>または、リンクを送信してください</v-card-subtitle>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text>
                    メイン画面へ
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-container>
</template>

<script>
    export default {
        name: "Share.vue"
    }
</script>

<style scoped>

</style>
