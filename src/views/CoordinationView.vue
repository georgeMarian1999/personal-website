<script setup>
import CoordinationDeadlines from "@/components/coordination-page-components/CoordinationDeadlines.vue";
import BaseDivider from "@/components/shared/BaseDivider.vue";
import CoordinationInterests from "@/components/coordination-page-components/CoordinationInterests.vue";
import ResearchSteps from "@/components/coordination-page-components/ResearchSteps.vue";
</script>

<template>
  <div class="container">
    <CoordinationDeadlines />
    <BaseDivider :reverse="false" />
    <CoordinationInterests />
    <BaseDivider :reverse="true" />
    <ResearchSteps />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 100%;
}
</style>
