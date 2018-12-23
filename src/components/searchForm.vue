<template>
    <form id="search-form" @submit.prevent="submitSearch">
        <input type="text" name="userInput" v-model="searchTerm" />
        <span class="search-bar"></span>
        <label for="userInput">Enter a movie title...</label>
        <button></button>
    </form>
</template>

<script>
import router from '@/router'

export default {
    
    data () {
        return {
            searchTerm: ''
        }
    },
    methods: {
        submitSearch() {
            router.push({ name: 'results', params: { query:  this.searchTerm }})
            this.searchTerm = ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'main.scss';

#search-form {
    position: relative;
}

input {
    @include setFontSize(20px);
    background-color: transparent;
    color: $white;
    padding: 10px;
    width: 350px;
    border: none;
    border-bottom: 1px solid $green;
}

input:focus {
    outline: none;
}

/* Label */
label {
    @include setFontSize(20px);
    color: $white;
    font-style: italic;
    opacity: 0.5;
    position: absolute;
    top: 15px;
    left: 10px;
    transition: $ease;
    -moz-transition: $ease;
    -webkit-transition: $ease;
    pointer-events: none;    
}

/* Label Active State */
input:focus~label {
    top: -17px;
    left: 0px;
    font-style: normal;
    opacity: 1.0;
    font-size: 14px;
    color: $white;
}

/* Bottom Bar */
.search-bar {
    position: relative;
    display: block;
    width: 100%;
}

.search-bar:before,
.search-bar:after {
    content: '';
    height: 2px;
    width: 0;
    position: absolute;
    background: $green;
    transition: $ease;
    -moz-transition: $ease;
    -webkit-transition: $ease;
}

.search-bar:before {
    left: 50%;
}

.search-bar:after {
    right: 50%;
}

/* Bottom Bar Active State */
input:focus~.search-bar:before,
input:focus~.search-bar:after {
    width: 50%;
}

/* Button */

button {
    @include setFontSize(20px);
    position: absolute;
    border: 2px solid $green;
    border-radius: 10px;
    padding: 0 5% 0 5%;
    left: 380px;
    top: 18px;
    background-color: transparent;
    color: $green;
    transition: $ease;
    -moz-transition: $ease;
    -webkit-transition: $ease;
}

button:focus {
    outline: none;
    color: $white;
    border: 2px solid $white;
}

button:after {
    content: '\279e';
}

button:hover {
    background-color: $green;
    color: #081c24;
}

button:active {
    background-color: $white;
    color: #081c24;
}

/* Media Queries */
@media only screen and (max-width: $small) {

    .search-form {
        margin-right: 15%;
    }

    input {
        width: 200px;
    }

    button {
        padding: 0 15px 0 15px;
        left: 225px;
        top: 16px;
    }

}
</style>
