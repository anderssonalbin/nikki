<template>
  <div class="component-main">
    <nav>
        <div class="nav-wrapper">
            <div class="col s12">
                <a href="#/Members" class="breadcrumb">Members</a>
                <a href="#/Investments" class="breadcrumb">Investments</a>
                <a href="#!" class="breadcrumb">Contact</a>
            </div>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'componentMain',
  data() {
    return {
      msg: 'Investments',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<style lang="css">
@import '../assets/css/materialize.css';
@import '../assets/css/materialize.min.css';
</style>
