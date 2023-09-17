<template>
  <div class="home">
    <nav>
      <router-link :to="{ name: 'Peoples' }">Peoples</router-link> |
      <router-link :to="{ name: 'Favorite' }">Favorite</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
