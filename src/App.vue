<script setup>
import { ref, computed } from 'vue'
import TaskChild from './components/taskChild.vue'
import { marcarConcluidapendente, ordenar, salvar, texto, editar, remover, tarefas } from './utils/tarefasUtils';
import ordenarButtonChild from './components/ordenarButtonChild.vue';
import salvarButtonChild from './components/salvarButtonChild.vue';
const filtro = ref('')
const quantidadePendentes = computed(() => {
  return tarefas.value.filter(t => t.status === 'pendente').length
})
const quantidadeConcluidas = computed(() => {
  return tarefas.value.filter(t => t.status === 'concluida').length
})
const listaFiltrada = computed(() => {
  if (filtro.value.trim() === '') return tarefas.value

  return tarefas.value.filter(t =>
    t.desc.toLowerCase().includes(filtro.value.toLowerCase())
  )
})
</script>
<template>
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <input type="text" v-model="texto" @keyup.enter="salvar" placeholder="Digite a tarefa" />
    <salvarButtonChild @salvar="salvar">
    </salvarButtonChild>
    <ul>
      <TaskChild v-for="item in listaFiltrada" :key="item.id" :desc="item.desc" :id="item.id" :status="item.status"
        @excluir="remover" @editar="editar" @marcar="marcarConcluidapendente">
      </TaskChild>
    </ul>
    <input type="text" v-model="filtro" placeholder="Filtrar tarefas" />
    <ordenarButtonChild @ordenar='ordenar'></ordenarButtonChild>
    <div>
      <p class="quantidadependentes">Pendentes: {{ quantidadePendentes }}</p>
      <p class="quantidadeconcluidas">Concluídas: {{ quantidadeConcluidas }}</p>
    </div>
  </div>
</template>
<style scoped>
.concluida {
  text-decoration: line-through;
}

div.container {
  text-align: center;
  background-color: gray;
  padding: 40px;
  border-radius: 10px;
}
p.quantidadependentes {
  color: red;
}
p.quantidadeconcluidas {
  color: green;
}
h1 {
  color: blue;
  font-size: 2.2rem;
}
</style>
