<script setup>
  import { ref } from 'vue'

  let tarefas = ref([
    { id: 1, desc: 'Estudar VueJs', status: 'pendende'},
    { id: 2, desc: 'Fazer todo-list', status: 'pendente'},
    { id: 3, desc: 'Deploy contador Vue', status: 'concluida'}
  ])

const novaTarefa = ref('');

  function adicionar() {
    tarefas.value.push(
     {
      id: Math.max(...tarefas.value.map(item => item.id)),
      desc: novaTarefa.value,
      status: 'pendente'
     }
    )
    novaTarefa.value = '';
  }

  function marcarConcluida(id) {
    const posicao = tarefas.value.findIndex(item => item.id === id);
    if (tarefas.value[posicao].status == `pendente`){
    tarefas.value[posicao].status = 'concluida';}
   else {
    tarefas.value[posicao].status = 'pendente';
   }
  }
  function deletarTarefa(id) {
    const posicao = tarefas.value.findIndex(item => item.id === id);
    tarefas.value.splice(posicao,1)
  }
</script>

<template> 
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <input type="text" v-model="novaTarefa">
    <button @click="adicionar">Adicionar</button>
    <ul>
      <li v-for="item in tarefas" :key="item.id" @click="marcarConcluida(item.id)"
      :class="{ concluida: item.status === 'concluida'}">
        {{ item.desc }}
        <button @click="deletarTarefa(item.id)">
deletarTarefa
        </button>
      </li>

    </ul>
  </div>
  
</template>

<style scoped>

.concluida{
  text-decoration: line-through;
}

li{
  cursor: pointer;
}
</style>