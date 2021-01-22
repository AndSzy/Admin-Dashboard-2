<template>
  <div>
    <b-container class="mt-2">
      <b-row align-h="start">
        <b-button @click="zoomIn"><b-icon-zoom-in></b-icon-zoom-in></b-button>
        <b-button @click="zoomOut"><b-icon-zoom-out></b-icon-zoom-out></b-button>
        <b-button @click="showPeriod(1)">1D</b-button>
        <b-button @click="showPeriod(10)">10D</b-button>
        <b-button @click="showPeriod(30)">1M</b-button>
        <b-button @click="showPeriod(90)">3M</b-button>
        <b-button @click="showPeriod(360)">1Y</b-button>
        <b-button @click="showPeriod(chart.dataset.length - 1)">All</b-button>
      </b-row>
      <b-row align-h="start">
        <b-form inline>
          <b-form-datepicker
            v-model="startDate"
            @input="showCustom(startDate, endDate)"
          ></b-form-datepicker>
          <b-form-datepicker
            v-model="endDate"
            @input="showCustom(startDate, endDate)"
          ></b-form-datepicker>
        </b-form>
      </b-row>
    </b-container>
    <zingchart
      class="mb-4"
      :data="chartData"
      output="canvas"
      :ref="chart.id"
      @zoom="zoomEvent"
    ></zingchart>
  </div>
</template>

<script>
export default {
  props: ["chart"],
  mounted() {
    // Showing less data at the begining
    let random = Math.floor(Math.random() * 10) + 5;
    this.showPeriod(random);
  },
  data() {
    return {
      startDate: new Date(this.chart.dataset[0][0][0]),
      endDate: new Date(
        this.chart.dataset[this.chart.dataset.length - 1][0][0]
      ),
      chartData: {
        type: this.chart.chartType,
        // preview: {},
        zoom: {
          backgroundColor: "#ccccff",
          borderWidth: 5,
          borderColor: "#3399ff",
          alpha: 0.3,
        },
        scrollX: {},
        scaleX: {
          label: { text: "Time" },
          zooming: true,
          itemsOverlap: true,
          // number of lables below x-line
          maxItems: 5,
          item: {
            angle: -45,
            fontSize: 10,
            paddingBottom: 25,
          },
          step: "day",
          transform: {
            type: "date",
            all: "%m/%d/%Y",
          },
        },
        scaleY: {
          label: { text: "Usage" },
          // zooming: true,
          item: {
            "font-size": 10,
          },
        },
        plot: {
          // Line chart
          "line-color": this.chart.color,
          // Bar chart
          "background-color": this.chart.color,
        },
        series: [
          {
            values: this.chart.dataset,
          },
        ],
      },
    };
  },
  methods: {
    zoomEvent(e) {
      // console.log("zoom!");
      this.startDate = new Date(e.kmin);
      this.endDate = new Date(e.kmax);
    },
    showPeriod(period) {
      const lastEntry = this.chart.dataset.length - 1;

      this.$refs[this.chart.id].zoomtovalues({
        xmin: lastEntry - period,
        xmax: lastEntry,
      });
    },
    showCustom(start, end) {
      let startDateUnix = new Date(start).getTime();
      let endDateUnix = new Date(end).getTime();
      this.$refs[this.chart.id].zoomto({
        kmin: startDateUnix,
        kmax: endDateUnix,
      });
    },
    zoomIn() {
      this.$refs[this.chart.id].zoomin();
    },
    zoomOut() {
      this.$refs[this.chart.id].zoomout();
    },
  },
};
</script>

<style>
</style>