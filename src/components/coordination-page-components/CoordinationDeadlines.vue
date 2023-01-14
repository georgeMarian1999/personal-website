<script setup>
import ResearchPlaces from "@/components/home-components/ResearchPlaces.vue";
import CoordinationItems from "@/components/coordination-page-components/CoordinationItems.vue";
</script>

<template>
  <div class="row justify-content-around mt-4 coordination-deadlines">
    <div class="col-12 col-xl-5">
      <div class="row height-full align-content-center justify-content-center">
        <ResearchPlaces />
      </div>
    </div>
    <div class="col-12 col-xl-6">
      <div class="row coordination-deadline-text justify-content-center">
        <div class="col-12 text-align-center">
          <h3>Deadlines for the thesis / dissertation</h3>
        </div>
        <CoordinationItems />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.coordination-deadlines {
  min-height: 500px;
  padding: 30px;
  background: var(--component-background-color);
}

.coordination-deadline-text {
  margin-top: 30px;
}
</style>
