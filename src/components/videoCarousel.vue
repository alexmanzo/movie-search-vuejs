<template>
  <div class="carousel-wrapper" ref="wrapper">
    <div class="carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
    <div class="carousel" :style="{ width: carouselWidth + 'px'}">
      <div
        class="carousel-items"
        :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
      >
        <div ref="card" class="carousel--card" v-for="(item, index) in items" :key="index">
          <iframe
            :title="`${item.name}`"
            id="ytplayer"
            type="text/html"
            :src="`https://www.youtube.com/embed/${item.key}`"
            frameborder="0"
          ></iframe>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
  </div>
</template>

<script>
import noPhoto from '@/assets/nophoto.svg'
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    routerName: {
      type: String,
    },
  },
  data() {
    return {
      currentOffset: 0,
      paginationFactor: 500,
      carouselWidth: 1000,
      numOfCards: 1,
    }
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.numOfCards)
      )
    },
    atHeadOfList() {
      return this.currentOffset === 0
    },
  },
  methods: {
    moveCarousel(direction) {
      this.setPagination()
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor
      }
    },
    setPagination() {
      this.paginationFactor = this.$refs.card[0].clientWidth + 40
    },
    setWidth() {
      const newWidth = this.$refs.card[0].clientWidth * this.numOfCards
      this.carouselWidth = newWidth + 20 * this.numOfCards
    },
  },
  mounted() {
    this.setWidth()
  },
}
</script>

<style lang="scss" scoped>
@import 'main.scss';

.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel {
  justify-content: center;
  box-sizing: border-box;
  height: 60vh;
  overflow: hidden;
  margin-bottom: 50px;

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
    margin: 0 20px;

    iframe {
      height: 60vh;
      width: 107vh;
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
