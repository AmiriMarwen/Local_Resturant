<template>
<div class="bg-yellow-100">
  <div class="plansComp max-w-7xl mx-auto px-4 md:px-12 py-4">
    <div class="text-center mx-auto">
      <img class="text-center mx-auto" src="../assets/icons/logo.png" alt="">
      <h2 class="font-bold font-inter text-4xl lg:text-6xl px-10 py-5 ">Notre menu</h2>
    </div>
    <div class="filter px-5 my-4 space-x-2 md:px-10 my-8 space-x-3">
      <a class="md:text-2xl font-bold border-solid border-4 border-yellow-500 px-2 rounded-lg" href="#">Gurger</a>
      <a class="md:text-2xl font-bold border-solid border-4 border-yellow-500 px-2 rounded-lg" href="#">Pizza</a>
      <a class="md:text-2xl font-bold border-solid border-4 border-yellow-500 px-2 rounded-lg" href="#">chicken</a>
      <a class="md:text-2xl font-bold border-solid border-4 border-yellow-500 px-2 rounded-lg" href="#">tacos</a>
    </div>
    <div class="cardwraper mt-1 md:grid grid-cols-3 gap-2 mx-8">


      <div class="card w-full my-2 mx-2 rounded-lg overflow-hidden shadow-lg relative" v-for="food in foodlist" :key="food._id">
        <img class="w-full h-80 object-cover" src="../assets/img/cover-0.jpg" />
        <div class="px-2 py-1 absolute right-1 bottom-1 rounded-lg bg-gray-100">
          <h4 class="font-bold text-black-600 text-black tracking-wide text-2xl">
            <i class="fas fa-plus-circle "></i> {{food.name}} <br>
            <span class="text-yellow-500 text-6xl font-extrabold"> {{food.price}} </span></h4>
        </div>
      </div>


    </div>
  </div>
</div>
</template>


<script>
const api = 'http://localhost:2021/menu/foods/'

export default {
  name: 'pricesComp',

  data() {
    return {
      foodlist: []
    }
  },

  mounted() {
    fetch(api)
    .then(res => res.json())
    .then(data => {
      this.foodlist = data
    }).catch(err => {
        console.error('Error: ', err);
    });


  }

}
</script>



<style lang="css" scoped>
</style>
