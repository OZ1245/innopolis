<template>
  <div 
    v-loading="loading"
    class="character-view"
  >
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

const onAddToFavorite = (character: IPeople) => {
  // TODO
}
const onRemoveFromFavorite = (character: IPeople) => {
  // TODO
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
          id: splitUrl.id,
          name: result.name,
          height: result.height,
          mass: result.mass,
          hair_color: result.hair_color,
        },
      }
    ]
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
  max-width: 800px;
}

.character-view__icon {
  width: var(--icon-size-m);
  height: var(--icon-size-m);
}
</style>