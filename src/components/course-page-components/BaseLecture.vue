<script setup>
import BarChartIcon from "@/components/svg-components/BarChartIcon.vue";
import HddIcon from "@/components/svg-components/HddIcon.vue";
import LaptopIcon from "@/components/svg-components/LaptopIcon.vue";
import CheckIcon from "@/components/svg-components/CheckIcon.vue";
import BodyTextIcon from "@/components/svg-components/BodyTextIcon.vue";
import AsterixIcon from "@/components/svg-components/AsterixIcon.vue";

const props = defineProps(["lecture", "currentLecture"]);
const emit = defineEmits(["chooseLecture"]);
const changeLecture = () => {
  emit("chooseLecture", props.lecture.id);
};
</script>

<template>
  <div
    class="course-lecture position-relative row mt-2 mb-2 align-content-center justify-content-around"
    @click="changeLecture"
  >
    <div v-if="props.currentLecture.id === props.lecture.id" class="check-icon">
      <CheckIcon />
      Selected Course
    </div>
    <div class="col-2 lecture-picture">
      <div class="row height-full align-content-center justify-content-center">
        <div class="col-12">
          <div
            class="row align-content-center justify-content-center height-full"
          >
            <BarChartIcon v-if="lecture.id === 1"></BarChartIcon>
            <HddIcon v-if="lecture.id === 2"></HddIcon>
            <LaptopIcon v-if="lecture.id === 3"></LaptopIcon>
            <AsterixIcon v-if="lecture.id === 4"></AsterixIcon>
            <BodyTextIcon v-if="lecture.id === 5"></BodyTextIcon>
          </div>
        </div>
        <div class="col-12 text-align-center">Lecture {{ lecture.id }}</div>
      </div>
    </div>
    <div class="col-8 lecture-description">
      <div class="row lecture-title">
        <h5>{{ lecture.title }}</h5>
      </div>
      <div class="row lecture-text">
        <p>{{ lecture.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.course-lecture {
  padding: 15px 25px;
  font-size: 12px;
  transition: all 0.5s ease-in-out;
}

.course-lecture:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.check-icon {
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 145px;
  height: 25px;
}

.lecture-picture {
  min-width: 120px;
  min-height: 120px;
  border-radius: 15px;
  background: var(--primary-color);
}

.lecture-description {
  margin-left: 5px;
  min-height: 120px;
}

.lecture-text {
  font-size: 13px;
}
</style>
