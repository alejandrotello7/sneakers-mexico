<template>
  <div>
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content py-8 flex ">
      <div class="flex-1 flex flex-col sm:flex-row py-8">
        <div class="releases order-first w-1/5">
          <ReleaseList  />
        </div>
        <main class="content w-3/5 order-2 border-solid border-l-2 pl-4">
          <NewsList />
        </main>
        <div class="feed w-1/5 order-3 border-solid border-l-2">
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