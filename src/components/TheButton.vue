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
  second?: boolean,
  danger?: boolean,
}>(), {
  type: 'button',
  primary: false,
  second: false,
  danger: false
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
    classList += ' button--second'
  }

  if (props.danger) {
    classList += ' button--danger'
  }

  return classList
})
</script>

<style lang="scss">
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: calc(var(--padding-inline) / 4);

  padding-inline: calc(var(--padding-inline) / 2);
  padding-block: calc(var(--padding-block) / 2);

  border: {
    width: 2px;
    style: solid;
    radius: var(--border-radius);
  }
  
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
  border-color: var(--primary);

  &:hover:not(:disabled) {
    color: var(--primary);
    background-color: var(--black);
    border-color: var(--primary);
    cursor: pointer;
    transition: background-color .15s, border-color .15s, color .15s;
  }
}

.button--danger {
  color: var(--text-color);
  background-color: var(--danger);
  border-color: var(--danger);

  &:hover:not(:disabled) {
    color: var(--danger);
    background-color: var(--black);
    border-color: var(--danger);
    cursor: pointer;
    transition: background-color .15s, border-color .15s, color .15s;
  }
}
</style>