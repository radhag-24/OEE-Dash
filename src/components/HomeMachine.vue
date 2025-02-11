<template>
  <div class="container">
    <div class="box">
      <div class="text">CNC Turning Machine</div>
      <div class="image-and-donuts">
        <div class="image">
          <img
            src="../assets/CNC_TurningJE-06-LM-XL-removebg-preview.png"
            alt="Image 1"
          />
        </div>
        <div class="donut-container">
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineOeeData"
              :colors="['#4d9900', '#ff471a']"
              :size="120"
              :showLines="false"
            />
            <div class="donut-title">OEE</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineAvailabilityData"
              :colors="['#99bbff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">A</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachinePerformanceData"
              :colors="['#99ffff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">P</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineQualityData"
              :colors="['#bf80ff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">Q</div>
          </div>
        </div>
      </div>

      <!-- Static Text Box and Run Time in Same Line -->
      <div class="text-box-container">
        <div
          class="text-box"
          style="
            background-color: #b3ffb3;
            height: 30px;
            width: 550px;
            margin-top: 15px;
          "
        >
          Run Time 3hr
        </div>

        <!-- Static Text Boxes in Same Line -->
        <div class="static-textbox-container">
          <div class="static-textbox"><b>Energy Consumed:30kW</b></div>
          <div class="static-textbox1">
            <b>Vibration Analysis:</b><br />Change Bearings<br />Last Updated:
          </div>
        </div>
      </div>
    </div>

    <!-- Other boxes remain unchanged -->
    <div class="box">
      <div class="text">CNC Milling Machine</div>
      <div class="image-and-donuts">
        <div class="image">
          <img
            src="../assets/CNC_Milling-540V-removebg-preview.png"
            alt="Image 2"
          />
        </div>
        <div class="donut-container">
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineOeeData"
              :colors="['#4d9900', '#ff471a']"
              :size="120"
              :showLines="false"
            />
            <div class="donut-title">OEE</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineAvailabilityData"
              :colors="['#99bbff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">A</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachinePerformanceData"
              :colors="['#99ffff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">P</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineQualityData"
              :colors="['#bf80ff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">Q</div>
          </div>
        </div>
      </div>

      <div class="text-box-container">
        <div
          class="text-box"
          style="
            background-color: #c2c2d6;
            height: 30px;
            width: 550px;
            margin-top: 15px;
          "
        >
          Idle 2hr
        </div>

        <!-- Static Text Boxes in Same Line -->
        <div class="static-textbox-container">
          <div class="static-textbox"><b>Energy Consumed:30kW</b></div>
          <div class="static-textbox1">
            <b>Vibration Analysis:</b><br />Change Bearings<br />Last Updated:
          </div>
        </div>
      </div>
    </div>

    <div class="box" style="background-color: #ffebe6">
      <div class="text">CNC Cylindrical Grinding</div>
      <div class="image-and-donuts">
        <div class="image">
          <img
            src="../assets/Cylindrical_Grinder-GCU-350-removebg-preview.png"
            alt="Image 3"
          />
        </div>
        <div class="donut-container">
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineOeeData"
              :colors="['#4d9900', '#ff471a']"
              :size="120"
              :showLines="false"
            />
            <div class="donut-title">OEE</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineAvailabilityData"
              :colors="['#99bbff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">A</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachinePerformanceData"
              :colors="['#99ffff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">P</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineQualityData"
              :colors="['#bf80ff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">Q</div>
          </div>
        </div>
      </div>
      <!-- Static Text Box and Run Time in Same Line -->
      <div class="text-box-container">
        <div
          class="text-box"
          style="
            background-color: #ff8080;
            width: 563px;
            height: 30px;
            margin-top: 15px;
          "
        >
          Temperature High Check
        </div>
        <!-- Static Text Boxes in Same Line -->
        <div class="static-textbox-container">
          <div class="static-textbox"><b>Energy Consumed:30kW</b></div>
          <div class="static-textbox1">
            <b>Vibration Analysis:</b><br />Change Bearings<br />Last Updated:
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="text">CNC Sheet Metal Cutting</div>
      <div class="image-and-donuts">
        <div class="image">
          <img src="../assets/CNC_Press-nobg.png" alt="Image 4" />
        </div>
        <div class="donut-container">
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineOeeData"
              :colors="['#4d9900', '#ff471a']"
              :size="120"
              :showLines="false"
            />
            <div class="donut-title">OEE</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineAvailabilityData"
              :colors="['#99bbff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">A</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachinePerformanceData"
              :colors="['#99ffff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">P</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineQualityData"
              :colors="['#bf80ff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">Q</div>
          </div>
        </div>
      </div>

      <!-- Static Text Box and Run Time in Same Line -->
      <div class="text-box-container">
        <div
          class="text-box"
          style="
            background-color: #b3ffb3;
            height: 30px;
            width: 550px;
            margin-top: 15px;
          "
        >
          Run Time 3hr
        </div>

        <!-- Static Text Boxes in Same Line -->
        <div class="static-textbox-container">
          <div class="static-textbox"><b>Energy Consumed:30kW</b></div>
          <div class="static-textbox1">
            <b>Vibration Analysis:</b><br />Change Bearings<br />Last Updated:
          </div>
        </div>
      </div>
    </div>

    <div class="box" style="background-color: #ffebe6">
      <div class="text">CNC Press for Sheet Metal Cutting</div>
      <div class="image-and-donuts">
        <div class="image">
          <img src="../assets/CNC_Sheet_Metal_Cutting-nobg.png" alt="Image 4" />
        </div>
        <div class="donut-container">
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineOeeData"
              :colors="['#4d9900', '#ff471a']"
              :size="120"
              :showLines="false"
            />
            <div class="donut-title">OEE</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineAvailabilityData"
              :colors="['#99bbff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">A</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachinePerformanceData"
              :colors="['#99ffff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">P</div>
          </div>
          <div class="donut-wrapper">
            <Donut
              :donutChartData="turningMachineQualityData"
              :colors="['#bf80ff', '#e6e6e6']"
              :size="110"
            />
            <div class="donut-title">Q</div>
          </div>
        </div>
      </div>

      <!-- Static Text Box and Run Time in Same Line -->
      <div class="text-box-container">
        <div
          class="text-box1"
          style="
            background-color: #ff8080;
            height: 30px;
            width: 565px;
            margin-top: 15px;
          "
        >
          Pressure Low Check
        </div>

        <!-- Static Text Boxes in Same Line -->
        <div class="static-textbox-container">
          <div class="static-textbox"><b>Energy Consumed:30kW</b></div>
          <div class="static-textbox1">
            <b>Vibration Analysis:</b><br />Change Bearings<br />Last Updated:
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Donut from "../components/HomeDonut.vue";

