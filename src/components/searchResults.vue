<template>
    <div id="results">
        <p>Your search returned {{ numOfResults }} results</p>
        <ul id="movies">
            <li v-for="movie in movies" :key="movie.id">
               <div class="movie-card">
                <img v-if="movie.poster_path === null" class="results-no-poster" :src="noPhoto" alt='no poster found' />
                <img v-else class="results-poster" :src="`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`" :alt="`${movie.original_title}`" />
                <div class="movie-search-info">
                    <h1>{{ movie.original_title }} ({{ movie.release_date.substring(0,4) }})</h1>
                    <p>{{ movie.overview }}</p>
                </div>
            </div>
            </li>
        </ul>
    </div>
</template>




<script>
// IMPORTS //
import { bus } from '@/main'
import noPhoto from '@/assets/nophoto.svg'

export default {
    data () {
        return {
            movies: [],
            numOfResults: null,
            noPhoto: noPhoto,
        }
    },
    methods: {

    },
    created() {
        bus.$on('gotSearchResults', movies => {
            this.movies = movies.data.results
            this.numOfResults = movies.data.total_results
        })
        console.log(this.movies)
    }
}
</script>

<style scoped>
.results {
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
    font-size: 1vmax;
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
    margin-bottom: 20px;
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

.movie-card>a {
    text-decoration: none;
    color: #fff;
}

.movie-card:hover>a {
    color: #081c24;
}

/* Media Queries */

@media only screen and (max-width: 650px) {

    .movie-card {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 95vw;
        height: 100vh;
        overflow: scroll;
    }

    .movie-search-info {
        padding: 0 3vw 0 3vw;
    }

}

@media only screen and (max-width: 768px) {

    .movie-card {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 75vw;
        height: auto;
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
