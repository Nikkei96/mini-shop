<template>
  <v-app app>
    <MainLayoutHeader />
    <MainLayoutSideBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainLayoutHeader from '@/components/MainLayout/MainLayoutHeader'
import MainLayoutSideBar from '@/components/MainLayout/MainLayoutSideBar'

export default {
  components: {
    MainLayoutHeader,
    MainLayoutSideBar,
  },
}
</script>

<style>
</style>