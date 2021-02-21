<template>
  <v-container class='d-flex justify-center flex-wrap'>
    <Loader v-if='loading' />
    <ShopCard
      v-else
      v-for='(product, idx) of products'
      :key='idx'
      :product='product'
    />
  </v-container>
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
    this.products = Object.entries(records).map(v => {
      return {
        uid: v[0],
        ...v[1],
      }
    })
    this.loading = false
  },
}
</script>

<style>
</style>