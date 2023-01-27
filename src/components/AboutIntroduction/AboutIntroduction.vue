<template>
  <section class="about-introduction">
    <h2>Introduction</h2>
    <div class="flex-row">
      <div class="intro-content">
        <h3>
          Hi, I'm Sean Tansey. A Software Engineer specializing in
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
          As a firm believer in constant progression and lifelong learning, I am constantly
          challenging my understanding, honing my craft and working to better myself as a developer and person.
          A principle thats as applicable to my career as it is my hobbies (where you'll find me snowboarding,
          fishing, or practicing my skills as a amatuer "pizzaiolo" tossing pizzas in the air with my friends). 
        </p>
      </div>
      <div class="intro-image">
        <img src="@/assets/img/denver_headshot.jpg" alt="Sean Tansey headshot"/>
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
    margin-bottom: $margin-lg;
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
