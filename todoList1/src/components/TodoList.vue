<template>
    <div class="taskStatus container">
        <h3>What is on your todo list today?</h3>
        <p>Completed Task: {{todos.filter(todo => {return todo.done === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
        <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" :todo="todo"></todo>
    </div>
</template>

<script>
    import Todo from './Todo'

    export default {
        props: ['todos'],
        components: {
            Todo,
        },
        methods: {
            deleteTodo(todo) {
                const todoIndex = this.todos.indexOf(todo);
                this.todos.splice(todoIndex, 1);
                alert ('Task deleted')
            },
            completeTodo(todo) {
                const todoIndex = this.todos.indexOf(todo);
                this.todos[todoIndex].done = true;
                alert ('Success you have completed a task!')
            }
        }
    };
</script>

<style>

</style>