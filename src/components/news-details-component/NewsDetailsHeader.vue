<script setup>
import News1Picture from "@/components/svg-components/News1Picture.vue";
import News2Picture from "@/components/svg-components/News2Picture.vue";
import News3Picture from "@/components/svg-components/News3Picture.vue";
import News4Picture from "@/components/svg-components/News4Picture.vue";
import News5Picture from "@/components/svg-components/News5Picture.vue";
import News6Picture from "@/components/svg-components/News6Picture.vue";

const props = defineProps(["news"]);
</script>

<template>
  <div class="row mt-4 news-details-header">
    <div class="row">
      <div class="col-12 text-align-center">
        <h3>{{ props.news.title }}</h3>
      </div>
    </div>
    <div class="row mt-4 align-content-center justify-content-center">
      <News1Picture v-if="news.id === 1" />
      <News2Picture v-if="news.id === 2" />
      <News3Picture v-if="news.id === 3" />
      <News4Picture v-if="news.id === 4" />
      <News5Picture v-if="news.id === 5" />
      <News6Picture v-if="news.id === 6" />
    </div>
  </div>
</template>

<style lang="scss">
.news-details-header {
  min-height: 200px;
  background: var(--component-background-color);
  padding: 30px;

  svg {
    height: 200px;
    width: 300px;
  }
}
</style>
