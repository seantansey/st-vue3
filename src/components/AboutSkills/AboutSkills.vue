<script setup>
import { computed, ref } from "vue";
import MenuSelector from "@/components/shared/MenuSelector.vue";
import config from "./config.js";

const selectedCategoryIndex = ref(0);

const selectCategory = (index) => {
  selectedCategoryIndex.value = index;
};

const selectedCategorySkills = computed(() => {
  return config.skills[selectedCategoryIndex.value].technologies;
});

const categories = computed(() => {
  return config.skills.map((skill) => skill.category);
});
</script>

<template>
  <section class="about-skills">
    <h2>Skills & Technologies</h2>
    <MenuSelector
      :selectors="categories"
      :selected-index="selectedCategoryIndex"
      right-align
      @select="selectCategory"
    >
      <div class="logo-row">
        <div
          v-for="skill in selectedCategorySkills"
          :key="skill[0]"
          class="skill"
        >
          <i :class="skill[1]"></i>
          {{ skill[0] }}
        </div>
      </div>
    </MenuSelector>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.about-skills {
  margin-bottom: $margin-xl;

  h2 {
    font-size: $font-size-xl;
    margin-bottom: $margin-lg;
  }

  .logo-row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    font-weight: $font-medium;
    font-size: $font-size-sm;
    color: $quaternary;

    i {
      display: block;
      font-size: $font-size-giant;
      padding: $padding-sm;
    }

    .skill {
      padding: $padding-sm;
    }
  }
}
</style>
