<template>
  <div>
    <b-container class="buttons">
      <b-row >
        <b-button @click="zoomIn" size="sm"><b-icon-zoom-in></b-icon-zoom-in></b-button>
        <b-button @click="zoomOut" size="sm"><b-icon-zoom-out></b-icon-zoom-out></b-button>
        <b-button @click="showPeriod(1)" size="sm">1D</b-button>
        <b-button @click="showPeriod(10)" size="sm">10D</b-button>
        <b-button @click="showPeriod(30)" size="sm">1M</b-button>
        <b-button @click="showPeriod(90)" size="sm">3M</b-button>
        <b-button @click="showPeriod(360)" size="sm">1Y</b-button>
        <b-button @click="showPeriod(chart.dataset.length - 1)" size="sm">All</b-button>
        <b-form inline>
          <!-- Slot for custom datepicker -->
            <slot></slot>
        </b-form>
      </b-row>
      
      <!-- <b-row align-h="start">
        <b-form inline> -->
          <!-- Slot for custom datepicker -->
            <!-- <slot></slot>
        </b-form>
      </b-row> -->

    </b-container>
    <zingchart
      
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

  
    // Showing less data at the begining
    let random = Math.floor(Math.random() * 10) + 5;
    this.showPeriod(random);
  
    // call this to triger zoom event and update this.value
    // this.showPeriod(this.chart.dataset.length - 1);

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
        theme: 'dark',
        type: this.chart.chartType,
        // plotarea: {
        //   backgroundColor: '#33637a'
        // },
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
            // angle: -45,
            fontSize: 10,
            // paddingBottom: 25,
          },
          step: "day",
          transform: {
            type: "date",
            all: "%dd/%M/%y",
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
.buttons {
  position: absolute;
  z-index: 10;
  top: 10px;
}

.buttons .btn {
  background-color: transparent !important;
  border: none;
  /* border-bottom: 1px solid #fff;
  margin-bottom: 5px; */
}

.buttons .btn:focus {
  box-shadow: none;
}
</style>