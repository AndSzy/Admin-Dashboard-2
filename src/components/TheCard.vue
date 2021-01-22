<template>
  <b-card no-body class="text-center" :class="{ span: span }">
    <b-button class="doubleSizeBtn" @click="toggleSpan">Span</b-button>
    <slot></slot>
  </b-card>
</template>

<script>
export default {
  // props: ['margin'],
  data() {
    return {
      span: false,
    };
  },
  methods: {
    toggleSpan() {
      this.span = !this.span;
    },
  },
};
</script>

<style scoped>
.card {
  padding: 20px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  background-color: var(--card-background);
}

.card .doubleSizeBtn {
  background-color: red;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
}

</style>>

