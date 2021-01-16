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
          <span class="path">Main / </span>
          <span class="active">Dashboard1 </span>  
      <!-- <b-breadcrumb :items="items" class="black-text"></b-breadcrumb> -->
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
export default {
      data() {
      return {
        // items: [
        //   {
        //     text: 'Admin',
        //     href: '#'
        //   },
        //   {
        //     text: 'Manage',
        //     href: '#'
        //   },
        //   {
        //     text: 'Library',
        //     active: true
        //   }
        // ],



      }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap");

.navbar {
  z-index: 9999;
  font-family: "Nunito Sans", sans-serif;
  background-color: var(--darkblue) !important;
  height: 55px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  padding-left: 14px;
}
.navbar-brand .theme-text {
  padding: 0 0.8rem;
  font-size: 24px !important;
  font-weight: 700;
  /* line-height: 2.75rem; */
}

@media (max-width: 844px ) {
  .navbar-brand .theme-text {
    display: none;
  }
}



/* Mock Breadcrumbs */


.nav-breadcrumb {
  padding-left: 20px;
}

.nav-breadcrumb span {
  cursor: pointer;
}

.nav-breadcrumb .active{
  color: white;
}

@media (max-width: 633px ) {
  .nav-breadcrumb .path {
  display: none;
}
}


/* Breadcrumbs */

/* .navbar .nav-breadcrumb {
    background-color: red;
} */
/* .navbar .nav-breadcrumb .breadcrumb {
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
} */

</style>