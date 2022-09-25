<script setup>
import { onMounted, reactive, computed } from "vue";
import PageTemplate from "../components/shared/PageTemplate.vue";
import { getBlogPostBySlug } from "../dataloaders/blog.js";
import { useRoute, useRouter } from "vue-router";
import { trackPageView } from "../utils/googleAnalytics.js";
import { useHead } from "@vueuse/head"


const route = useRoute();
const router = useRouter();

const post = reactive({
  body: "",
  cover: "",
  description: "",
  title: "",
  url: "",
});


onMounted(async () => {
  const { id } = route.params;
  const article = await getBlogPostBySlug(id);

  if (article.error) {
    router.push({ name: "not-found" });
    return;
  }

  trackPageView(article.title, id);
  post.body = article.body_html;
  post.cover = article.cover_image;
  post.description = article.description
  post.title = article.title;
  post.url = article.url;

  
});

useHead({
  title: computed(() => `${post.title} | seantansey.com`),
  meta: [
    {
      name: 'description',
      content: computed(() => post.description)
    }
  ]
})
</script>

<template>
  <PageTemplate back-button>
    <article class="blog-post">
      <h1><span class="fwd-slash">/</span>{{ post.title }}</h1>
      <img :src="post.cover" />
      <p>
        Article sourced from dev.to via the dev.to API. View the original
        article @: <a :href="post.url" target="_blank">{{ post.url }}</a>
      </p>
      <div v-html="post.body"></div>
    </article>
  </PageTemplate>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.blog-post {
  h1 {
    font-size: $font-size-header;
    border-bottom: 1px solid $tertiary;
    padding-bottom: $padding-xs;
    margin-bottom: 20px;

    .fwd-slash {
      color: $secondary;
      margin-right: $margin-xs;
    }
  }

  p {
    color: $quaternary;
    margin: 0;
    font-size: $font-size-sm;
    margin-bottom: $margin-lg;
  }

  a {
    color: $secondary;
  }
}
</style>
