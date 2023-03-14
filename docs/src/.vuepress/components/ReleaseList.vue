<template>
  <div>
    <div class="grid grid-cols-1" >
      <h1 class="text-2xl font-bold">
        Próximos Lanzamientos
      </h1>
      <div v-for="release in releases">
        <div class="listaLanzamientos">
          <div class="grid grid-cols-2">
            <a :href="release.path" class="col-start-1">
              <img :alt="release.imageTitle" :src=" '@' + release.imageUrl" />
            </a>
            <div class="col-start-2 text-sm pl-2 pt-12">
              <a :href="release.path">
                <div class="font-bold ">{{ release.imageTitle }}</div>
                <div class="py">{{ release.date }}</div>
                <div>{{release.time}}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReleaseList",
  data(){
    return{
      pagesArray: [],
      dates: [],
      times:[],
      releases: [
        {
          date: String,
          imageUrl: String,
          imageTitle: String,
          path: String,
          time: String,
        }
      ]
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
          this.releases.push({
            date: page.frontmatter.date,
            imageUrl: page.frontmatter.imageUrl,
            imageTitle: page.frontmatter.title,
            path: page.path,})
        }
      })

      //Sort by date
      this.releases.sort((a,b) => new Date(a.date) - new Date(b.date));

      //Convert to Readible Date and Time
      this.releases.forEach((release, index) => {
        this.releases[index].time =
            new Date(release.date).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')
        this.releases[index].date = new Date(release.date).toLocaleDateString('es-mx',options)
      })

      this.releases.shift();
      console.log(this.releases)
    },
  },
  methods:{

  },
  beforeMount(){
    this.formateoDate
  },
}
</script>
