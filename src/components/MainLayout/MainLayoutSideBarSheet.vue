<template>
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
</template>

<script>
export default {
  props: ['window', 'windowLimit'],
}
</script>

<style>
</style>