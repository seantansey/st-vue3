<script setup>
import { computed } from "vue";
import config from "./config.js";

const backgroundNodes = computed(() => {
  return config.background;
});
</script>


<template>
  <section class="about-background">
    <h2>Background</h2>
         <div 
            v-for="node in backgroundNodes"
            class="node"
        >
            <div class="node-branch-container">
                <div class="node-branch">
                    <div class="node-merge-top"></div>
                    <div class="node-merge-middle"></div>
                    <div class="node-merge-bottom"></div>
                    <div class="date-end">{{ node.dates[0] }}</div>
                    <div class="date-start">{{ node.dates[1] }}</div>
                </div>
            </div>
            <div class="node-text">
                <h3>{{ node.title }}<span class="at-symbol">@</span><span class="company">{{ node.company }}</span></h3>
                <div class="date-range">{{ node.dates[1] }} - {{ node.dates[0] }}</div>
                <p>{{ node.text }}</p>
            </div>
        </div> 
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.about-background {
  margin-bottom: $margin-xl;

  h2 {
    font-size: $font-size-xl;
    margin-top: 0;
    margin-bottom: $margin-lg;
  }

  .node {
    display: flex;
    justify-content: center;
    margin-left: 100px;

    @media only screen and (max-width: $tablet-sm) {
      margin-left: 0;
    }

    .node-branch-container {
        display: flex;
        border-left: 3px solid $secondary;

        .node-branch {
            width: 40px;
            position: relative;
            margin: $margin-lg 0;
            border-top: 3px solid $secondary;
            border-right: 3px solid $secondary;
            border-bottom: 3px solid $secondary;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;

             .node-merge-top {
                position: absolute;
                top: -11.5px;
                left: -11.5px;
                height: 20px;
                width: 20px;
                border-radius: 10px;
                background: $secondary;
            }

            .node-merge-middle {
                position: absolute;
                top: calc(50% - 11.5px);
                right: -11.5px;
                height: 20px;
                width: 20px;
                border-radius: 10px;
                background: $secondary;
            }

             .node-merge-bottom {
                position: absolute;
                bottom: -11.5px;
                left: -11.5px;
                height: 20px;
                width: 20px;
                border-radius: 10px;
                background: $secondary;
            }

            .date-end {
                position: absolute;
                top: -10px;
                right: 70px;
                white-space: nowrap;
                font-size: $font-size-sm;
                color: $quaternary;
                font-weight: $font-medium;

                @media only screen and (max-width: $tablet-sm) {
                    display: none;
                }
            }

             .date-start {
                position: absolute;
                bottom: -10px;
                right: 70px;
                white-space: nowrap;
                font-size: $font-size-sm;
                color: $quaternary;
                font-weight: $font-medium;

                @media only screen and (max-width: $tablet-sm) {
                    display: none;
                }
            }
        }
    }

    .node-text {
        max-width: 600px;
        padding: $padding $padding-xl;

        @media only screen and (max-width: $tablet-sm) {
            padding: $padding 0 $padding $padding-lg;
        }

        h3 {
            font-size: $font-size;
            margin: 0;

            .at-symbol {
                color: $tertiary;
                margin: 0 $margin-xs;
            }

            .company {
                color: $secondary;
            }
        }

        .date-range {
            display: none;

            @media only screen and (max-width: $tablet-sm) {
                display: block;
                margin: $margin-xs 0 $margin-sm;
                color: $tertiary;
                font-size: $font-size-sm;
                font-weight: $font-medium;
            }
        }
    
        p {
            margin: $margin-sm 0;
            font-size: $font-size;
            color: $quaternary;
            line-height: 20px;
        }
    }

      &:first-of-type {
            .node-branch {
                border-top: none;
                border-top-right-radius: 0;

                .node-merge-top {
                    left: auto;
                    right: -11.5px;
                }

                .node-merge-middle {
                    display: none;
                }
            }
        }

         &:last-of-type {
            .node-branch {
                margin-bottom: 0;
                border-bottom: none;
                border-bottom-right-radius: 0;

                .node-merge-bottom {
                    left: auto;
                    right: -11.5px;
                }
                .node-merge-middle {
                    display: none;
                }

                .node-merge-bottom {
                    display: none;
                }
            }
        }
  }
}
</style>
