<template>
  <div class="myDatepicker-container">
    <datepicker v-model="value.start" class="myDatepicker" ></datepicker>
    <datepicker v-model="value.end" class="myDatepicker"></datepicker>
  </div>
</template>

<script>

import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker,
  },
  props: {
      value: {
          type: Object,
          required: true
      }
  },
  methods: {
    emitToParent(value) {
      this.$parent.$emit('clicked', value)
    }
  }
}
</script>

<style>
.myDatepicker-container {
  display: flex;
}
.myDatepicker input {
    background-color: rgb(214, 203, 203);
}

.myDatepicker input:hover {
    cursor: pointer;
}
</style>