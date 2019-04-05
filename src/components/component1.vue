<template>
  <div class="component1">
    <h1>{{ msg }}</h1>
    <div class="fixed-action-btn">
  <a class="btn-floating btn-large red">
    <i class="large material-icons">mode_edit</i>
  </a>
</div>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  data() {
    return {
      msg: 'Investments',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component1 {
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 50px;
}
a {
  color: #42b983;
}
</style>
