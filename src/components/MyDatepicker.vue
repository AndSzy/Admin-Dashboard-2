<template>
  <div>
    <datepicker v-model="value.start" class="myDatepicker"></datepicker>
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
  }
}
</script>

<style>
.myDatepicker input {
    background-color: rgb(214, 203, 203);
}

.myDatepicker input:hover {
    cursor: pointer;
}
</style>