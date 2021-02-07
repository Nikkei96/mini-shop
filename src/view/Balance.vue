<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <v-icon class='mr-2'>mdi-cash-multiple</v-icon>
        <span>Курс валют на {{new Date(currencies.Date) | dateTimeFilter}}</span>
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
export default {
  data: () => ({
    currencies: null,
  }),

  async mounted() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    this.currencies = await response.json()
  },
}
</script>

<style>
</style>