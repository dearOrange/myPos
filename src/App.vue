<template>
  <div id="app">
    <Header/>
    <Section></Section>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Section from '@/components/common/section'
export default {
  name: 'App',
  components:{
    Header,
    Section
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
