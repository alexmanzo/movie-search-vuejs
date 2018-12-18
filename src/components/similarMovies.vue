<template>
    <div class="similar-movies">
        <h2>Similar Movies</h2>
        <slick ref="slick" :options="slickOptions">
            <div v-for="movie in similarMoviesData" :key="movie.id" class="similar-movie-container">
                <router-link :to="{ name: 'movie', params: { id:  movie.id }}">
                    <img v-if="movie.poster_path === null" class="similar-movie-nophoto" :src="noPhoto" alt='no poster found' />
                    <img v-else class="similar-movie-photo" :src="`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`" :alt="`${movie.original_title}`" />
                    <p class="similar-movie-title">{{ movie.original_title }} ({{ movie.release_date.substring(0,4) }})</p>
                </router-link>
            </div>
        </slick>
    </div>
</template>

<script>
import noPhoto from '@/assets/nophoto.svg'
import Slick from 'vue-slick'

export default {   
    props: {
        similarMoviesData: {
            type: Array,
            required: true
        }
    },
    components: { Slick },
    data () {
        return {
            noPhoto,
            slickOptions: {
            class: 'slider-list',
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true
                    }
                },
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }
            ]
        }
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


