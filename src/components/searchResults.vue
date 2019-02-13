<template>
    <div id="results">
        <p v-if="this.errorMessage != ''" class="results-err">{{ errorMessage }}</p>
        <p v-else-if="this.numOfResults === 0" class="results-num">Your search returned {{ numOfResults }} results. Check your spelling and try searching again.</p>
        <p v-else class="results-num">Your search returned {{ numOfResults }} results.</p>
            <div v-for="movie in movies" :key="movie.id" class="movies">
               <router-link :to="{ name: 'movie', params: { id:  movie.id  }}">
                    <div class="movies--movie-card">
                        <img v-if="movie.poster_path === null" class="movies--movie-card--no-poster" :src="noPhoto" alt='no poster found' />
                        <img v-else class="movies--movie-card--poster" :src="`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`" :alt="`${movie.original_title}`" />
                        <div class="movies--movie-card--info">
                            <h1>{{ movie.original_title }} ({{ movie.release_date.substring(0,4) }})</h1>
                            <p>{{ movie.overview }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
    </div>
</template>

<script>
// IMPORTS //
import axios from 'axios'
import noPhoto from '@/assets/nophoto.svg'
const apiKey = process.env.VUE_APP_API_KEY

export default {
    data () {
        return {
            movies: [],
            numOfResults: null,
            noPhoto,
            errorMessage: ''
        }
    },
    methods: {
        async getSearchResults(query) {
            if (query === "no query") {
                this.errorMessage = 'Please enter a valid search term.'
            } else {
                let movies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&query=${query}`)
                this.movies = movies.data.results
                this.numOfResults = movies.data.total_results
            }
        },
        async getGenreResults(id) {
            let movies = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=vote_average.desc&include_adult=false&include_video=false&language=en-US&page=1&vote_count.gte=5000&with_genres=${id}`)
            this.movies = movies.data.results
        }
    },
    created() {
        if (this.$route.name === "results") {
            this.getSearchResults(this.$route.params.query)
        } else if (this.$route.name === "genre") {
            this.getGenreResults(this.$route.params.id)
        }     
    },
}
</script>

<style lang="scss" scoped>
@import 'main.scss';
#app {
    background-image: '';
}

#results {
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.movies {
    &--movie-card {
        height: 50vh;
        border: solid 1px $green;
        border-radius: 10px;
        width: 80vw;
        margin: 0 auto 20px auto;

        &:hover,
        &:focus {
            opacity: 0.9;
            background-color: $green;
        }
        
        &--info {
            padding-right: 2vw;
            overflow: auto;
        }

        &--poster {
            height: 100%;
            float: left;
            margin-right: 2%;
            border-radius: 10px 0 0 10px;
            border-right: solid 1px $green;
            border-bottom: solid 1px $green;
        }

        &--no-poster {
            height: 100%;
            float: left;
            margin-right: 2%;
            border-radius: 10px 0 0 10px;
            border-right: solid 1px $green;
            border-bottom: solid 1px $green;
            background-color: $gray;
        }
    
    }


}

.results-num, .results-err {
    @include setFontSize(16px);
    padding-bottom: 15px;
}

a {
    text-decoration: none;
    color: $white;
}

a:hover {
    color: $blue;
}

/* Media Queries */

@media only screen and (max-width: $small) {

   .movies {
       &--movie-card {
        width: 95vw;
        height: 100vh;
        overflow: auto;
       }
    
    &--info {
        padding: 0 3vw;
    }
   } 

}

@media only screen and (max-width: $medium) {

    .movies {
        &--movie-card {
            width: 75vw;
        height: auto;
        overflow: auto;

            &--poster,
            &--no-poster {
                float: none;
                width: 100%;
                height: auto;
                border-radius: 10px 10px 0 0;
                border-bottom: solid 1px $green;
            }
        }

        &--info {
            padding: 0 3vw;
        }

    }

}
</style>
