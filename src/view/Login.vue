<template>
  <v-container>
    <v-form @submit.prevent='submitHandler'>
      <v-text-field
        dark
        outlined
        label='E-mail'
        v-model='email'
        :error='$v.email.$dirty && !$v.email.email || $v.email.$dirty && !$v.email.required'
      ></v-text-field>
      <v-text-field
        dark
        outlined
        label='Пароль'
        type='password'
        v-model='password'
        :error='$v.password.$dirty && !$v.password.required'
      ></v-text-field>
      <v-btn type='submit'>Войти</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    email: '',
    password: '',
  }),

  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },

  updated() {
    console.log(this.$v.$invalid)
  },

  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.$router.push({ name: 'Home' })
    },
  },
}
</script>

<style>
</style>