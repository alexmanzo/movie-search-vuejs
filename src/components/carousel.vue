<template>
  <div class="carousel-wrapper">
    <div class="carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
    <div class="carousel" ref="carousel">
      <div
        class="carousel-items"
        :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
      >
        <div
          ref="card"
          class="carousel--card"
          v-for="(item, index) in items"
          :key="index"
        >
          <div v-if="item.site === 'YouTube'" class="video-container">
            <iframe
              :title="`${item.name}`"
              id="ytplayer"
              type="text/html"
              :src="`https://www.youtube.com/embed/${item.key}`"
              frameborder="0"
            ></iframe>
            <p>{{ item.name }}</p>
          </div>
          <div v-else>
            <router-link :to="{ name: routerName, params: { id:  item.id, name: item.name  }}">
              <img
                v-if="item.profile_path === null || item.poster_path === null"
                id="no-photo"
                :src="noPhoto"
                alt="no profile found"
              >
              <img
                v-else-if="!item.profile_path"
                :src="`https://image.tmdb.org/t/p/w1280/${item.poster_path}`"
                :alt="`${item.original_title}`"
              >
              <img
                v-else
                :src="`https://image.tmdb.org/t/p/w1280/${item.profile_path}`"
                :alt="`${item.name}`"
              >
              <div v-if="!item.name" class="carousel--card--footer">
                <p>
                  <strong>{{ item.original_title }} ({{ item.release_date.substring(0,4) }})</strong>
                </p>
              </div>
              <div v-else class="carousel--card--footer">
                <p>
                  <strong>{{ item.name }}</strong>
                </p>
                <p>{{ item.character }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
  </div>
</template>

<script>
import noPhoto from "@/assets/nophoto.svg";
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    routerName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      noPhoto,
      currentOffset: 0,
      windowSize: 5,
      paginationFactor: 200,
      numOfCards: 4,
      overflow: false
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      this.setPagination();
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    setPagination() {
      this.paginationFactor = this.$refs.card[0].clientWidth + 20
    }
  }
};
</script>

<style lang="scss">
@import "main.scss";
.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel {
  justify-content: center;
  width: 100%;
  height: 40vh;
  overflow: hidden;

  &--overflow-container {
    overflow: hidden;
  }

  &--nav__left,
  &--nav__right {
    display: inline-block;
    padding: 10px;
    border-top: 2px solid $green;
    border-right: 2px solid $green;
    cursor: pointer;
    margin: 0 10px;
    &[disabled] {
      opacity: 0.25;
      cursor: auto;
    }
  }

  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }

  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.carousel-items {
  display: flex;
  transition: transform 1000ms ease;

  a {
    text-decoration: none;
    color: $white;

    &:hover {
      color: $green;
    }
  }

  .carousel--card {
    cursor: pointer;
    margin: 0 10px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    img {
      height: 30vh;
      border-radius: 4px;
      vertical-align: bottom;

      &:hover {
        filter: brightness(110%);
      }
    }

    &--footer {
      padding: 7px 15px;

      p {
        padding: 3px 0;
        margin: 0;
        margin-bottom: 2px;
        @include setFontSize(18px);

        &:nth-of-type(2) {
          @include setFontSize(14px);
        }
      }
    }
  }
}
</style>
