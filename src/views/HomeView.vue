<script setup>
  import { useHead } from "@vueuse/head"

  useHead({
    title: 'Home | seantansey.com',
    meta: [
      {
        name: 'description',
        content: 'Helping people turn their ideas into elegant and effective digital solutions.'
      }
    ]
  })
</script>

<template>
  <main class="home">
    <font-awesome-icon
      class="background-icon"
      icon="fa-solid fa-circle-nodes"
    />
    <div class="home-content">
      <div class="logo-wrapper">
        <div class="logo-square">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="logo-text">ST</div>
        </div>
    </div>
      <h1 class="text-1">seantansey.com</h1>
      <p>
        Helping people turn their ideas into elegant and effective digital
        solutions.<br />
        Need a website or app? Not sure how to get started? Let's chat!
      </p>
      <div class="button-row">
        <router-link :to="{ name: 'about' }" class="learn-more">
          Learn more
        </router-link>
        <router-link :to="{ name: 'contact' }" class="contact">
          Contact
        </router-link>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .background-icon {
    position: absolute;
    top: 0;
    height: 100%;
    color: $black;
    opacity: 0.2;
    animation-name: spin;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .home-content {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
    .logo-wrapper {
      width: 320px;
      height: 320px;
      position: relative;
      margin-bottom: $margin-lg;
      .logo-square {
        position: absolute;
        overflow: unset;
        height: 320px;
        width: 320px;
        z-index: 10;
  
        & span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          z-index:100;
        }
  
        & span:nth-child(1) {
          transform: rotate(0deg);
        }
  
        & span:nth-child(2) {
          transform: rotate(90deg);
        }
  
        & span:nth-child(3) {
          transform: rotate(180deg);
        }
  
        & span:nth-child(4) {
          transform: rotate(270deg);
        }
  
        & span:nth-child(2):before {
          animation-delay: 0.3s;
        }
        & span:nth-child(3):before {
          animation-delay: .6s;
        }
        & span:nth-child(4):before {
          animation-delay: .9s;
        }
  
        & span:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 15px;
          background: $secondary;
          animation: animate 1.2s linear;
          animation-fill-mode: both;
        }
  
          .logo-text {
            position: absolute;
            bottom: -7px;
            right: 31px;
            font-weight: $font-bold;
            font-size: 170px;
            color: $secondary;
            opacity: 0;
            animation: fadeIn .8s ease-in;
            animation-delay: 1.2s;
            animation-fill-mode: forwards;
          }
      }
    }

    h1 {
      font-size: $font-size-giant;
      font-weight: $font-bold;
      margin: 0;
      opacity: 0;
      animation: fadeIn .8s ease-in;
      animation-delay: 2s;
      animation-fill-mode: forwards;

      @media only screen and (max-width: $tablet-sm) {
        font-size: $font-size-header;
      }
    }

    p {
      text-align: center;
      color: $tertiary;
      margin: $margin 0;
      padding: 0 $padding-xl;
      opacity: 0;
      animation: fadeIn .8s ease-in;
      animation-delay: 2.5s;
      animation-fill-mode: forwards;
    }

    .button-row {
      display: flex;
      opacity: 0;
      animation: fadeIn 1.6s ease-in;
      animation-delay: 3s;
      animation-fill-mode: forwards;

      a {
        display: block;
        text-align: center;
        margin: $margin $margin-sm;
        font-size: $font-size;
        font-weight: $font-medium;
        border: none;
        padding: $padding-xs $padding;
        text-decoration: none;
      }     

      .learn-more {
        border: 1px solid $secondary;
        color: $white;
        background: $button-primary-bg;

        &:hover {
          background: $secondary;
        }
      }

      .contact {
        border: 1px solid $secondary;
        color: $secondary;
        background: transparent;
        transition: opacity 0.3s;
        opacity: 0.7;

        &:hover {
          opacity: 1;
          background: $button-secondary-bg-hover;
        }
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
}

@keyframes animate {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  25% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: right; 
  }
  100% {
    transform: scaleX(1);
    transform-origin: right;
  }
}
</style>
