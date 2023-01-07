<script setup>
import aiPicture from "@/assets/pictures/ai.jpg";
import javascriptPicture from "@/assets/pictures/javascript.jpg";
</script>

<template>
  <div class="section-card current-teaching-card position-relative">
    <div class="current-teaching-title">
      <h1>Current Teaching</h1>
    </div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide height-full"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          aria-current="true"
          aria-label="Slide 1"
          class="active"
          data-bs-slide-to="0"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        ></button>
        <button
          aria-label="Slide 2"
          data-bs-slide-to="1"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item height-full active" style="margin-top: 90px">
          <div class="container height-full">
            <div
              class="row height-full justify-content-center align-content-center"
            >
              <div class="col d-none d-xl-block">
                <img
                  :src="aiPicture"
                  alt="..."
                  class="mw-100 ai-picture"
                  style="height: 230px"
                />
              </div>
              <div class="col">
                <div
                  class="row height-full align-content-between justify-content-center"
                >
                  <div class="row justify-content-center">
                    <h2>Artificial inteligence</h2>
                  </div>
                  <div class="row justify-content-center">
                    <p>
                      The AI class has a course, seminar and laboratory. The
                      course is every week Monday at 6 PM. The seminar and the
                      laboratory is once every two weeks. The time and day
                      depends on each group's personal timetable. Please see the
                      course page for more detailed information about the place
                      and timetable.
                    </p>
                  </div>
                  <div class="row justify-content-center">
                    <button
                      class="btn mt-3 btn-primary"
                      style="width: 80%"
                      type="button"
                    >
                      See course page
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item height-full" style="margin-top: 90px">
          <div class="container height-full">
            <div
              class="row height-full justify-content-center align-content-center"
            >
              <div class="col web-programming-slide">
                <div
                  class="row height-full align-content-between justify-content-center"
                >
                  <div class="row justify-content-center">
                    <h2>Web Programming</h2>
                  </div>
                  <div class="row justify-content-center">
                    <p>
                      This class has a course and a laboratory. The course is
                      every Wednesday at 1 PM. The laboratory is once every two
                      weeks and usually takes place either Monday or Thursday,
                      depending on each group. Please see the course page for
                      more details.
                    </p>
                  </div>
                  <div class="row justify-content-center">
                    <button
                      class="btn btn-primary mt-3"
                      style="width: 80%"
                      type="button"
                    >
                      See course page
                    </button>
                  </div>
                </div>
              </div>
              <div class="col d-none d-xl-block">
                <img
                  :src="javascriptPicture"
                  alt="..."
                  class="mw-100 javascript-picture"
                  style="height: 230px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.current-teaching-card {
  height: 400px;
}

.current-teaching-title {
  position: absolute;
  left: 55px;
  top: 20px;
}

.javascript-picture {
  margin-left: 100px;
}

.web-programming-slide {
  padding-left: 60px;
}

.ai-picture {
  margin-left: 100px;
}
</style>
