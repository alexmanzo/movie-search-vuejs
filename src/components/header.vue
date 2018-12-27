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

<style lang="scss" scoped>
@import 'main.scss';
    
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

    a:focus {
        outline: none;
    }

    hr {
        border: 1px solid $green;
        width: 90%;
        position: absolute;
        margin-top: 75px;
        margin-bottom: 75px;
    }

    @supports (-moz-appearance:none) {
        hr {
            margin-top: 225px;
        }
    }

    /* Media Queries */
    @media only screen and (max-width: $small) {
        .app-header {
            display: flex;
            flex-direction: column;
        }

        .app-logo {
            width: 65vw;
            margin: 20px auto 0 auto;
        }

        hr {
            display: none;
        }

    }

    
</style>