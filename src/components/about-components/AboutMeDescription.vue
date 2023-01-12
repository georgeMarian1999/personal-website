<script setup>
const description =
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.";
</script>

<template>
  <div
    class="about-me-description row mt-5 align-content-center justify-content-around"
  >
    <div class="col-6 personal-description">
      <div class="row">
        <div class="col-4 writer">
          <h2>About Me.</h2>
        </div>
      </div>
      <div class="row mt-4 description">
        <div class="col-12">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
    <div class="col-4 personal-picture height-full">Hey</div>
  </div>
</template>

<style lang="scss">
.description {
  .col-12 {
    padding-left: 10px;
    padding-right: 10px;
  }
}

.writer h2 {
  width: 100%;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

.about-me-description {
  padding-bottom: 25px;
}

.personal-description {
  background-color: var(--primary-color);
  color: var(--headings-text);
  padding: 20px;
  min-height: 500px;
  border-radius: 10px;
}
</style>
