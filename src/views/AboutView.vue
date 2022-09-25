<script setup>
import PageTemplate from "../components/shared/PageTemplate.vue";
import AboutIntroduction from "../components/AboutIntroduction/AboutIntroduction.vue";
import AboutSkills from "../components/AboutSkills/AboutSkills.vue";
import AboutBackground from "../components/AboutBackground/AboutBackground.vue";
import { useHead } from "@vueuse/head"

useHead({
  title: 'About | seantansey.com',
  meta: [
    {
      name: 'description',
      content: "I'm Sean Tansey. A Fullstack Software Engineer specializing in Frontend Development based out of Denver, Colorado."
    }
  ]
})
</script>

<template>
  <PageTemplate>
    <section class="about">
      <h1><span class="fwd-slash">/</span>About</h1>
      <AboutIntroduction />
      <AboutBackground />
      <AboutSkills />
    </section>
  </PageTemplate>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.about {
  h1 {
    font-size: $font-size-header;
    border-bottom: 1px solid $border-color;
    padding-bottom: $padding-xs;

    .fwd-slash {
      color: $secondary;
      margin-right: $margin-xs;
    }
  }
}
</style>
