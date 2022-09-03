<script setup>
import PageTemplate from "../components/shared/PageTemplate.vue";
import AboutIntroduction from "../components/AboutIntroduction/AboutIntroduction.vue";
import AboutSkills from "../components/AboutSkills/AboutSkills.vue";
import AboutBackground from "../components/AboutBackground/AboutBackground.vue";
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
