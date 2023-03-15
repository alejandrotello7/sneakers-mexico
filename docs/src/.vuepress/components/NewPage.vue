<template>
  <div>
    <div class="py-5">
      <Navbar/>
    </div>
    <div class="content py-5 flex">
      <div class="advertising w-1/5 order-1 border-solid border-r-2">

      </div>
      <div class="article w-3/5 order-2 py-5 h-full px-3">
        <h1 class="text-2xl font-extrabold pb-3">
          {{ $page.frontmatter.title }}
        </h1>
        <span class="italic">
          {{ formatDate }}
        </span>
        <Content />
        <div>
          <footer>
            <span>
              <div class="flex justify-start pt-1">
                <img class="flex-initial ":src="'/assets/img/tello.png'" />
                <div class="flex-initial">
                  <br>
                  <span> Escrito por: </span>
                  <br>
                  <span class="font-bold"> {{ $page.frontmatter.author }} </span>
                </div>
              </div>
          </span>
          </footer>
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
  name: "NewPage",
  components: {
    Navbar,
  },
  computed: {
    formatDate(){
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(this.$page.frontmatter.date).toLocaleDateString('es-mx', options)
    },
  }
}
</script>

<style scoped>

</style>