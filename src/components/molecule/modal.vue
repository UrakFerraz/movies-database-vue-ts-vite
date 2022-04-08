<template>
  <div class="modal" :class="isOpenedModal ? 'fadeIn' : 'FadeOut'" ref="modal">
    <div class="modal__wrapper">
      <button @click="closeModal()" class="modal__close-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
          />
        </svg>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
const emit = defineEmits(["close-modal-button-clicked"]);
const props = defineProps<{ isOpenModal: boolean }>();

const isOpenedModal = toRefs(props).isOpenModal;

function closeModal() {
  emit("close-modal-button-clicked");
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  transform: translateX(-110vw);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(10, 10, 10, 0.8);
  z-index: 200;
  transition: 500ms all;
  animation-name: fadeOut;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  &__wrapper {
    /* From https://css.glass */
    background: rgba(100, 100, 100, 0.2);
    display: flex;
    justify-content: center;
    gap: 20px;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    margin-top: 50px;
    width: 65vw;
    padding: 40px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
  &__close-button {
    position: absolute;
    border: none;
    right: -15px;
    top: -15px;
    cursor: pointer;
    pointer-events: all;
    svg {
      pointer-events: none;
      width: 27px;
      height: 27px;
      fill: $light;
    }
    &:hover {
      transform: scale(0.8);
    }
  }
}

.fadeIn {
  animation-name: fadeIn;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

@keyframes fadeIn {
  from {
    transform: translateX(-110vw);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes fadeOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-110vw);
  }
}
</style>
