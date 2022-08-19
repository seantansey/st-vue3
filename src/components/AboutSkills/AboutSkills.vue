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
    <h2>Skills</h2>
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
          <i :class="skill[1]" class="colored"></i>
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
  }

  .logo-row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    font-weight: $font-bold;
    font-size: $font-size-sm;
    color: $quaternary;

    i {
      display: block;
      font-size: 80px;
      padding: $padding-sm;
    }

    .skill {
      padding: $padding-sm;
    }
  }
}
</style>
