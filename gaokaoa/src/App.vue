<template>
  <div id="app"> 
    <router-view></router-view>
  </div>
</template>

<script>
import './css/reset.css';
export default {
  name: 'app',
}
</script>

<style>
html,body{
  width:100%;
  height:100%;
}
body{
  background:url('imgs/bg.jpg') no-repeat;
  background-size:cover !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
  overflow:hidden;
}

</style>
