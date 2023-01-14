<script setup>
const props = defineProps(["items"]);
</script>
<template>
  <ol class="list-group list-group-numbered">
    <li
      v-for="item in props.items"
      :key="item.id"
      class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start"
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold">{{ item.title }}</div>
        {{ item.description }}
      </div>
    </li>
  </ol>
</template>
<style lang="scss" scoped>
.list-group-item {
  background: var(--background-color);
  color: var(--headings-text);
}
</style>
