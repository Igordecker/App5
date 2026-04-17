<script setup>
import { indiceEdicao} from '@/utils/tarefasUtils';
defineEmits(['salvar'])
</script>
<template>
    <button @click.prevent="$emit('salvar')" class="adicionar">
      <slot>{{ indiceEdicao !== -1 ? 'Atualizar' : 'Adicionar' }}</slot>
    </button>
</template>
<style scoped>
button {
  margin-left: 5px;
  border-radius: 6px;
  background-color: none;
  padding: 5px;
}
button.adicionar {
  color: green;
}</style>
