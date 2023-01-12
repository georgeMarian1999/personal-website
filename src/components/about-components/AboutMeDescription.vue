<script setup>
import LinkednIcon from "../svg-components/LinkednIcon.vue";
import GitHubIcon from "../svg-components/GitHubIcon.vue";
import InstagramIcon from "../svg-components/InstagramIcon.vue";

const description =
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.";
</script>

<template>
  <div
    class="about-me-description row mt-5 align-content-center justify-content-around"
  >
    <div class="col-12 mt-5 mb-5 col-lg-4 personal-picture height-full">
      <div class="wrapper">
        <div class="profile">
          <img
            alt="profile"
            class="thumbnail"
            src="../../assets/pictures/profile.png"
          />
          <div class="check"><i class="fas fa-check"></i></div>
          <h3 class="name">George Marian</h3>
          <p class="title">University Professor</p>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam aliquid porro!
          </p>
        </div>

        <div class="social-icons">
          <div class="icon">
            <LinkednIcon />
          </div>

          <div class="icon">
            <GitHubIcon />
          </div>

          <div class="icon">
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6 personal-description">
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
  color: white;
  font-family: "Fira Code", monospace;
  font-weight: 800;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  width: 170px;
  animation: type 2s steps(40, end) forwards,
    blink 0.5s step-end infinite alternate;
}

@keyframes type {
  0% {
    width: 0;
  }
  1%,
  99% {
    border-right: 1px solid var(--primary-color);
  }
  100% {
    border-right: none;
  }
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

.about-me-description {
  padding: 25px;
}

$purple-gradient: linear-gradient(
  45deg,
  rgba(87, 29, 146, 1) 0%,
  rgba(172, 25, 102, 1) 100%
);
$purple-gradient: linear-gradient(to bottom right, #c90a6d, #ff48a0);
$blue1-gradient: linear-gradient(to bottom right, #5e5aec, #3f9efc);
$blue2-gradient: linear-gradient(to bottom right, #6452e9, #639ff9);
$shadow: 0 13px 26px rgba(#000, 0.2), 0 3px 6px rgba(#000, 0.2);

.wrapper {
  max-height: 450px;
  background: var(--background-color);
  transition: background 0.6s ease;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  box-shadow: 0 8px 40px rgba(#000000, 0.2);

  .profile {
    margin-top: 2.2em;
    position: relative;

    &:after {
      width: 100%;
      height: 1px;
      content: " ";
      display: block;
      margin-top: 1.3em;
      background: #e9eff6;
    }

    .check {
      position: absolute;
      right: 5em;
      bottom: 12.7em;

      i {
        color: #fff;
        width: 20px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        border-radius: 100%;
        background: $purple-gradient;
      }
    }

    .thumbnail {
      width: 124px;
      height: 124px;
      display: flex;
      background: var(--component-background-color);
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1.5em;
      border-radius: 100%;
      object-fit: scale-down;
      box-shadow: $shadow;
    }

    .name {
      color: var(--headings-text);
      font-size: 24px;
      font-weight: 600;
      text-align: center;
    }

    .title {
      color: var(--body-text);
      font-size: 0.75em;
      font-weight: 300;
      text-align: center;
      padding-top: 0.5em;
      padding-bottom: 0.7em;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .description {
      color: var(--headings-text);
      font-size: 14px;
      font-weight: 300;
      text-align: center;
      margin-bottom: 1.3em;
    }
  }

  .social-icons {
    display: flex;
    margin-top: 1.2em;
    justify-content: space-between;

    .icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}

.personal-description {
  background-color: var(--primary-color);
  color: var(--headings-text);
  padding: 20px;
  min-height: 500px;
  border-radius: 10px;
}
</style>
