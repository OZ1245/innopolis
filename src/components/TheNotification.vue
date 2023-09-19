<template>
  <div 
    class="notification"
    :class="classList"
  >
    <InformationCircleIcon class="notification__icon"/>
    <p class="notification__text">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
import { computed, withDefaults, defineProps } from 'vue';

const props = withDefaults(defineProps<{
  danger?: boolean
}>(), {
  danger: false
})

const classList = computed((): string => {
  let classList = ''

  if (props.danger) {
    classList += ' notification--danger'
  }

  return classList
})
</script>

<style lang="scss">
@import '/src/scss/mixins';

.notification {
  display: flex;
  gap: var(--padding-block);

  width: 100%;
  padding-inline: var(--padding-inline);
  padding-block: var(--padding-block);

  border: {
    width: 1px;
    style: solid;
    radius: var(--border-radius);
  }
}

.notification--danger {
  @include modify-color(var(--danger), 'lighten');

  color: var(--danger);
  border-color: var(--danger);
}

.notification__icon {
  flex-shrink: 0;

  width: var(--icon-size-b);
  height: var(--icon-size-b);
}

.notification__text {
  margin: 0;
}
</style>