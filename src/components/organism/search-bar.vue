<template>
  <Modal :is-open-modal="openModal" @close-modal-button-clicked="closeModal()">
    <div class="search">
      <input type="text" v-model="keyword" class="search__bar" />
      <router-link to="" @click="closeModal()">Buscar</router-link>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Modal from "../molecule/modal.vue";
const emit = defineEmits(["close-modal"]);
const props = defineProps<{ openModal: boolean }>();

const keyword = ref("");

function closeModal() {
  emit("close-modal");
}

watch(
  () => keyword,
  (value) => {
    console.log(value);
  }
);
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  &__bar {
    width: 100%;
    padding: 10%;
    border-radius: 8px;
  }
}
</style>
