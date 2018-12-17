<template>
    <div>
        <div v-if="!movieData.title">
            <h1 class="loading">Loading...</h1>
        </div>
        <div v-else class="movie-container">
            <movie-details :movieData="movieData"></movie-details>
        </div>
    </div>
</template>

<script>
import movieDetails from '@/components/movieDetails.vue'
import axios from 'axios'
const apiKey = process.env.VUE_APP_API_KEY

export default {
    components: {
        'movie-details': movieDetails
    },
    data () {
        return {
            movieData: {},
            castData: {},
            videoData: {},
            similarMoviesData: {},
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
                this.castData = castData.data
                this.videoData = videoData.data
                this.similarMoviesData = similarMoviesData.data
                this.$root.$emit('changeBackground', `url('https://image.tmdb.org/t/p/original/${movieData.data.backdrop_path}')`)
            }
    },
    created() {
        this.getMovieData()
    },
    beforeUpdate() {
        this.getMovieData()
    },
    beforeDestroy() {
        this.$root.$emit('changeBackground', '')
    }

}
</script>

<style>
/* Entire Movie Page */
.movie-container {
    padding: 0 5% 0 5%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.loading {
    text-align: center;
    margin-top: 5%;
}

/* ============= Movie Poster & Details ============= */

/* container */
.movie {
    display: flex;
    flex-direction: row;
    height: 45vh;
    margin-top: 30px;
    margin-bottom: 25px;
}

.movie-page-poster {
    height: 100%;
    margin-right: 30px;
    border-radius: 10px;
    border: 1px solid #fff;
    background-color: #cbcbcb;
}

.movie-page-no-poster {
    height: 100%;
    width: 40%;
    margin-right: 30px;
    border-radius: 10px;
    border: 1px solid #fff;
    background-color: #cbcbcb;
}

/* Overall Movie Data */
.movie-data {
    display: flex;
    flex-wrap: wrap;
}

.movie-headline {
    flex-basis: 100%;
    margin-bottom: -5vh;
}

/* Details & Plot */
.movie-details {
    flex-basis: 30%;
}

.movie-plot {
    flex-basis: 70%;
}

/* ============= Links ============= */
a {
    color: #01d277;
}

a:visited {
    color: #b2b2b2;
}

a:hover {
    text-decoration: none;
}

a:active {
    color: #fff;
}

a:hover, {
    color: #01d277;
}

.cast-container>a,
.similar-movie-container>a {
    text-decoration: none;
    color: #fff;
}


/* ============= Cast & Similar Movie Sliders ============= */

.cast-container,
.similar-movie-container {
    overflow: hidden;
    height: 40vh;
    padding-left: 10px;
    margin-right: -15px;
    margin-left: 15px;
}

.cast>.slider-list,
.similar-movies>.slider-list {
    width: 90%;
    margin: 0 auto;
}

.cast-container img:hover,
.similar-movie-container img:hover {
    filter: brightness(110%);
}


.cast-photo,
.similar-movie-photo {
    height: 75%;
}

.cast-nophoto,
.similar-movie-nophoto {
    height: 75%;
    background-color: #cbcbcb;
}


.actor,
.similar-movie-title {
    font-weight: bold;
    margin-top: 0;
    margin-bottom: -5%;
}

.actor,
.character,
.similar-movie-title {
    width: 90%;
}

/* ============= Video Sliders ============= */
.video-container>iframe {
    width: 80vmin;
    height: 45vmin;
}

.videos>.video-list {
    width: 75%;
    margin: 0 auto;
    text-align: center;
}

.video-list>button {
    top: 42%;
}



/* ============= Slick Slider Styling ============= */
.slick-next,
.slick-prev {
    position: absolute;
    font-size: 0;
    top: 38%;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    cursor: pointer;
    border: none;
    background: 0 0;
    opacity: .75;
    color: #fff;
    transition: all .2s ease-in-out;
}

.slick-next:focus:before,
.slick-next:hover:before,
.slick-prev:focus:before,
.slick-prev:hover:before {
    opacity: 1;
    font-size: 40px;

}

.slick-next.slick-disabled:before,
.slick-prev.slick-disabled:before {
    opacity: .25
}

.slick-next:before,
.slick-prev:before {
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    color: #fff
}

.slick-prev {
    left: -30px;
}

.slick-next {
    right: -35px
}

.slick-prev:before {
    content: '\00AB'
}


.slick-next:before {
    content: '\00BB'
}


.slick-list,
.slick-slider,
.slick-track {
    position: relative;
}

.slick-list {
    overflow: hidden;
}

.slick-list.dragging {
    cursor: pointer;
    cursor: hand
}

.slick-slider .slick-list,
.slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}


.slick-slide {
    float: left;
}

.slick-slide.dragging img {
    pointer-events: none
}

@media only screen and (max-width: 1090px) {
    .videos>.video-list {
        width: 90%;
        margin: 0 auto;
    }
}


@media only screen and (max-width: 768px) {
    .movie {
        flex-direction: column;
        height: auto;
        text-align: center;
    }

    .movie-details,
    .movie-plot,
    .movie-headline {
        margin: 0 auto;
        flex-basis: 100%;
    }

    .movie-page-poster {
        width: 100%;
        height: auto;
        margin-right: 0;
    }

    .movie-page-no-poster {
        width: 100%;
        height: 65vh;
        margin-right: 0;
    }

    .cast,
    .similar-movies,
    .videos,
    .movie {
        width: 90vw;
        text-align: center;
    }

    .cast-container,
    .similar-movie-container {
        height: 65vh;
        margin: 0;
        padding: 0;
    }

    .actor,
    .character,
    .similar-movie-title {
        width: 90%;
        padding-left: 3vw;
    }

    .actor,
    .similar-movie-title {
        margin-bottom: -1%;
    }


    .videos>.video-list {
        width: 90%;
        margin: 0 auto;
    }


}
</style>

