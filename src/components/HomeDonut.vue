<template>
    <div ref="donutChartContainer" class="donut-chart-container" :style="{ width: size + 'px', height: size + 'px' }"></div>
  </template>
  
  <script>
  import Highcharts from "highcharts";
  
  export default {
    name: "HomeDonut",
    props: {
      donutChartData: {
        type: Array,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      size: {
        type: Number,
        default: 60,  
      },
      colors: {
        type: Array,
        default: () => [], 
      },
    },
    mounted() {
      this.renderDonutChart();
    },
    methods: {
      renderDonutChart() {
        const totalValue = this.donutChartData.reduce((sum, item) => sum + item.y, 0);
  
        const dataLabelsFormatter = (point) => {
          const percentage = (point.y / totalValue) * 100;
          return `${percentage.toFixed(1)}%`;
        };
  
        Highcharts.chart(this.$refs.donutChartContainer, {
          chart: {
            type: "pie",
            reflow: true,
            backgroundColor: "transparent",
            width: this.size,
            height: this.size,
          },
          title: {
            text: '',
          },
          credits: {
            enabled: false,
          },
          plotOptions: {
            pie: {
              innerSize: "70%", // Creates the donut effect
              dataLabels: {
                enabled: true,
                formatter: function () {
                  return dataLabelsFormatter(this.point);
                },
                style: {
                  fontSize: "8px", // Smaller font size for smaller donuts
                  fontWeight: "bold",
                  color: "#333",
                },
                distance: -20, // Moves the data label inside the donut
              },
            },
          },
          series: [
            {
              name: this.title,
              data: this.donutChartData,
              colors: this.colors.length ? this.colors : undefined,
            },
          ],
        });
      },
    },
  };
  </script>
  