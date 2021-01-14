<template>
  <sidebar-menu
    :menu="menu"
    :collapsed="sidebardata.collapsed"
    :showChild="false"
    :hideToggle="true"
    :width="sidebardata.width"
    :relative="false"
  >
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
export default {
  props: {
    sidebardata: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
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
  background-color: var(--steelblue);
  position: fixed;
  top: 80px;
  height: 100vh;
  /* padding-left: 16px; */
  /* background-color: red; */
}

.v-sidebar-menu .vsm--dropdown .vsm--list {
  background-color: var(--steelblue);
}

.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
    background-color: var(--steelblue);
}

.v-sidebar-menu .vsm--item:first-child {
  margin-top: 21px;
}
</style>