<script setup></script>
<template>
  <nav class="header-bar navbar-dark navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand header-logo" href="#">Babes-Bolyai University</a>
      <button
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-bs-target="#navbarSupportedContent"
        data-bs-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a aria-current="page" class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact' }" class="nav-link" href="#"
              >Contact
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              aria-expanded="false"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              Courses
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact' }" class="nav-link" href="#"
              >Coordination
            </router-link>
          </li>
        </ul>
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

.nav-item {
  margin-right: 20px;
}

.nav-link {
  color: var(--primary-color) !important;
}

.dropdown-menu {
  background-color: var(--component-background-color) !important;

  .dropdown-item {
    color: var(--headings-text);
  }
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
  -webkit-text-fill-color: transparent;
}
</style>
