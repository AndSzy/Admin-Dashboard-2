<template>
  <sidebar-menu
    @item-click="onItemClick"
    :menu="menu"
    :collapsed="sidebardata.collapsed"
    :showChild="sidebardata.showChild"
    :hideToggle="sidebardata.hideToggle"
    :width="sidebardata.width"
    :widthCollapsed="sidebardata.widthCollapsed"
    :disableHover="sidebardata.disableHover"
    :class="{ hidden: sidebardata.hideOnMobile }"
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
  methods: {
    // onItemClick(event, item, node)
    onItemClick(event, node) {
      let expandableList = document.querySelector(".v-sidebar-menu .vsm--mobile-item");
      if (node.child) {
        expandableList.style.display = "block";
      } else {
        expandableList.style.display = "none";
      }
    },
  },
  data() {
    return {
      menu: this.sidebardata.menu,
    };
  },
};
</script>

<style>
/* Collapsing the sidebar */

.v-sidebar-menu.vsm_collapsed.hidden {
  transform: translateX(-100%);
}

/* Styling everything */

.v-sidebar-menu {
  z-index: 9999;
  transition: 0.3s all;
  background-color: var(--sidebar-background);
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
}

/* Styling items text */

.v-sidebar-menu .vsm--item .vsm--link .vsm--title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
}

/* Styling dropdown lists */

.v-sidebar-menu .vsm--dropdown .vsm--list {
  overflow: hidden;
  background-color: var(--sidebar-background);
}

.v-sidebar-menu .vsm--dropdown .vsm--item {
  padding: 0;
}

#app
  > div
  > div.v-sidebar-menu.vsm_collapsed
  > div
  > div.vsm--mobile-item
  > div.vsm--item.vsm--item_open
  > div {
  overflow: hidden !important;
}

/* Styling icons */

.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  background-color: transparent;
  padding: 5px;
}

/* Styling items and icons on hover */

.v-sidebar-menu .vsm--link:hover {
  background-color: var(--sidebar-hover);
}

.v-sidebar-menu.vsm_collapsed .vsm--link_level-1:hover .vsm--icon {
  background-color: var(--sidebar-hover);
}

/* Styling expanded item and icon */

.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 {
  background-color: var(--sidebar-dropdown-active);
}

.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 .vsm--icon {
  background-color: transparent;
}

.v-sidebar-menu .vsm--mobile-bg {
  background-color: var(--sidebar-hover);
}

.v-sidebar-menu.vsm_collapsed .vsm--link_level-1.vsm--link_hover .vsm--icon {
  background-color: var(--sidebar-hover);
}

/* Removing box shadow */

#app > div > div.v-sidebar-menu.vsm_expanded > div > div > div > a {
  box-shadow: none;
}

#app > div > div.v-sidebar-menu.vsm_collapsed > div > div.vsm--list > div > a {
  box-shadow: none;
}

/* Menu items expanding */

/* .v-sidebar-menu .vsm--mobile-item {
  display: none;
} */
</style>