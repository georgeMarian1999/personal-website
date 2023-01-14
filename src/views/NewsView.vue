<script setup>
import NewsIntroduction from "@/components/news-components/NewsIntroduction.vue";
import BaseDivider from "@/components/shared/BaseDivider.vue";
import NewsList from "@/components/news-components/NewsList.vue";
</script>

<template>
  <div class="container">
    <NewsIntroduction />
    <BaseDivider :reverse="false" />
    <NewsList />
    <BaseDivider :reverse="true" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 100%;
}
</style>
