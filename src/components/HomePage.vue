<template>
  <div>   
    <p class="top-text">Welcome To Image Gallery</p>
    <img class = "randomImage" src= "https://picsum.photos/200/300" /><br>
    <button type="button" class="btn btn-link" @click="changePage">Browse all images..</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      images: [],
    };
  },
  methods :{
    changePage() {
      this.$router.push("/gallery");
    },
  }
}
</script>

<style scoped>
.randomImage{
  width: 30%;
  height: 30%;
  margin: 10px;
  border: solid 1px black;
  border-radius: 15px;
}
.btn{
  color:blue;
  margin: 10px;
}
.top-text{
  padding-top: 10px;
  font-size: 30px;
  font-family: monospace;
}
</style>
