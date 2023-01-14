<script setup>
const props = defineProps(["deadline"]);
console.log(props);
</script>

<template>
  <div class="deadline-card mt-5">
    <div class="row height-full align-content-around justify-content-center">
      <p class="date col-12">{{ deadline.date }}</p>
      <div class="title-container col-12">
        <p class="title">{{ deadline.title }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*Magic card*/
.deadline-card {
  max-width: 180px;
  min-height: 200px;
  background: var(--background-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition-duration: 0.5s;
}

.date {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: var(--headings-text);
}

.title {
  text-align: center;
  color: var(--headings-text);
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
}

.title-container {
  width: 100%;
  margin-top: 0.7em;
  background-color: var(--component-background-color);
}
</style>
