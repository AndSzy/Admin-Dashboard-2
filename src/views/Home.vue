<template>
  <div class="home">
    <zoom-chart v-if="charts[1]" :chart="charts[1]"></zoom-chart>
  </div>
</template>

<script>
import ZoomChart from '../charts/ZoomChart.vue'
import { dataset1, dataset2 } from "../utilities/mock/MockData.js";

import { v4 as uuidv4 } from "uuid";


export default {
  name: 'Home',
  components: {
    ZoomChart
  },
  data() {
    return {
      dataset1,
      dataset2,
      charts: [],
    };
  },
  methods: {
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
      color: "red",
      chartType: "line",
      datasetName: "data2",
    });
    this.newComponent({
      color: "green",
      chartType: "bar",
      datasetName: "data2",
    });
    this.newComponent({
      color: "blue",
      chartType: "bar",
      datasetName: "data1",
    });
    this.newComponent({
      color: "green",
      chartType: "line",
      datasetName: "data1",
    });

  },
}
</script>
