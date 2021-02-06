<template>
  <v-app-bar app dense clipped-left>
    <v-icon color='blue' class='mr-2'>mdi-shopping</v-icon>
    <v-toolbar-title>Название магазина</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click='logout'>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase/app'

export default {
  data: () => ({}),

  methods: {
    async logout() {
      try {
        await firebase.auth().signOut()
      } catch (e) {
        console.error(e.message)
      }

      this.$router.push({ name: 'Login' })
    },
  },
}
</script>