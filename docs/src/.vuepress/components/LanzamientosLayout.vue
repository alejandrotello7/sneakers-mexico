<template>
  <div>
    <div class="py-5">
      <Navbar />
    </div>
    <div class="py-5">
      <div v-for="option in brands">
        <input :id="option" type="checkbox" :value="option" v-model="checked.brand" @click="trigger = !trigger">
        <label :for="option"> {{ option }} </label>
      </div>
    </div>
    <div class="grid grid-cols-1 grid-flow-row gap-4" >
      <div v-for="(lanzamiento, index) in lanzamientos">
        <div v-if="checked.brand.includes(lanzamiento.frontmatter.brand) || checked.brand.length == 0">
          <div class="listaLanzamientos">
            <div class="container mx-auto">
              <a :href="lanzamiento.path">
                <img :src="'..' + lanzamiento.frontmatter.imageUrl" />
              </a>
              <div class="font-bold">
                <h2>{{ lanzamiento.frontmatter.title }}</h2>
              </div>
              <p>{{ dates[index] }}</p>
              <p>{{times[index]}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ListaLanzamientos from "./ListaLanzamientos.vue";
import Navbar from "@vuepress/theme-default/components/Navbar";
import FilterBar from "./FilterBar";

export default {
  components: {
    ListaLanzamientos,
    Navbar,
    FilterBar,
  },
  data(){
    return{
      pagesArray: [],
      dates: [],
      times:[],
      checked: {
        brand: [],
      },
      brands: [
        "Nike",
        "Puma",
        "Reebok",
        "Adidas",
        "Converse",

      ],
      trigger: false,
    }
  },
  computed: {
    lanzamientos() {
      return this.$site.pages
          .filter(
              (x) =>
                  x.path.startsWith("/lanzamientos/") &&
                  !x.frontmatter.lanzamientos_index
          )
          .sort(
              (a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date)
          );
    },
    formateoDate() {
      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };
      this.$site.pages.map((page) => {
        this.pagesArray.push(page)
      });

      //Filter launch sneakers
      this.pagesArray.forEach(page => {
        if( page.path.startsWith("/lanzamientos/") && !page.frontmatter.lanzamientos_index){
          this.dates.push(page.frontmatter.date)
        }
      })

      //Sort by date
      this.dates.sort((a,b)=>
          new Date(a) - new Date(b));

      //Convert to Readible Date and Time
      this.dates.forEach((date, index) => {
        this.dates[index] = new Date(date).toLocaleDateString('es-mx',options)
        this.times.push(new Date(date).toLocaleTimeString().replace(/(.*)\D\d+/, '$1'))
      })

      console.log(this.dates)
    },
  },
  methods:{

  },
  beforeMount(){
    this.formateoDate
  },
};
</script>


