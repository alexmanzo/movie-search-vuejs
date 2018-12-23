<template>
    <div>
        <div v-if="!movieData.title">
            <h1 class="loading">Loading...</h1>
        </div>
        <div v-else id="movie-container">
            <movie-details :movieData="movieData"></movie-details>
            <cast :castData="castData"></cast>
            <similar-movies :similarMoviesData="similarMoviesData"></similar-movies>
            <videos :videoData="videoData"></videos>
        </div>
    </div>
</template>

<script>
import movieDetails from '@/components/movieDetails.vue'
import cast from '@/components/cast.vue'
import similarMovies from '@/components/similarMovies.vue'
import videos from '@/components/videos.vue'
import axios from 'axios'
const apiKey = process.env.VUE_APP_API_KEY

export default {
    components: {
        'movie-details': movieDetails,
        'cast': cast,
        'similar-movies': similarMovies,
        'videos': videos
    },
    data () {
        return {
            movieData: {},
            castData: [],
            videoData: [],
            similarMoviesData: [],
        }
    },
    methods: {
        getMovieDetails() {
            return axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${apiKey}&language=en-US`)
        },
        getMovieCast() {      
            return axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=${apiKey}&language=en-US`)
        },
        getVideos() {  
            return axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=${apiKey}&language=en-US`)
        },
        getSimilarMovies() {  
            return axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/similar?api_key=${apiKey}&language=en-US`)
        },
        async getMovieData() {
                const [movieData, castData, videoData, similarMoviesData] = await Promise.all([this.getMovieDetails(), this.getMovieCast(), this.getVideos(), this.getSimilarMovies()])
                this.movieData = movieData.data
                this.castData = castData.data.cast
                this.videoData = videoData.data.results
                this.similarMoviesData = similarMoviesData.data.results
                this.$root.$emit('changeBackground', `url('https://image.tmdb.org/t/p/original/${movieData.data.backdrop_path}')`)
        }
    },
    created() {
        this.getMovieData()
    },
    beforeDestroy() {
        this.$root.$emit('changeBackground', '')
    }
}
</script>

<style lang="scss" scoped>
@import 'main.scss';

#movie-container {
    padding: 0 5%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

#movie {
    display: flex;
    flex-direction: row;
    height: 45vh;
    margin-top: 30px;
    margin-bottom: 25px;
}

@media only screen and (max-width: $medium) {
    #movie {
        flex-direction: column;
        height: auto;
        text-align: center;
    }
}

</style>

