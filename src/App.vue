<script setup>
import { ref, computed } from 'vue'
const tarefas = ref([
  { id: 1, desc: 'Estudar VueJs', status: 'pendente' },
  { id: 2, desc: 'Fazer projeto', status: 'pendente' },
  { id: 3, desc: 'Publicar app vue', status: 'concluida' }
])

const texto = ref('')
const filtro = ref('')
const indiceEdicao = ref(-1)

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

function salvar() {
  if (texto.value.trim().length < 4) return
  if (indiceEdicao.value !== -1) {
    tarefas.value[indiceEdicao.value].desc = texto.value
    indiceEdicao.value = -1
  } 
  else {
   const maiorId = Math.max(...tarefas.value.map(item => item.id));
if(maiorId == undefined){
  maiorId = 0
    tarefas.value.push({
      id: maiorId +1,
      desc: texto.value,
      status: 'pendente'
    })}
     tarefas.value.push({
      id: maiorId +1,
      desc: texto.value,
      status: 'pendente'
    })
  }

  texto.value = ''
}
function marcanConcluidapendente(id) {
 const posicao = tarefas.value.findIndex(item => item.id === id); 
 if (tarefas.value[posicao].status === 'concluida'){ 
  tarefas.value[posicao].status = 'pendente'; 
}
  else { tarefas.value[posicao].status = 'concluida' }
}
function remover(id) {
  tarefas.value = tarefas.value.filter(itemt => itemt.id !== id)
}
function editar(id) {
  const pos = tarefas.value.findIndex(item => item.id === id)

  if (pos !== -1) {
    texto.value = tarefas.value[pos].desc
    indiceEdicao.value = pos
  }
}
function ordenar() {
  tarefas.value.sort((a, b) =>
    a.desc.localeCompare(b.desc, 'pt-BR')
  )
}
</script>
<template>
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <input type="text" v-model="texto" @keyup.enter="salvar" placeholder="Digite a tarefa"/>
    <button @click="salvar" class="adicionar">
      {{ indiceEdicao !== -1 ? 'Atualizar' : 'Adicionar' }}
    </button>
    <ul>
      <li v-for="item in listaFiltrada" :key="item.id">
        <span @click="marcanConcluidapendente(item.id)" :class="{ concluida: item.status === 'concluida' }">
          {{ item.desc }}
        </span>
        <button  class="deletar" @click="remover(item.id)">Deletar</button>
        <button @click="editar(item.id)">Editar</button>
      </li>
    </ul>
    <input type="text" v-model="filtro" placeholder="Filtrar tarefas"/>
    <button @click="ordenar">Ordenar</button>
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
  background-color: 
}
li {
  cursor: pointer;
  margin:  10px 0;
  color: gray;
}

button {
  margin-left: 5px;
  border-radius: 6px;
  background-color: none;
  padding: 5px;

}
button.deletar{
   color: red;
}
button.adicionar{
  color: green;
}
p.quantidadependentes{
   color: red;
}
p.quantidadeconcluidas{
  color: green;
}
h1 {
  color: blue;
  font-size: 2.2rem;
}
</style>