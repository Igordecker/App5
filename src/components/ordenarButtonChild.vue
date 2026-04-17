<script setup>
defineEmits(['ordenar'])
</script>
<template>
<button class="ordenar" @click.prevent="$emit('ordenar')"><slot>Ordenar</slot></button>
</template>
<style scoped>
button {
  margin-left: 5px;
  border-radius: 6px;
  background-color: none;
  padding: 5px;
}
</style>
