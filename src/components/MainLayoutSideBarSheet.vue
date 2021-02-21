<template>
  <v-sheet
    color='grey lighten-4'
    :class='window.width > windowLimit ? "pa-4" : "text-center"'
  >
    <v-hover v-slot='{hover}'>
      <v-avatar
        :class='window.width > windowLimit ? "mb-4" : "my-2"'
        color='grey darken-1'
        size='48'
        :title='window.width < windowLimit ? name : ""'
      >
        <v-btn v-if='hover' fab dark color='#2196F3'>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <template v-else>
          <img v-if='userAvatar' :src='userAvatar' />
          <span
            v-else
            class='white--text headline'
          >{{ name ? name[0].toUpperCase() : null}}</span>
        </template>
      </v-avatar>
    </v-hover>
    <div v-if='window.width > windowLimit'>{{name}}</div>
  </v-sheet>
</template>

<script>
export default {
  props: ['window', 'windowLimit'],

  data: () => ({
    name: null,
    userAvatar: null,
  }),

  async created() {
    const uid = this.$firebase.auth().currentUser?.uid
    const dbData = (await this.$firebase.database().ref(`/users/${uid}/info`).once('value')).val()
    this.name = dbData.name
    this.userAvatar = dbData.avatarUrl
  },
}
</script>

<style>
</style>