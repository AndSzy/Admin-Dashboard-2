<template>
  <div class="dashboard-view">
    <!-- The Navbar -->
    <the-navbar>
      <font-awesome-icon
        icon="bars"
        size="lg"
        class="theme-logo"
        @click="toggleSidebar"
      />
    </the-navbar>

    <!-- The Sidebar -->
    <the-sidebar :sidebardata="sidebardata"></the-sidebar>


    <!-- Main Container -->


  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";

export default {
  components: {
    TheNavbar,
    TheSidebar,
  },
  data() {
    return {
      sidebardata: {
        collapsed: false,
        width: "212px",
      },
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebardata.collapsed = !this.sidebardata.collapsed;
    },
  },
};
</script>

<style>
</style>