<template>
<div id="index">
    <Header />
    <Advert />
    <Page />
    <Footer />
</div>
</template>

<script>
import Header from './Header'
import Advert from './Advert'
import Page from './Page'
import Footer from './Footer'

export default {
    components: {
        Header,
        Advert,
        Page,
        Footer
    }
}
</script>

<style>

</style>