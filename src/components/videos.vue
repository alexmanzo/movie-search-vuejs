<template>
    <div class="videos">
        <h2>Videos</h2>
        <carousel :items="items"></carousel>
    </div>
</template>

<script>
import carousel from '@/components/carousel.vue'

export default {
    components: { carousel },
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


