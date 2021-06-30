<template>
    <div class="hero">
        <div class="bg-indigo-900 relative overflow-hidden h-screen">
            <img src="../assets/img/burger.jpg" class="absolute h-full w-full object-cover" />
            <div class="inset-0 bg-black opacity-25 absolute">
            </div>
            <header class="absolute top-0 left-0 right-0 z-20">
                <nav class="container mx-auto px-8 md:px-12 py-4">
                    <div class="md:flex justify-between items-center">
                        <div class="flex justify-between items-center">
                            <div class="flex justify-between items-center">
                                <a href="#" class="text-white">
                                    <img class="h-12" src="../assets/icons/favicon.png">
                                </a>
                                <h2 class="font-bold text-white">Benna</h2>
                            </div>
                            <div class="md:hidden">
                                <button class="text-white focus:outline-none">
                                    <svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="hidden md:flex items-center">
                            <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                                About us
                            </a>
                            <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                                Food
                            </a>
                            <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                                Plans
                            </a>
                            <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                                Prices
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <div class="container mx-auto px-10 lg:px-20 md:px-12 relative z-10 flex items-center py-32 xl:px-40 ">
                <div class="lg:w-3/5 xl:w-1/2 flex flex-col items-start relative z-10">
                    <span class="font-bold uppercase text-yellow-400 md:text-2xl ">
                        Benna Restaurent - 🍕
                    </span>
                    <h1 class="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
                        Have no time to prepare food ?
                    </h1>
                    <p class="text-white font-normal py-8 sm:text-2xl">Choose one of our plans, enter delivery time
                        and enjoy delicious food without leaving your home!</p>
                    <a href="#" class="block bg-yellow-500 hover:bg-yellow-600 py-3 px-4 rounded-lg text-lg text-white font-bold uppercase mt-6">
                        <i class="fas fa-phone-alt px-3"></i> Order Food Now
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    name: 'heroComp',

    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>