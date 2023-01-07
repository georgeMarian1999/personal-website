<script setup></script>
<template>
  <nav class="header-bar navbar bg-body-tertiary">
    <div class="container-fluid">
      <div class="row justify-content-between width-full">
        <div class="header-logo col-6">
          <h2 style="margin-top: 5px">Babes-Bolyai University</h2>
        </div>
        <div class="navigation col">
          <div class="row height-full align-content-center">
            <div class="col">
              <router-link to="/">Home</router-link>
            </div>
            <div class="col">
              <router-link to="/contact">Contact</router-link>
            </div>
            <div class="col">
              <router-link to="/">Courses</router-link>
            </div>
          </div>
        </div>
        <!--        <div class="col-2">
                  <div class="row height-full align-content-center">
                    <div class="col">
                      <ThemeSwitch />
                    </div>
                  </div>
                </div>-->
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.header-bar {
  width: 100%;
  min-height: 60px;
  padding-left: 30px;
  background: var(--component-background-color);
  color: var(--headings-text);
  padding-right: 30px;
}

.header-logo {
  // CSS
  color: #7270b3;
  background-image: -webkit-linear-gradient(
    0deg,
    #7270b3 10%,
    #5f5dde 24%,
    #4240c7 56%,
    #1b18c9 93%
  );
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>
