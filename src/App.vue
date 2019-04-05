
<template>
  <div id="app">
    <div class="top-template">
      <img src="./assets/kig_vit.png">
    </div>  
    <componentMain></componentMain>
  </div>
</template>

<script>
import componentMain from './components/component-main.vue'
export default {
  name: 'App',
  components: {
    componentMain
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.top-template {
  background-image: url("./assets/iStock.jpg");
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
}
img {
  margin-top: 200px;
  height: 200px;
  width: 600px;
}
nav {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
</style>
<style lang="css">
@import './assets/css/materialize.css';
@import './assets/css/materialize.min.css';
</style>
