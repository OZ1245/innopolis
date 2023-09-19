<template>
  <div class="paginator">
    <ul class="paginator__wrap">
      <li class="paginator__item">
        <button
          title="First page"
          class="paginator__button paginator__button--first"
          :disabled="model === 1"
          @click="firstPage"
        >
          <ChevronDoubleLeftIcon class="paginator__icon" />
        </button>
      </li>

      <li class="paginator__item">
        <button
          title="Previos page"
          class="paginator__button paginator__button--prev"
          :disabled="model === 1"
          @click="prevPage"
        >
          <ChevronLeftIcon class="paginator__icon"/>
        </button>
      </li>

      <li class="paginator__item">
        <span class="paginator__active">
          {{ model }}
        </span>
      </li>

      <li class="paginator__item">
        <button
          title="Next page"
          class="paginator__button paginator__button--next"
          :disabled="model === pages"
          @click="nextPage"
        >
          <ChevronRightIcon class="paginator__icon"/>
        </button>
      </li>

      <li class="paginator__item">
        <button
          :title="`Last page (${pages})`"
          class="paginator__button paginator__button--last"
          :disabled="model === pages"
          @click="lastPage"
        >
          <ChevronDoubleRightIcon class="paginator__icon"/>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, onMounted, withDefaults, defineProps } from 'vue'
import { useStore } from 'vuex'
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronDoubleRightIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const $store = useStore()

const props = withDefaults(defineProps<{
  modelValue?: number | null,
  pages: number
}>(), {
  modelValue: 1,
  pages: 1
})

const emits = defineEmits<{
  (e: 'change', page: number): void
  (e: 'update:modelValue', page: number): void
}>()

let model = ref<number | null>(null)

onMounted(() => {
  model.value = props.modelValue

  $store.dispatch('setPage', model.value)
})

const changePage = (): void => {
  $store.dispatch('setPage', model.value)

  emits('change', model.value)
  emits('update:modelValue', model.value)
}

const firstPage = (): void => {
  if (props.modelValue > 1) {
    model.value = 1
    changePage()
  }
}

const prevPage = (): void => {
  if (props.modelValue > 1) {
    model.value--
    changePage()
  }
}

const nextPage = (): void => {
  if (props.modelValue < props.pages) {
    model.value++
    changePage()
  }
}

const lastPage = (): void => {
  if (props.modelValue < props.pages) {
    model.value = props.pages
    changePage()
  }
}
</script>

<style lang="scss" scoped>
.paginator {
  display: flex;
  justify-content: center;
}

.paginator__wrap {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}

.paginator__item {
  display: inline-flex;
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}

.paginator__button {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .3s, border-color .3s, color .3s;
  color: var(--text-color-second);
  background-color: var(--primary);
  border: {
    width: 2px;
    style: solid;
    color: var(--primary);
    radius: var(--border-radius);
  }
  padding-inline: calc(var(--padding-inline) / 2);
  padding-block: calc(var(--padding-block) / 2);

  &:disabled {
    color: var(--text-color-second);
    background-color: var(--disabled);
    border-color: var(--disabled);
  }

  &:hover:not(:disabled) {
    color: var(--primary);
    background-color: var(--black);
    border-color: var(--primary);
    cursor: pointer;
    transition: background-color .15s, border-color .15s, color .15s;
  }
}

.paginator__icon {
  width: var(--icon-size-s);
  height: var(--icon-size-s);
}

.paginator__active {
  color: var(--text-color);
}
</style>
