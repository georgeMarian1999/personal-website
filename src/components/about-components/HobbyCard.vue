<script setup>
import GymPicture from "../svg-components/GymPicture.vue";
import GamingIcon from "../svg-components/GamingIcon.vue";
import MobileDevPicture from "../svg-components/MobileDevPicture.vue";

const props = defineProps(["hobby"]);
</script>
<template>
  <div class="hobby-card mt-5">
    <div class="hobby-card-inner">
      <div class="hobby-card-front">
        <div class="row align-content-center justify-content-center">
          <div class="col-12">
            <GymPicture v-if="hobby.id === 1" />
            <GamingIcon v-if="hobby.id === 2" />
            <MobileDevPicture v-if="hobby.id === 3" />
          </div>
          <div class="col-12 date">{{ props.hobby.title }}</div>
        </div>
      </div>
      <div class="hobby-card-back">
        <p>{{ hobby.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hobby-card {
  background-color: transparent;
  width: 100%;
  max-width: 400px;
  height: 300px;
  perspective: 1000px;
  font-family: sans-serif;
}

.date {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.hobby-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.hobby-card:hover .hobby-card-inner {
  transform: rotateY(180deg);
}

.hobby-card-front,
.hobby-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
}

.hobby-card-front {
  background: var(--primary-color);
  color: white;
}

.hobby-card-back {
  background: var(--primary-color);
  color: white;
  transform: rotateY(180deg);
}
</style>
