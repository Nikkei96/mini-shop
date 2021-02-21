<template>
  <v-app-bar app dense clipped-left>
    <v-icon color='blue' class='mr-2'>mdi-shopping</v-icon>
    <v-toolbar-title>{{shopName}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-icon class='mr-2' color='green'>mdi-cash-multiple</v-icon>
    <div class='mr-6'>{{balance}}₽</div>
    <v-btn icon @click='logout'>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    shopName: null,
    balance: null,
  }),

  methods: {
    async logout() {
      try {
        await this.$firebase.auth().signOut()
      } catch (e) {
        console.error(e.message)
      }

      this.$router.push({ name: 'Login' })
    },
  },

  async mounted() {
    try {
      this.shopName = (await this.$firebase.database().ref('/shop_info/name').once('value')).val()
      const uid = this.$firebase.auth().currentUser.uid
      this.balance = (await this.$firebase.database().ref(`/users/${uid}/info`).once('value')).val().money
    } catch (e) {
      throw e
    }
  },
}
</script>