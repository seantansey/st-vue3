<script setup>
import { computed } from "vue";

const props = defineProps({
  createdAt: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  slug: {
    type: String,
  },
  tagList: {
    type: Array,
    default() {
      return [];
    },
  },
  title: {
    type: String,
  },
});

const tags = computed(() => {
  return props.tagList.map((tag) => `#${tag}`).join(" ");
});

const date = computed(() => {
  return new Date(props.createdAt).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
})
</script>

<template>
  <div class="blog-card">
    <div class="image-container">
      <router-link :to="{ name: 'blog-post', params: { id: slug } }">
        <div class="image-overlay-container">
          <img :src="img" />
          <div class="image-overlay"></div>
        </div>
      </router-link>
    </div>
    <div class="blog-content">
      <p class="tags">{{ tags }}</p>
      <router-link
        :to="{ name: 'blog-post', params: { id: slug } }"
        class="router-link"
      >
        <h2><span class="fwd-slash">/</span>{{ title }}</h2>
      </router-link>
      <p class="description">{{ description }}</p>
      <p class="date">{{ date}}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.blog-card {
  color: $primary;
  display: flex;
  margin: $margin-xl 0;

  @media only screen and (max-width: $tablet-sm) {
    flex-direction: column;
  }

  .image-container {
    flex: 2;

    @media only screen and (max-width: $tablet-lg) {
        flex: 3;
    }

    .image-overlay-container {
      position: relative;
      display: flex;
      
      img {
        width: 100%;
      }

      .image-overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: $secondary;
        opacity: .08;

        &:hover {
          opacity: 0;
        }
      }
    }
  }

  .blog-content {
    flex: 3;
    margin-left: $margin-lg;
    padding: $padding-xs;

    @media only screen and (max-width: $tablet-lg) {
      margin-left: $margin;
    }

    @media only screen and (max-width: $tablet-sm) {
      margin-left: 0;
      margin-top: $margin-sm;
    }
    .router-link {
      text-decoration: none;
      color: $primary;

      h2 {
        margin-top: $margin-xs;
        margin-bottom: 0;
        align-items: center;
        font-size: $font-size-xl;

        @media only screen and (max-width: $tablet-lg) {
          margin-bottom: 0;
        }

        @media only screen and (max-width: $mobile) {
          font-size: $font-size-lg;
        }

        &:hover {
          color: $secondary;
        }

        .fwd-slash {
          color: $secondary;
          margin-right: $margin-xs;
        }
      }
    }
    .description {
      color: $quaternary;
      margin: $margin 0;

      @media only screen and (max-width: $tablet-lg) {
        display: none;
      }
    }

    .date {
      position: relative;
      font-size: $font-size-sm;
      color: $quaternary;
      padding-left: $padding-xl;
      margin-top: $margin;

      @media only screen and (max-width: $tablet-lg) {
        display: none;
      }
    }

    .date::before {
      content: " ";
      width: 50px;
      height: 1px;
      background: $secondary;
      position: absolute;
      top: 50%;
      left: 0;
    }


    .tags {
      font-size: $font-size-sm;
      font-weight: $font-medium;
      color: $secondary;
      margin: 0;
    }
  }
}
</style>
