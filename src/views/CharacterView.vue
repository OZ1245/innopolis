<template>
  <div 
    v-loading="loading"
    class="character-view"
  >
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Peoples' }">Peoples</router-link> |
      <router-link :to="{ name: 'Favorite' }">Favorite</router-link>
    </nav>

    <DataTable 
      :header="headerTableData"
      :body="bodyTableData"
      :show-buttons-column="true"
      class="character-view__table"
    >
      <template #buttons="{ item }">
        <TheButton
          primary
          v-if="!item.disabled"
          @click="onAddToFavorite(item.data)"
        >
          <PlusIcon class="character-view__icon" />
          Add
        </TheButton>

        <TheButton
          danger
          v-if="item.disabled"
          @click="onRemoveFromFavorite(item.data)"
        >
          <XMarkIcon class="character-view__icon" />
          Remove
        </TheButton>
      </template>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { IPeople } from '@/api'

import DataTable, { IHeaderTableData, IBodyTableData } from '@/components/DataTable.vue'
import TheButton from '@/components/TheButton.vue'
import { XMarkIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';

const $store = useStore()
const $route = useRoute()

let loading = ref<boolean>(true)
const headerTableData = ref<IHeaderTableData[]>([
  {
    alias: 'id',
    hidden: true
  },
  {
    title: 'Name',
    alias: 'name',
  },
  {
    title: 'Height',
    alias: 'height',
  },
  {
    title: 'Mass',
    alias: 'mass',
  },
  {
    title: 'Hair color',
    alias: 'hair_color',
  },
])
const bodyTableData = ref<IBodyTableData[]>([])

const changePeopleState = (): void => {
  const favoriteIds = $store.state.favorite.map((item: IPeople): number => {
    return item.id
  })

  bodyTableData.value[0] = (favoriteIds.includes(bodyTableData.value[0].data.id))
    ? {
      data: bodyTableData.value[0].data,
      checked: false,
      disabled: true
    }
    : {
      data: bodyTableData.value[0].data,
      checked: bodyTableData.value[0].checked,
      disabled: false
    }
}

const onAddToFavorite = (character: IPeople) => {
  $store.dispatch('addFavorite', [character])

  changePeopleState()
}
const onRemoveFromFavorite = (character: IPeople) => {
  $store.dispatch('removeFavorite', [ character.id ])

  changePeopleState()
}

$store
  .dispatch('fetchPeopleById', +$route.params.id)
  .then((result) => {
    loading.value = false
    console.log('result:', result)

    const splitUrl = result.url.split('/')

    bodyTableData.value = [
      {
        data: {
          id: +splitUrl[splitUrl.length - 2],
          name: result.name,
          height: result.height,
          mass: result.mass,
          hair_color: result.hair_color,
        },
      }
    ]

    changePeopleState()
  })
</script>

<style>
.character-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--padding-block) * 2);

  padding-inline: var(--padding-inline);
  padding-block: var(--padding-block);
}

.character-view__table {
  width: 100%;
  align-items: center;
}

.character-view__icon {
  width: var(--icon-size-m);
  height: var(--icon-size-m);
}
</style>