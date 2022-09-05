<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUIStore } from "@/stores/ui";

const router = useRouter();
const store = useUIStore();

const links = ref(["about", "blog", "contact"]);
let pageScrolled = ref(false);

const routeTo = (route) => {
  closeMenu();
  router.push({ name: route });
  if (route === 'home') store.hideNavbar()
};

const closeMenu = () => store.closeMenu();

const openMenu = () => store.openMenu();

const showNavbar = () => setTimeout(() => store.showNavbar(), 2500);

const checkActiveRoute = (route) => {
  const { path, name } = router.currentRoute.value;
  return route === name || route === path.split("/")[1];
};

const handleScroll = () => {
  if (window.scrollY > 0) pageScrolled.value = true;
  else pageScrolled.value = false;
};

const handleResize = () => {
  if (store.menuOpen && window.innerWidth > 768) closeMenu();
};

onMounted(() => {
  if (!store.navbarVisible) showNavbar()

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <nav :class="{ 'fade-in': !store.navbarVisible }">
    <div class="navbar" :class="{ 'navbar-shadow': pageScrolled }">
      <div class="navbar-left">
        <div class="website-logo-wrapper">
          <a @click="routeTo('home')" class="website-logo">
            <div class="website-logo-text-inner">ST</div>
          </a>
        </div>
        <router-link
          v-for="link in links"
          :to="{ name: link }"
          :key="link"
          class="router-link site-link"
          :class="{ 'router-link-active': checkActiveRoute(link) }"
        >
          {{ link }}
        </router-link>
      </div>
      <div class="navbar-right">
        <a class="download-button" href="/Sean_Tansey_Web_Resume.pdf" download>Resume</a>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/seantansey/" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" size="lg" />
          </a>
          <a href="https://github.com/seantansey" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github" size="lg" />
          </a>
          <a href="https://dev.to/stansey92" target="_blank">
            <font-awesome-icon icon="fa-brands fa-dev" size="lg" />
          </a>
        </div>
      </div>
      <button v-if="store.menuOpen" class="menu-button close-x" @click="closeMenu">
        <font-awesome-icon icon="fa-solid fa-xmark" size="xl" />
      </button>
      <button v-else class="menu-button" @click="openMenu">
        <font-awesome-icon icon="fa-solid fa-bars" size="xl" />
      </button>
    </div>
    <transition name="slide-fade">
      <div v-if="store.menuOpen" class="navbar-extended">
        <div class="menu-content">
          <a
            v-for="link in links"
            :key="link"
            @click="routeTo(link)"
            class="router-link"
            :class="{ 'router-link-active': checkActiveRoute(link) }"
          >
            {{ link }}
          </a>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/seantansey/" target="_blank">
              <font-awesome-icon icon="fa-brands fa-linkedin-in" size="lg" />
            </a>
            <a href="https://github.com/seantansey" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" size="lg" />
            </a>
            <a href="https://dev.to/stansey92" target="_blank">
              <font-awesome-icon icon="fa-brands fa-dev" size="lg" />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: $navbar-height;
    padding-left: $padding;
    padding-right: $padding;
    font-weight: $font-medium;

    .navbar-left {
      display: flex;
      justify-content: center;
      align-items: center;

      .website-logo-wrapper {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin-right: $margin-lg;
        .website-logo {
          height: 40px;
          width: 40px;
          border: 2px solid $secondary;
          text-decoration: none;
          position: relative;
          margin-right: $margin-sm;
          cursor: pointer;

          &:hover {
            background: $button-secondary-bg-hover;
          }

          .website-logo-text-inner {
            color: $secondary;
            position: absolute;
            bottom: 0;
            right: 5px;
            font-size: $font-size-lg;
            font-weight: $font-bold;
          }
        }
      }

      .site-link {
        height: $navbar-height;

        @media only screen and (max-width: $tablet-sm) {
          display: none;
        }
      }
    }

    .navbar-right {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: $margin-sm;

      @media only screen and (max-width: $tablet-sm) {
        display: none;
      }

      .download-button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        font-size: $font-size-sm;
        color: $secondary;
        opacity: 0.8;
        padding: 0 $padding;
        border: 1px solid $secondary;
        margin-right: $margin-xs;
        text-decoration: none;

        &:hover {
          opacity: 1;
          cursor: pointer;
          background: $button-secondary-bg-hover;
        }
      }

      .social-links {
        display: flex;
        justify-content: space-between;

        a {
          text-decoration: none;
          margin-left: $margin-lg;
          color: $quaternary;
          opacity: 0.6;

          &:first-child {
            margin-left: $margin;
          }

          &:hover {
            opacity: 1;
          }
        }
      }
    }

    .menu-button {
      display: none;

      @media only screen and (max-width: $tablet-sm) {
        display: block;
        border: none;
        background: none;
        color: $quaternary;
        opacity: 0.6;
      }

      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }

    .close-x {
      animation: spin .2s ease-in;
    }
  }

  .navbar-shadow {
    box-shadow: 0 1px 2px 0 rgba(black, 0.5);
  }

  .navbar-extended {
    display: none;
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
    height: calc(100vh - 65px);
    background: $bg;
    padding: $padding-lg;
    font-weight: $font-medium;


    @media only screen and (max-width: $tablet-sm) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .menu-content {
      max-width: 288px;
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: $margin-lg auto;

      .social-links {
        margin: $margin-lg $margin-xl 0 $margin-xl;
        display: flex;
        justify-content: space-between;

        a {
          color: $quaternary;
          opacity: 0.6;
          text-decoration: none;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  .router-link {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: $font-size-sm;
    text-decoration: none;
    color: $quaternary;
    margin-left: $margin-sm;
    padding: 0 $padding;
    cursor: pointer;
    text-transform: capitalize;

    @media only screen and (max-width: $tablet-sm) {
      margin: 0;
      padding: $padding-sm 0;
      border-bottom: 1px solid $tertiary;
    }

    &:hover {
      color: $primary;
    }
  }


  .router-link-active {
    color: $primary;
    position: relative;

     &::after {
        position: absolute;
        bottom: -1px;
        left: 0;
        height: 1px;
        width: 100%;
        content: " ";
        background: $secondary;
      }
  }

.fade-in {
  animation: fadeIn 2s ease-in;
}

@keyframes fadeIn {
  0% { 
    opacity: 0; 
  }
  25% {
    opacity: 0;
  }
  100% { 
    opacity: 1 
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: rotate(90deg);
    opacity: 1;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.12s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
