<template>
 <div>
      <the-sidebar :sidebardata="sidebardata"></the-sidebar>
      <button @click="toggleSidebar">Toggle</button>
      
  <div class="main" :class="{sidebarOpen : !sidebardata.collapsed}">
      <img src="../assets/chart.png" alt="chart" class="chartImage">
      <img src="../assets/chart.png" alt="chart" class="chartImage">
  </div>
 </div>
</template>

<script>
import TheSidebar from "../components/TheSidebar.vue"

export default {
    components: {
        TheSidebar
    },
    data() {
        return {
            sidebardata: {
                collapsed: true
            },
        }
    },
    methods: {
        toggleSidebar() {
            this.sidebardata.collapsed = !this.sidebardata.collapsed
        }
    }
    

}
</script>

<style scoped>

#myNav {
    
    z-index: 100000 ;
}

.main {
    padding-left: 50px;
    transition: 0.3s ease;
}

.main.sidebarOpen {
    padding-left: 350px;
    transition: 0.3s ease;
}

.chartImage {
    width: 40vw;
    height: auto;
}



</style>>

