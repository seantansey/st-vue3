<template>
  <section class="about-introduction">
    <h2>Introduction</h2>
    <div class="flex-row">
      <div class="about-content">
        <h3>
          Hi, I'm Sean Tansey. A Fullstack Software Engineer specializing in
          Frontend Development.
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
            >IHS Markit</a
          >, where I build and maintain UI's for multiple large clients in the
          financial industry.
        </p>
      </div>
      <div class="about-image">
        <img
          class="profile-picture"
          src="@/assets/img/galvanize-headshot.jpg"
        />
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
  }

  .flex-row {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: $tablet-sm) {
      flex-direction: column;
    }
  }

  .about-content {
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

  .about-image {
    flex: 1;
    text-align: center;
    .profile-picture {
      width: 100%;
      max-width: 400px;
      background: $secondary;
    }
  }
}
</style>
