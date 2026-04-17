<script setup>
import editarButtonChild from './editarButtonChild.vue';
import excluirButtonChild from './excluirButtonChild.vue';
defineProps (['id', 'desc', 'status']);
defineEmits (['excluir', 'editar','marcar'])
</script>
<template>
 <li>
        <span @click.prevent="$emit('marcar', id)" :class="{ concluida: status === 'concluida' }">
            {{ desc}}
        </span>
        <excluirButtonChild @click.prevent="$emit('excluir', id)"></excluirButtonChild>
        <editarButtonChild @click.prevent="$emit('editar', id)" ></editarButtonChild>
    </li>
</template>
<style scoped>
li {
  cursor: pointer;
  margin: 5px 0;
}
.concluida {
  text-decoration: line-through;
}
</style>
