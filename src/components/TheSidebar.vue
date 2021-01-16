<template>
  <sidebar-menu
    :menu="menu"
    :collapsed="sidebardata.collapsed"
    :showChild="false"
    :hideToggle="true"
    :width="sidebardata.width"
    :widthCollapsed="sidebardata.widthCollapsed"
    :relative="false"
    :disableHover="true"
    :class="{hidden: sidebardata.hideOnMobile}"
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

/* Collapsing the sidebar */

/* .v-sidebar-menu {
  transition: 0.3s all;
} */


.v-sidebar-menu.vsm_collapsed.hidden {
  transform: translateX(-100%);
}

/* .v-sidebar-menu.hidden {
  transform: translateX(-100%);
} */

/* Styling everything */

.v-sidebar-menu {
  z-index: 9999;
  font-family: "Nunito Sans", sans-serif;
  /* border-right: 1px solid #000342; */
  background-color: var(--steelblue);
  position: fixed;
  top: 55px;
  height: 100vh;
}

/* Styling items */


/* Styling first child */

.v-sidebar-menu .vsm--item:first-child {
  margin-top: 21px;
}



.v-sidebar-menu .vsm--item .vsm--link {
  border-radius: 6px;
  /* padding: 0; */
}

/* Styling items text */

.v-sidebar-menu .vsm--item .vsm--link .vsm--title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
}

/* Styling dropdown lists */

.v-sidebar-menu .vsm--dropdown .vsm--list {
  background-color: var(--steelblue);
}

.v-sidebar-menu .vsm--dropdown .vsm--item {
  padding: 0;
}


/* Styling icons */

.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
    background-color: transparent;
    padding: 5px;
}



/* Styling items and icons on hover */

.v-sidebar-menu .vsm--link:hover {
  background-color: var(--darkblue)
}

.v-sidebar-menu.vsm_collapsed .vsm--link_level-1:hover .vsm--icon {
  background-color: var(--darkblue);
}

/* Styling expanded item  and icon */

.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1   {
  background-color: #42809d;
}

/* #42809d */

.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 .vsm--icon {
  background-color: transparent;
}

.v-sidebar-menu .vsm--mobile-bg {
  background-color: var(--darkblue);
}

.v-sidebar-menu.vsm_collapsed .vsm--link_level-1.vsm--link_hover .vsm--icon {
  background-color: var(--darkblue);
}





</style>