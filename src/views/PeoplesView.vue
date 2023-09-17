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
        <TheButton @click="onAddToFavorite">
          <StarIcon class="peoples-view__star"/>
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
import DataTable from '@/components/DataTable.vue'
import ThePaginator from '@/components/ThePaginator.vue'
import TheButton from '@/components/TheButton.vue'
// import InputSearch from '@/components/InputSearch.vue'
import { IPeople, IPeopleAll } from '@/api'
import { ref, computed, shallowRef } from 'vue'
import { useStore } from 'vuex'
import { StarIcon } from '@heroicons/vue/24/outline'

interface IBodyTableData {
  data: IPeople,
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

const favorite = computed((): IPeople[] => {
  return $store.state.favorite || []
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

      disableCheckboxes()
    })
}

const showFooter = computed((): boolean => {
  return bodyTableData.value?.some((character: IBodyTableData): boolean => {
    return character.checked && !character.disabled
  }) || false
})

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

const onAddToFavorite = (): void => {
  let characters: IPeople[] = []

  bodyTableData.value.map((character: IBodyTableData): void => {
    if (character.checked) {
      characters = [
        ...characters,
        character.data
      ]
    }
  })

  $store
    .dispatch('addFavorite', characters)

    disableCheckboxes()
}

const disableCheckboxes = (): void => {
  favorite.value.map((fav: IPeople): void => {
    bodyTableData.value = bodyTableData.value.reduce((result: IBodyTableData[], character: IBodyTableData): IBodyTableData[] => {
      if (character.data.id === fav.id) {
        return [
          ...result,
          {
            data: character.data,
            checked: true,
            disabled: true
          }
        ]
      }

      return [
        ...result,
        character
      ]
    }, [])
  })
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

.peoples-view__star {
  width: var(--icon-size-m);
  height: var(--icon-size-m);
}
</style>