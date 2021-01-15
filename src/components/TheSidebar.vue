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

/* Styling everything */

.v-sidebar-menu {
  z-index: 9999;
  font-family: "Nunito Sans", sans-serif;
  /* border-right: 1px solid #000342; */
  background-color: var(--steelblue);
  position: fixed;
  top: 55px;
  height: 100vh;
  /* padding-left: 16px; */
}

/* Styling items */

/* .v-sidebar-menu .vsm--item {
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 4px;
  
} */

.v-sidebar-menu .vsm--item a {
  /* background-color: red; */
  border-radius: 6px;
}

/* Styling first child */

.v-sidebar-menu .vsm--item:first-child {
  margin-top: 21px;
}

/* .v-sidebar-menu .vsm--item:last-child {
  padding: 0px;
} */

/* Styling items text */
.v-sidebar-menu .vsm--link {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  /* padding: 0; */
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
}

/* Styling icon size */

.v-sidebar-menu .vsm--link_level-1 .svg-inline--fa {
  padding: 5px;
}

/* Styling items and icons on hover */

.v-sidebar-menu .vsm--link:hover {
  background-color: var(--darkblue)
}

/* Styling expanded item  and icon */

.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1   {
  background-color: #42809d ;
}

.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 .vsm--icon {
  background-color: transparent;
}



</style>