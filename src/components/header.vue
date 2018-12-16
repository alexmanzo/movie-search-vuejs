<template>
    <header class="app-header">
        <router-link :to="{ name: 'home' }"><img :src="logo" class="app-logo" alt="logo" /></router-link>
        <search-form></search-form>
        <hr />
    </header>
</template>

<script>
    // IMPORTS //
    import logo from '@/assets/logo.svg'
    import searchForm from '@/components/searchForm.vue'

    export default {
        data() {
            return {
                logo,
            }
        },
        components: {
            'search-form': searchForm
        },
        methods: {
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

    /* Media Queries */
    @media only screen and (max-width: 650px) {
        .app-header {
            display: flex;
            flex-direction: column;
        }

        .app-logo {
            width: 65vw;
            margin: 20px auto 0 auto;
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
        .app-logo {
            width: 35vw;
            margin-left: 5%;
            margin-right: 10%;
        }

    }
</style>