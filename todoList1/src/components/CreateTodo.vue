<template>
    <div class="newTaskBtn">
        <div class="btn btn-primary" v-on:click="openForm" v-show="!isCreating">
            <i class="fas fa-plus"></i>
        </div>
        <div class="card" v-show="isCreating">
            <div class="content">
                <form class="form">
                    <div class="field">
                        <label>Title</label>
                        <input v-model="titleText" type="text" ref="title" defaultValue="">
                    </div>
                    <div class="field">
                        <label>Project</label>
                        <input type="text" ref="project" defaultValue="">
                    </div>
                    <div class="sendFormBtn">
                        <div class="btn btn-primary" v-on:click="sendForm()">
                            Create
                        </div>
                    </div>
                    <div class="cancelFormBtn">
                        <div class="btn btn-warning" v-on:click="closeForm()">
                            Cancel
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                titleText: '',
                projectText: '',
                isCreating: false,
            };
        },
        methods: {
            openForm() {
                this.isCreating = true;
            },
            closeForm() {
                this.isCreating = false;
            },
            sendForm() {
                if(this.titleText.length > 0 && this.projectText.length > 0) {
                    const title = this.titleText;
                    const project = this.projectText;
                    this.$emit('create-todo', {
                        title,
                        project,
                        done: false,
                    });
                    this.newTodoText = '';
                }
                this.isCreating = false;
            },
        },
    };
</script>

<style>

</style>