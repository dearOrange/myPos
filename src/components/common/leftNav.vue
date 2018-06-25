<template>
  <div class="left-nav">
    <ul>
        <router-link to="/">
            <li>
                <i class="icon iconfont icon-quanbudingdan"></i>
                <div>收银</div>
            </li>
        </router-link>
        <router-link to="/HelloWorld">
        <li>
            <i class="icon iconfont icon-quanbudingdan"></i>
            <div>店铺</div>
        </li>
        </router-link>
        <router-link to="/goods">
        <li>
            <i class="icon iconfont icon-goumai"></i>
            <div>商品</div>
        </li>
        </router-link>
        <router-link to="/person">
        <li>
            <i class="icon iconfont icon-huiyuanqia"></i>
            <div>会员</div>
        </li>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .left-nav{
        color:#fff;
        font-size:10px;
        height:100%;
        background-color:#1D8CE0;
        position:fixed;
        top:50px;
        width:5%;
    }
    .iconfont{
        font-size:24px;
    }
    .left-nav ul{
        padding:0;
        margin:0;
    }
    .left-nav ul a{
        text-decoration-line: none;
        color:#fff;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom:1px solid #20a0ff;
        padding:10px;
    }
</style>
