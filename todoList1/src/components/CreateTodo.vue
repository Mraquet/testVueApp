<template>
  <div class="container">
    <div class="newTaskBtn">
        <div class="btn btn-primary" v-on:click="openForm" v-show="!isCreating">
            <i class="fas fa-plus"></i> New todo item
        </div>
        <div class="card w-50 mx-auto" v-show="isCreating">
            <div class="content">
                <form v-on:submit.prevent>
                    <div class="form-group row">
                        <label for="taskTitle" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input class="form-control " v-model="titleText" type="text" id="taskTitle" defaultValue="">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="projectTitle" class="col-sm-2 col-form-label">Project</label>
                        <div class="col-sm-10">
                            <input class="form-control" id="projectTitle" v-model="projectText" type="text" defaultValue="">
                        </div>
                    </div>
                    <div class="formBtn">
                        <div class="btn btn-primary" v-on:click="sendForm()">
                            Create
                        </div>
                        <div class="btn btn-warning" v-on:click="closeForm()">
                            Cancel
                        </div>
                    </div>
                </form>
            </div>
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
                    this.$emit('send-form', {
                        title,
                        project,
                        done: false,
                    });
                    alert ('Success!')

                }
                this.isCreating = false;
            },
        },
    };
</script>
