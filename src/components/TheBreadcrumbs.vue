<template>
  <div>
    <breadcrumbs></breadcrumbs>
  </div>
</template>

<script>
export default {};
</script>

<style>
.breadcrumb {
  background-color: transparent;
  margin: 0;
  padding: 0;
}

.breadcrumb .breadcrumb-item a {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb .breadcrumb-item:last-child {
  color: #fff;
}

@media (max-width: 633px) {
  .breadcrumb .breadcrumb-item:not(:last-child) {
    display: none;
  }
  .breadcrumb .breadcrumb-item:last-child::before {
    display: none;
  }
}
</style>