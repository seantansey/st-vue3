<script setup>
import { ref } from "vue";

const emit = defineEmits(["select"]);

defineProps({
  selectors: {
    type: Array,
    required: true,
  },
  selectedIndex: {
    type: Number,
    default: 0,
  },
});

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const select = (index) => {
  emit("select", index);
  toggleDropdown();
};
</script>

<template>
  <div class="menu">
    <div class="menu-desktop">
      <div class="menu-selector">
        <div
          v-for="(selector, index) in selectors"
          :key="index"
          :class="{ selected: index === selectedIndex }"
          class="selector"
          @click="select(index)"
        >
          {{ selector }}
        </div>
      </div>
      <div class="menu-content">
        <slot></slot>
      </div>
    </div>
    <div class="menu-mobile">
      <div @click="toggleDropdown" class="menu-selector">
        <div>{{ selectors[selectedIndex] }}</div>
        <font-awesome-icon
          v-if="dropdownOpen"
          icon="fa-solid fa-xmark"
          class="icon"
        />
        <font-awesome-icon
          v-else
          icon="fa-solid fa-chevron-down"
          class="icon"
        />
      </div>
      <div v-if="dropdownOpen" class="menu-dropdown">
        <div
          v-for="(selector, index) in selectors"
          :key="index"
          class="selector"
          :class="{ selected: index === selectedIndex }"
          @click="select(index)"
        >
          {{ selector }}
        </div>
      </div>
      <div class="menu-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.menu {
  position: relative;

  .menu-desktop {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: $tablet-sm) {
      display: none;
    }

    .menu-selector {
      flex: 1;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      .selector {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: $font-medium;
        border-right: 2px solid $bg-secondary;
        transition: all 0.3s linear;
        color: $tertiary;
        padding: $padding;
        white-space: pre;

        &.selected {
          color: $primary;
          background: $bg-secondary;
          border-right: 2px solid $secondary;
          box-shadow: 0 1px 2px 0 rgba(black, 0.5);
        }

        &:hover {
          cursor: pointer;
          color: $primary;
        }
      }
    }

    .menu-content {
      flex: 2;
      margin-left: $margin-xl;
    }
  }

  .menu-mobile {
    display: none;
    flex-direction: column;

    @media only screen and (max-width: $tablet-sm) {
      display: flex;
    }

    .menu-selector {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: $font-medium;
      margin-bottom: $margin;
      padding: $padding-sm $padding;
      cursor: pointer;
      color: $primary;
      background: $bg-secondary;
      border-left: 1px solid $secondary;
      box-shadow: 0 1px 2px 0 rgba(black, 0.5);

      .icon {
        color: $tertiary;
      }
    }

    .menu-dropdown {
      position: absolute;
      top: 45px;
      width: 100%;
      box-shadow: 0 5px 5px 0 rgba(black, 0.5);

      .selector {
        display: flex;
        flex: 1;
        background: $bg;
        padding: $padding-sm $padding;
        color: $tertiary;
        font-weight: $font-medium;
        font-size: $font-size-sm;

        &.selected {
          border-left: 1px solid $secondary;
          background: $bg-secondary;
          color: $primary;
        }

        &:hover {
          cursor: pointer;
          color: $primary;
          background: $bg-secondary;
        }
      }
    }
  }
}
</style>
