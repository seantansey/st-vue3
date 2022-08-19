import { defineStore } from "pinia";
import { ref } from "vue";

export const useUIStore = defineStore("ui", () => {
  const menuOpen = ref(false);

  const closeMenu = () => {
    menuOpen.value = false;
  };

  const openMenu = () => {
    menuOpen.value = true;
  };

  return {
    menuOpen,
    closeMenu,
    openMenu,
  };
});
