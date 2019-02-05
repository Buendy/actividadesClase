

Vue.component('hmv-lista',{
    data: function () {
        return {
            producto: '',
        }
    },
    template: `
<div>
        <input type="text" @keyup="muestra" name="texto" v-model="producto">    
        </div>
    `,
    methods: {
        muestra: function(){
            this.$emit('texto', this.producto)
        }
    }
});

Vue.component('hmv-listaproductos',{
    data: function () {
        return{
            listaCompra: [
                'teclado',
                'ordenador',
                'workstation'
            ]
        }
    }, template: `
   
   <div>
   <hmv-submit @producto="recoge"></hmv-submit>
    <ul>
        <li v-for="(lista,index) in listaCompra">nombre: {{lista}}</li>
    </ul>
    </div>
   `,
    methods: {
        recoge: function (valor) {
            this.listaCompra.push(valor);
        }
    }
});

Vue.component('hmv-submit',{
    data: function () {
        return {

        }
    },
    template: `
<div>
 <hmv-lista @texto="recoge"></hmv-lista>
        <input type="button" value="Añadir producto" @click="inserta">       
        </div>
    `,
    methods: {
        recoge: function(valor){
            this.dataproducto = valor;
        },
        inserta: function () {
            this.$emit('producto', this.dataproducto)
        }
    },
    props: {
        dataproducto: String
    }
});


const app = new Vue({
    el: '#div1',
});