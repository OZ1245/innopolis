<template>
  <router-view/>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'

const $store = useStore()

$store.dispatch('initFavorite')
</script>
