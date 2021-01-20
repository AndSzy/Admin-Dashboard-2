<template>
  <b-navbar type="dark" variant="info" id="myNav" :sticky="true">
    <!-- Navbar Brand -->
    <b-navbar-brand to="/">
      <font-awesome-icon icon="chess-rook" size="2x" class="theme-logo" />
      <span class="theme-text">ROOK</span>
    </b-navbar-brand>

    <!-- Slot for The Toggle Button -->

    <b-navbar-nav>
      <slot></slot>
    </b-navbar-nav>

    <!-- Bread Crumbs -->

    <b-navbar-nav class="nav-breadcrumb">
      <b-nav-text>
        <slot name="breadcrumb"></slot>
      </b-nav-text>
    </b-navbar-nav>

    <!-- User Login -->

    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right>
        <template #button-content>
          <font-awesome-icon icon="user" size="lg" class="theme-logo" />
        </template>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  z-index: 9999;
  background-color: var(--navbar-background) !important;
  height: 55px;
}

.navbar-dark .navbar-nav .nav-link {
  color: var(--navbar-color) !important;
}

.navbar-brand {
  color: var(--navbar-color) !important;
  display: flex;
  align-items: center;
  padding-left: 14px;
}
.navbar-brand .theme-text {
  padding: 0 0.8rem;
  font-size: 24px !important;
  font-weight: 700;
}

.nav-breadcrumb {
  padding-left: 20px;
}

@media (max-width: 844px) {
  .navbar-brand .theme-text {
    display: none;
  }
}
</style>