<template>
  <div class="accordion" @click="toggle">
    <div class="accordion__row">
      <div class="accordion__title">
        <slot name="title"></slot>
      </div>
      <div class="accordion__button"
           :class="{
        'accordion__button--active': isOpen
          }"></div>
    </div>
    <div class="accordion__body"
         :class="{
        'accordion__body--active': isOpen
          }">
      <div class="pt-[20px]">
        <slot name="body"></slot>
      </div>
     
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue';

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
}

</script>
<style lang="scss">
.accordion {
  cursor: pointer;
  padding: 28px 0;
  border-bottom: 1px solid #E0E0E0;

  &:last-child {
    border-bottom: 1px solid transparent;
  }
}

.accordion__body {
  transition: all .2s ease;
  transform-origin: top;
  overflow: hidden;
  max-height: 0;

  &--active {
    transition: all .5s ease;
    max-height: 100vh;
  }
}

.accordion__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion__button {
  margin-right: 14px;
  position: relative;
  height: 15px;
  width: 1px;
  transition: all 0.2s ease;
  background-color: #202020;


  &:after {
    content: "";
    position: absolute;
    width: 15px;
    left: -7px;
    height: 1px;
    top: 7px;
    transition: all 0.2s ease;
    background-color: #202020;

  }

  &--active {
    transform: rotate(90deg);

    &:after {
      opacity: 0;
    }
  }
}
</style>
