<script setup>
import { computed } from "vue";

const props = defineProps({
  description: {
    type: String
  },
  img: {
    type: String
  },
  slug: {
    type: String
  },
 tagList: {
    type: Array,
    default(rawProps) {
        return []
    }
  },
  title: {
    type: String
  }
});

const tags = computed(() => {
    return props.tagList.map((tag) => `#${tag}`).join(' ')
})
</script>

<template>
    <div class="blog-card">
        <div class="image-container">
            <router-link :to="{ name: 'blog-post', params: { id: slug }}" class="router-link">
                <img :src="img">
            </router-link>
        </div>
        <div class="blog-content">
            <p class="tags">{{ tags }}</p>
            <router-link :to="{ name: 'blog-post', params: { id: slug }}" class="router-link">
                <h2>{{ title }}</h2>
            </router-link>
            <p class="description">{{ description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
    
    .blog-card {
        color: $primary;
        display: flex;
        margin: $margin-xl 0;

         @media only screen and (max-width: $tablet-lg) {
            flex-direction: column;
        }

        .image-container {
            flex: 1;

            img {
                width: 100%;
            }
        }

        .blog-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: $margin-lg;

            @media only screen and (max-width: $tablet-lg) {
                margin-left: 0;
                margin-top: $margin-sm;
            }
            .router-link {
                text-decoration: none;
                color: $primary;

                h2 {
                    margin: $margin-xs 0 $margin 0;
                    align-items: center;
                    font-size: $font-size-xl;

                    @media only screen and (max-width: $tablet-lg) {
                        margin-bottom: 0;
                    }

                    &:hover {
                        color: $secondary;
                    }
                }
            }
            .description {
                color: $quaternary;
                margin: 0;

                @media only screen and (max-width: $tablet-lg) {
                    display: none;
                }
            }
            .tags {
                font-size: $font-size-sm;
                font-weight: $font-semibold;
                color: $secondary;
                margin: 0;
            }
        }
    }
</style>


