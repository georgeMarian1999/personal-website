<script setup>
import { ref } from "vue";
import CoordinationItem from "@/components/coordination-page-components/CoordinationItem.vue";

const deadlines = ref([
  {
    id: 1,
    date: "14 January",
    title: "Choose your topic and prepare your proposal",
  },
  {
    id: 2,
    date: "13 February",
    title: "Topic discussion with the coordinator",
  },
  {
    id: 3,
    date: "20 March",
    title: "Discussion of the first research results",
  },
  {
    id: 4,
    date: "30 April",
    title: "Thesis/Dissertation first evaluation",
  },
  {
    id: 5,
    date: "2 June",
    title: "Preparing your thesis/dissertation for submission",
  },
]);
</script>

<template>
  <div class="col-12">
    <div class="row align-content-center justify-content-around">
      <CoordinationItem
        v-for="deadline in deadlines"
        :key="deadline.id"
        :deadline="deadline"
        class="col-md-4 col-12 col-sm-6"
      />
    </div>
  </div>
</template>
<style lang="scss"></style>
