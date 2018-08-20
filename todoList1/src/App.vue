<template>
  <div class="bgImage">
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:add-todo="addTodo"></create-todo>
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
                project: 'Become an expert in Vue',
                done: false,
              },
              {
                  title: 'Hair',
                  project: 'Make a hair appointment for next week.',
                  done: true,
              },
              {
                  title: 'World Domination',
                  project: 'Take over the world!!!!!',
                  done: false,
              },
              {
                  title: 'New Hobby',
                  project: 'Learn to juggle.',
                  done: false,
              }
          ]
      }
    },
    methods: {
      addTodo(title) {
          this.todos.push({
              title,
              done: false,
          });
      },
    },
}
</script>

<style>

</style>
