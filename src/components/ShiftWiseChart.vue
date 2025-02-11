<template>
  <div>
    <figure class="highcharts-figure">
      <div id="container"></div>
      <p class="highcharts-description"></p>
    </figure>
  </div>
</template>

<script>
import Highcharts from "highcharts";

import "highcharts/modules/treemap";
import "highcharts/modules/exporting";
import "highcharts/modules/export-data";
import "highcharts/modules/accessibility";

export default {
  name: "ShiftWiseChart",
  mounted() {
    this.renderShiftChart();
  },
  methods: {
    renderShiftChart() {
      Highcharts.chart("container", {
        chart: {
          height: 230,
          width: 390,
        },
        title: {
          text: "Shift wise - All Machines run time chart",
        },
        credits: {
          enabled: false, // Remove the Highcharts.com watermark
        },
        series: [
          {
            type: "treemap",
            layoutAlgorithm: "stripes", //or sliceAndDice
            data: [
              {
                id: "shift1",
                name: "Shift 1 (9 AM - 1 PM)",
                value: 4,
                color: "#b3ffb3",
              },
              {
                id: "lunch",
                name: "LunchBreak (1 PM - 1:30 PM)",
                value: 0.5,
                color: "#ff471a",
              },
              {
                id: "shift2",
                name: "Shift 2 (1:20 PM - 5 PM)",
                value: 3.5,
                color: "#90ed7d",
              },
            ],
            colorBy: "value",
            dataLabels: {
              enabled: true,
              format: "{point.name}", // Label format
            },
          },
        ],

        colorAxis: {
          minColor: "#ffffff",
          maxColor: "#7cb5ec",
        },
      });
    },
  },
};
</script>

<style scoped>
.highcharts-figure {
  display: block;
  text-align: center;
}

.highcharts-description {
  font-size: 16px;
  color: #333;
}

#container {
  max-width: 100%;
  margin: 0 auto;
}
</style>
