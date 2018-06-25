<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border>
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量"></el-table-column>
              <el-table-column prop="price" label="金额"></el-table-column>
              <el-table-column prop="orderOption" label="操作" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  <el-button type="text" size="small" @click="delOrderList(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="total-count">
              <small>数量：</small>{{totalNum}} &nbsp;&nbsp;&nbsp;&nbsp;<small>总价：</small>{{totalMoney}}元
            </div>
            <div class="foot-button">
              <el-button type="warning" >挂单</el-button>
              <el-button type="danger" @click="delAllList()">删除</el-button>
              <el-button type="success" @click="checkoutMoney()">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="会员">会员</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="often-title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)" :key="goods.goodsId">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-tab">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)" :key="goods.goodsId">
                    <span class="foodImg"><img :src="goods.goodsImg" :alt="goods.goodsName"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)" :key="goods.goodsId">
                    <span class="foodImg"><img :src="goods.goodsImg" :alt="goods.goodsName"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)" :key="goods.goodsId">
                    <span class="foodImg"><img :src="goods.goodsImg" :alt="goods.goodsName"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)" :key="goods.goodsId">
                    <span class="foodImg"><img :src="goods.goodsImg" :alt="goods.goodsName"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  data(){
    return {
      tableData:[],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalNum:0,
      totalMoney:0
    }
  },
  created:function(){
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(res=>{
      this.oftenGoods = res.data
    })
    .catch(error=>{
      alert('网络错误，不可访问！')
    })

    axios.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(res=>{
      this.type0Goods = res.data[0];
      this.type1Goods = res.data[1];
      this.type2Goods = res.data[2];
      this.type3Goods = res.data[3];
    })
    .catch(error=>{
      alert('网络错误，不可访问！')
    })
  },
  mounted:function(){
    var orderHeight = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderHeight + 'px';
    
  },
  methods:{
    addOrderList(goods){
      this.totalNum = 0;
      this.totalMoney = 0;
      // 首先判断商品是否存在商品列表中
      let isHave = false;
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].goodsId == goods.goodsId){
          isHave = true;
        }
      }
      // 根据判断的值写业务逻辑
      if(isHave){
        //改变列表中商品的数量
        let arr = this.tableData.filter(a => a.goodsId == goods.goodsId);
        arr[0].count++;
      }else{
        let newGoods = {
          goodsId:goods.goodsId,
          goodsName:goods.goodsName,
          price:goods.price,
          count:1
        };
        this.tableData.push(newGoods);
      }

      //总数量和总价格
      this.getAll();
    },
    // 删除单个商品
    delOrderList(goods){
      this.tableData = this.tableData.filter(a=>a.goodsId != goods.goodsId);
      this.getAll();
    },
    delAllList(){
      this.tableData = [];
      this.totalNum = 0;
      this.totalMoney = 0;
    },
    checkoutMoney(){
      if(this.totalNum != 0){
        this.tableData = [];
        this.totalNum = 0;
        this.totalMoney = 0;
        this.$message({
          message:'结账成功，请稍等，你的商品一会就到',
          type:'success'
        })
      }else{
        this.$message.error('您还没有点单哦，快去选购吧')
      }
    },
    //数量和价格
    getAll(){
      this.totalNum = 0;
      this.totalMoney = 0;
      if(this.tableData){
        this.tableData.forEach(ele=>{
          this.totalNum += ele.count;
          this.totalMoney = this.totalMoney+(ele.price*ele.count);
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos{
  width:100%;
}
#order-list{
  background-color:#F9FAFC;
  border:1px solid #E5E9F2;
}
.foot-button{
  margin-top:10px;
}
.often-title {
  height:20px;
  border-bottom:1px solid #E5E9F2;
  background-color:#F9FAFC;
  padding:10px;
  text-align: left;
}
.often-goods-list ul li {
  float:left;
  border:1px solid #E5E9F2;
  padding:10px;
  margin:10px;
  background-color:#F9FAFC;
  cursor: pointer;
}
.o-price{
  color:#58B7ff;
}
.goods-tab{
  clear:both;
}
.cookList li{
  list-style: none;
  width:23%;
  border:1px solid #E5E9F2;
  height: auot;
  overflow: hidden;
  background-color:#fff;
  padding: 2px;
  float:left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span{
  display: block;
  float:left;
}
.foodImg{
  width: 40%;
}
.foodImg img{
  width: 60px;
}
.foodName{
  font-size: 16px;
  padding-left: 10px;
  color:brown;
}
.foodPrice{
  font-size: 16px;
  padding-left: 10px;
  padding-top:10px;
}
</style>
