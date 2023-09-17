<template>
  <div class="peoples-view">
    <DataTable 
      :header="headerTableData"
      :body="bodyTableData"
      :show-checkbox-column="true"
      :show-buttons-column="true"
    ></DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
// import InputSearch from '@/components/InputSearch.vue'
import { IPeople, IPeopleAll } from '@/api'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const $store = useStore()

let peoplesAll = ref<IPeopleAll | null>(null)

$store
  .dispatch('fetchPeople')
  .then((result) => {
    peoplesAll.value = result
  })

const headerTableData = ref<Array<{
  title?: string,
  alias: string,
  hidden?: boolean
}>>([
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

const bodyTableData = computed((): Array<{
  [key: string]: any
}> => {
  return peoplesAll.value?.results?.map((character: IPeople): IPeople => ({
    id: +character.url.split('/')[-1],
    name: character.name,
    height: character.height,
    mass: character.mass,
    hair_color: character.hair_color
  })) || []
})
</script>