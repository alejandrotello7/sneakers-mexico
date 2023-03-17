<template>
  <div>
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content py-8">
      <div class="lg:flex-1 lg:flex lg:flex-row flex-col py-8">
        <main class="content xl:w-3/5 lg:w-6/12 lg:order-2 border-solid border-l-2 pl-4 w-full">
          <NewsList />
        </main>
        <div class="releases lg:order-first xl:w-1/5 lg:w-3/12 w-full">
          <ReleaseList  />
        </div>
        <div class="feed hidden lg:flex xl:flex xl:w-1/5 lg:w-3/12 lg:order-3 border-solid border-l-2">
          <FeedList />
        </div>
      </div>
    </div>
    <div>
      <footer>
      </footer>
    </div>
  </div>
</template>

<script>
import Navbar from "@vuepress/theme-default/components/Navbar";
import LanzamientosLayout from "../LanzamientosLayout";
import ListaLanzamientos from "../ListaLanzamientos";
import ReleaseList from "../ReleaseList";
import NewsList from "../NewsList"
import FeedList from "../FeedList";

export default {
  name: "HomeLayout.vue",
  components:{
    NewsList,
    ReleaseList,
    Navbar,
    LanzamientosLayout,
    ListaLanzamientos,
    FeedList
  }
}
</script>

<style scoped>

</style>