<script setup>
import { computed, ref } from "vue";
import MenuSelector from "../shared/MenuSelector.vue";
import config from "./config";

const selectedIndex = ref(0);

const select = (index) => {
  selectedIndex.value = index;
};

const selectedEducation = computed(() => {
  return config.education[selectedIndex.value];
});

const schools = computed(() => {
  return config.education.map((school) => school.title);
});
</script>

<template>
  <section class="about-education">
    <h2>Education</h2>
    <MenuSelector
      :selectors="schools"
      :selected-index="selectedIndex"
      @select="select"
    >
      <div>
        <h3>
          {{ selectedEducation.program }}<span class="at-symbol"> @ </span
          ><span class="education-title">{{ selectedEducation.title }}</span>
        </h3>
        <div class="education-data">
          <font-awesome-icon icon="fa-solid fa-calendar" />
          <span class="education-data-text">{{ selectedEducation.dates }}</span>
          <font-awesome-icon icon="fa-solid fa-location-dot" />
          <span class="education-data-text">{{
            selectedEducation.location
          }}</span>
        </div>
      </div>
    </MenuSelector>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.about-education {
  margin-bottom: $margin-xl;

  h2 {
    font-size: $font-size-xl;
  }

  h3 {
    margin-top: 0;
    margin-bottom: $margin-sm;

    .at-symbol {
      color: $tertiary;
    }
    .education-title {
      color: $secondary;
    }
  }

  .education-data {
    font-size: $font-size-sm;
    color: $tertiary;
    font-weight: $font-medium;

    .education-data-text {
      margin: 0 $margin-sm;
    }
  }
}
</style>
