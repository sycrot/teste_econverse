<template>
  <div id="app">
    <Header/>
    <Page/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Page from './components/Page'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Page,
    Footer
  }
}
</script>

<style>
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
