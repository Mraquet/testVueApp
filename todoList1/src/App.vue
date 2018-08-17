<template>
  <div class="bgImage">
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList,
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
    }
}
</script>

<style>
  body
    background: url("")
</style>
