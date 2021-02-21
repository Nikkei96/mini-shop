<template>
  <div>
    <h1 class='text-center mt-3'>Товары</h1>
    <v-divider></v-divider>
    <Loader v-if='loading' />
    <v-container v-else class='d-flex justify-center flex-wrap'>
      <ShopCard
        v-for='(product, idx) of products'
        :key='idx'
        :product='product'
      />
    </v-container>
  </div>
</template>

<script>
import ShopCard from '@/components/ShopCard'
export default {
  components: {
    ShopCard,
  },

  data: () => ({
    loading: true,
    products: null,
  }),

  async mounted() {
    const records = (await this.$firebase.database().ref('shop_info/products').once('value')).val()
    // console.log(Object.entries(products))
    this.products = Object.entries(records).map(v => v[1])
    this.loading = false
  },
}
</script>

<style>
</style>


