<template>
    <div id="cast">
        <h2>Cast</h2>
         <carousel :items="items" :routerName="routerName"></carousel>
    </div>
</template>

<script>
import noPhoto from '@/assets/nophoto.svg'
import carousel from '@/components/carousel.vue'

export default {   
    props: {
        castData: {
            type: Array,
            required: true
        }
    },
    components: { carousel },
    data () {
        return {
            noPhoto,
            routerName: 'castProfile',
            items: this.castData
        }
    },
    methods: {

    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
@import 'main.scss';

</style>


