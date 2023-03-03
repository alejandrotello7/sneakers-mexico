<template>
  <div>
    <div class="py-3">
      <Navbar />
    </div>
    <div
      class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
    >
      <p class="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
      <p class="text-gray-500 text-lg">Vue and Tailwind CSS in action</p>

      <Content />
      <div>
        <Content class="container mx-auto bg-red-400" slot-key="picnew" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@vuepress/theme-default/components/Navbar";
export default {
  components: { Navbar },
};
</script>
