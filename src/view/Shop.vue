<template>
  <div>
    <h1 class='text-center mt-3'>Товары</h1>
    <v-divider></v-divider>

    <v-container class='d-flex justify-center flex-wrap'>
      <ShopCard v-for='(i, idx) of 3' :key='idx' />
    </v-container>
  </div>
</template>

<script>
import ShopCard from '@/components/ShopCard'
export default {
  components: {
    ShopCard,
  },
}
</script>

<style>
</style>


