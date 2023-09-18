<template>
  <div
    v-loading="loading" 
    class="people-view"
  >
    <InputSearch
      v-model="searchString"
      :result="searchResults"
      :loading="searchLoading"
      @search="onSearch"
    ></InputSearch>

    <DataTable 
      :header="headerTableData"
      :body="bodyTableData"
      :show-checkbox-column="true"
      :show-buttons-column="true"
      :show-footer="showFooter"
      class="people-view__table"
      @select-all-rows="onSelectAllPeoples"
      @select-row="onSelectCharacter"
    >
      <template #buttons="{ item }">
        <TheButton
          primary
          v-if="!item.disabled"
          @click="onAddToFavorite(item.data)"
        >
          <PlusIcon class="people-view__star" />
          Add
        </TheButton>

        <TheButton
          danger
          v-if="item.disabled"
          @click="onRemoveFromFavorite(item.data)"
        >
          <XMarkIcon class="people-view__star" />
          Remove
        </TheButton>
      </template>

      <template #footer>
        <TheButton
          primary 
          @click="onAddToFavorite"
        >
          <StarIcon class="people-view__star"/>
          Add to Favorite
        </TheButton>
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
import { ref, computed, shallowRef } from 'vue'
import { useStore } from 'vuex'
import { IPeople, IPeopleAll } from '@/api'

import DataTable, { IHeaderTableData, IBodyTableData } from '@/components/DataTable.vue'
import ThePaginator from '@/components/ThePaginator.vue'
import TheButton from '@/components/TheButton.vue'
import InputSearch, { ISearchInputResult } from '@/components/InputSearch.vue'
import { StarIcon, XMarkIcon, PlusIcon } from '@heroicons/vue/24/outline'

const $store = useStore()

// Vars ------------------------------------------------------------------------

let loading = ref<boolean>(true)
let peoplesAll = ref<IPeopleAll | null>(null)
let page = ref<number>(1)
let perView = ref<number>(1)
let peoplesResults = shallowRef<IPeople[] | null>([])
let searchLoading = ref<boolean>(false)
let searchString = ref<string>('')
let searchResults = ref<ISearchInputResult[]>([])

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

// Computed --------------------------------------------------------------------

const pages = computed((): number => {
  return Math.ceil(+peoplesAll.value?.count / perView.value) || 1
})

const favorite = computed((): IPeople[] => {
  return $store.state.favorite || []
})

const showFooter = computed((): boolean => {
  return bodyTableData.value?.some((character: IBodyTableData): boolean => {
    return character.checked && !character.disabled
  }) || false
})

// Methods ---------------------------------------------------------------------

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

      changePeopleState()
    })
}

const onChangePage = (page: number): void => {
  onFetchData(page)
}

const onSelectAllPeoples = (eventData: { data: IBodyTableData[], checked: boolean }): void => {
  const { data, checked } = eventData

  if (checked) {
    bodyTableData.value = data.map((character: IBodyTableData): IBodyTableData => ({
      ...character,
      checked: true
    }))
  } else {
    bodyTableData.value = data.map((character: IBodyTableData): IBodyTableData => ({
      ...character,
      checked: (!character.disabled) ? false : character.checked
    }))
  }
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

const onAddToFavorite = (character: IPeople = null): void => {
  let characters: IPeople[] = []

  if (character) {
    characters = [
      character
    ]
  } else {
    bodyTableData.value.map((character: IBodyTableData): void => {
      if (character.checked) {
        characters = [
          ...characters,
          character.data
        ]
      }
    })
  }
  
  $store.dispatch('addFavorite', characters)
  
  changePeopleState()
}

const onRemoveFromFavorite = (character: IPeople): void => {
  $store.dispatch('removeFavorite', [ character.id ])

  changePeopleState()
}

const changePeopleState = (): void => {
  const favs = favorite.value.map((item: IPeople): number[] => {
    return item.id
  })
  
  bodyTableData.value = bodyTableData.value.reduce((result: IBodyTableData[], character: IBodyTableData): IBodyTableData[] => {
    if (favs.includes(character.data.id)) {
      return [
        ...result,
        {
          data: character.data,
          checked: false,
          disabled: true
        }
      ]
    }

    return [
      ...result,
      {
        data: character.data,
        checked: character.checked,
        disabled: false
      }
    ]
  }, [])
}

// Search

const onSearch = (): void => {
  searchLoading.value = true

  $store
    .dispatch('searchPeople', searchString.value)
    .then((result: IPeopleAll): void => {
      searchLoading.value = false
      
      searchResults.value = result.results.map((character: IPeople): ISearchInputResult => {
        const splitUrl = character.url.split('/')
        return {
          title: character.name,
          value: +splitUrl[splitUrl.length - 2]
        }
      })
    })
}

// Created ---------------------------------------------------------------------

onFetchData(1)
</script>

<style lang="scss">
.people-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--padding-block) * 2);

  padding-inline: var(--padding-inline);
  padding-block: var(--padding-block);
}

.people-view__table {
  width: 100%;
  max-width: 800px;
}

.people-view__star {
  width: var(--icon-size-m);
  height: var(--icon-size-m);
}
</style>