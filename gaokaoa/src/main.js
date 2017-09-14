import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$http=axios;
import Vuex from 'vuex';
Vue.use(Vuex)
let store=new Vuex.Store({
  state:{
    question:null,
    selected_question:null
  },
  mutations:{
    set_question:function(state,data){
      state.question = data
    },
    set_selected_question:function(state,type){
        let arr=[];
        let {question} =state;
        function getfrom(arr){
            let tempArr=[];
            for(let i=0;i<4;i++){
                let tmp=random(0,arr.length);
                if(tempArr.indexOf(tmp)==-1){
                    tempArr.push(tmp)
                }else{
                    i--
                }
            }
            return [arr[tempArr[0]],arr[tempArr[1]],arr[tempArr[2]],arr[tempArr[3]]]
        }
        function random(min,max){
            return Math.floor(Math.random()*max-min)
        }
        if(type='liberal'){
          for(let i in question){
            if(question[i].type!=1){
              arr.push(question[i])
            }
          }
        }
        if(type='science'){
          for(let i in question){
            if(question[i].type==1 ||question[i].type==2){
              arr.push(question[i])
            }
          }
        }
        state.selected_question=[...getfrom(arr)]
    }
  },
  actions:{
    get_question:function({commit},data){
      commit('set_question',data)
    }
  }
})


new Vue({
  el: '#app',
  mounted:function(){
    this.$http.get('./src/service/question.json').then((res)=>{
      this.$store.dispatch('get_question',res.data)
    })
  },
  store:store,
  router:router,
  render: h => h(App)
})
