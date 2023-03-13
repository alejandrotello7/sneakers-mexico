<template>
  <div>
    <div class="py-5">
      <div v-for="option in brands">
        <input :id="option" type="checkbox" :value="option" v-model="checked.brand" @click="passInfo">
        <label :for="option"> {{ option }} </label>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "FilterBar",
  data(){
    return {
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
    }
  },
  methods:{
    passInfo(){
      this.$emit('checkboxValue',this.checked.brand)
    }
  }

}
</script>

