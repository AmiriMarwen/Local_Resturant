<template>
    <div class="plansComp max-w-7xl mx-auto w-full px-4 md:px-12 py-4">
        <div class="w-full mx-auto lg:flex justify-between items-start">
            <div class="mt-3 lg:w-1/3 xl:w-1/2">
                <img class="h-auto p-5" src="../assets/img/cover-about.png" alt="pizza">
            </div>
            <div class="py-2 px-8 lg:w-2/3 xl:w-2/3">
                <div class="plan-card py-3 flex justify-between items-start">
                    <img class="h-16 rounded-full p-2 bg-yellow-200" src="../assets/icons/winner.svg" alt="">
                    <div class="px-3">
                        <h3 class="font-semibold text-3xl">Un goût unique</h3>
                        <p class="md:w-full ">Seul le poulet KFC a ce goût KFC irrésistible. Cela vient de notre méthode de préparation unique et de la recette secrète et originale de notre fondateur le Colonel Sanders.</p>
                    </div>
                </div>
                <div class="plan-card py-3 flex justify-between items-start">
                    <img class="h-16 rounded-full p-2 bg-yellow-200 " src="../assets/icons/shield.svg" alt="">
                    <div class="px-3">
                        <h3 class="font-semibold text-3xl">Valeurs</h3>
                        <p>Partage, convivialité, solidarité, et satisfaction de nos clients sont les valeurs qui dirigent notre travail..</p>
                    </div>
                </div>
                <div class="plan-card py-3 flex justify-between items-start">
                    <img class="h-16 rounded-full p-2 bg-yellow-200" src="../assets/icons/badge.svg" alt="">
                    <div class="px-3">
                        <h3 class="font-semibold text-3xl">Des partenaires certifiés</h3>
                        <p>Tous nos fournisseurs sont certifiés et doivent respecter des normes de sécurité alimentaire et d’hygiène strictes. Ils font l’objet de contrôles réguliers par nos soins.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'plansComp',

    data() {
        return {

        }
    }
}
</script>

<style lang="css" scoped>
.plan-card {
    max-width: 500px;
    margin: 0 auto ;
}
</style>