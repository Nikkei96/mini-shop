<template>
  <v-container>
    <v-form @submit.prevent='submitHandler'>
      <v-text-field dark outlined label='E-mail' v-model='email'></v-text-field>
      <v-text-field
        dark
        outlined
        label='Пароль'
        type='password'
        v-model='password'
      ></v-text-field>
      <v-btn type='submit'>Войти</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    submitHandler() {
      console.log(1)
    },
  },
}
</script>

<style>
</style>