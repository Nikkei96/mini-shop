<template>
  <component :is='layout' />
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import EmptyLayout from '@/layouts/EmptyLayout'

export default {
  data: () => ({}),

  components: {
    MainLayout,
    EmptyLayout,
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
  },
}
</script>

<style>
</style>
