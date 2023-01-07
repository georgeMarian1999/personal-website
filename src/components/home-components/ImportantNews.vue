<script setup></script>

<template>
  <div class="news-box-wrapper section-card">
    <div class="news-box">
      <div class="row mt-3 justify-content-center">
        <div class="col-3"><h4>News</h4></div>
      </div>
      <div class="row">
        <div class="col position-relative">
          <button class="btn btn-primary btn-see-all-news" type="button">
            See all news
          </button>
          <div id="carouselNewsExampleIndicators" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p style="text-align: center">
                  <b>The hours for the AI course are changed for this week.</b
                  ><br />
                  For groups 455 and 433 we are gonna start the seminar at 14:00
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
            <button
              class="carousel-control-prev"
              data-bs-slide="prev"
              data-bs-target="#carouselNewsExampleIndicators"
              type="button"
            >
              <span
                aria-hidden="true"
                class="carousel-control-prev-icon"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              data-bs-slide="next"
              data-bs-target="#carouselNewsExampleIndicators"
              type="button"
            >
              <span
                aria-hidden="true"
                class="carousel-control-next-icon"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
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

    .carousel-item {
      padding-top: 0;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 25px;

      font-size: 13px;
    }

    .carousel-control-prev-icon {
      position: absolute;
      bottom: -5px;
    }

    .carousel-control-next-icon {
      position: absolute;
      bottom: -5px;
    }
  }

  .btn-see-all-news {
    position: absolute;
    bottom: -5px;
    z-index: 5;
    left: 0;
    right: 0;
    font-size: 12px;
    width: 120px;
    margin: auto;
  }
}

.news-box-wrapper::before {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  background: conic-gradient(
    transparent,
    transparent,
    transparent,
    transparent,
    #75e6da,
    #89cff0,
    #4e61de
  );
  animation: rotate 2.6s linear infinite;
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
