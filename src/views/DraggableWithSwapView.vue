<template>
  <table>
    <draggable
      v-model="items"
      tag="tbody"
      :move="handleMove"
      @end="handleDragEnd"
      
    >
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </draggable>
  </table>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    const items = [
      { id: 1, name: "Bianka Effertz", age: 37 },
      { id: 2, name: "Mckayla Bogan", age: 20 },
      { id: 3, name: "Estevan Mann", age: 17 },
      { id: 4, name: "Cloyd Ziemann", age: 55 },
    ];
    return { items };
  },
//   computed: {
//     orders() {
//       return this.items.map((x) => x.id);
//     },
//   },

  methods: {
    handleDragEnd() {

      this.futureItem = this.items[this.futureIndex];
      this.movingItem = this.items[this.movingIndex];


    // Copy from source object to target object
      const _items = Object.assign([], this.items);

      _items[this.futureIndex] = this.movingItem;
      _items[this.movingIndex] = this.futureItem;

      this.items = _items;
    },
    handleMove(e) {
        console.log(e.draggedContext.index);
        console.log(e.draggedContext.futureIndex);
      const { index, futureIndex } = e.draggedContext;
      this.movingIndex = index;
      this.futureIndex = futureIndex;
      return false; // disable sort
    },
  },
};
</script>

<style>
</style>