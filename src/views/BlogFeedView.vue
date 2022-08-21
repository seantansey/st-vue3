<script setup>
import { onMounted, reactive } from "vue";
import BlogCard from "../components/BlogCard/BlogCard.vue";
import PageTemplate from "../components/shared/PageTemplate.vue";
import { getAllBlogPosts } from "../dataloaders/blog.js";

const posts = reactive([]);

onMounted(async () => {
  const blogPosts = await getAllBlogPosts();
  posts.push(...blogPosts);
});
</script>

<template>
  <PageTemplate>
    <section class="blog-feed">
      <h1><span class="fwd-slash">/</span>Blog</h1>
      <h3>
        As a bootcamp/self taught developer I've struggled with some of the
        deeper CS concepts. These simply weren't things I was taught when I
        learned how to code. I became a strong practical programmer, but felt
        foolish when trying to articulate issues with some of the more senior
        dev's on my team. I've learned many new concepts along the way and below
        is a collection of those lessons.
      </h3>
      <div v-if="posts.length" class="blog-post-list">
        <p>
          All blog posts are pulled from the dev.to API. To interact with any of
          these posts see my account @
          <a href="https://dev.to/seantansey" target="_blank"
            >dev.to/seantansey</a
          >
        </p>
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :description="post.description"
          :img="post.social_image"
          :slug="post.slug"
          :tag-list="post.tag_list"
          :title="post.title"
          :url="post.url"
        ></BlogCard>
      </div>
      <div v-else class="no-blog-posts">
        Whoops, nothing to see here.... try a different filter?
      </div>
    </section>
  </PageTemplate>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.blog-feed {
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
    color: $secondary;
  }

  .no-blog-posts {
    padding: $padding-xl 0;
    text-align: center;
    color: $quaternary;
  }

  p {
    color: $quaternary;

    a {
      color: $secondary;
    }
  }
}
</style>
