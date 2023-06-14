export default class taskRestService {

    static get() {
        return JSON.parse(localStorage.getItem('tasks'));
    }

    static update(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}