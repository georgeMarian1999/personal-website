<script setup>
import AboutMeDescription from "@/components/about-components/AboutMeDescription.vue";
import BaseDivider from "../components/shared/BaseDivider.vue";
import AboutMeHobbies from "../components/about-components/AboutMeHobbies.vue";
</script>

<template>
  <div class="about-page">
    <div class="container container-fluid">
      <AboutMeDescription />
      <BaseDivider :reverse="false" />
      <AboutMeHobbies />
    </div>
  </div>
</template>

<style lang="scss"></style>
