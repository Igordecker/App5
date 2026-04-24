import { ref } from "vue"
const tarefas = ref([
  { id: 1, desc: 'Estudar VueJs', status: 'pendente' },
  { id: 2, desc: 'Fazer projeto', status: 'pendente' },
  { id: 3, desc: 'Publicar app vue', status: 'concluida' }
])
export { tarefas }
