<template>
  <table class="data-table">
    <thead v-if="props.header.length">
      <tr>
        <th v-if="props.showCheckboxColumn">
          <input 
            type="checkbox" 
            v-model="selectAll"
            @change="emits('select-all-rows', props.body)"
          >
        </th>

        <th
          v-for="(th, i) in props.header"
          :key="`th-${i}`"
        >
          {{ th.title }}
        </th>

        <th v-if="props.showButtonsColumn"></th>
      </tr>
    </thead>

    <tbody v-if="props.body.length">
      <tr 
        v-for="(tr, i) in props.body"
        :key="`tr-${i}`"
      >
        <td v-if="props.showCheckboxColumn">
          <input 
            v-model="tr.checked"
            type="checkbox" 
            :disabled="tr.checkboxDisabled"
            @change="emits('select-row', tr)"
          >
        </td>

        <td
          v-for="(td, j) in tr"
          :key="`td-${j}`"
        >
          {{ td }}
        </td>

        <td v-if="props.showButtonsColumn">
          <slot name="buttons" item="tr" index="i"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, ref } from 'vue'

interface IReturnData {
  [key: string]: any
}

const props = withDefaults(defineProps<{
  header: Array<{
    title: string,
    alias: string
  }>,
  body: Array<{
    [key: string]: any,
  }>,
  showCheckboxColumn: boolean,
  showButtonsColumn: boolean,
}>(), {
  header: () => [],
  body: () => [],
  showCheckboxColumn: false,
  showButtonsColumn: false,
})

const emits = defineEmits<{
  (e: 'select-row', data: IReturnData): void
  (e: 'select-all-rows', data: IReturnData[]): void
}>()

const selectAll = ref<boolean>(false)
</script>