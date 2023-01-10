<script setup>
const props = defineProps(["reverse"]);
</script>

<template>
  <div v-if="!props.reverse" class="row justify-content-center">
    <div class="col-2 divider divider-full"></div>
    <div class="col-2 divider divider-dot"></div>
  </div>
  <div v-else class="row justify-content-center">
    <div class="col-2 divider divider-dot"></div>
    <div class="col-2 divider divider-full"></div>
  </div>
</template>

<style lang="scss">
.divider {
  height: 7px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 20px;
  //background: var(--primary-color);
  background: white;
}

.divider-dot {
  max-width: 15px;
  margin-left: 10px;
}

.divider-full {
  margin-left: 10px;
  max-width: 90px;
}
</style>
