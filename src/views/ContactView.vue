<script setup>
import PageTemplate from "../components/shared/PageTemplate.vue";
import ContactForm from "../components/ContactForm/ContactForm.vue";
</script>

<template>
  <PageTemplate>
    <div class="contact">
      <h1><span class="fwd-slash">/</span>Contact</h1>
      <div class="flex-row">
        <div class="contact-info">
          <h3>
            Interested in working together? Have a question? Contact me through
            any of the means below!
          </h3>
          <h4>Social media</h4>
          <a
            class="linkedin"
            href="https://www.linkedin.com/in/seantansey/"
            target="_blank"
          >
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              size="xl"
              class="social-icon"
            />
            <span class="social-text">linkedin.com/in/seantansey</span>
          </a>
          <a
            class="github"
            href="https://github.com/seantansey"
            target="_blank"
          >
            <font-awesome-icon
              icon="fa-brands fa-github"
              size="lg"
              class="social-icon"
            />
            <span class="social-text">github.com/seantansey</span>
          </a>
          <a class="github" href="https://dev.to/seantansey" target="_blank">
            <font-awesome-icon
              icon="fa-brands fa-dev"
              size="lg"
              class="social-icon"
            />
            <span class="social-text">dev.to/seantansey</span>
          </a>
        </div>
        <div class="contact-form-wrapper">
          <h4>Send a message</h4>
          <ContactForm />
        </div>
      </div>
    </div>
  </PageTemplate>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.contact {
  h1 {
    font-size: $font-size-header;
    border-bottom: 1px solid $border-color;
    padding-bottom: $padding-xs;

    .fwd-slash {
      color: $secondary;
      margin-right: $margin-xs;
    }
  }

  h3 {
    margin-top: 0;
    color: $secondary;
    margin-bottom: $margin-sm;
  }

  .flex-row {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: $tablet-sm) {
      flex-direction: column;
    }
  }

  .contact-info {
    flex: 1;
    margin-right: $margin-lg;
  }

  a {
    display: flex;
    align-items: center;
    margin-bottom: $margin-sm;
    color: $tertiary;
    font-size: $font-size;

    .social-icon {
      margin-right: $margin-sm;
    }
  }

  a:hover {
    color: $secondary;
    text-decoration: underline;
  }

  .contact-form-wrapper {
    flex: 1;

    h4 {
      display: none;
      @media only screen and (max-width: $tablet-sm) {
        display: block;
      }
    }
  }
}
</style>
