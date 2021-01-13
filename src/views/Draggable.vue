<template>
  <div class="home">
    <draggable v-model="charts" :move="handleMove" @end="handleDragEnd">
      <transition-group tag="div" class="grid" name="grid">
        <the-card v-for="item in charts" :key="item.id">
          <zoom-chart :chart="item"></zoom-chart>
        </the-card>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import ZoomChart from "../charts/ZoomChart.vue";
import { dataset1, dataset2 } from "../utilities/mock/MockData.js";

import { v4 as uuidv4 } from "uuid";
import draggable from "vuedraggable";
import TheCard from "../components/TheCard.vue";

export default {
  name: "Home",
  components: {
    ZoomChart,
    draggable,
    TheCard,
  },
  data() {
    return {
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
  display: grid;
  grid-template-columns: 90vw;
  grid-gap: 0.2em;
  justify-content: center;
}

.grid-move {
  transition: all 0.3s;
}

@media (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 45vw);
  }
}

@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 30vw);
  }
}
</style>
