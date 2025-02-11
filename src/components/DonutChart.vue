<template>
  <div ref="donutChartContainer" class="donut-chart-container"></div>
</template>

<script>
import { onMounted, ref, watch, nextTick, onUnmounted } from "vue";
import Highcharts from "highcharts";

export default {
  name: "DonutChart",
  props: {
    donutChartData: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "lightblue", // Default background color
    },
    colors: {
      // Accept colors prop
      type: Array,
      default: () => [], // default to empty array if not provided
    },
  },
  setup(props) {
    const donutChartContainer = ref(null);
    let donutChart = null;

    // Calculate the total value
    const getTotalValue = () => {
      return props.donutChartData.reduce((sum, item) => sum + item.y, 0);
    };

    // Create or update the chart when component is mounted or when donutChartData changes
    const createOrUpdateDonutChart = () => {
      // Ensure we have chart data
      if (!props.donutChartData || props.donutChartData.length === 0) {
        console.error("No chart data provided for Donut Chart");
        return;
      }

      const totalValue = getTotalValue();

      // Create dataLabels formatter to show percentage on each slice
      const dataLabelsFormatter = (point) => {
        const percentage = (point.y / totalValue) * 100;
        return `${percentage.toFixed(1)}%`; // Display percentage with one decimal point
      };

      // Destroy the existing chart if it exists
      if (donutChart) {
        donutChart.update({
          series: [{ data: props.donutChartData }],
          title: {
            text: props.title,
          },
          annotations: [
            {
              labels: [
                {
                  point: {
                    x: 0.5,
                    y: 0.5,
                    xAxis: 0,
                    yAxis: 0,
                  },
                  text: `${totalValue}%`, // Display the total value (percentage or sum)
                  style: {
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                  },
                },
              ],
            },
          ],
        });
      } else {
        // Create a new chart if it doesn't exist
        donutChart = Highcharts.chart(donutChartContainer.value, {
          chart: {
            type: "pie",
            reflow: true,
            backgroundColor: props.backgroundColor,
          },
          title: {
            text: props.title,
          },
          credits: {
            enabled: false,
          },
          lang: {
            thousandsSep: ",",
            decimalPoint: ".",
          },
          legend: {
            enabled: false,
          },
          plotOptions: {
            pie: {
              innerSize: "75%", // Makes it a donut
              dataLabels: {
                enabled: true,
                formatter: function () {
                  return dataLabelsFormatter(this.point);
                },
                style: {
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#333",
                },
                distance: -30, // Moves the data label inside the donut
              },
            },
          },
          series: [
            {
              name: "Data",
              data: props.donutChartData,
              colors: props.colors.length ? props.colors : undefined, // Apply custom colors if provided
            },
          ],
          annotations: [
            {
              labels: [
                {
                  point: {
                    x: 0.5,
                    y: 0.5,
                    xAxis: 0,
                    yAxis: 0,
                  },
                  text: `${totalValue}%`, // Display the total value (percentage or sum) at the center
                  style: {
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "black",
                  },
                },
              ],
            },
          ],
        });
      }
    };

    // Watch for changes in donutChartData and update the chart
    watch(
      () => props.donutChartData,
      () => {
        nextTick(() => {
          createOrUpdateDonutChart();
        });
      },
      { deep: true }
    );

    // Create chart on mounted
    onMounted(() => {
      nextTick(() => {
        if (donutChartContainer.value) {
          createOrUpdateDonutChart();
        } else {
          console.error("Donut chart container is not available");
        }
      });
    });

    onUnmounted(() => {
      if (donutChart) {
        donutChart.destroy();
      }
    });

    return {
      donutChartContainer,
    };
  },
};
</script>

<style scoped>
.donut-chart-container {
  width: 250px;
  height: 300px;
}
</style>
