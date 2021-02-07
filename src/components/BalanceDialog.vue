<template>
  <v-dialog :value='dialog' @click:outside='$emit("changeDialog")' width='500'>
    <v-card>
      <v-card-title class='headline grey lighten-2 mb-4'>
        Мой кошелёк
        <v-spacer></v-spacer>
        <v-btn color='primary' icon @click='$emit("changeDialog")'>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>ЗДЕСЬ БУДЕТ КОНТЕНТ (ИНПУТЫ И Т.Д.)</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['dialog'],
}
</script>

<style>
</style>