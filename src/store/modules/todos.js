import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const actions = {
  async fetchTodos({commit}){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    // console.log(response.data)
    commit('setTodos',response.data)
  },
  async addTodo({commit},title){
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
    commit('newTodo',res.data)
  },
  async deleteTodo({commit}, id){
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo',id)
  },
  async filterTodos( {commit} , e){
    // console.log(e)
    // console.log(e.target.options.selectedIndex)
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
    // console.log(limit)
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    // console.log(response.data)
    commit('setTodos',response.data)
  },
  async updateTodo({commit},updTodo){
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`);
    // console.log(response.data)
    commit('updTodo',updTodo)
  }
}

const mutations = {
  setTodos: (state, todos) => state.todos = todos,
  newTodo: (state,todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter( todo => todo.id !== id),
  updTodo: (state,updTodo) => {
    const index = state.todos.findIndex(todo => todo.id == updTodo.id)
    if(index !== -1){
      state.todos.splice(index, 1, updTodo)
    }
  }
}



export default {state, getters, mutations, actions}

