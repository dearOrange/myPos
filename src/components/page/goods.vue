<template>
  <div class="goods">
    <h1>{{ msg }}</h1>
    <router-link to="/">home</router-link>
    <router-link to="/hh">goods</router-link>
    <p>{{$route.params.newsId}}</p>
    <p>{{$route.params.newsTitle}}</p>
    <button @click="goBack">后退</button>
    <button @click="goAhead">前进</button>
    <button @click="goHome">去首页</button>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      msg: '我是商品页'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goAhead(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
