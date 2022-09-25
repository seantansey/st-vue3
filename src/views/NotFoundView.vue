<script setup>
  import { useHead } from "@vueuse/head"

useHead({
  title: 'Page Not Found | seantansey.com',
  meta: [
    {
      name: 'description',
      content: 'Page not found'
    }
  ]
})
</script>

<template>
  <section class="page-not-found">
    <h1>404</h1>
    <p>The requested page was not found.</p>
    <router-link to="/">
      <div class="website-logo-text">Return to home page</div>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.page-not-found {
  height: 100vh;
  padding: $padding-xl 100px;

  @media only screen and (max-width: $tablet-sm) {
    padding: $padding-lg;
  }

  h1 {
    font-size: $font-size-giant;
  }

  p {
    color: $tertiary;
    font-size: $font-size-xl;
  }

  a {
    color: $secondary;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: $secondary;
  }
}
</style>
