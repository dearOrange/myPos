<template>
  <div class="hello">
    <h1>{{msg}}</h1>
   <router-view name="left"></router-view>
   <router-view name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这里是店铺'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
