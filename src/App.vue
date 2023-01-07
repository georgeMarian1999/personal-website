<script setup>
import { RouterView } from "vue-router";

import HeaderBar from "@/components/HeaderBar.vue";
</script>

<template>
  <HeaderBar></HeaderBar>
  <RouterView />
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  background: var(--background-color);
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 0px;
}
</style>
