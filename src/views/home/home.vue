<template>
<div id="home">
  <navbar class="homebar">
    <div slot="center">购物街</div>
  </navbar>
  <home-swiper :banners="banners"></home-swiper>
  <homerecommend :recommends="recommend"></homerecommend>
  <feature></feature>
  <tarcontrol :tarcontrol="['流行','时尚','热门']" class="tar" @tarclick="tarclick"></tarcontrol>
  <goods :goods="goods[curr].list" ></goods>
    
    <ul>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
      <li>22</li>
    </ul>
</div>
 
</template>

<script>
 import navbar from "components/common/navbar"
 import tarcontrol from "components/content/tarcontrol/TarControl"

 import homeSwiper from "./childcomps/homeSwiper"
 import homerecommend from "./childcomps/homecomments"
 import feature from "./childcomps/feature"
 import goods from "components/content/homegoods/goods"

 import{gethomemultidata, homegoods} from "../../network/home"
 

export default {
    name:"home",
    components:{
      navbar,
      homeSwiper,
      homerecommend,
      feature,
      tarcontrol,
      goods
    },
    data(){
      return {
        banners:[],
        dkeywords:[],
        keywords:[],
        recommend:[],
        goods:{
          "pop":{page:0,list:[]},
          "new":{page:0,list:[]},
          "sell":{page:0,list:[]}
        },
        curr:"pop"
      }
    },
    created(){
      this.gethomemultidata()
      this.gethomegoods("pop")
      this.gethomegoods("new")
      this.gethomegoods("sell")
    },
    methods:{
      tarclick(index){
        console.log(index);
        
        switch(index){
          case 0:this.curr = "pop"
          break;
          case 1:this.curr = "new"
          break;
          case 2:this.curr = "sell"
          break;
        }
      },


      gethomemultidata(){
        gethomemultidata().then(res =>{
          // console.log(res)
          this.banners = res.data.banner.list
          // this.dkeywords = res.data.dkeywords.list
          // this.keywords = res.data.keywords.list
          this.recommend = res.data.recommend.list
      })
      },
     
      gethomegoods(type){
         const page = this.goods[type].page+1
        homegoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          console.log(page,res.data);
          
        })  
      }
    }
}
</script>

<style>
#home{
  padding-top:44px 
}
.homebar{
  background-color: pink;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;

}

.tar{
  position: sticky;
  top: 44px;
  z-index: 999;
}
</style>