<template>
  <div>
    <div>Prop number: {{number}}</div>

    <!-- v-on == @ - слушаем какие-либо события -->
    <!-- v-bind == : - пишем js-код в атрибутах тегов html -->
    <!-- {{variable or expression}} - интерполяция (пишем js-код внутри тела тегов html) -->
    <button @click='mixItems'>Mix</button>
    <button @click='items = [1, 2, 3]'>Clear array</button>

    <ul>
      <li v-for='(item, idx) of items' :key='idx'>
        <button @click.stop='addItemToArray(item)'>{{item}}</button>
      </li>
    </ul>

    <div>All items sum: {{allItemsSum}}</div>
  </div>
</template>

<script>
export default {
  // ? Пропсы (properties) - свойства, которые приходят из родителя (вышестоящего компонента, где используется этот компонент)
  props: {
    number: {
      type: Number,
      default: 1000,
      required: false,
    },
  },

  // ? Данные - используются в нашем темплейте (на них автоматически цепляется система реактивности)
  data() {
    return {
      items: [1, 2, 3],
      counterUpdated: 0,
    }
  },

  // ? Методы - действия, расчёты, основная логика нашего темлейта ↓↓↓
  methods: {
    mixItems() {
      const randomArr = () => Math.random() - 0.5
      this.items.sort(randomArr)
    },

    addItemToArray(el) {
      this.items.push(el * 2)
    },
  },

  // ? Вычисляемые свойства - если что-либо, используемое внутри этой функции (this) меняется, то свойство обновляется ↓↓↓
  computed: {
    allItemsSum() {
      return this.items.reduce((current, start) => current + start, 0)
    },
  },

  // ? Вотчеры - методы-наблюдатели ↓↓↓
  watch: {
    /**
     * @param {Array} itemsArray - значение переменной за которой наблюдаем (items)
     */
    items(itemsArray) {
      console.log('Я наблюдаю за любым изменением состояния this.items = ', this.items)

      // ! Напрямую залазить в элементы через this.$el не рекомендуется ↓
      const clearButton = this.$el.querySelectorAll('button')[1]
      clearButton.classList.add('button__red')
      itemsArray.length <= 3 ? clearButton.classList.remove('button__red') : null
    },
  },

  // ? Хуки жизненного цикла ↓↓↓ (перечисление по порядку возникновения)
  // ? LINK: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram

  // * Здесь мы не можем получить доступ к DOM-дереву напрямую через this.$el
  // * Используется в основном для загрузки данных с сервера (fetch) перед созданием страницы
  created() {
    console.log('Created - DOM:', this.$el)
  },

  // * DOM-дерево готово, можем получить доступ через this.$el
  // * Используется в основном для загрузки данных с сервера (fetch) перед созданием страницы
  mounted() {
    console.log('Mounted - DOM:', this.$el)
  },

  // * Когда что-то изменилось в шаблоне (произошёл полный или частичный ре-рендер)
  updated() {
    console.log(`Updated - ${++this.counterUpdated}-й раз`)
  },

  // * DOM-дерево уничтожено, очистка данных
  // * Используется в основном для удаления setInterval, либо очистки чего-то в localStorage (того, что может висеть в фоне и отжирать память)
  destroyed() {
    console.log('Destroyed - Template.vue полностью уничтожен')
  },
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  background: #ccc;
  margin: 2px;
}

.button__red {
  background: red;
}
</style>