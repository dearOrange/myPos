<template>
  <div class="section">
    <leftNav/>
    <div class="right-section">
      <BreadCrumb/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
import BreadCrumb from '@/components/common/breadcrumb'
export default {
  name: 'Section',
  components:{
    leftNav,
    BreadCrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section{
  height:100%;
}
.right-section{
  position:fixed;
  top:50px;
  left:5%;
  width:95%;
}
</style>
