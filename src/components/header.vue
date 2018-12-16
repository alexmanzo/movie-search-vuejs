<template>
    <header class="app-header">
        <img :src="logo" class="App-logo" alt="logo" />
        <form class="search-form">
            <input type="text" name="userInput" v-model="searchTerm"/>
            <span class="search-bar"></span>
            <label for="userInput">Enter a movie title...</label>
            <button @click.prevent="getSearchResults" class="search-button"></button>
        </form>
        <hr />
    </header>
</template>

<script>
    // IMPORTS //
    import logo from '@/assets/logo.svg'
    import { bus } from '@/main'
    import axios from 'axios'
    import router from '@/router'

    export default {
        data() {
            return {
                logo,
                searchTerm: ''
            }
        },
        methods: {
            async getSearchResults() {
                const apiKey = process.env.VUE_APP_API_KEY
                let results = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&query=${this.searchTerm}`)
                this.searchTerm = ''
                console.log(results)
                bus.$emit('gotSearchResults', results)
                router.push("results")
            }
        }
    }
</script>

<style scoped>
    .app-header {
        display: flex;
        flex-direction: row;    
        align-items: center;
        padding-top: 2%;
        padding-left: 5%;
    }

    .app-logo {
        width: 150px;
    }

    .logo-link:focus {
        outline: none;
    }

    .logo-link:focus,
    .logo-link:hover>img {
        filter: brightness(300%);
    }

    hr {
        border: 1px solid #01d277;
        width: 90%;
        position: absolute;
        margin-top: 75px;
        margin-bottom: 75px;
    }

    /* Search Form */
    .search-form {
        position: relative;
    }

    input {
        background-color: transparent;
        color: #ffffff;
        font-size: 18px;
        padding: 10px 10px 10px 10px;
        width: 350px;
        border: none;
        border-bottom: 1px solid #01d277;
    }

    input:focus {
        outline: none;
    }



    /* Label */
    label {
        color: #edfff7;
        font-style: italic;
        font-size: 18px;
        opacity: 0.5;
        position: absolute;
        top: 15px;
        left: 10px;
        transition: 0.2s ease all;
        pointer-events: none;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    /* Label Active State */
    input:focus~label {
        top: -17px;
        left: 0px;
        font-style: normal;
        opacity: 1.0;
        font-size: 14px;
        color: #ffff;
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
        background: #01d277;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
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

    .search-button {
        position: absolute;
        border: 2px solid #01d277;
        border-radius: 10px;
        font-size: 18px;
        padding: 0 5% 0 5%;
        left: 380px;
        top: 18px;
        background-color: transparent;
        color: #01d277;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    .search-button:focus {
        outline: none;
        color: #fff;
        border: 2px solid #ffff;
    }

    .search-button:after {
        content: '\279e';
    }

    .search-button:hover {
        background-color: #01d277;
        color: #081c24;
    }

    .search-button:active {
        background-color: #ffff;
        color: #081c24;
    }


    /* Media Queries */
    @media only screen and (max-width: 650px) {
        .App-header {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
        }

        .App-logo {
            width: 65vw;
            margin-left: 5%;
            margin-right: 10%;
        }

        .search-form {
            margin-right: 15%;
        }

        input {
            font-size: 18px;
            width: 200px;

        }

        .search-button {
            padding: 0 15px 0 15px;
            left: 225px;
            top: 16px;
        }

        hr {
            display: none;
        }

    }

    /* iPhone 4, 5, SE Landscape */
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
        .App-logo {
            width: 35vw;
            margin-left: 5%;
            margin-right: 10%;
        }

        input {
            width: 250px;

        }

        .search-button {

            left: 275px;

        }

    }
</style>