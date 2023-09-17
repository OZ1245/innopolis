<template>
  <div class="input-search">
    <input 
      v-model="search"
      type="text" 
      @keyup="onSearch()"
    >

    <ul
      v-show="props.result.length" 
      class="input-search__dropdown"
    >
      <li
        v-for="(item, i) in props.result"
        :key="`item-${i}`"
      >
        <router-link 
          :to="{
            name: 'People',
            params: {
              id: item.id
            }
          }"
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, ref } from 'vue';

const props = withDefaults(defineProps<{
  modelValue: string | number | null,
  result: Array<{
    [key: string]: any
  }>
}>(), {
  modelValue: null,
  result: () => []
})

const emits = defineEmits<{
  (e: 'update:modelValue', search: string | number | null): void
}>()

const search = ref<string | number | null>('')

const onSearch = () => {
  search.value = props.modelValue
  emits('update:modelValue', props.modelValue)
}
</script>