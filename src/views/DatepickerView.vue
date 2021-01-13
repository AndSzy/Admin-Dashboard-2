<template>
  <div id="datepicker">
      <!-- My Datepicker -->
      <my-datepicker v-model="pickerdata"></my-datepicker>

      <!--<chart-with-custom-datepicker v-if="charts[1]" :chart="charts[1]">-->

        <!-- My Datepicker -->
      <!--<my-datepicker></my-datepicker>-->
          
      <!--</chart-with-custom-datepicker>-->
  </div>
</template>

<script>
import MyDatepicker from "../components/MyDatepicker.vue"
// import ChartWithCustomDatepicker from "../charts/ChartWithCustomDatepicker.vue"

import { dataset1, dataset2 } from "../utilities/mock/MockData.js";

import { v4 as uuidv4 } from "uuid";

export default {
    components: {
        MyDatepicker,
        // ChartWithCustomDatepicker
    },
    data() {
    return {
      pickerdata: {
        start: new Date(),
        end: new Date()
      },
      dataset1,
      dataset2,
      charts: [],
    };
  },
  methods: {
      customEvent() {
          console.log("custom");
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

<style>
#datepicker {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    grid-gap: 50px;
}
</style>