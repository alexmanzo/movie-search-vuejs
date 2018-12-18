<template>
    <div class="cast">
        <h2>Cast</h2>
        <slick ref="slick" :options="slickOptions">
            <div v-for="credit in castData" :key="credit.credit_id" class="cast-container">
                <router-link :to="{ name: 'castProfile', params: { id:  credit.id, name: credit.name  }}">
                    <img v-if="credit.profile_path === null" class="cast-nophoto" :src="noPhoto" alt='no profile found' />
                    <img v-else class="cast-photo" :src="`https://image.tmdb.org/t/p/w1280/${credit.profile_path}`"
                        :alt="`${credit.name}`" />
                    <p class="actor">{{ credit.name }}</p>
                    <p class="character">{{ credit.character }}</p>
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
        castData: {
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
        console.log(this.castData)
    }
}
</script>

<style>

</style>


