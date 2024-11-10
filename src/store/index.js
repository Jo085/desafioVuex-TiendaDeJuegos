import { createStore } from "vuex";
import juegos from "../store/juegos.json"

export default createStore ({
    state:{
      juegos     
    },

    mutations:{         
        agregar(state,codigo){          
          const juego = state.juegos.find((juego) => juego.codigo === codigo);
          if(juego){
            juego.stock++
          }        
        },

        quitar(state, codigo){
          const juego = state.juegos.find((juego) => juego.codigo === codigo);
          if( juego.stock !== 0 ){
             juego.stock--
          }                 
        },
    },

    actions:{
      accionAgregar(context, codigo){       
        context.commit('agregar', codigo)
      },

      accionQuitar(context, codigo){
        context.commit('quitar', codigo)
      },
    },

    getters:{
             
    },
});