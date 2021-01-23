<template>
  <div>
    <b-container class="buttons">
      <b-row>
        <b-button @click="zoomIn" size="sm"
          ><b-icon-zoom-in></b-icon-zoom-in
        ></b-button>
        <b-button @click="zoomOut" size="sm"
          ><b-icon-zoom-out></b-icon-zoom-out
        ></b-button>
        <b-button @click="showPeriod(1)" size="sm">1D</b-button>
        <b-button @click="showPeriod(10)" size="sm">10D</b-button>
        <b-button @click="showPeriod(30)" size="sm">1M</b-button>
        <b-button @click="showPeriod(90)" size="sm">3M</b-button>
        <b-button @click="showPeriod(360)" size="sm">1Y</b-button>
        <b-button @click="showPeriod(chart.dataset.length - 1)" size="sm"
          >All</b-button
        >
      </b-row>

      <b-row>
        <b-form inline>
          <!-- Slot for custom datepicker -->
          <slot></slot>
        </b-form>
      </b-row>
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
    this.$on("datepickerInputChanged", this.inputChanged);
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
    chart: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        theme: "dark",
        backgroundColor: "#33637a",
        type: this.chart.chartType,
        // preview: {},
        zoom: {
          backgroundColor: "#ccccff",
          borderWidth: 5,
          borderColor: "#3399ff",
          alpha: 0.3,
        },
        scrollX: {
          bar: {
            backgroundColor: "#adc0c9",
            // height: "15px"
          },
          handle: {
            backgroundColor: "#2d596d",
            height: "15px",
          },
        },
        scaleX: {
          label: { text: "Time" },
          zooming: true,
          // number of lables below x-line
          maxItems: 5,
          item: {
            fontSize: 10,
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
          guide: {
            lineColor: "#fff",
            lineStyle: "dashdot",
          },
        },
        plot: {
          // Line chart
          "line-color": this.chart.color,

          // Bar chart
          "background-color": this.chart.color,
          alpha: 0.8,
        },
        tooltip: {
          callout: true,
          borderColor: "#F4F2F2",
          borderWidth: 2,
          borderRadius: "1px",
          shadow: false,
          text: "%kt: %v",
        },

        series: [
          {
            values: this.chart.dataset,
            // samplingStep: 2,
            marker: {
              backgroundColor: this.chart.color,
              size: 4,
            },
          },
        ],
      },
    };
  },
  methods: {
    inputChanged() {
      this.showCustom(this.value.start, this.value.end);
    },
    zoomEvent(e) {
      // Changing to format that is accepted by MyDatePickComponent
      let options = { year: "numeric", month: "numeric", day: "numeric" };
      this.value.start = new Date(e.kmin).toLocaleString("fr-CA", options);
      this.value.end = new Date(e.kmax).toLocaleString("fr-CA", options);
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
}

.buttons .btn:focus {
  box-shadow: none;
}

.buttons .form-inline {
  padding-left: 8px;
}
</style>