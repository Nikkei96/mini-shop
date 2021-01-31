<template>
  <v-navigation-drawer
    clipped
    permanent
    app
    :mini-variant='window.width < windowLimit'
  >
    <v-sheet
      color='grey lighten-4'
      :class='window.width > windowLimit ? "pa-4" : "text-center"'
    >
      <v-avatar
        :class='window.width > windowLimit ? "mb-4" : "my-2"'
        color='grey darken-1'
        size='32'
        title='john@vuetifyjs.com'
      ></v-avatar>
      <div v-if='window.width > windowLimit'>john@vuetifyjs.com</div>
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

    windowLimit: 800,

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

  methods: {
    resizeHandler() {
      this.window.width = window.innerWidth
    },
  },

  created() {
    window.addEventListener('resize', this.resizeHandler)
  },

  destroyed() {
    window.removeEventListener('resize', this.resizeHandler)
  },
}
</script>