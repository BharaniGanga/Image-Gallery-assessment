<template>
    <nav class="navbar navbar-expand-lg navbar-dark " style="background-color: #041747">
        <a class="navbar-brand" href="#">
            <router-link class="nav-link" :to="{name:'Home'}">
            Image Gallery
            </router-link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" :to="{name:'Home'}" exact>
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'Gallery'}" exact>
                <a class="nav-link" href="#">Gallery</a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
.navbar-brand{
    text-decoration: none;
}
</style>