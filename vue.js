//INSTANCIAR A VUE CON EL DOM
const app = new Vue ({
  //REFERENCIA DEL DOM
  el: '#app',
 //DATOS
  data: {
    //STRING
    titulo: 'Carrito de Compras',

    //ARRAY
    frutas: ['Manzana', 'Pera', 'Uva'],

    //OBJETO
    verduras: [
      {nombre: 'playera', cantidad: 1, precio: 100},
      {nombre: 'tennis', cantidad: 2, precio: 300},
      {nombre: 'sudadera', cantidad: 1, precio: 350}
    ],

    //STRING DINAMICO CON UN INPUT
    nuevaVerdura: '',
    total: 0
  },

  //METODOS = FUNCIONES
  methods: {

    //FUNCION EN JS ANTERIOR
    //agregarVerdura: function() {
    //}

    //FUNCION EN JS NUEVA VERSION
    agregarVerdura () {
      //console.log('Agregaste una nueva Verdura')

      this.verduras.push({ //OBJETO PARA SER IGUAL QUE LOS DE ARRIBA
        nombre: this.nuevaVerdura, cantidad: 0
      });

      //MANDAMOS A DECIR QUE CUANDO FINALICE EL INPUT SE LIMPIARA
      this.nuevaVerdura = '';
    },

    otroMetodo () {

    },

  },

  //PROPIEDAD DE VUE
  computed: {
    sumarVerduras() {
      this.total = 0;

      //RECORRIDO POR EL ARREGLO PARA SUMAR LOS VALORES DE CANTIDAD
      for(verdura of this.verduras) {
        // this.total +=
        this.total = this.total + verdura.precio * verdura.cantidad;
      }

      //UNA VEZ QUE SE COMPLETE EL CICLO RETORNA EL VALOR DE TOTAL
      return this.total;
    }
  }
})
