import { shallowMount, createLocalVue } from '@vue/test-utils'
import ToDo from '@/components/ToDo.vue'
import Vuex from 'vuex';
import { taskModule } from '@/store/modules/taskModule'

const localVue = createLocalVue();

localVue.use(Vuex);

const data = {
    tasks: [
        {
            name: 'task 1',
            isCompleted: false,
            taskId: 5,
        }
    ]
}

const taskModule_ = {
    namespaced: true,
    state: {
        tasks: data.tasks,
    },
    getters: taskModule.getters,
    actions: {
        fetchTasks: jest.fn(),
        addTask: jest.fn(),
        removeTask: jest.fn(),
        updateTask: jest.fn(),
        clearAllTasks: jest.fn()
    },
}

const init = () => {
    const wrapper = shallowMount(ToDo, {
        localVue,
        store: new Vuex.Store({
            modules: {
                task: taskModule_
            }
        }),
    })

    return wrapper;
}

describe('ToDo.vue', () => {
    let wrapper;
    let that;

    const mountComp = () => {
        wrapper = init();
        that = wrapper.vm;
    }

    beforeEach(() => {
       
    })

    it('renders component', () => {
        mountComp();
        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.isVueInstance).toBeTruthy();
        expect(wrapper.vm.incompleteTasks).toMatchObject(data.tasks);
    })

    it('is able to add new task', ()=>{
        mountComp();
        that.newTask.name = "another task";
        that.addTask();

        expect(taskModule_.actions.addTask).toHaveBeenCalledTimes(1);
        expect(that.newTask.name).toBe('');
    })

    it('is able to remove that task', () => {
        mountComp();
        that.removeTask(5);
        expect(taskModule_.actions.removeTask).toHaveBeenCalledTimes(1);
    })

    it('is able to complete the task', () => {
        mountComp();
        that.completeTask(data.tasks[0]);
        expect(taskModule_.actions.updateTask).toBeCalledTimes(1);
        expect(taskModule_.actions.updateTask).toHaveBeenCalledWith(expect.any(Object), {
            ...data.tasks[0],
            isCompleted: true
        });
    })
})
