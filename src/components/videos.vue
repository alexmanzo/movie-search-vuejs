<template>
    <div class="videos">
        <h2>Videos</h2>
        <slick ref="slick" :options="slickOptions" class="video-list">
            <div class="video-container" v-for="video in videoData" :key="video.name">
                <iframe 
                    :title="`${video.name}`"
                    id="ytplayer"
                    type="text/html"
                    :src= "`https://www.youtube.com/embed/${video.key}`"
                    frameBorder="0">
                    </iframe>
                    <p>{{ video.name }}</p>
            </div>
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick'

export default {   
    props: {
        videoData: {
            type: Array,
            required: true
        }
    },
    components: { Slick },
    data () {
        return {
            slickOptions: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
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


