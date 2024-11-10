<script>
import {mapState} from 'vuex';

export default{
  name: 'App',

  computed:{
     ...mapState(['juegos'])
  },

  methods:{  

    botonAgregar(codigo){
        this.$store.dispatch('accionAgregar', codigo)
      },

    botonQuitar(codigo){
      this.$store.dispatch('accionQuitar', codigo)
    },
  },
 
};
</script>

<template>
  <div class="text-center container px-5 d-flex flex-column align-items-center">   
     <h1 class="mb-5 text-white">Tienda 32 bits</h1>
     <p class="fs-4 fw-bold text-light">Lista de juegos</p>
   
   <div class="p-3 border">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th class="fw-bold">Código</th> 
            <th class="fw-bold">Nombre</th>
            <th class="fw-bold">Stock</th>
            <th class="fw-bold">Precio</th>
            <th class="fw-bold">Acciones</th>         
          </tr>
        </thead>
        <tbody>
          <tr v v-for="juego in juegos" :key="juego.index">          
            <td>{{juego.codigo}}</td>  
            <td>{{juego.nombre}}</td> 
            <td>{{juego.stock}}</td> 
            <td>${{juego.precio}}</td>
            <td>
              <div class="btn-group" role="group">
                <button class="btn btn-outline-warning" @click="botonAgregar(juego.codigo)"> + </button>    
                <button class="btn btn-outline-danger" @click="botonQuitar(juego.codigo)"> - </button> 
              </div>            
            </td>    
          </tr>       
        </tbody>
      </table>
    </div>
  </div>   

</template>

<style scoped>

table{
  width: 50vw;
}

p{
  font-family: monospace;  
}

h1{
  font-weight:900;
}

</style>
