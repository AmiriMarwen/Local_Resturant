<template>
    <div id="app">
        <heroComp /> 
        <plansComp /> 
        <pricesComp /> 
        <aboutComp /> 
        <contactusComp /> 
        <locationComp /> 
    </div>
</template>
<script>
import heroComp from './components/heroComp.vue'
import plansComp from './components/plansComp.vue'
import pricesComp from './components/pricesComp.vue'
import contactusComp from './components/contactusComp.vue'
import aboutComp from './components/aboutComp.vue'
import locationComp from './components/locationComp.vue'


export default {
    name: 'App',
    components: {
        heroComp,
        plansComp,
        pricesComp,
        contactusComp,
        aboutComp,
        locationComp,
    }
}
</script>
<style src="./assets/styles/index.css">