<template>
  <div class="dashboard-view">
    <!-- The Navbar -->
    <the-navbar>
      <b-nav-item @click="toggleSidebar">
      <font-awesome-icon
        icon="bars"
        size="lg"
        class="theme-logo"
        
      />
      </b-nav-item>
    </the-navbar>

    

    <!-- Main Container -->
    <div
      class="main-container"
      :class="{ sidebarOpen: !sidebardata.collapsed }"
    >
      <draggable></draggable>

      <!-- Overlay -->
      <div class="overlay" @click="toggleSidebar"></div>
    </div>


    <!-- The Sidebar -->
    <the-sidebar :sidebardata="sidebardata"></the-sidebar>


  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
import Draggable from "./Draggable.vue";

export default {
  components: {
    TheNavbar,
    TheSidebar,
    Draggable,
  },
  data() {
    return {
      sidebardata: {
        collapsed: window.innerWidth <= 1090 ? true : false,
        widthCollapsed: "50px",
        width: "212px",
        hideOnMobile: window.innerWidth <= 600 ? true : false
      },
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebardata.collapsed = !this.sidebardata.collapsed;
    },
  },
  created() {
    // Listening to window width change

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1090) {
        this.sidebardata.collapsed = true;
      } else if (window.innerWidth >= 1090) {
        this.sidebardata.collapsed = false;
      }

      if (window.innerWidth < 600) {
        this.sidebardata.hideOnMobile = true;
      } else if (window.innerWidth >= 600) {
        this.sidebardata.hideOnMobile = false;
      }
    });
  },
};
</script>

<style>
.dashboard-view {
  background-color: var(--cork-background);
}

.main-container {
  margin-top: 20px;
  padding-left: 0px;
  transition: 0.3s ease;
  max-width: 100%;
}

.main-container .overlay {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1035 !important;
  transition: all 0.5s ease-in-out;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.main-container.sidebarOpen .overlay {
  display: block;
}

/* Sidebar on top */

@media (min-width: 600px) {
  .main-container {
    padding-left: 50px;
  }
  .main-container.sidebarOpen {
    padding-left: 50px;
  }
}

@media (min-width: 1090px) {
  .main-container.sidebarOpen {
    padding-left: 212px;
    transition: 0.3s ease;
  }

  .main-container.sidebarOpen .overlay {
    display: none;
  }
}

/* @media (max-width: 900px) {
  .main-container.sidebarOpen .overlay {
  display: block;
}
} */

/* Sidebar styling - adding padding */

/* .main-container.sidebarOpen + .v-sidebar-menu .vsm--item {
  padding-left: 15px;
}

.v-sidebar-menu .vsm--item {
  padding-left: 0px;
  padding-right: 15px;
  margin-bottom: 4px;
  
} */
</style>