<template>
  <draggable v-model="charts" :move="handleMove" @end="handleDragEnd">
    <transition-group tag="div" class="grid" name="grid">
      <!-- The Card -->
      <the-card v-for="item in charts" :key="item.id">
        <!-- Chart with custom datepicker -->
        <chart-with-custom-datepicker :chart="item" v-model="pickerdata">
          <!-- My Datepicker -->
          <!-- <my-datepicker v-model="pickerdata"></my-datepicker> -->
          <my-date-pick-component v-model="pickerdata"></my-date-pick-component>
        </chart-with-custom-datepicker>
      </the-card>
    </transition-group>
  </draggable>
</template>

<script>
import { dataset1, dataset2 } from "../utilities/mock/MockData.js";

import { v4 as uuidv4 } from "uuid";
import draggable from "vuedraggable";
import TheCard from "../components/TheCard.vue";

// Datepicker added here:
// import MyDatepicker from "../components/MyDatepicker.vue";
import ChartWithCustomDatepicker from "../charts/ChartWithCustomDatepicker.vue";

// Second Datepicker:

import MyDatePickComponent from "../components/MyDatePickComponent.vue";

export default {
  name: "Home",
  components: {
    draggable,
    TheCard,
    // MyDatepicker,
    ChartWithCustomDatepicker,
    MyDatePickComponent
  },
  data() {
    return {
      pickerdata: {
        breakpoint: 800,
        start: '2013-08-01',
        end: '2013-09-01',
      },
      dataset1,
      dataset2,
      charts: [],
    };
  },
  methods: {
    handleMove(e) {
      const { index, futureIndex } = e.draggedContext;
      this.movingIndex = index;
      this.futureIndex = futureIndex;
      return false; // disable sort
    },
    handleDragEnd() {
      this.futureItem = this.charts[this.futureIndex];
      this.movingItem = this.charts[this.movingIndex];
      const _charts = Object.assign([], this.charts);

      _charts[this.futureIndex] = this.movingItem;
      _charts[this.movingIndex] = this.futureItem;

      this.charts = _charts;
    },
    newComponent(newChart) {
      let newChartObject = {};
      newChartObject.id = uuidv4();
      newChartObject.color = newChart.color;
      newChartObject.chartType = newChart.chartType;
      newChartObject.datasetName = newChart.datasetName;
      if (newChart.datasetName === "data1") {
        newChartObject.dataset = this.dataset1;
      } else if (newChart.datasetName === "data2") {
        newChartObject.dataset = this.dataset2;
      }

      this.charts.push(newChartObject);
    },
  },
  mounted() {
    this.newComponent({
      color: "#58f723",
      chartType: "line",
      datasetName: "data2",
    });
    this.newComponent({
      color: "#dc0e28",
      chartType: "bar",
      datasetName: "data2",
    });
    this.newComponent({
      color: "#303796",
      chartType: "bar",
      datasetName: "data1",
    });
    this.newComponent({
      color: "#dc0e28",
      chartType: "line",
      datasetName: "data1",
    });
    this.newComponent({
      color: "#3f3f3f",
      chartType: "line",
      datasetName: "data1",
    });
    this.newComponent({
      color: "#ff9000",
      chartType: "line",
      datasetName: "data1",
    });
    this.newComponent({
      color: "#307093",
      chartType: "line",
      datasetName: "data1",
    });
  },
};
</script>

<style scoped>
.grid {
  padding: 0px 15px;
  background-color: var(--main-background);
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr;
  grid-auto-flow: dense;
}

.grid-move {
  transition: all 0.3s;
}

.grid .span {
  grid-column: auto;
}

@media (min-width: 800px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid .span {
    grid-column: auto / span 2;
  }
}

@media (min-width: 1320px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
