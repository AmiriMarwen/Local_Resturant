<template>
    <div id="app">
        <heroComp /> <!-- hero section  -->
        <plansComp /> <!-- hero section  -->
        <pricesComp /> <!-- hero section  -->
        <contactusComp /> <!-- hero section  -->
    </div>
</template>
<script>
import heroComp from './components/heroComp.vue'
import plansComp from './components/plansComp.vue'
import pricesComp from './components/pricesComp.vue'
import contactusComp from './components/contactusComp.vue'


export default {
    name: 'App',
    components: {
        heroComp,
        plansComp,
        pricesComp,
        contactusComp
    }
}
</script>
<style src="./assets/styles/index.css">