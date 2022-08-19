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
  <div class="page" :class="{ 'no-scroll': store.menuOpen }">
    <NavBar />
    <div class="page-content-container">
      <img class="background-image" src="@/assets/img/circle-nodes-solid.svg" />
      <div class="page-content">
        <a v-if="backButton" class="back-button" @click="$router.back()">
          <font-awesome-icon icon="fa-solid fa-chevron-left" size="sm" />
          Back
        </a>
        <slot></slot>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  .page-content-container {
    position: relative;
    overflow: hidden;
    flex: 1;

    .background-image {
      position: absolute;
      height: 1600px;
      top: 64px;
      left: 50%;
      transform: translateX(-50%);
    }

    .page-content {
      position: relative;
      max-width: 1000px;
      margin: auto;
      padding: 100px;
      padding-top: $padding-xl;
      min-height: 100%;

      @media only screen and (max-width: $tablet-sm) {
        padding-left: 50px;
        padding-right: 50px;
      }

      @media only screen and (max-width: $mobile) {
        padding-left: $padding;
        padding-right: $padding;
      }

      .back-button {
        position: absolute;
        top: 40px;
        left: 100px;
        color: $secondary;
        text-decoration: none;
        font-weight: $font-semibold;

        @media only screen and (max-width: $tablet-sm) {
          left: 50px;
        }

        @media only screen and (max-width: $mobile) {
          left: 20px;
        }
      }

      .back-button:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
