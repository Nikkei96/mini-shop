<template>
  <v-list>
    <v-list-item
      dense
      v-for='(link, idx) of links'
      :key='idx'
      :to='link.route'
      link
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
        route: '/',
        text: 'Главная',
      },
      {
        icon: 'mdi-shopping',
        route: '/shop',
        text: 'Магазин',
      },
      {
        icon: 'mdi-face-agent',
        route: '',
        text: 'Услуги',
      },
      {
        icon: 'mdi-history',
        route: '',
        text: 'Заказы',
      },
      {
        icon: 'mdi-wallet',
        route: '',
        text: 'Баланс',
      },
    ],
  }),
}
</script>

<style>
</style>