<template>
    <div class="plansComp container mx-auto w-full px-4 md:px-12 py-4">
        <div class="md:flex justify-between items-start">
            <div class="mt-3 lg:w-1/2 xl:w-1/2">
                <img class="h-auto p-5" src="../assets/img/pizza.png" alt="pizza">
            </div>
            <div class="w-full py-2 px-8 lg:w-1/2 xl:w-1/2">
                <h2 class="font-bold font-inter text-4xl lg:text-6xl px-10 py-5 ">🥡 Our Food</h2>
                <div class="plan-card py-3 flex justify-between items-start">
                    <i class="fas fa-check-double p-2 rounded-full bg-yellow-200 text-red-700"></i>
                    <div class="px-3">
                        <h3 class="font-semibold">Signature Pizzas</h3>
                        <p>Choose one of our plans, enter delivery time.</p>
                    </div>
                </div>
                <div class="plan-card py-3 flex justify-between items-start">
                    <i class="fas fa-check-double p-2 rounded-full bg-yellow-200 text-red-700"></i>
                    <div class="px-3">
                        <h3 class="font-semibold">Signature Pizzas</h3>
                        <p>Choose one of our plans, enter delivery time.</p>
                    </div>
                </div>
                <div class="plan-card py-3 flex justify-between items-start">
                    <i class="fas fa-check-double p-2 rounded-full bg-yellow-200 text-red-700"></i>
                    <div class="px-3">
                        <h3 class="font-semibold">Signature Pizzas</h3>
                        <p>Choose one of our plans, enter delivery time.</p>
                    </div>
                </div>
                <div class="plan-card py-3 flex justify-between items-start">
                    <i class="fas fa-check-double p-2 rounded-full bg-yellow-200 text-red-700"></i>
                    <div class="px-3">
                        <h3 class="font-semibold">Signature Pizzas</h3>
                        <p>Choose one of our plans, enter delivery time.</p>
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
    max-width: 340px;
}
</style>