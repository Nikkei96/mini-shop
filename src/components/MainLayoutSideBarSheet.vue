<template>
  <div>
    <AvatarDialog
      v-if='showDialog'
      :dialog='showDialog'
      @changeDialog='updateState'
    />
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
          <v-btn
            v-if='hover'
            fab
            dark
            color='#2196F3'
            @click='showDialog = !showDialog'
          >
            <v-icon>mdi-plus</v-icon>
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
  </div>
</template>

<script>
import AvatarDialog from '@/components/MainLayoutSideBarSheetDialog'

export default {
  props: ['window', 'windowLimit'],

  components: {
    AvatarDialog,
  },

  data: () => ({
    name: null,
    userAvatar: null,
    showDialog: false,
  }),

  methods: {
    async loadUserInfo() {
      const uid = this.$firebase.auth().currentUser?.uid
      const dbData = (await this.$firebase.database().ref(`/users/${uid}/info`).once('value')).val()
      this.name = dbData.name
      this.userAvatar = dbData.avatarUrl
    },

    async updateState() {
      await this.loadUserInfo()
      this.showDialog = !this.showDialog
    },
  },

  async created() {
    await this.loadUserInfo()
  },
}
</script>

<style>
</style>