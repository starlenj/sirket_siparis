import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex);

export default new Vuex.Store({

   state:{
       users:[]
   } ,
    mutations:{
       setUsers(state,users){
        state.users=users;
       }
    },

    actions:{
       Login(context,user)
       {
           console.log(user)
          // context.commit('setRoles',roles);
       }
    }

});