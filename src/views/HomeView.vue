<template>
  <div class="home">
    <nav>
      <router-link :to="{ name: 'Peoples' }">Peoples</router-link> |
      <router-link :to="{ name: 'Favorite' }">Favorite</router-link>
    </nav>
  </div>
</template>
