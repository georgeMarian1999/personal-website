<script setup></script>
<template>
  <nav class="header-bar navbar-dark navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-brand header-logo"
        >Babes-Bolyai University</router-link
      >
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
              Teaching
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <RouterLink
                  :to="{ name: 'course', params: { id: 1 } }"
                  class="dropdown-item"
                  href="#"
                  >Web programming
                </RouterLink>
              </li>
              <b-dropdown-divider></b-dropdown-divider>
              <li>
                <RouterLink
                  :to="{ name: 'course', params: { id: 2 } }"
                  class="dropdown-item"
                  >Artificial Intelligence
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"
              >About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'news' }" class="nav-link"
              >News
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'coordination' }" class="nav-link"
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
    #5e5dc4 56%,
    #5c5ce5 93%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
