<template>
  <div class="component2">
    <h1>{{ msg }}</h1>
    <div class="cards">
      <div class="card">
        <div class="card-image">
          <img src="../assets/pic-andersson.png">
          <span class="card-title">A. Andersson</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img src="../assets/pic-karlsson.png">
          <span class="card-title">A. Karlsson</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img src="../assets/pic-junler.png">
          <span class="card-title">M. Junler</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img src="../assets/pic-bjuremo.png">
          <span class="card-title">J. Bjuremo</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Component2',
  data() {
    return {
      msg: 'Members of K.I.G.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card {
    width: 50%;
    margin: 10px;
}
.cards {
    display: flex;
}
</style>
