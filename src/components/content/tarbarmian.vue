<template>
  <tarbar> 
     <tarbaritem path="/home" activecolor="blue">
      
       <div slot="item-text">首页</div>
     </tarbaritem>
     <tarbaritem path="/item">
       <div slot="item-text">关于</div>
     </tarbaritem>
     <tarbaritem path="/car">
       <div slot="item-text">购物车</div>
     </tarbaritem>
     <tarbaritem path="/my">
       <div slot="item-text">我的</div>
     </tarbaritem>
   </tarbar>
</template>

<script>
import tarbar from "../common/tabbar"
import tarbaritem from "../common/tarbaritem"
export default {
    name:"tarbarmian",
    components:{
        tarbar,
        tarbaritem
    }
}
</script>

<style>

</style>