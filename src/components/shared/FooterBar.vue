<template>
  <footer>
    <div class="footer-text">
      This site was built with Vue, NGINX, Node.js, Express and PostgreSQL.
    </div>
    <div class="social-wrapper">
      <router-link to="contact">
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
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: $font-size-sm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $tertiary;

  .footer-text {
    margin: $margin $margin-lg 0 $margin;
  }

  .social-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: $margin 0;
  }

  a {
    color: $tertiary;
    margin: 0 $margin;
  }

  a:hover {
    color: $secondary;
  }
}
</style>
