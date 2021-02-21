<template>
  <v-dialog :value='dialog' persistent width='500'>
    <v-card>
      <v-card-title class='headline grey lighten-2 mb-4'>
        Добавление аватара
        <v-spacer></v-spacer>
        <v-btn color='primary' icon @click='$emit("changeDialog")'>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field outlined dense placeholder='URL' v-model='url' clearable></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color='success'
            @click='setAvatar'
            :disabled='url == null'
          >Сохранить</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    url: null,
  }),

  methods: {
    async setAvatar() {
      const uid = this.$firebase.auth().currentUser.uid
      await this.$firebase.database().ref(`/users/${uid}/info`).update({ avatarUrl: this.url })
      this.$emit('changeDialog')
    },
  },

  async mounted() {
    const uid = this.$firebase.auth().currentUser.uid
    this.url = (await this.$firebase.database().ref(`/users/${uid}/info`).once('value')).val().avatarUrl
  },
}
</script>

<style>
</style>