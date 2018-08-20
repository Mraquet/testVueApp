<template>
    <div>
        <div class="card mx-auto" style="width: 300px">
            <div class="card-body">
                <h5 class="card-title">
                    {{ todo.title }}
                    <span class='delete' v-on:click="deleteTodo(todo)" style="float: right" tabindex="0" data-toggle="tooltip" title="Delete task?">
                    <i class="fas fa-trash-alt" style="pointer-events: none;"></i>
                    </span>
                </h5>
                <p class="card-text">
                    {{ todo.project }}
                </p>
            </div>

            <div class="btn btn-success" v-show="todo.done">
                Completed
            </div>

            <div class="btn btn-danger" v-show="!todo.done" v-on:click="completeTodo(todo)">
                Pending
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
            },
            completeTodo(todo) {
                this.$emit('complete-todo', todo);
            }
        }
    };
</script>