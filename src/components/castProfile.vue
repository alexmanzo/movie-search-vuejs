<template>
  <div id="profile-container">
    <div class="profile">
      <img v-if="castPhoto_path === null" id="no-poster" :src="noPhoto" alt="no photo found">
      <img v-else :src="`https://image.tmdb.org/t/p/w1280/${castPhoto_path}`" :alt="`${castName}`">
      <div class="profile--data">
        <h1>{{ castName }}</h1>
        <div clas="profile--data--details">
          <span v-if="birthday===null"></span>
          <p v-else>
            <strong>Date of Birth:</strong>
            <br>
            {{ birthday | moment("MMMM Do, YYYY") }}
          </p>
          <span v-if="deathday===null"></span>
          <p v-else>
            <strong>Date of Death:</strong>
            <br>
            {{ deathday | moment("MMMM Do, YYYY") }}
          </p>
          <span v-if="bio==='' || bio === null"></span>
          <p v-else>
            <strong>Biography</strong>
            <br>
            {{ bio }}
          </p>
        </div>
      </div>
    </div>
    <h2>Filmography</h2>
    <carousel :items="items" :routerName="routerName"></carousel>
  </div>
</template>

<script>
import axios from 'axios'
import noPhoto from '@/assets/nophoto.svg'
import carousel from '@/components/carousel.vue'
const apiKey = process.env.VUE_APP_API_KEY

export default {
  components: { carousel },
  data() {
    return {
      noPhoto,
      items: [],
      routerName: 'movie',
      numberOfResults: 0,
      birthday: null,
      deathday: null,
      castName: '',
      bio: '',
      castPhoto_path: '',
    }
  },
  methods: {
    getFilmography() {
      return axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_cast=${
          this.$route.params.id
        }&with_original_language=en`
      )
    },
    getBio() {
      return axios.get(
        `https://api.themoviedb.org/3/person/${
          this.$route.params.id
        }?api_key=${apiKey}&language=en-US`
      )
    },
    async getCastProfile() {
      const [filmography, bio] = await Promise.all([
        this.getFilmography(),
        this.getBio(),
      ])
      this.numberOfResults = filmography.data.total_results
      this.items = filmography.data.results
      this.birthday = bio.data.birthday
      this.deathday = bio.data.deathday
      this.castName = bio.data.name
      this.bio = bio.data.biography
      this.castPhoto_path = bio.data.profile_path
    },
  },
  created() {
    this.getCastProfile()
  },
}
</script>

<style lang="scss" scoped>
@import 'main.scss';
#profile-container {
  padding: 0 5% 0 5%;
  width: 90%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.profile {
  display: flex;
  flex-direction: row;
  height: 45vh;
  margin-top: 30px;
  margin-bottom: 50px;
  overflow: auto;

  img {
    height: 99%;
    margin-right: 30px;
    border-radius: 10px;
    border: 1px solid $white;
    background-color: $gray;
  }

  &--data {
    display: flex;
    flex-wrap: wrap;

    h1 {
      flex-basis: 100%;
      margin-bottom: 3vh;
    }

    &--details {
      width: 90%;
    }
  }
}

@media only screen and (max-width: $medium) {
  .profile {
    flex-direction: column;
    height: auto;
    text-align: center;
    width: 90vw;

    img {
      width: 100%;
      height: auto;
      margin-right: 0;
    }

    &--data,
    &--data--details {
      margin: 0 auto;
      flex-basis: 100%;
    }
  }
}
</style>


