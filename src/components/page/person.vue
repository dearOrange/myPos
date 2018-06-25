<template>
  <div class="person">
    <h1>{{ msg }}</h1>
    <router-link to="/goods/198/jspang website is very good">去到商品页</router-link>
    <router-link to="/count">去到vuex页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Person',
  data () {
    return {
      msg: '我是会员页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
