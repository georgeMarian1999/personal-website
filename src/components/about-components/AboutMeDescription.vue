<script setup>
import LinkednIcon from "../svg-components/LinkednIcon.vue";
import GitHubIcon from "../svg-components/GitHubIcon.vue";
import InstagramIcon from "../svg-components/InstagramIcon.vue";

const description =
  "I am a University Professor with a degree in Artificial Intelligence, Web Programming and Machine Learning from Harvard University. I am passionate about Web Design, Mobile Development, and Machine Learning projects. I strive to use my expertise in these areas to make a positive impact on the world. I have worked on a variety of projects in the past such as creating mobile apps, developing algorithms for machine learning, and designing websites. I have a strong understanding of the latest technologies and trends in the tech industry, and use my knowledge to develop innovative and effective solutions. My experience in these areas has allowed me to create projects that are both user-friendly and efficient. I am constantly looking for new challenges and opportunities to expand my knowledge and skills. I am passionate about technology, and believe that it has the potential to make a real difference in the world.\n";
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
          <p class="date">University Professor</p>
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
  padding: 30px;
  font-size: 16px;

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

    .date {
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
    margin-bottom: 1.2em;
    justify-content: space-between;

    .icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-direction: column;
      transition: all 0.5s ease-in-out;

      svg path {
        transition: all 0.5s ease-in-out;
      }

      &:hover {
        transform: scale(1.1);

        svg path {
          fill: var(--primary-color);
        }
      }
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
