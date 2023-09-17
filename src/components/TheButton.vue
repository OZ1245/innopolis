<template>
  <button 
    :type="props.type"
    class="button"
    :class="classList"
    @click="emits('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { withDefaults, defineEmits, defineProps, computed } from 'vue'

const props = withDefaults(defineProps<{
  type?: string,
  primary?: boolean,
  second?: boolean
}>(), {
  type: 'button',
  primary: true,
  second: false
})

const emits = defineEmits<{
  (e: 'click'): void
}>()

const classList = computed(() => {
  let classList = ''

  if (props.primary) {
    classList += ' button--primary'
  }

  if (props.second) {
    classList += ' button-second'
  }

  return classList
})
</script>

<style lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(var(--padding-inline) / 2);

  padding-inline: calc(var(--padding-inline) / 2);
  padding-block: calc(var(--padding-block) / 2);
  
  transition: background-color .3s, border-color .3s, color .3s;

  &:disabled {
    color: var(--text-color-second);
    background-color: var(--disabled);
    border-color: var(--disabled);
  }
}
.button--primary {
  color: var(--text-color-second);
  background-color: var(--primary);
  border: {
    width: 2px;
    style: solid;
    color: var(--primary);
    radius: var(--border-radius);
  }

  &:hover:not(:disabled) {
    color: var(--primary);
    background-color: var(--black);
    border-color: var(--primary);
    cursor: pointer;
    transition: background-color .15s, border-color .15s, color .15s;
  }
}
</style>