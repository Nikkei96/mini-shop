<template>
  <v-container
    fluid
    class='d-flex justify-center align-center'
    style='height: 100vh'
  >
    <v-card outlined width='400px'>
      <v-card-title>Регистрация</v-card-title>

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
          :error='$v.email.$dirty && !$v.email.email || $v.email.$dirty && !$v.email.required'
        ></v-text-field>
        <v-text-field
          class='mb-2'
          outlined
          dense
          hide-details
          label='Ваше имя'
          v-model='name'
          :error='$v.name.$dirty && !$v.name.required'
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
        <v-text-field
          class='mb-2'
          outlined
          dense
          hide-details
          label='Повторите пароль'
          type='password'
          v-model='repeatPassword'
          :error='$v.password.$dirty && !$v.password.required'
        ></v-text-field>
        <div class='text-center red--text' v-if='errorMessage'>{{errorMessage}}</div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-container fluid class='pa-0'>
          <v-btn
            depressed
            small
            color='primary'
            block
            @click='register'
          >Зарегистрироваться</v-btn>
          <v-btn
            depressed
            small
            color='success'
            block
            class='my-2'
            :to='{name: "Login"}'
          >Уже есть аккаунт</v-btn>
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
    name: '',
    password: '',
    repeatPassword: '',
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
    name: {
      required,
    },
  },

  methods: {
    async register() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.errorMessage = null
        return
      }

      if (this.password != this.repeatPassword) {
        this.errorMessage = null
        setTimeout(() => {
          this.errorMessage = 'Пароли не совпадают!'
        }, 100)
        return
      }

      try {
        this.errorMessage = null
        await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        const uid = this.$firebase.auth().currentUser.uid
        await this.$firebase.database().ref(`/users/${uid}/info`).set({
          money: 0,
          email: this.email,
          name: this.name,
        })
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