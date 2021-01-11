<template>
  <v-navigation-drawer clipped permanent app :mini-variant='window.width < 800'>
    <v-sheet color='grey lighten-4' class='pa-4'>
      <v-avatar class='mb-4' color='grey darken-1' size='64'></v-avatar>
      <div>john@vuetifyjs.com</div>
    </v-sheet>

    <v-divider></v-divider>

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
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    window: {
      width: 0,
    },

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

  created() {
    this.window.width = window.innerWidth
  },
}
</script>