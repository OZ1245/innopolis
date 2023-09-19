<template>
  <div class="favorite-view">
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Peoples' }">Peoples</router-link>
    </nav>

    <DataTable 
      :header="headerTableData"
      :body="bodyTableData"
      :show-buttons-column="true"
      class="favorite-view__table"
    >
      <template #buttons="{ item }">
        <TheButton
          danger
          @click="onRemoveFromFavorite(item.data)"
        >
          <XMarkIcon class="favorite-view__icon" />
          Remove
        </TheButton>
      </template>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { IPeople } from '@/api'

import DataTable, { IHeaderTableData, IBodyTableData } from '@/components/DataTable.vue'
import TheButton from '@/components/TheButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { computed, ref } from 'vue'

const $store = useStore()

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

const bodyTableData = computed((): IBodyTableData[] => {
  return $store.state.favorite.map((favorite: IPeople): IBodyTableData => {
    return {
      data: favorite
    }
  })
})

const onRemoveFromFavorite = (character: IPeople): void => {
  $store.dispatch('removeFavorite', [ character.id ])
}
</script>

<style>
.favorite-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--padding-block) * 2);

  padding-inline: var(--padding-inline);
  padding-block: var(--padding-block);
}

.favorite-view__table {
  width: 100%;
  align-items: center;
}

.favorite-view__icon {
  width: var(--icon-size-m);
  height: var(--icon-size-m);
}
</style>