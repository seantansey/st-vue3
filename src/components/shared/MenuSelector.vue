<script setup>
import { ref } from "vue";

const emit = defineEmits(["select"]);

defineProps({
  rightAlign: {
    type: Boolean,
    default: false,
  },
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
    <div class="menu-desktop" :class="{ right: rightAlign }">
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
        font-weight: $font-bold;
        transition: all 0.3s linear;
        border-right: 3px solid $tertiary;
        margin-right: 50px;
        flex: 1;
        color: $tertiary;
        padding: $padding;
        white-space: pre;
      }

      .selector:hover {
        cursor: pointer;
        color: $primary;
      }

      .selector.selected {
        flex: 2;
        font-weight: $font-bold;
        border-color: $secondary;
        color: $primary;
      }
    }

    .menu-content {
      flex: 2;
      display: flex;
      align-items: center;
    }
  }

  .menu-desktop.right {
    flex-direction: row-reverse;

    .menu-selector {
      .selector {
        border-right: none;
        margin-right: 0;
        border-left: 3px solid $tertiary;
        margin-left: 50px;
      }

      .selector:hover {
        cursor: pointer;
        color: $primary;
      }

      .selector.selected {
        flex: 2;
        font-weight: $font-bold;
        border-color: $secondary;
        color: $primary;
      }
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
      flex: 1;
      justify-content: space-between;
      align-items: center;
      font-weight: $font-bold;
      border-bottom: 2px solid $secondary;
      margin-bottom: $margin;
      padding: $padding-sm;
      cursor: pointer;

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
        padding: $padding-sm;
        color: $tertiary;
        border-bottom: 1px solid $tertiary;
        font-weight: $font-bold;
        font-size: $font-size-sm;
      }

      .selector:last-child {
        border-bottom: none;
      }

      .selector.selected {
        color: $primary;
      }

      .selector:hover {
        cursor: pointer;
        color: $primary;
      }
    }
  }
}
</style>
