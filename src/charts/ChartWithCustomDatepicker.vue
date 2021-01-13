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
          <!-- Slot for custom datepicker -->
            <slot></slot>
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
  mounted() {
    // call this to triger zoom event and update this.value
    this.showPeriod(this.chart.dataset.length - 1);

    // listen for a input from slot
    this.$on('datepickerInputChanged', this.inputChanged);
  },
  props: {
      value: {
          type: Object,
          required: true
      },
      chart: {
        type: Object,
        required: true
      }
  },
  data() {
    return {
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
        //   itemsOverlap: true,
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
            all: "%m/%d/%Y<br>%h:%i:%s:%q %A",
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
            // samplingStep: 2,
          },
        ],
      },
    };
  },
  methods: {
    inputChanged() {
      this.showCustom(this.value.start, this.value.end)
    },
    zoomEvent(e) {
      this.value.start = new Date(e.kmin);
      this.value.end = new Date(e.kmax);
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