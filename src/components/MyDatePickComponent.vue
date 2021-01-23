<template>
  <div>
    <date-pick v-model="value.start" @input="emitToParent" :mobileBreakpointWidth="value.breakpoint"></date-pick>
    <date-pick v-model="value.end" @input="emitToParent" :mobileBreakpointWidth="value.breakpoint"></date-pick>
  </div>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

export default {
  components: {
    DatePick,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitToParent() {
      this.$parent.$emit("datepickerInputChanged");
    },
  },
  data: () => ({
    date: "2019-01-01",
  }),
};
</script>

<style>
.vdpComponent.vdpWithInput>input {
    padding-right: 0;
}
.vdpClearInput {
    display: none;
}
</style>