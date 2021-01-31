<template>
  <v-navigation-drawer
    clipped
    permanent
    app
    :mini-variant='window.width < windowLimit'
  >
    <MainLayoutSideBarSheet :window='window' :windowLimit='windowLimit' />
    <v-divider></v-divider>
    <MainLayoutSideBarList />
  </v-navigation-drawer>
</template>

<script>
import MainLayoutSideBarSheet from '@/components/MainLayout/MainLayoutSideBarSheet'
import MainLayoutSideBarList from '@/components/MainLayout/MainLayoutSideBarList'

export default {
  components: {
    MainLayoutSideBarSheet,
    MainLayoutSideBarList,
  },
  data: () => ({
    window: {
      width: 0,
    },

    windowLimit: 800,
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