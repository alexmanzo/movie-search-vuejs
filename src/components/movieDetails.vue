<template>
    <div class="movie">
        <img v-if="movieData.poster_path === null" class="movie-page-no-poster" :src="noPhoto" alt='no poster found' />
        <img v-else class="movie-page-poster" :src="`https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`" :alt="`${movieData.original_title}`" />
        <div class="movie-data">
            <div class="movie-headline">
                <h1>{{ movieData.original_title }} ({{ movieData.release_date.substring(0,4) }})</h1>
                <h4>{{ movieData.tagline }}</h4>
            </div>
            <div class="movie-details">
                <p>
                    <strong>Budget</strong>
                    <br />
                    <span v-if="movieData.budget === 0">
                        N/A
                    </span> 
                    <span v-else>
                        ${{ movieData.budget.toLocaleString() }}
                    </span>
                </p>
                <p>
                    <strong>Revenue</strong>
                    <br />
                    <span v-if="movieData.revenue === 0">
                        N/A
                    </span>
                    <span v-else>
                        ${{ movieData.revenue.toLocaleString() }}
                    </span>
                </p>
                <p>
                    <strong>Runtime</strong>
                    <br />
                    <span v-if="movieData.runtime === null">
                        N/A
                    </span>
                    <span v-else>
                        {{ movieData.runtime }} minutes
                    </span>
                </p>
                <div class="genres">
                    <p><strong>Genres</strong><br />
                        <ul>
                           <li v-for="genre in movieData.genres" :key="genre.name"><router-link :to="{ name: 'genre', params: { id:  genre.id, name: genre.name  }}">{{ genre.name }}</router-link></li>
                        </ul>
					</p>
                </div>
            </div>
            <div class="movie-plot">
                    <p><strong>Plot</strong><br />{{ movieData.overview }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        movieData: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            
        }
    },
    methods: {

    },
    created() {
        
    }
}
</script>

<style scoped>
    ul {
        padding-inline-start: 0;
    }

    li {
        list-style: none;
    }
</style>


