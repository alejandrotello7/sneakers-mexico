<template>
  <div>
    <h1 class="text-2xl font-bold pb-4">
      Noticias actuales
    </h1>
    <div class="grid sm:grid-rows-3 grid-cols-1 w-full">
      <div class="grid pb-4 sm:grid-cols-2 sm:row-span-1">
        <div class="pl-4">
          <span class="text-xl font-bold">
            <a :href="articles[0].path">
            {{ articles[0].frontmatter.title }}
            </a>
          </span>
          <br>
          <span class="italic text-xs">
            {{ formatDate(articles[0].frontmatter.date) }}
          </span>
          <p class="pt-3 invisible sm:visible">
            {{ articles[0].frontmatter.description }}
            <br>
            <router-link :to="articles[0].path">Read more</router-link>
          </p>
        </div>
        <div class="sm:order-first">
          <a :href="articles[0].path">
            <img :alt="articles[0].frontmatter.title" :src="location + articles[0].frontmatter.imageUrl" />
          </a>
        </div>
      </div>
      <div class="grid sm:grid-cols-3 sm:row-span-2">
        <div v-for="n in 3" class="px-4">
          <span class="text-xl font-bold">
            <a :href="articles[n].path">
              {{ articles[n].frontmatter.title }}
            </a>

          </span>
          <br>
          <span class="italic text-xs">
            {{ formatDate(articles[n].frontmatter.date) }}
          </span>
          <div class="pt-3">
            <a :href="articles[n].path">
              <img :alt="articles[n].frontmatter.title" :src="location + articles[n].frontmatter.imageUrl" />
            </a>

          </div>
          <div class="invisible sm:visible">
            {{ articles[n].frontmatter.description }}
            <br>
            <router-link :to="articles[n].path">Read more</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NewsList.vue",
  props: {
    location: String,
  },
  computed: {
    articles() {
      return this.$site.pages
          .filter(x => x.path.startsWith('/noticias/') && !x.frontmatter.blog_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
  },
  methods:{
    formatDate(fecha){
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      console.log(this.location)
      return new Date(fecha).toLocaleDateString('es-mx',options)
    }
  }
}
</script>

