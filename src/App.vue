<script setup>
  import { onMounted } from "vue";
  import getAccessToken from './dataloaders/token';
  import { useUIStore } from "@/stores/ui";

  const store = useUIStore();

  onMounted(async () => {
    const { token } = await getAccessToken({
      username: 'mockUsername',
      password: 'mockPassword'
    })
    if (token) store.setBearerToken(token);
  })
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/stylesheets/variables.scss";
@import "@/assets/stylesheets/overrides.scss";
</style>
