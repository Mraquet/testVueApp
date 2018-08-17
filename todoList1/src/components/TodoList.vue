<template>
    <div>
        <p>Completed Task: {{todos.filter(todo => {return todo.done === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
        <todo v-on:delete-todo="deleteTodo" v-for="(todo, index) in todos" v-bind:todo="todo" v-bind:index="index"></todo>
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
            }
        }
    };
</script>

<style scoped>

</style>