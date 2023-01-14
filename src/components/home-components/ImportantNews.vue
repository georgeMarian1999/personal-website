<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToNews() {
  router.push({ name: "news" });
}
</script>

<template>
  <div class="news-box-wrapper section-card">
    <div class="news-box">
      <div class="row mt-3 justify-content-center">
        <div class="col text-align-center"><h4>Important News</h4></div>
      </div>
      <div class="row">
        <div class="col">
          <button
            class="btn btn-primary btn-see-all-news"
            type="button"
            @click="goToNews"
          >
            See all news
          </button>
          <button
            class="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#carouselNewsExampleIndicators"
            type="button"
          >
            <span aria-hidden="true" class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#carouselNewsExampleIndicators"
            type="button"
          >
            <span aria-hidden="true" class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
          </button>
          <div
            id="carouselNewsExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p style="text-align: center">
                  <b>The hours for the AI course are changed for this week.</b
                  ><br />
                  For groups 455 and 433 we are gonna start the course at 14:00
                  on Thursday!
                </p>
              </div>
              <div class="carousel-item">
                <p style="text-align: center">
                  <b>Web Programming. We are gonna skip the next lecture!</b
                  ><br />
                  We are gonna skip the next lecture that occurs on Monday for
                  this course.
                </p>
              </div>
              <div class="carousel-item">
                <p style="text-align: center">
                  <b
                    >Last year students should send me an email for
                    Bachelor/Dissertation collaboration!</b
                  ><br />
                  Time is running out! Secure your places for the collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.news-box-wrapper {
  display: grid;
  width: 100%;
  place-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1;
}

.news-box-wrapper {
  .news-box {
    z-index: 5;
    position: absolute;
    inset: 5px;
    border-radius: 10px;
    background: var(--background-color);

    .carousel-inner {
      padding-left: 40px;
      padding-right: 40px;
    }

    .carousel-item {
      padding: 0 15px 25px;

      font-size: 15px;
    }

    .carousel-control-prev-icon {
      position: absolute;
      bottom: 20px;
    }

    .carousel-control-next-icon {
      position: absolute;
      bottom: 20px;
    }
  }

  .btn-see-all-news {
    position: absolute;
    bottom: 20px;
    z-index: 5;
    left: 0;
    right: 0;
    font-size: 15px;
    width: 120px;
    margin: auto;
  }
}

.news-box-wrapper::before {
  content: "";
  position: absolute;
  width: 150%;
  height: 300%;
  background: conic-gradient(
    transparent,
    transparent,
    transparent,
    transparent,
    #4e61de
  );
  animation: rotate 12s linear infinite;
}

@media (max-width: 600px) {
  .btn-see-all-news {
    width: 90px !important;
    font-size: 10px !important;
  }
  .carousel-item {
    font-size: 10px !important;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
