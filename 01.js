const app = new Vue({
    el: '#app',
    /* objetos*/
    data: {
        titulo: 'Hola mundo con vue',
        /* array strings*/
        frutas: ['sandia', 'mango', 'uvas'],
        /* array de objetos*/
        frutas2: [
            { nombre: 'Sandia', cantidad: 8 },
            { nombre: 'Manzana', cantidad: 3 },
            { nombre: 'Platano', cantidad: 0 }
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        /*agregarFruta: function(){
        
        }*/
        agregarFruta() {
            //console.log('Diste click')
            if (this.nuevaFruta === '') {
                alert("NO HAY FRUTA PARA AGREGAR")
                return;
            }
            else {
                this.frutas2.push({
                    nombre: this.nuevaFruta, cantidad: 0
                });
                //limpiar input
                this.nuevaFruta = '';
            }
        }
        /*quitarFruta (){
            this.frutas2.pull({
                nombre: this.nuevaFruta, cantidad: 0
            })
        }*/
    },
    computed: {
        sumarFrutas() {
            this.total = 0
            for (f of this.frutas2) {
                this.total = this.total + f.cantidad;
            }
            return this.total;
        }
    }

})