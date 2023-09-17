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
      :show-footer="showFooter"
      class="peoples-view__table"
      @select-all-rows="onSelectAllPeoples"
      @select-row="onSelectCharacter"
    >
      <template #footer>
        <button type="button">Button</button>
      </template>
    </DataTable>

    <ThePaginator
      v-model="page"
      :pages="pages"
      @change="onChangePage"
    ></ThePaginator>
  </div>
</template>

<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import ThePaginator from '@/components/ThePaginator.vue'
// import InputSearch from '@/components/InputSearch.vue'
import { IPeople, IPeopleAll } from '@/api'
import { ref, computed, shallowRef } from 'vue'
import { useStore } from 'vuex'

interface IBodyTableData {
  data: {
    id: number,
    name: string,
    height: string,
    mass: string,
    hair_color: string,
  },
  checked: boolean,
  disabled?: boolean
}

const $store = useStore()

let loading = ref<boolean>(true)
let peoplesAll = ref<IPeopleAll | null>(null)
let page = ref<number>(1)
let perView = ref<number>(1)
let peoplesResults = shallowRef<IPeople[] | null>([])

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

const bodyTableData = ref<IBodyTableData[]>([])

const pages = computed((): number => {
  return Math.ceil(+peoplesAll.value?.count / perView.value) || 1
})

const onFetchData = (p: number): void => {
  loading.value = true
  $store
    .dispatch('fetchPeople', p)
    .then((result) => {
      loading.value = false
      peoplesAll.value = result

      peoplesResults.value = result.results.map((character: IPeople): IPeople => {
        const splitUrl = character.url.split('/')
        return {
          ...character,
          id: +splitUrl[splitUrl.length - 2],
        }
      })

      bodyTableData.value = peoplesResults.value.map((character: IPeople): IBodyTableData => ({
        data: {
          id: character.id,
          name: character.name,
          height: character.height,
          mass: character.mass,
          hair_color: character.hair_color,
        },
        checked: false
      }))

      let _page: number
      let url

      if (result.next) {
        url = new URL(result.next)
        _page = +url.searchParams.get('page')
        page.value = _page--
      } else {
        url = new URL(result.previous)
        _page = +url.searchParams.get('page')
        page.value = _page++
      }

      perView.value = result.value?.results?.length || 1
    })
}

const showFooter = computed((): boolean => {
  return bodyTableData.value?.some((character: IBodyTableData): boolean => {
    return character.checked
  }) || false
})

const onChangePage = (page: number): void => {
  onFetchData(page)
}

const onSelectAllPeoples = (characters: IBodyTableData[]): void => {
  bodyTableData.value = characters.map((character: IBodyTableData): IBodyTableData => ({
    ...character,
    checked: true
  }))
}

const onSelectCharacter = (character: IBodyTableData): void => {
  bodyTableData.value.reduce((result: IBodyTableData[], item: IBodyTableData): IBodyTableData[] => {
    if (item.data.id === character.data.id) {
      return [
        ...result, 
        character
      ]
    }

    return result
  }, [])
}

onFetchData(1)
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