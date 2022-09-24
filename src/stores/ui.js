import { defineStore } from "pinia";
import { ref } from "vue";

export const useUIStore = defineStore("ui", () => {
  const menuOpen = ref(false);
  const navbarVisible = ref(false);

  const closeMenu = () => {
    menuOpen.value = false;
  };

  const openMenu = () => {
    menuOpen.value = true;
  };

  const showNavbar = () => {
    navbarVisible.value = true;
  }

  const hideNavbar = () => {
    navbarVisible.value = false;
  }

  return {
    menuOpen,
    closeMenu,
    openMenu,
    navbarVisible,
    showNavbar,
    hideNavbar
  };
});
