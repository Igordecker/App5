import { listaTarefas } from "@/Data/tarefas";
import { ref } from "vue";
const tarefas = ref(listaTarefas);
const indiceEdicao = ref(-1);
const texto = ref('')
function marcarConcluidapendente (id) {
  const posicao = tarefas.value.findIndex(item => item.id === id);
  if (tarefas.value[posicao].status === 'concluida') {
    tarefas.value[posicao].status = 'pendente';
  }
  else { tarefas.value[posicao].status = 'concluida' }
}
function ordenar() {
  tarefas.value.sort((a, b) =>
    a.desc.localeCompare(b.desc, 'pt-BR')
  )
}
function salvar() {
  if (texto.value.trim().length < 5) return
  if (indiceEdicao.value !== -1) {
    tarefas.value[indiceEdicao.value].desc = texto.value
    indiceEdicao.value = -1
  }
  else {
    let maiorId = Math.max(...tarefas.value.map(item => item.id));
    if (maiorId == undefined) {
      maiorId = 0
      tarefas.value.push({
        id: maiorId + 1,
        desc: texto.value,
        status: 'pendente'
      })
    }
    tarefas.value.push({
      id: maiorId + 1,
      desc: texto.value,
      status: 'pendente'
    })
  }
texto.value = ''
}

function editar(id) {
  const pos = tarefas.value.findIndex(item => item.id === id)
  if (pos !== -1) {
    texto.value = tarefas.value[pos].desc
    indiceEdicao.value = pos
  }}
 function remover (id) {
  tarefas.value = tarefas.value.filter(itemt => itemt.id !== id)
}
export {marcarConcluidapendente, ordenar, salvar, texto, indiceEdicao, editar, remover, tarefas};



