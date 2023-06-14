import TaskRestService from '../../rest/task.rest'

export const taskModule = {
    namespaced: true,
    state: {
        tasks: []
    },
    getters: {
        completeTasks(state) {
            return state.tasks.filter(task => task.isCompleted);
        },

        incompleteTasks(state) {
            return state.tasks.filter(task => !task.isCompleted);
        }
    },
    mutations: {
        FETCH_TASKS(state, payload) {
            state.tasks = payload;
        },

        ADD_TASK(state, payload) {
            state.tasks.push(payload)
        },

        REMOVE_TASK(state, taskId) {
            const foundTask = state.tasks.findIndex(t => t.taskId === taskId);
            if (foundTask !== -1) {
                state.tasks.splice(foundTask, 1);
            }
        },

        UPDATE_TASK(state, payload) {
            const foundTaskIndex = state.tasks.findIndex(t => t.taskId === payload.taskId);
            if (foundTaskIndex !== -1) {
                state.tasks.splice(foundTaskIndex, 1, { ...payload });
            }
        },

        CLEAR_ALL_TASKS(state) {
            state.tasks = [];
        }
    },
    actions: {
        fetchTasks(context) {
            const tasks = TaskRestService.get() ?? [];
            context.commit("FETCH_TASKS", tasks);
        },
        addTask(context, task) {
            context.commit("ADD_TASK", task);
            TaskRestService.update(context.state.tasks);
        },
        removeTask(context, taskId) {
            context.commit("REMOVE_TASK", taskId);
            TaskRestService.update(context.state.tasks);
        },
        updateTask(context, task) {
            context.commit("UPDATE_TASK", task);
            TaskRestService.update(context.state.tasks);
        },
        clearAllTasks(context) {
            context.commit("CLEAR_ALL_TASKS");
            TaskRestService.update(context.state.tasks);
        }
    },
}