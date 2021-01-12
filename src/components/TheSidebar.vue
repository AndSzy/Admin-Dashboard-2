<template>
  <sidebar-menu :menu="menu" :collapsed="false" :showChild="false">
    <template v-slot:toggle-icon>
      <b-icon-three-dots></b-icon-three-dots>
    </template>
    <template v-slot:dropdown-icon>
      <b-icon-chevron-right></b-icon-chevron-right>
    </template>
  </sidebar-menu>
</template>


// To use the icons, font awesome is needed.

<script>
// import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  components: {
    // SidebarMenu
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true,
        },

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
          href: "draggable",
          title: "Vue Draggable",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "arrows-alt",
            },
          },
        },
        {
          href: "sidebar",
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
    };
  },
};
</script>

<style>
.v-sidebar-menu {
  /* background-color: red; */
}

.v-sidebar-menu .vsm--toggle-btn {
  order: -1;
}
</style>