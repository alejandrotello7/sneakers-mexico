<template>
  <div>
    <div class="py-5">
      <Navbar/>
    </div>
    <div class="content lg:flex-1 lg:flex lg:flex-row flex-col py-8">
      <div class="news xl:w-3/5 lg:w-6/12 lg:order-2 border-solid border-l-2 pl-4 w-full">
        <NewsList location=".." />
      </div>
      <div class="advertising lg:order-first xl:w-1/5 lg:w-3/12 w-full">
      </div>
      <div class="advertising hidden lg:flex xl:flex xl:w-1/5 lg:w-3/12 lg:order-3 border-solid border-l-2">
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "@vuepress/theme-default/components/Navbar";
import NewsList from "../NewsList";

export default {
  name: "NewsLayout",
  components: {
    Navbar,
    NewsList

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