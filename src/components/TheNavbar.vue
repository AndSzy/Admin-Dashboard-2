<template>
  <b-navbar type="dark" variant="info" id="myNav">
    <!-- Navbar Brand -->
    <b-navbar-brand to="/">
      <font-awesome-icon icon="chess-rook" size="lg" class="theme-logo" />
      <span class="theme-text">ROOK</span>
    </b-navbar-brand>

   

    <!-- Slot for The Toggle Button -->

    <b-navbar-nav>
      <b-nav-item>
          <slot></slot>
      </b-nav-item>
    </b-navbar-nav>

    <!-- Bread Crumbs -->

    <b-navbar-nav class="nav-breadcrumb">
        <b-nav-item>
      <b-breadcrumb :items="items" class="black-text"></b-breadcrumb>
      </b-nav-item>
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
export default {
      data() {
      return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap");

.navbar {
  font-family: "Nunito Sans", sans-serif;
  background-color: var(--darkblue) !important;
}

.navbar-brand {
  display: flex;
  align-items: center;
}
.navbar-brand .theme-text {
  padding: 0 0.8rem;
  font-size: 24px !important;
  font-weight: 700;
}

/* .navbar .nav-breadcrumb {
    background-color: red;
} */
.navbar .nav-breadcrumb .breadcrumb {
    background-color: var(--darkblue);
    margin: 0;
}
.navbar .nav-breadcrumb .breadcrumb-item a {
        color: #fff;
}
.navbar .nav-breadcrumb .breadcrumb-item:before {
        color: #fff;
}
.navbar .nav-breadcrumb .breadcrumb-item.active span {
        color: #fff;
}

</style>