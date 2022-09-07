<script setup>
import NavBar from "./NavBar.vue";
import FooterBar from "./FooterBar.vue";
import { useUIStore } from "../../stores/ui.js";

const store = useUIStore();

defineProps({
  backButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="page-template" :class="{ 'no-scroll': store.menuOpen }">
    <header>
      <NavBar />
    </header>
    <div class="content-container">
      <img class="background-image" src="@/assets/img/circle-nodes-solid.svg" />
      <transition name="fade" appear>
        <div class="page-transition-container">
          <main>
            <div class="page-content">
              <a v-if="backButton" class="back-button" @click="$router.back()">
                <font-awesome-icon icon="fa-solid fa-chevron-left" size="sm" />
                Back
              </a>
                  <slot></slot>
            </div>
          </main>
          <footer>
            <FooterBar />
          </footer>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.page-template {
  position: relative;

  header {
    position: sticky;
    top: 0;
    background: $bg;
    z-index: 1;
  }

  .content-container {
    position: relative;
    overflow: hidden;

     .background-image {
      position: absolute;
      height: 1600px;
      top: $navbar-height;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }

    .page-transition-container {
      .page-content {
        position: relative;
        max-width: 1000px;
        margin: auto;
        padding: $padding-xxl;
        min-height: calc(100vh - 300px);
  
        @media only screen and (max-width: $tablet-sm) {
          padding: $padding-lg $padding-xl;
        }
  
        @media only screen and (max-width: $mobile) {
          padding-left: $padding;
          padding-right: $padding;
        }
  
        .back-button {
          position: absolute;
          top: $margin-xl;
          left: $margin-xxl;
          color: $secondary;
          text-decoration: none;
          font-weight: $font-medium;
  
          @media only screen and (max-width: $tablet-sm) {
            left: $margin-xl;
          }
  
          @media only screen and (max-width: $mobile) {
            left: $margin;
          }
        }
  
        .back-button:hover {
          cursor: pointer;
        }
  
        .slot-wrapper {
          position: relative;
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
