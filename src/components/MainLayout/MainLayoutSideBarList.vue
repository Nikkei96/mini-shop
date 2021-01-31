<template>
  <v-list>
    <v-list-item
      dense
      v-for='(link, idx) of links'
      :key='idx'
      :to='{name: link.route}'
      link
      exact
      :title='link.text'
    >
      <v-list-item-icon>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        icon: 'mdi-home',
        route: 'Home',
        text: 'Главная',
      },
      {
        icon: 'mdi-shopping',
        route: 'Shop',
        text: 'Магазин',
      },
      {
        icon: 'mdi-face-agent',
        route: 'Services',
        text: 'Услуги',
      },
      {
        icon: 'mdi-history',
        route: 'Orders',
        text: 'Заказы',
      },
      {
        icon: 'mdi-wallet',
        route: 'Balance',
        text: 'Баланс',
      },
    ],
  }),
}
</script>

<style>
</style>