<template>
  <Modal :is-open-modal="openModal" @close-modal-button-clicked="closeModal()">
    <div class="search">
      <input
        type="text"
        v-model="keyword"
        class="search__bar"
        v-on:keyup.enter="searchMovies()"
      />
      <button @click="searchMovies()">Search</button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Modal from "../molecule/modal.vue";
const emit = defineEmits(["close-modal"]);
const props = defineProps<{ openModal: boolean }>();
import { useRouter } from "vue-router";

const router = useRouter();

const keyword = ref("");

function searchMovies() {
  router.push(`/search/${keyword.value}/1`);
  emit("close-modal");
  keyword.value = "";
}

function closeModal() {
  emit("close-modal");
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex: 1;
  &__bar {
    width: 100%;
    padding: 20px;
    border-radius: 8px;
  }
}
</style>
