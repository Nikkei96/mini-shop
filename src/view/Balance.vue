<template>
  <v-container fluid>
    <BalanceDialog
      v-if='dialog'
      :dialog='dialog'
      :money='money'
      @changeDialog='dialog = !dialog'
      @updateMoney='money = $event'
    />
    <Loader v-if='!currencies' />
    <v-card v-else>
      <v-card-title>
        <v-icon class='mr-2'>mdi-cash-multiple</v-icon>
        <span>Курс валют на {{new Date(currencies.Date) | dateTimeFilter}}</span>
        <v-spacer></v-spacer>
        <v-btn color='primary' @click='loadMoney' :loading='loading'>Кошелёк</v-btn>
      </v-card-title>

      <v-card-text>
        <v-simple-table dense>
          <thead>
            <tr>
              <th>Валюта</th>
              <th>Стоимость (ЦБ РФ)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='(currency, i) of currencies.Valute' :key='i'>
              <td>{{currency.Name}}</td>
              <td>{{currency.Value}}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import BalanceDialog from '@/components/BalanceDialog'

export default {
  components: {
    BalanceDialog,
  },

  data: () => ({
    currencies: null,
    dialog: false,
    money: null,
    loading: false,
  }),

  methods: {
    async loadMoney() {
      this.loading = true
      const uid = this.$firebase.auth().currentUser.uid
      this.money = (await this.$firebase.database().ref(`/users/${uid}/info`).once('value')).val().money
      this.loading = false
      this.dialog = !this.dialog
    },
  },

  mounted() {
    setTimeout(async () => {
      const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      this.currencies = await response.json()
    }, 500)
  },
}
</script>

<style>
</style>