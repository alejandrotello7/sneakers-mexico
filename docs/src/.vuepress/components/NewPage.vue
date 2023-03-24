<template>
  <div class="theme-container"
       :class="pageClasses"
       @touchstart="onTouchStart"
       @touchend="onTouchEnd">
    <div class="py-5">
      <Navbar
          v-if="shouldShowNavbar"
          @toggle-sidebar="toggleSidebar" />


      <Sidebar
          :items="sidebarItems"
          @toggle-sidebar="toggleSidebar"
      >
        <div
            class="sidebar-mask"
            @click="toggleSidebar(false)"
        />
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>

    </div>
    <div class="content py-5 flex">
      <div class="article lg:w-3/5 lg:order-2 py-5 h-full px-3">
        <h1 class="text-2xl font-extrabold">
          {{ $page.frontmatter.title }}
        </h1>
        <span class="italic">
          {{ formatDate }}
        </span>
        <Content class="pt-3"/>
        <div>
          <footer>
            <span>
              <div class="flex justify-start pt-1">
                <img class="flex-initial ":src="'..' + '/assets/img/tello.png'" />
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
      <div class="advertising lg:w-1/5 lg:order-1 lg:border-solid lg:border-r-2">

      </div>
      <div class="advertising lg:order-3 lg:w-1/5 lg:border-solid lg:border-l-2 ">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@vuepress/theme-default/components/Navbar";
import Sidebar from "@vuepress/theme-default/components/Sidebar.vue";
import Layout from "@vuepress/theme-default/layouts/Layout.vue"
import { resolveSidebarItems } from '@vuepress/theme-default/util'

export default {
  name: "NewPage",
  components: {
    Navbar,
    Sidebar,
    Layout,
    resolveSidebarItems,
  },
  data () {
    return {
      isSidebarOpen: false
    }
  },
  computed: {
    formatDate(){
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(this.$page.frontmatter.date).toLocaleDateString('es-mx', options)
    },
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
          frontmatter.navbar === false
          || themeConfig.navbar === false) {
        console.log('false')
        return false
      }
      console.log('true')
      return (
          this.$title
          || themeConfig.logo
          || themeConfig.repo
          || themeConfig.nav
          || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      console.log('Should show sidebar:' +   !frontmatter.home
          && frontmatter.sidebar !== false
          && this.sidebarItems.length)
      return (
          !frontmatter.home
          && frontmatter.sidebar !== false
          && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    },
  },
  methods: {
    toggleSidebar (to) {
      console.log('Before: '+this.isSidebarOpen)
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      console.log(this.isSidebarOpen)
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  },
  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

}
</script>

<style scoped>

</style>