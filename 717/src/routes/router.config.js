import Vue from 'vue'
import VueRouter from 'vue-router'

import entry from '../views/index/entry.vue'
import home from '../views/home/home.vue'
import catagory from '../views/list/list.vue'
import cart from '../views/cart/cart.vue'
import mine from '../views/mine/mine.vue'
import search from '../views/search/search.vue'
import result from '../views/searchresult/result.vue'
import shop from '../views/shop/shop.vue'
import login from '../views/login/login.vue'
import addresslist from '../views/addresslist/addresslist.vue'
import editaddres from '../views/editaddres/editaddres.vue'
import loginout from '../views/loginout/loginout.vue'

Vue.use(VueRouter);

let routes = [
    {
        path:'*',
        redirect:'/entry/home'
    },
    {
        path:'/entry/catagory',
        redirect:'/entry/catagory/0'
    },
    {
        name:'entry',
        path:'/entry',
        component:entry,
        children:[
            {
                name:'home',
                path:'home',
                component:home
            },
            {
                name:'catagory',
                path:'catagory/:index?',
                component:catagory
            },
            {
                name:'cart',
                path:'cart',
                component:cart
            },
            {
                name:'mine',
                path:'mine',
                component:mine,
                meta:{
                    username:''
                }
            },
            {
                name:'result',
                path:'result',
                component:result
            }
        ]
    },
    {
        name:'search',
        path:'/search',
        component:search
    },
    {
        name:'shop',
        path:'/shop',
        component:shop
    },
    {
        name:'login',
        path:'/login',
        component:login
    },
    {
        name:'loginout',
        path:'/loginout',
        component:loginout
    },
    {
        name:'addresslist',
        path:'/addresslist',
        component:addresslist
    },
    {
        name:'editaddres',
        path:'/editaddres/is_edit',
        component:editaddres
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach(function(to,from,next){
    if(to.name=='login'){
        next()
        return;
    }
    if(to.name=='mine'){
        let meta = to.matched.some((info)=>{info.meta.username});
        //if(to.matched.some((info)=>{info.meta.username})
        let cookie_list = document.cookie.split(';')
        let tocken=null;
        for(let i=0;i<cookie_list.length;i++){
            if(cookie_list[i].indexOf('1505B-tocken')>-1){
                tocken=cookie_list[i].split('=')[1]
            }
        }
        
        if(!tocken){
            next({
                path:'/login'
            })
        }else{
            next()
        }
    }else{
        next()   
    }
    
     
})

export default router