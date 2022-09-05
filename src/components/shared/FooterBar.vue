<template>
  <div class="footer">
    <p>This site was built using Vue, NGINX, Node.js, Express and PostgreSQL</p>
    <p><router-link :to="{ name: 'home' }">seantansey.com</router-link> designed & developed Sean Tansey </p>
    <div class="social-wrapper">
      <router-link :to="{ name: 'contact' }">
        <font-awesome-icon icon="fa-solid fa-envelope" size="lg" />
      </router-link>
      <a href="https://www.linkedin.com/in/seantansey/" target="_blank">
        <font-awesome-icon icon="fa-brands fa-linkedin-in" size="lg" />
      </a>
      <a href="https://github.com/seantansey" target="_blank">
        <font-awesome-icon icon="fa-brands fa-github" size="lg" />
      </a>
      <a href="https://dev.to/seantansey" target="_blank">
        <font-awesome-icon icon="fa-brands fa-dev" size="lg" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.footer {
  font-size: $font-size-sm;
  padding: $padding 0;
  border-top: 1px solid $border-color;
  margin: 0 100px;

  @media only screen and (max-width: $tablet-sm) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media only screen and (max-width: $mobile) {
    margin-left: $padding;
    margin-right: $padding;
  }

  p {
    margin: $margin-xs 0;
    color: $tertiary;
    text-align: center;

    a {
      color: $secondary;
      opacity: .8;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        opacity: 1;
      }
    }
  }

  .social-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: $margin; 

    a {
      color: $tertiary;
      margin: 0 $margin;

      &:hover {
        color: $quaternary;
        cursor: pointer;
      }
    }
  }
}
</style>
