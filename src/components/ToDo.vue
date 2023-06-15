<template>
    <div>
        <h1>To Do List 1</h1>
        <input type="text" name="add-task" class="form-control add-task" 
        v-model="newTask.name" 
        placeholder="Please add new task"
        @keyup.enter="addTask()">
        <div class="list">
            <div class="list-item" v-for="(task) in incompleteTasks" :key="task.taskId" @click="completeTask(task)">
                <span :class="{'completed' : task.isCompleted }">{{ task.name }}</span>
                <span class="remove" @click="removeTask(task.taskId)">&times;</span>
            </div>
        </div>
        <h4>Completed Tasks</h4>
        <div class="list">
            <div class="list-item" v-for="(task) in completedTasks" :key="task.taskId" @click="completeTask(task)">
                <span :class="{'completed' : task.isCompleted }">{{ task.name }}</span>
                <span class="remove" @click="removeTask(task.taskId)">&times;</span>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions, mapGetters} from 'vuex';
export default {
    name: 'to-do',
    computed: {
        ...mapGetters({
            completedTasks: 'task/completeTasks',
            incompleteTasks: 'task/incompleteTasks'
        }),
        ...mapState({
            tasks: state => state.task.tasks
        })
    },
    data() {
        return {
            newTask: {
                name: '',
                isCompleted: false,
            },
            latestTaskId: 0,
        }
    },
    mounted() {
       this.$fetchTasks();
    },
    methods: {
        ...mapActions({
            $fetchTasks: 'task/fetchTasks',
            $addTask: 'task/addTask',
            $removeTask: 'task/removeTask',
            $clearAllTasks: 'task/clearAllTasks',
            $updateTask: 'task/updateTask',
        }),
        addTask() {
            if(this.newTask.name==='') {
                return;
            }
            this.latestTaskId = Math.random();
            this.$addTask({...this.newTask, taskId: this.latestTaskId});
            this.newTask.name = '';
        },

        removeTask(taskId) {
            this.$removeTask(taskId);
        },

        completeTask(task) {
            task.isCompleted = !task.isCompleted;
            this.$updateTask(task);
        },
    }
}
</script>

<style lang="css" scoped>
.list, input {
    font-size: 18px;
}
.add-task {
    margin-bottom: 15px;
}
.form-control {
    width: 100%;
    padding: 15px;
}

.list {
    border-bottom: 1px solid rgb(211, 211, 211);
}

.list-item {
    text-align: left;
    padding: 15px 15px;
    border-left: 1px solid rgb(211, 211, 211);;
    border-right: 1px solid rgb(211, 211, 211);;
    border-top: 1px solid rgb(211, 211, 211);;
}
.list-item:hover {
    background-color: rgb(229, 247, 253);
}
.remove {
    float: right;
    cursor: pointer;
}
.completed {
    text-decoration: line-through;
}
</style>