<template>
  <v-app app>
    <Header />
    <SideBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'

export default {
  data: () => ({}),

  components: {
    Header,
    SideBar,
  },
}
</script>

<style>
</style>
