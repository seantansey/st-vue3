<template>
  <section class="about-introduction">
    <h2>Introduction</h2>
    <div class="flex-row">
      <div class="intro-content">
        <h3>
          Hi, I'm Sean Tansey. A Fullstack Software Engineer specializing in
          Frontend Development based out of Denver, Colorado. 
        </h3>
        <p>I enjoy building solutions for complex problems.</p>
        <p>
          While trained in fullstack development I've found myself drawn to
          building UI's from the ground up in both web and mobile applications.
          I particularly enjoy working with modern JavaScript frameworks such as
          Vue, React and Svelte.
        </p>
        <p>
          Currently employed at
          <a href="https://ihsmarkit.com/index.html" target="_blank"
            >S&P Global</a
          >, where I build and maintain UI's for multiple large clients in the
          financial industry.
        </p>
      </div>
      <div class="intro-image">
        <img src="@/assets/img/galvanize-headshot.jpg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.about-introduction {
  margin-bottom: $margin-xl;

  h2 {
    font-size: $font-size-xl;
    margin-top: 0;
    margin-bottom: $margin;
  }

  .flex-row {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: $tablet-sm) {
      flex-direction: column;
    }
  }

  .intro-content {
    margin-right: $margin-lg;
    flex: 1;

    @media only screen and (max-width: $tablet-sm) {
      margin-right: 0;
      margin-bottom: $margin;
    }

    h3 {
      color: $secondary;
      margin: 0;
    }

    p {
      color: $quaternary;
    }

    a {
      color: $secondary;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .intro-image {
    flex: 1;
    text-align: center;

    img {
      width: 100%;
      max-width: 400px;
    }
  }
}
</style>
