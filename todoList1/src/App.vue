<template>
  <div class="bgImage">
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:send-form="addTodo"></create-todo>

  </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import todoListStyle1 from './assets/todoListStyle1.css'
import CreateTodo from './components/CreateTodo'

export default {
  name: 'App',
  components: {
    TodoList,
    todoListStyle1,
    CreateTodo,
  },

    data() {
      return {
          todos: [
              {
                title: 'Udemy Course',
                project: 'Become an expert in Vue by the end of the week.',
                done: false,
              },
              {
                  title: 'Hair Appointment',
                  project: 'Make a hair appointment for next Saturday afternoon.',
                  done: true,
              },
              {
                  title: 'World Domination',
                  project: 'Take over the world!!!!! Muahahahaha',
                  done: false,
              },
              {
                  title: 'Find a new hobby',
                  project: 'Learn about juggling or trapeze artistry.',
                  done: false,
              }
          ]
      }
    },
    methods: {
      addTodo(newTodo) {
          this.todos.push({
              title: newTodo.title,
              project: newTodo.project,
              done: false,

          });
      },
    },
}
</script>

<style>

</style>
