<template>
  <div
    class='container'
    :class='{"fluid" : fluid}'
    :style='{"background-color": color}'
    @click='changeColor'
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: '#999',
    },
  },

  methods: {
    changeColor() {
      this.color = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    },
  },
}
</script>

<style>
.container {
  max-width: 900px;
  padding: 0 20px;
  background-color: #999;
  margin: 0 auto;
}

.fluid {
  max-width: unset;
}
</style>