var app = new Vue ({
    el: '#app',
    data: {
        title: 'What is on your todo list today?',
        task: {
            text: ''
        },
        tasks: [
            {
                text: 'Finish Vue Udemy Course',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                text: 'Get a haircut'
            },
            {
                text: 'Call mom'
            }

        ],
        numberCompleted: 0

    },
    methods: {
        addTask() {
            let {text} = this.task
            this.tasks.push({text,
                date: new Date(Date.now()).toLocaleString()
            })
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        completeTask() {
            var checkBox = document.getElementById('checkedBox');
            var completedTasks = document.getElementById('taskNumber');
            if (checkBox.checked == true){
                this.numberCompleted++
            } else if (checkBox.checked == false){
                this.numberCompleted--
            }
        }
    }
});
