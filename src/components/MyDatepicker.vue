<template>
  <datepicker class="myDatepicker"></datepicker>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker,
  },
  
};
</script>

<style>
.myDatepicker input {
    background-color: rgb(214, 203, 203);
}

.myDatepicker input:hover {
    cursor: pointer;
}
</style>