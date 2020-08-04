<template>
  <div class="tarbar">
     <slot></slot>
   </div>
    
</template>

<script>
export default {
    name:"tarbar"
}
</script>

<style>
.tarbar{
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0 -3px 3px rgba(100, 100, 100, .2);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    
  }
</style>