export default {
  name: "HomeMachines",
  components: {
    Donut,
  },
  data() {
    return {
      // Data for CNC Turning Machine OEE Metrics
      turningMachineOeeData: [
        { name: "OEE", y: 85 },
        { name: "Loss", y: 15 },
      ],
      turningMachineAvailabilityData: [
        { name: "Available", y: 90 },
        { name: "Unavailable", y: 10 },
      ],
      turningMachinePerformanceData: [
        { name: "Good Performance", y: 80 },
        { name: "Poor Performance", y: 20 },
      ],
      turningMachineQualityData: [
        { name: "Good Quality", y: 95 },
        { name: "Defective", y: 5 },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  /* justify-content: space-between; */
  justify-content: center;
}

.box {
  width: 30%;
  height: auto;
  border: 2px solid #ddd;
  padding: 10px;
  background-color: #f9f9f9;
}

.text {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}

.image {
  width: 50%;
  /* margin-bottom: 10px; */
  margin-right: 60px;
}
.image-and-donuts {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  width: 200%;
  height: auto;
  max-width: 150px;
  object-fit: cover;
}

.donut-container {
  display: flex;
  justify-content: space-between;
  gap: 0px;
  /* margin-top: 5px; */
  width: 500px;
}

.donut-wrapper {
  display: flex;
  flex-direction: column; /* Stack donut and title vertically */
  align-items: center; /* Center align the title */
}

.donut-title {
  font-size: 16px;
  font-weight: bold;
}

.text-box {
  width: 25%;
  height: 35px;
  margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
}
.text-box1 {
  width: 150px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
}
.static-textbox-container {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.static-textbox {
  background-color: #f0f0f0;
  padding: 5px;
  margin-top: 5px;
  font-size: 20px;
  text-align: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  height: 50px;
  width: 150px;
  flex: 1;
}
.static-textbox1 {
  background-color: #f0f0f0;
  padding: 5px;
  margin-top: 5px;
  font-size: 16px;
  text-align: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  height: 50px;
  width: 150px;
  flex: 1;
}
</style>
