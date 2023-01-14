<script setup>
import { onMounted, ref } from "vue";

const number = ref(4);

onMounted(() => {
  // setInterval(() => {
  //   number.value = number.value + 2;
  //   if (number.value > 10) {
  //     number.value = 2;
  //   }
  // }, 7000);
});
</script>

<template>
  <div
    :class="{ 'limited-spaces': number < 5 }"
    class="research-box-wrapper section-card"
  >
    <div class="research-box">
      <div class="row height-full align-content-around justify-content-center">
        <div class="row justify-content-center">
          <div class="col text-align-center">
            <p class="research-title">Bachelor/Dissertation collaboration</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <p
            v-if="number < 5"
            style="
              color: red;
              margin-top: -10px;
              margin-bottom: -10px;
              width: 140px;
            "
          >
            Limited spaces!
          </p>
        </div>

        <div class="row">
          <div class="col text-align-center research-number">{{ number }}</div>
        </div>

        <div class="row">
          <div class="col text-align-center">
            Number of places left for a collaboration
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.research-box-wrapper {
  display: grid;
  max-width: 400px;
  place-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1;
}

.research-title {
  font-size: 16px;
}

.research-number {
  font-size: 30px;
}

.limited-spaces-text {
  position: absolute;
  top: 65px;
  right: 0;
  left: 0;
  font-size: 14px;
  margin: auto;
}

.research-box-wrapper {
  .research-box {
    z-index: 5;
    position: absolute;
    inset: 5px;
    border-radius: 10px;
    background: var(--background-color);
  }

  .btn-see-all-research {
    font-size: 12px;
    width: 120px;
    margin: auto;
  }
}

.research-box-wrapper.limited-spaces::before {
  background: conic-gradient(
    transparent,
    transparent,
    transparent,
    transparent,
    red
  );
}

.research-box-wrapper::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 250%;
  background: conic-gradient(
    transparent,
    transparent,
    transparent,
    transparent,
    #75e6da,
    #89cff0,
    #4e61de
  );
  animation: rotateInverse 10s linear infinite;
}

@media (max-width: 600px) {
  .research-number {
    font-size: 30px;
  }
  .btn-see-all-research {
    width: 90px !important;
    font-size: 10px !important;
  }
}

@keyframes rotateInverse {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
