<script setup>
import HobbyCard from "./HobbyCard.vue";
import { ref } from "vue";

const hobbies = ref([
  {
    id: 1,
    title: "Gym",
    description: "I love going to the gym",
  },
  {
    id: 2,
    title: "Gaming",
    description: "I love gaming with friends",
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "I love making IPhone apps",
  },
]);
</script>

<template>
  <div class="about-me-hobbies row align-content-center justify-content-around">
    <div class="col-12 mt-4 text-align-center">
      <h3>My hobbies</h3>
    </div>
    <div v-for="hobby in hobbies" :key="hobby.id" class="col-12 col-lg-3">
      <div class="row justify-content-center">
        <HobbyCard :hobby="hobby" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about-me-hobbies {
  background: var(--component-background-color);
  padding: 25px;
}
</style>
