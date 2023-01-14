<script setup>
import { useRouter } from "vue-router";

const props = defineProps(["news"]);
const router = useRouter();

function goBackToNewsList() {
  router.push({ name: "news" });
}
</script>

<template>
  <div class="row news-description">
    <div class="col-12">
      <p>{{ props.news.description }}</p>
    </div>
    <div class="col-12">
      <button class="btn-primary btn" @click="goBackToNewsList">
        Go back to news
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-description {
  min-height: 500px;
  padding: 40px;
  background: var(--component-background-color);

  .col-12 {
    background: var(--background-color);
    padding-left: 120px;
    padding-right: 120px;
    padding-top: 40px;
    font-size: 22px;
  }
}
</style>
