<template>
    <div class="profile-container">

    </div>
</template>

<script>
import noPhoto from '@/assets/nophoto.svg'
//import Slick from 'vue-slick'

export default {   
    //components: { Slick },
    data () {
        return {
            noPhoto,
            slickOptions: {
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


