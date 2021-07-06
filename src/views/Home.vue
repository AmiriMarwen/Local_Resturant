<template>
  <div>
    <heroComp/>
    <plansComp/>
    <pricesComp/>
    <aboutComp/>
    <contactusComp/>
    <locationComp/>
    <footerComp/>
  </div>
</template>

<script>
// @ is an alias to /src
import heroComp from '@/components/heroComp.vue'
import plansComp from '@/components/plansComp.vue'
import pricesComp from '@/components/pricesComp.vue'
import aboutComp from '@/components/aboutComp.vue'
import contactusComp from '@/components/contactusComp.vue'
import footerComp from '@/components/footerComp.vue'
import locationComp from '@/components/locationComp.vue'

export default {
  name: 'Home',
  components: {
    heroComp,
    plansComp,
    pricesComp,
    aboutComp,
    contactusComp,
    locationComp,
    footerComp
  }
}
</script>
