<template>
  <div class="header">
    <div class="leftLogo">
        <img src="../../../static/img/logo1.png" alt="vue的logo">
    </div>
    <div class="rightLoginout">
        <ul>
            <li>
                <i class="icon iconfont icon-goumai"></i>
                <span>名字</span>
            </li>
            <li>
                <i class="icon iconfont icon-goumai"></i>
                <span>退出</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        width:100%;
        height:50px;
        background-color:#1D8CE0;
        position:fixed;
        z-index:9;
    }
    .leftLogo{
        float: left;
        padding:8px 10px;
    }
    .leftLogo img{
        height:30px;
    }
    .rightLoginout{
        float:right;
        padding:10px;
        color:#fff;
    }
    .rightLoginout ul li{
        float:left;
        margin:4px 10px;
        cursor: pointer;
    }
</style>
