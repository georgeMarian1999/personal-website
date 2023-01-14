<script setup>
import DescriptionCard from "@/components/home-components/DescriptionCard.vue";
import CurrentTeachingCard from "@/components/home-components/CurrentTeachingCard.vue";
import AboutMeCard from "@/components/home-components/AboutMeCard.vue";
import ImportantNews from "@/components/home-components/ImportantNews.vue";
</script>

<template>
  <div class="home">
    <div class="row justify-content-around">
      <div class="col-12 col-xl-6">
        <DescriptionCard></DescriptionCard>
      </div>
      <div class="col-12 col-xl-6">
        <ImportantNews />
      </div>
    </div>
    <div class="row">
      <CurrentTeachingCard></CurrentTeachingCard>
    </div>

    <div class="row">
      <AboutMeCard></AboutMeCard>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
