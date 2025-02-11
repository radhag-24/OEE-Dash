<template>
  <div ref="chartContainer" class="highcharts-figure"></div>
</template>

<script>
// Import Highcharts
import Highcharts from "highcharts";

// Import the required Highcharts modules
import "highcharts/modules/exporting";
import "highcharts/modules/export-data";
import "highcharts/modules/accessibility";

// Set Highcharts language options (no need for a separate lang module)
Highcharts.setOptions({
  lang: {
    contextButtonTitle: "Chart context menu",
    decimalPoint: ".",
    thousandsSep: ",",
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    weekdays: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
});

export default {
  name: "BarChart",
  props: {
    chartData: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: "Bar Chart",
    },
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    chartData() {
      this.renderChart();
    },
  },
  methods: {
    // Function to determine the color based on category (name)
    getCategoryColor(category) {
      const categoryColors = {
        OEE: "#2196F3",
        Availability: "#4CAF50",
        Performance: "#FFC107",
        Quality: "",
        Downtime:"red",
        ProductionRate:"green"
        
      };
      return categoryColors[category] || "#7cb5ec";
    },

    renderChart() {
      // Check if chart data is available before rendering
      if (!this.chartData || this.chartData.length === 0) {
        return;
      }

      // Set up the chart options dynamically based on props
      const chartOptions = {
        chart: {
          type: "column", // Bar chart type
        },
        title: {
          text: this.title,
        },
        xAxis: {
          categories: this.chartData.map((data) => data.name),
        },
        yAxis: {
          title: {
            text: "Values",
          },
        },
        series: this.chartData.map((data) => ({
          name: data.name,
          data: [data.y],
          color: this.getCategoryColor(data.name), // Apply color based on category
        })),
        exporting: {
          enabled: true,
        },
        accessibility: {
          enabled: true,
        },
      };

      // Render the chart in the referenced container
      Highcharts.chart(this.$refs.chartContainer, chartOptions);
    },
  },
};
</script>

<style scoped>
.highcharts-figure {
  width: 700px;
  height: 350px;
}

@media (max-width: 768px) {
  .highcharts-figure {
    height: 250px;
  }
}
</style>
