<template>
  <v-container
    fluid
    class='d-flex justify-center align-center'
    style='height: 100vh'
  >
    <v-card outlined width='400px'>
      <v-card-title>Вход</v-card-title>

      <v-card-subtitle>Добро пожаловать!</v-card-subtitle>

      <v-card-text>
        <span class='font-weight-black'>Amazon</span> - Здесь начинается мир товаров!
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        <v-text-field
          class='mb-2'
          outlined
          dense
          hide-details
          label='E-mail'
          v-model='email'
          :error='$v.email.$dirty && !$v.email.email || $v.email.$dirty && !$v.email.required '
        ></v-text-field>
        <v-text-field
          class='mb-2'
          outlined
          dense
          hide-details
          label='Пароль'
          type='password'
          v-model='password'
          :error='$v.password.$dirty && !$v.password.required'
        ></v-text-field>
        <div class='text-center red--text' v-if='errorMessage'>{{errorMessage}}</div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-container fluid class='pa-0'>
          <v-btn depressed small color='success' block @click='login'>Войти</v-btn>
          <v-btn
            depressed
            small
            color='primary'
            block
            class='my-2'
            :to='{name: "Register"}'
          >Регистрация</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    email: '',
    password: '',
    errorMessage: null,
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
    async login() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.errorMessage = null
        return
      }

      try {
        this.errorMessage = null
        await this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.push({ name: 'Home' })
      } catch (e) {
        this.errorMessage = e.message
        console.error(e)
      }
    },
  },
}
</script>

<style>
</style>