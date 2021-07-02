<template>
    <div>
        <section>
            <div class="location">
                <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=32%20AV%207%20Novembre%201987,%20Tunisia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </section>
        <section>
            <p>© Copyright 2021 KFC. Tous les droits sont réservés.</p>
        </section>
    </div>
</template>
<script>
export default {

    name: 'locationComp',

    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
.location {
    z-index: 0;
}
</style>