<template>
  <div class="recommend">
      <div v-for="item in recommends" class="re">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"homecomments",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .recommend{
        display: flex;
        text-align: center;
        font-size: 10px;
        padding: 10px 0 20px;
        border-bottom: 6px solid #eee
    }
    .re{
        flex:1;
    }
    .re img{
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>