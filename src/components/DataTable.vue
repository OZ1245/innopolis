<template>
  <div class="data-table">
    <table class="data-table__table">
      <thead v-if="props.header.length">
        <tr>
          <th 
            v-if="props.showCheckboxColumn"
            class="data-table__th"
          >
            <input 
              type="checkbox" 
              v-model="selectAll"
              @change="onSelectAllRows"
            >
          </th>

          <th
            v-for="(th, i) in props.header"
            :key="`th-${i}`"
            v-show="!th.hidden"
            class="data-table__th"
          >
            {{ th.title }}
          </th>

          <th 
            v-if="props.showButtonsColumn"
            class="data-table__th"
          ></th>
        </tr>
      </thead>

      <tbody v-if="props.body.length">
        <tr 
          v-for="(tr, i) in props.body"
          :key="`tr-${i}`"
        >
          <td 
            v-if="props.showCheckboxColumn"
            class="data-table__td"
          >
            <input 
              v-model="tr.checked"
              type="checkbox" 
              :disabled="tr.disabled"
              @change="onSelectRow($event, tr)"
            >
          </td>

          <td
            v-for="(td, j) in tr.data"
            :key="`td-${j}`"
            v-show="!props.header.find((i) => i.alias === j.toString() && i.hidden)"
            class="data-table__td"
          >
            {{ td }}
          </td>

          <td 
            v-if="props.showButtonsColumn"
            class="data-table__td data-table__td--buttons"
          >
            <slot name="buttons" :item="tr" :index="i"></slot>
          </td>
        </tr>
      </tbody>
    </table>

    <div 
      v-show="props.showFooter" 
      class="data-table__footer"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, ref } from 'vue'

interface IReturnData {
  [key: string]: any,
}

const props = withDefaults(defineProps<{
  header: Array<{
    title?: string,
    alias: string,
    hidden?: boolean
  }>,
  body: Array<{
    [key: string]: any,
  }>,
  showCheckboxColumn: boolean,
  showButtonsColumn: boolean,
  showFooter: boolean,
}>(), {
  header: () => [],
  body: () => [],
  showCheckboxColumn: false,
  showButtonsColumn: false,
  showFooter: false
})

const emits = defineEmits<{
  (e: 'select-row', data: { data: IReturnData, checked: boolean }): void
  (e: 'select-all-rows', data: {data: IReturnData[], checked: boolean }): void
}>()

const selectAll = ref<boolean>(false)

const onSelectAllRows = (): void => {
  emits('select-all-rows', { data: props.body, checked: selectAll.value })
}

const onSelectRow = (e: any, data: IReturnData): void => {
  emits('select-row', { data: data, checked: e.target.checked })
}
</script>

<style lang="scss">
.data-table {
  display: flex;
  flex-direction: column;
  gap: var(--padding-block);
}
.data-table__table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.data-table__th {
  background-color: var(--primary);
  color: var(--text-color-second);

  padding-inline: calc(var(--padding-inline) / 2);
  padding-block: calc(var(--padding-block) / 2);

  &:not(:last-child) {
    border-right: 1px solid var(--black);
  }
  
  &:first-child {
    border-left: 1px solid var(--primary);
  }
}

.data-table__td {
  color: var(--text-color);

  padding-inline: calc(var(--padding-inline) / 2);
  padding-block: calc(var(--padding-block) / 2);
  
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);

  &:first-child {
    border-left: 1px solid var(--border-color);
  }
}
.data-table__td--buttons {
  display: grid;
  justify-content: center;
}

.data-table__footer {
  display: flex;
  justify-content: center;
}
</style>