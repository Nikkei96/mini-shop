<template>
  <v-card width='300' class='ma-3'>
    <v-img
      :src='product.image_url'
      height='200px'
      contain
      lazy-src='http://acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png'
    ></v-img>
    <v-card-title>{{product.name}}</v-card-title>
    <v-card-subtitle>Артикул: {{product.code}}</v-card-subtitle>
    <v-card-text>Цена: {{product.price}}₽</v-card-text>
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
        <v-card-text>{{product.description}}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    show: false,
  }),
}
</script>

<style>
</style>