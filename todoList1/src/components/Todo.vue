<template>
    <div>
        <div class="card">
            <div class="extra content">
                <span class="delete" style="float: right" v-on:click="deleteTodo(todo)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{todo.title}}</h5>
            <p class="card-text">
                {{todo.project}}
            </p>
            </div>
            <div class="btn btn-success" v-show="todo.done">
                Completed
            </div>
            <div class="btn btn-danger" v-show="!todo.done">
                Pending...
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['todo'],
        methods: {
            deleteTodo(todo) {
                this.$emit('delete-todo', todo);
            }
        }
    };
</script>