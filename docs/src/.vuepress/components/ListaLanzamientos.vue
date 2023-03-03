<template>
    <div class="listaLanzamientos">
      <div class="container mx-auto">
        <img :src="$page.frontmatter.imageUrl" />
        <div class="font-bold">
          <h2> {{ $page.frontmatter.title }} </h2>
        </div>
        <p> {{ formatDate }}</p>
        <p> {{ formatTime }}</p>
      </div>  
    </div>
</template>
  
<script>
  export default {
    name: 'ListaLanzamientos',
    components: {},
    computed: {
      formatDate(){
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        return new Date(this.$page.frontmatter.date).toLocaleDateString('es-mx', options)
      },
      imageUrlFormated(){
        return this.$page.frontmatter.imageUrl;
      },
      formatTime(){
        return new Date(this.$page.frontmatter.date).toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
      }
    }
  }
</script>