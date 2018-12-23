<template>
  <div id="movie">
    <img v-if="movieData.poster_path === null" id="no-poster" :src="noPhoto" alt="no poster found">
    <img
      v-else
      :src="`https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`"
      :alt="`${movieData.original_title}`"
    >
    <div class="movie-info">
      <div class="movie-info--headline">
        <h1>{{ movieData.original_title }} ({{ movieData.release_date.substring(0,4) }})</h1>
        <h4>{{ movieData.tagline }}</h4>
      </div>
      <div class="movie-info--details">
        <p>
          <strong>Budget</strong>
          <br>
          <span v-if="movieData.budget === 0">N/A</span>
          <span v-else>${{ movieData.budget.toLocaleString() }}</span>
        </p>
        <p>
          <strong>Revenue</strong>
          <br>
          <span v-if="movieData.revenue === 0">N/A</span>
          <span v-else>${{ movieData.revenue.toLocaleString() }}</span>
        </p>
        <p>
          <strong>Runtime</strong>
          <br>
          <span v-if="movieData.runtime === null">N/A</span>
          <span v-else>{{ movieData.runtime }} minutes</span>
        </p>
        <div id="movie-genres">
          <p>
            <strong>Genres</strong>
            <br>
            <span v-for="(genre, index) in movieData.genres" :key="genre.name">
              <router-link
                :to="{ name: 'genre', params: { id:  genre.id, name: genre.name  }}"
              >{{ genre.name }}</router-link>
              <span v-if="index < movieData.genres.length - 1">/</span>
            </span>
          </p>
        </div>
      </div>
      <div class="movie-info--plot">
        <p>
          <strong>Plot</strong>
          <br>
          {{ movieData.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import noPhoto from '@/assets/nophoto.svg'
export default {
  props: {
    movieData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      noPhoto,
    }
  },
  methods: {},
  created() {},
}
</script>

<style lang="scss" scoped>
@import 'main.scss';

img {
  height: 100%;
  margin-right: 30px;
  border-radius: 10px;
  border: 1px solid $white;
}

.movie-info {
  display: flex;
  flex-wrap: wrap;

  &--headline {
    flex-basis: 100%;
    margin-bottom: -5vh;
  }

  &--details {
    flex-basis: 30%;
  }

  &--plot {
    flex-basis: 70%;
  }
}

a {
  color: $green;
}

a:hover {
  text-decoration: none;
}

a:active {
  color: $white;
}

a:visited {
  color: $lightgray;
}

@media only screen and (max-width: $medium) {

  img {
      width: 100%;
      height: auto;
      margin-right: 0;
    }

  .movie-info {
    &--headline,
    &--details,
    &--plot {
      margin: 0 auto;
      flex-basis: 100%;
    }
  }
}
</style>


