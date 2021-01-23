<template>
  <div class="dashboard-view">
    <!-- The Navbar -->
    <the-navbar>
      <template>
        <b-nav-item @click="toggleSidebar">
          <font-awesome-icon icon="bars" size="lg" class="theme-logo" />
        </b-nav-item>
      </template>
      <template v-slot:breadcrumb>
        <the-breadcrumbs></the-breadcrumbs>
      </template>
    </the-navbar>

    <!-- Main Container -->
    <div
      class="main-container"
      :class="{ sidebarOpen: !sidebardata.collapsed, mobile: sidebardata.hideOnMobile }"
    >
      <!-- <draggable></draggable> -->
      <draggable-with-date></draggable-with-date>

      <!-- Overlay -->
      <div class="overlay" @click="toggleSidebar"></div>
    </div>

    <!-- The Sidebar -->
    <the-sidebar :sidebardata="sidebardata"></the-sidebar>
  </div>
</template>

<script>
import TheBreadcrumbs from '../components/TheBreadcrumbs.vue';
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
import DraggableWithDate from "./DraggableWithDate.vue";
// import Draggable from "./Draggable.vue";

export default {
  components: {
    TheNavbar,
    TheSidebar,
    // Draggable,
    TheBreadcrumbs,
    DraggableWithDate
  },
  data() {
    return {
      sidebardata: {
        collapsed: window.innerWidth <= 1090 ? true : false,
        showChild: false,
        hideToggle: true,
        disableHover: true,
        widthCollapsed: "50px",
        width: "212px",
        hideOnMobile: window.innerWidth <= 600 ? true : false,
        menu: [
        {
          href: "/",
          title: "Home",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "home",
            },
          },
        },
        {
          href: "/dashboard/first",
          title: "Vue Draggable",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "arrows-alt",
            },
          },
        },
        {
          href: "/dashboard",
          title: "Sidebar",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "adjust",
            },
          },
        },

        {
          //   href: "/",
          title: "Charts",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "chart-pie",
            },
          },
          child: [
            {
              //   href: "/charts/sublink",
              title: "Line",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "chart-line",
                },
              },
            },

            {
              //   href: "/charts/sublink",
              title: "Bar",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "chart-bar",
                },
              },
            },

            {
              //   href: "/charts/sublink",
              title: "Gauge",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "tachometer-alt",
                },
              },
            },
          ],
        },
      ], 
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
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap");

.dashboard-view {
  background-color: var(--main-background);
  font-family: "Nunito Sans", sans-serif;
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
  background: var(--overlay-background);
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
</style>