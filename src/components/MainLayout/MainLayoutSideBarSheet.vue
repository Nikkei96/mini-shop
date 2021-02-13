<template>
  <v-sheet
    color='grey lighten-4'
    :class='window.width > windowLimit ? "pa-4" : "text-center"'
  >
    <v-avatar
      :class='window.width > windowLimit ? "mb-4" : "my-2"'
      color='grey darken-1'
      size='32'
      :title='window.width < windowLimit ? name : ""'
    ></v-avatar>
    <div v-if='window.width > windowLimit'>{{name}}</div>
  </v-sheet>
</template>

<script>
export default {
  props: ['window', 'windowLimit'],

  data: () => ({
    name: null,
  }),

  async created() {
    const uid = this.$firebase.auth().currentUser?.uid
    const dbData = (await this.$firebase.database().ref(`/users/${uid}/info`).once('value')).val()
    this.name = dbData.name
  },
}
</script>

<style>
</style>