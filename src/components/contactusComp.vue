<template>
    <div>
        <div class="max-w-7xl mx-auto w-full px-4 md:px-12 py-4">
            <div class="socials md:flex justify-between">
                <div class="w-full md:relative w-2/3 py-12 px-5 bg-black">
                    <h3 class="text-white text-3xl font-bold py-5">RECEVOIR NOS MEILLEURES OFFRES !</h3>
                    <input type="text" placeholder="Votre adresse e-mail" class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded-full text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full pr-10" />
                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        <!--  <i class="fas fa-arrow-right"></i> -->
                    </span>
                </div>
                <div class="socials text-1xl w-full text-center mx-auto md:flex justify-between items-center py-10 px-5 bg-red-600">
                    <h3 class="text-white text-2xl font-bold py-2 md:text-3xl">SOUIVEZ NOUS :</h3>
                    <div class="list-socials w-1/2 space-x-2 mx-auto md:w-1/3 flex justify-between mx-10">
                        <i class="fab fa-facebook text-2xl md:text-3xl text-white "></i>
                        <i class="fab fa-twitter text-2xl md:text-3xl text-white "></i>
                        <i class="fab fa-instagram text-2xl md:text-3xl text-white "></i>
                        <i class="fab fa-youtube text-2xl md:text-3xl text-white "></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    name: 'contactusComp',

    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>

</style>