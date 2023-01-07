<script setup>
import LightTheme from "@/components/svg-components/LightTheme.vue";
import DarkTheme from "@/components/svg-components/DarkTheme.vue";
import { computed, ref } from "vue";

const props = defineProps(["value"]);
console.log(props.value);
const inputValue = ref(false);

const switchStyles = computed(() => {
  return { transform: inputValue.value ? "translateX(32px)" : "translateX(0)" };
});

const lightClass = computed(() => {
  return {
    "active-switch": inputValue.value === false,
  };
});

const darkClass = computed(() => {
  return {
    "active-switch": inputValue.value === true,
  };
});

const toggle = (newValue) => {
  inputValue.value = newValue;
  document.documentElement.classList.remove("theme--light");
  document.documentElement.classList.remove("theme--dark");
  if (inputValue.value) {
    document.documentElement.classList.add("theme--dark");
  } else {
    document.documentElement.classList.add("theme--light");
  }
};
</script>

<template>
  <div class="switch-wrapper">
    <div class="switch-background">
      <div class="icon-wrapper">
        <LightTheme :class="lightClass" @click="toggle(false)" />
      </div>
      <div class="icon-wrapper">
        <DarkTheme :class="darkClass" @click="toggle(true)" />
      </div>
    </div>
    <div :style="switchStyles" class="switch-indicator"></div>
  </div>
</template>

<style lang="scss">
.switch-wrapper {
  width: 65px;
  height: 30px;
  position: relative;
  background: var(--background-color);
  border-radius: 15px;
  border: 1px solid var(--headings-text);
}

.switch-background {
  width: 100%;
  height: 100%;
  z-index: 5;
  padding-left: 6px;
  padding-right: 6px;
  display: flex;
  justify-content: space-between;
}

.icon-wrapper {
  width: 18px;
  position: relative;
  z-index: 2;
  margin: 0 !important;
  height: 18px;
}

.switch-indicator {
  position: absolute;
  height: 22px;
  width: 22px;
  transition: all 0.35s;
  z-index: 1;
  top: 3px;
  left: 4px;
  border-radius: 50%;
  background: var(--headings-text);
  //border: 1px solid var(--headings-text);
}
</style>
