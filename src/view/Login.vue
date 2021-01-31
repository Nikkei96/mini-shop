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
import firebase from 'firebase/app'

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

  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.push({ name: 'Home' })
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style>
</style>