const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        headers: [
            { text: 'Tarea por hacer', aling: 'center', value: 'description' },
            { text: 'Acciones', sortable: false, value: 'acciones' },
        ],
        items: [],
        tarea: "",
        tareas: [],
        tareaNull: false,
    },
    methods: {
        add () {
            if(this.tarea === ''){
                this.tareaNull = true;
            } else {
                this.tareaNull = false;
                this.tareas.push({
                    description: this.tarea,
                });
                this.tarea = '';
                this.items = this.tareas;
            }
        },
        del (item) {
            this.items.splice(this.items.indexOf(item), 1);
        }
    }
})