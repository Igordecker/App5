<script setup></script>
<template>
  <button class="deletar"><slot>Excluir</slot></button>
</template>
<style scoped>
button {
  margin-left: 5px;
  border-radius: 6px;
  background-color: none;
  padding: 5px;
}
.deletar {
  background-color: rgb(155, 0, 0);
}
</style>
