<template>
    <div class="videos">
        <h2>Videos</h2>
        <video-carousel :items="items"></video-carousel>
    </div>
</template>

<script>
import videoCarousel from '@/components/videoCarousel.vue'

export default {
    components: { 
        'video-carousel': videoCarousel
     },
    props: {
        videoData: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            items: this.videoData
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


