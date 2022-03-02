<template>
  <div class="header average-rgb--bg">
    <h1>The Movie Database</h1>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  overflow: hidden;
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
  background: var(--principal);
  z-index: 999;
}

.header h1 {
  position: absolute;
  opacity: 0.3;
  transform: scale(1.5);
  transform-origin: 0;
  top: 4px;
  left: 0;
}

@media (min-width: 768px) {
  .header h1 {
    transform: scale(2.3);
    top: -2px;
  }
}
</style>