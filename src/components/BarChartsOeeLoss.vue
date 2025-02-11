<template>
  <div class="highcharts-container">
    <figure class="highcharts-figure">
      <div ref="container"></div>
    </figure>
  </div>
</template>

<script>
  import Highcharts from "highcharts";
  import "highcharts/modules/exporting";
  import "highcharts/modules/export-data";
  import "highcharts/modules/accessibility";

  export default {
    name: "BarChartsOeeLoss",
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        Highcharts.chart(this.$refs.container, {
          chart: {
            type: "column",
            height: 250,
          },
          title: {
            text: "Overall OEE Loss and Types",
            align: "center",
          },
          xAxis: {
            categories: [
              "Availability Loss",
              "Performance Loss",
              "Quality Loss"
            ],
            title: {
              text: null, // Remove the title on the x-axis
            },
          },
          yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
              text: "Loss Count",
            },
          },
          tooltip: {
            pointFormat: "<b>{series.name}</b><br/>Count: {y}",
          },
          plotOptions: {
            column: {
              pointWidth: 50, // Adjust the width of bars
              groupPadding: 0.1,
            },
          },
          series: [
            {
              name: "Planned Stops",
              data: [80, 0, 0], // Availability Loss
              color: "#3366ff", // Color for Availability Loss
            },
            {
              name: "Unplanned Stops",
              data: [68, 0, 0], // Availability Loss
              color: "#99c2ff", // Color for Availability Loss
            },
            {
              name: "Small Stops",
              data: [0, 85, 0], // Performance Loss
              color: "#00e673", // Color for Performance Loss
            },
            {
              name: "Slow Cycle",
              data: [0, 60, 0], // Performance Loss
              color: " #b3ffd9", // Color for Performance Loss
            },
            {
              name: "Production Rejects",
              data: [0, 0, 90], // Quality Loss
              color: "#751aff", // Color for Quality Loss
            },
            {
              name: "Startup Rejects",
              data: [0, 0, 40], // Quality Loss
              color: " #d1b3ff", // Color for Quality Loss
            },
          ],
          legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle",
            x: 0,
            y: 0,
            itemStyle: {
              color: '#333',
              fontSize: '14px'
            }
          },
          credits: {
            enabled: false,
          },
          annotations: [
            {
              labels: [
                // Adding labels for the individual categories on the right side
                {
                  point: { x: 0, y: 80 }, // "Planned Stops"
                  text: "Planned Stops",
                  style: {
                    color: "#FF5733", // Same as the color of "Planned Stops"
                    fontWeight: "bold",
                    fontSize: "14px",
                  },
                  xAnchor: "right", // Anchor the label to the right
                  yAnchor: "middle",
                  distance: 10, // Slightly offset from the bars
                },
                {
                  point: { x: 0, y: 68 }, // "Unplanned Stops"
                  text: "Unplanned Stops",
                  style: {
                    color: "#FF5733",
                    fontWeight: "bold",
                    fontSize: "14px",
                  },
                  xAnchor: "right", // Anchor the label to the right
                  yAnchor: "middle",
                  distance: 10,
                },
                {
                  point: { x: 1, y: 85 }, // "Small Stops"
                  text: "Small Stops",
                  style: {
                    color: "#33FF57",
                    fontWeight: "bold",
                    fontSize: "14px",
                  },
                  xAnchor: "right", // Anchor the label to the right
                  yAnchor: "middle",
                  distance: 10,
                },
                {
                  point: { x: 1, y: 60 }, // "Slow Cycle"
                  text: "Slow Cycle",
                  style: {
                    color: "#33FF57",
                    fontWeight: "bold",
                    fontSize: "14px",
                  },
                  xAnchor: "right", // Anchor the label to the right
                  yAnchor: "middle",
                  distance: 10,
                },
                {
                  point: { x: 2, y: 90 }, // "Production Rejects"
                  text: "Production Rejects",
                  style: {
                    color: "#3357FF",
                    fontWeight: "bold",
                    fontSize: "14px",
                  },
                  xAnchor: "right", // Anchor the label to the right
                  yAnchor: "middle",
                  distance: 10,
                },
                {
                  point: { x: 2, y: 40 }, // "Startup Rejects"
                  text: "Startup Rejects",
                  style: {
                    color: "#3357FF",
                    fontWeight: "bold",
                    fontSize: "14px",
                  },
                  xAnchor: "right", // Anchor the label to the right
                  yAnchor: "middle",
                  distance: 10,
                },
              ],
            },
          ],
        });
      },
    },
  };
</script>

<style scoped>
.highcharts-figure {
  width: 100%;
  height: 150px;
  margin: 0;
}

.highcharts-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
}
</style>
