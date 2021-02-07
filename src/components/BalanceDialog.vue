<template>
  <v-dialog :value='dialog' @click:outside='$emit("changeDialog")' width='500'>
    <v-card>
      <v-card-title class='headline grey lighten-2 mb-4'>
        Мой кошелёк
        <v-spacer></v-spacer>
        <v-btn color='primary' icon @click='$emit("changeDialog")'>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <span class='font-weight-bold'>Ваш баланс: {{money}} руб.</span>

        <v-divider class='my-2'></v-divider>

        <div>
          <span>Пополнить баланс на:</span>
          <v-text-field
            class='d-inline-flex px-3'
            style='width: 100px'
            v-model.number='topUp'
            dense
            hide-details
            autofocus
          ></v-text-field>
          <span>рублей</span>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color='success'
            :disabled='topUp <= 0 || typeof topUp == "string"'
            @click='doTopUp'
          >Пополнить</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['dialog', 'money'],

  data: () => ({
    topUp: null,
  }),

  methods: {
    async doTopUp() {
      const uid = this.$firebase.auth().currentUser.uid
      let totalMoneyWillBe = this.money + this.topUp
      await this.$firebase.database().ref(`/users/${uid}/info`).update({ money: totalMoneyWillBe })
      this.$emit('updateMoney', totalMoneyWillBe)
      this.topUp = null
    },
  },
}
</script>

<style>
</style>