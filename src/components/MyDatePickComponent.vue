<template>
    <div>
        <date-pick v-model="date" @input="emitToParent"></date-pick>
    <date-pick v-model="date"></date-pick>
    </div>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
    components: {
        DatePick
        },
    props: {
      value: {
          type: Object,
          required: true
      }
  },
  methods: {
    emitToParent() {
        console.log(typeof this.date);
      this.$parent.$emit('datepickerInputChanged')
    }
  },
    data: () => ({
        date: '2019-01-01'
    })
};
</script>