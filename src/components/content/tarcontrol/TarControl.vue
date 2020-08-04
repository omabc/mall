<template>
  <div class="tarcontrol">
      <div v-for="(item,index) in tarcontrol" 
      :class="{active:currentindex==index}"
      @click="tarclick(index)"
      class="tarcontrol-item">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"TarControl",
    data(){
        return {
            currentindex:0
        }
    },
    props:{
        tarcontrol:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        tarclick(index){
            this.currentindex = index
            this.$emit("tarclick",index)
        }
    }
}
</script>

<style>
    .tarcontrol{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background-color: aliceblue;
        font-size: 15px;
    }
    .tarcontrol-item{
        flex: 3
    }
    .active{
        color: plum;
    }
    .active span{
        border-bottom: 2px solid plum
    }
    .tarcontrol-item span{
        padding: 3px;
    }
</style>