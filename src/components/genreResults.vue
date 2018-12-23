<template>
    <div id="results">
        <p class="results-num"> Your search returned {{ numOfResults }} results</p>
        <ul id="movies">
            <li v-for="movie in movies" :key="movie.id">
               <router-link :to="{ name: 'movie', params: { id:  movie.id  }}">
                    <div class="movie-card">
                        <img v-if="movie.poster_path === null" class="results-no-poster" :src="noPhoto" alt='no poster found' />
                        <img v-else class="results-poster" :src="`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`" :alt="`${movie.original_title}`" />
                        <div class="movie-search-info">
                            <h1>{{ movie.original_title }} ({{ movie.release_date.substring(0,4) }})</h1>
                            <p>{{ movie.overview }}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
// IMPORTS //
import axios from 'axios'
import noPhoto from '@/assets/nophoto.svg'

export default {
    data () {
        return {
            movies: [],
            numOfResults: null,
            noPhoto,
        }
    },
    methods: {
        async getSearchResults(query) {
                const apiKey = process.env.VUE_APP_API_KEY
                let movies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&query=${query}`)
                this.movies = movies.data.results
                this.numOfResults = movies.data.total_results
        },
    },
    created() {
        this.getSearchResults(this.$route.params.query)
    },
    beforeUpdate() {
        this.getSearchResults(this.$route.params.query)
    }
}
</script>

<style scoped>
#app {
    background-image: '';
}
ul {
    padding-inline-start: 0;
}

li {
    list-style: none;
}

#results {
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.movie-search-info>p {
    font-size: 1vmax;
}

.movie-search-info>h1 {
    font-size: 2vmax;
}

.results-num {
    font-size: 14px;
    padding-bottom: 15px;
}

.results-err {
    font-size: 2vmax;
    text-align: center;
}

.movie-card {
    height: 50vh;
    border: solid 1px #01d277;
    border-radius: 10px;
    width: 80%;
    margin: 0 auto 20px auto;
    overflow: auto;
}

.movie-card:hover,
.movie-card:focus {
    opacity: 0.9;
    background-color: #01d277;
}

.results-poster,
.results-no-poster {
    height: 100%;
    float: left;
    margin-right: 2%;
    border-radius: 10px 0 0 10px;
    border-right: solid 1px #01d277;
    border-bottom: solid 1px #01d277;
}

.movie-search-info {
    padding-right: 2vw;
}

.results-no-poster {
    background-color: #cbcbcb;
}

a {
    text-decoration: none;
    color: #fff;
}

a:hover {
    color: #081c24;
}

/* Media Queries */

@media only screen and (max-width: 650px) {

    .movie-card {
        width: 95vw;
        height: 100vh;
        overflow: auto;
    }

    .movie-search-info {
        padding: 0 3vw 0 3vw;
    }

}

@media only screen and (max-width: 768px) {

    .movie-card {
        width: 75vw;
        height: auto;
        overflow: auto;
    }

    .movie-search-info>p {
        font-size: 2vmax;
    }

    .movie-search-info>h1 {
        font-size: 4vmax;
    }

    .results-num {
        font-size: 2vmax;
        padding-bottom: 15px;
    }


    .results-poster,
    .results-no-poster {
        float: none;
        width: 100%;
        height: auto;
        border-radius: 10px 10px 0 0;
        border-bottom: solid 1px #01d277;
    }

    .movie-search-info {
        padding: 0 3vw 0 3vw;
    }

}
</style>
