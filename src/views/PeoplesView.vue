<template>
  <div
    v-loading="loading" 
    class="peoples-view"
  >
    <DataTable 
      :header="headerTableData"
      :body="bodyTableData"
      :show-checkbox-column="true"
      :show-buttons-column="true"
      class="peoples-view__table"
    ></DataTable>

    <ThePaginator
      v-model="page"
      :pages="pages"
    ></ThePaginator>
  </div>
</template>

<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import ThePaginator from '@/components/ThePaginator.vue'
// import InputSearch from '@/components/InputSearch.vue'
import { IPeople, IPeopleAll } from '@/api'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const $store = useStore()

let loading = ref<boolean>(true)
let peoplesAll = ref<IPeopleAll | null>(null)
let page = ref<number>(1)
let perView = ref<number>(1)

$store
  .dispatch('fetchPeople')
  .then((result) => {
    loading.value = false
    peoplesAll.value = result

    let _page: number
    let url

    if (peoplesAll.value?.next) {
      url = new URL(peoplesAll.value?.next)
      _page = +url.searchParams.get('page')
      page.value = _page--
    } else {
      url = new URL(peoplesAll.value?.previous)
      _page = +url.searchParams.get('page')
      page.value = _page++
    }

    perView.value = peoplesAll.value?.results?.length || 1
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

const pages = computed((): number => {
  return Math.round(+peoplesAll.value?.count / perView.value) || 1
})
</script>

<style lang="scss">
.peoples-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--padding-block) * 2);

  padding-inline: var(--padding-inline);
  padding-block: var(--padding-block);
}

.peoples-view__table {
  width: 100%;
  max-width: 800px;
}
</style>