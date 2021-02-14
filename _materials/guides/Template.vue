<template>
  <div>
    <div>Prop number: {{number}}</div>

    <button @click='doAny'>button 1</button>

    <ul>
      <li v-for='(item, idx) of items' :key='idx'>
        <button @click='addItemToArray(item)'>{{item}}</button>
      </li>
    </ul>

    <div>All items sum: {{allItemsSum}}</div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 1000,
    },
  },

  data() {
    return {
      items: [1, 2, 3],
      counterUpdated: 0,
    }
  },

  computed: {
    allItemsSum() {
      return this.items.reduce((current, start) => current + start, 0)
    },
  },

  watch: {
    items() {
      console.log('Я наблюдаю за любым изменением состояния this.item')
    },
  },

  methods: {
    doAny() {
      return
    },

    addItemToArray(q) {
      this.items.push(q * 2)
    },
  },

  // * Хуки жизненного цикла
  created() {
    console.log('Hook 1) Created Hook. Здесь мы не можем получить доступ к DOM-дереву напрямую через this.$el')
    console.log('Created - DOM', this.$el)
  },

  mounted() {
    console.log('Hook 2) Mounted Hook. DOM-дерево готово, можем получить доступ через this.$el')
    console.log('Mounted - DOM', this.$el)
  },

  updated() {
    console.log(`Hook 3) Что-то изменилось в шаблоне ${this.counterUpdated++}-й раз`)
  },

  destroyed() {
    console.log('Hook 4) DOM-дерево уничтожено, все данные стёрты из ОЗУ')
    console.log('Компонент Template.vue будет полностью уничтожен', this.allItemsSum)
  },
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  background: #ccc;
  margin: 2px;
}
</style>