<template> 
    <div class="tarbar-item" @click="itemclick">
        <slot name="item-icon"></slot>
        <div :style="activestyle"><slot name="item-text"></slot></div>    
    </div> 
</template>

<script>
export default {
    name:"bartaritem",
    props:{
        path:String,
        activecolor:{
            type:String,
            default:"red"
        }
    },
    computed:{
        isactive(){
           return this.$route.path.indexOf(this.path) !== -1
        },
        activestyle(){
            return this.isactive?{color:this.activecolor}:{}
        }
    },
    methods:{
        itemclick(){
            console.log(this.path)
            this.$router.push(this.path)
        }
    }
}
</script>

<style>
.tarbar-item{
    flex:1;
    text-align: center;
    height: 49px;
    line-height: 49px;                                                   
  }
  .active{
      color: red
  }
</style>