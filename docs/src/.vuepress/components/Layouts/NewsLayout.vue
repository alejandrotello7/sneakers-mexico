<template>
  <div>
    <div class="py-5">
      <Navbar/>
    </div>
    <div class="content py-5 flex">
      <div class="advertising w-1/5 order-1 border-solid border-r-2">
      </div>
      <div class="news w-3/5 order-2 py-5 h-full">
        <h1 class="text-5xl font-bold text-center pb-4">
          Noticias Actuales
        </h1>
        <div class="head-new grid grid-cols-2 flex">
          <div class="flex-initial px-3 pb-3">
            <a :href="articles[0].path">
              <img :alt="articles[0].frontmatter.title" :src="'..' + articles[0].frontmatter.imageUrl"/>
            </a>
          </div>
          <div class="flex-none">
            <h2 class="text-xl font-bold">
              {{ articles[0].frontmatter.title }}
            </h2>
            <p>{{ articles[0].frontmatter.description }}</p>
            <router-link :to="articles[0].path">Read more</router-link>
          </div>
        </div>
        <div class="past-news grid grid-cols-2 flex">
          <div v-for="article in articles" class="py-5 cols-2">
            <div class="grid grid-cols-2 flex">
              <div class="flex-auto px-3 pb-3">
                <a :href="article.path">
                  <img :alt="article.frontmatter.title" :src="'..' + article.frontmatter.imageUrl"/>
                </a>
              </div>
              <div class="flex-auto">
                <h2 class="text-xl font-bold">
                  {{ article.frontmatter.title }}
                </h2>
                <p>{{ article.frontmatter.description }}</p>
                <router-link :to="article.path">Read more</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="advertising order-3 w-1/5  border-solid border-l-2 ">

      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "@vuepress/theme-default/components/Navbar";

export default {
  name: "NewsLayout",
  components: {
    Navbar,

  },
  computed: {
    articles() {
      return this.$site.pages
          .filter(x => x.path.startsWith('/noticias/') && !x.frontmatter.blog_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
  },

}
</script>

<style scoped>

</style>