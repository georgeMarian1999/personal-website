<script setup>
import { onMounted, ref } from "vue";

const number = ref(4);

onMounted(() => {
  setInterval(() => {
    number.value = number.value + 2;
    if (number.value > 10) {
      number.value = 2;
    }
  }, 7000);
});
</script>

<template>
  <div
    :class="{ 'limited-spaces': number < 5 }"
    class="research-box-wrapper section-card"
  >
    <div class="research-box">
      <div class="row mt-3 justify-content-center">
        <div class="col text-align-center">
          <h5>Bachelor/Dissertation collaboration</h5>
        </div>
      </div>
      <div class="row justify-content-center">
        <p
          v-if="number < 5"
          style="color: red; margin-bottom: -20px; width: 140px"
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
      <div class="row mt-2 justify-content-center align-content-center">
        <button class="btn btn-primary btn-see-all-research">
          See details
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.research-box-wrapper {
  display: grid;
  width: 100%;
  place-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1;
}

.research-number {
  font-size: 50px;
}

.limited-spaces-text {
  position: absolute;
  top: 75px;
  right: 0;
  left: 0;
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
    width: 130px;
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

@media (max-width: 768px) {
  .research-number {
    font-size: 40px;
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
