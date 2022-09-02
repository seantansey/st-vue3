<template>
  <div class="footer">
    <div class="footer-text">
      This site was built with Vue, NGINX, Node.js, Express and PostgreSQL.
    </div>
    <div class="social-wrapper">
      <router-link :to="{ name: 'contact' }">
        <font-awesome-icon icon="fa-solid fa-envelope" size="xl" />
      </router-link>
      <a href="https://www.linkedin.com/in/seantansey/" target="_blank">
        <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
      </a>
      <a href="https://github.com/seantansey" target="_blank">
        <font-awesome-icon icon="fa-brands fa-github" size="xl" />
      </a>
      <a href="https://dev.to/seantansey" target="_blank">
        <font-awesome-icon icon="fa-brands fa-dev" size="xl" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.footer {
  width: 100%;
  text-align: center;
  font-size: $font-size-sm;
  color: $tertiary;
  margin-top: $margin-xl;
  padding: $padding 0;

  .footer-text {
    margin: $margin $margin-lg 0 $margin;
  }

  .social-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: $margin;
  }

  a {
    color: $tertiary;
    margin: 0 $margin;
  }

  a:hover {
    color: $quaternary;
  }
}
</style>
