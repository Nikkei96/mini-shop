<template>
  <component :is='"MainLayout"' />
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
}
</script>

<style>
</style>
