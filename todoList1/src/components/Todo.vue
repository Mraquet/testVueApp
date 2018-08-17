<template>
    <div>
        <div class="ui centered card">
            <div class="content">
                <div class="header">
                    {{todo.title}}
                </div>
                <div class="meta">
                    {{todo.project}}
                </div>
                <div class="extra content">
                   <span class="right floated trash icon" v-on:click="deleteTodo(todo)">
                       <i class="trash icon"></i>
                   </span>
                </div>
            </div>
            <div class="ui bottom attached green basic button" v-show="todo.done">
                Completed
            </div>
            <div class="ui bottom attached red basic button" v-show="!todo.done">
                Complete
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