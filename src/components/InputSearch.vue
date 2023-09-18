<template>
  <div class="input-search">
    <input 
      v-model="search"
      type="text" 
      class="input-search__field"
      @input="onInput"
      @keyup="onSearch"
    >

    <ul
      v-loading="props.loading"
      v-show="props.result.length" 
      class="input-search__dropdown"
    >
      <li
        v-for="(item, i) in props.result"
        :key="`item-${i}`"
        class="input-search__item"
      >
        <router-link 
          :to="{
            name: 'People',
            params: {
              id: item.value
            }
          }"
          class="input-search__link"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, ref } from 'vue';

export interface ISearchInputResult {
  title: string | number,
  value: string | number | null
}

const props = withDefaults(defineProps<{
  modelValue: string | number | null,
  result: ISearchInputResult[],
  loading?: boolean
}>(), {
  modelValue: null,
  result: () => [],
  loading: false,
})

const emits = defineEmits<{
  (e: 'update:modelValue', search: string | number | null): void
  (e: 'search', search: string | number | null): void
}>()

const search = ref<string | number | null>('')

const onInput = (event: any): void => {
  emits('update:modelValue', event.target.value)
}

const onSearch = (event: any): void => {
  search.value = event.target.value
  emits('search', search.value)
}
</script>

<style lang="scss">
.input-search {
  position: relative;

  width: 400px;
}

.input-search__field {
  width: 100%;

  padding-inline: calc(var(--padding-inline) / 2);
  padding-block: calc(var(--padding-block) / 2);

  border: {
    width: 1px;
    style: solid;
    color: var(--border-color);
    radius: var(--border-radius);
  }

  color: var(--text-color-second);

  &:focus-visible {
    outline: none;
  }
  &:focus {
    border-color: var(--primary);
  }
}

.input-search__dropdown {
  position: absolute;
  left: 0;
  top: 100%;

  width: 100%;

  padding: 0;
  margin: 0;
  list-style: none;

  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.input-search__item {
  display: block;
  text-align: center;

  border-bottom: 1px solid var(--second);
}

.input-search__link {
  display: inline-block;
  width: 100%;

  padding-inline: calc(var(--padding-inline) / 2);
  padding-block: calc(var(--padding-block) / 2);
  
  color: var(--text-color-second);
  text-decoration: none;
  
  &:hover {
    color: var(--text-color-second);
    text-decoration: none;

    background-color: var(--second);
  }
}
</style>