<template>
    <div class="similar-movies">
        <h2>Similar Movies</h2>
        <carousel :items="items" :routerName="routerName"></carousel>
    </div>
</template>

<script>
import noPhoto from '@/assets/nophoto.svg'
import carousel from '@/components/carousel.vue'

export default {   
    props: {
        similarMoviesData: {
            type: Array,
            required: true
        }
    },
    components: { carousel },
    data () {
        return {
            noPhoto,
            routerName: 'movie',
            items: this.similarMoviesData
        }
    },
    methods: {
    },
    created() {
        
    }
}
</script>

<style>

</style>


