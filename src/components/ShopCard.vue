<template>
  <v-card max-width='350' class='ma-3'>
    <v-img
      src='https://htstatic.imgsmail.ru/pic_image/5ba8100818c85192744ffff07175316a/450/450/1909782/'
      height='200px'
    ></v-img>
    <v-card-title>Iphone 12</v-card-title>
    <v-card-subtitle>Артикул: a7-2d-33</v-card-subtitle>
    <v-card-text>Цена: 90000 ₽</v-card-text>
    <v-card-actions>
      <v-btn color='success'>Подробнее</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn icon @click='show = !show'>
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show='show'>
        <v-divider></v-divider>
        <v-card-text>Новый телефон Iphone 12</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>

<style>
</style>