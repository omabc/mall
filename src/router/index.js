import Vue from "vue"
import Router from "vue-router"



const home = ()=> import("../views/home/home")
const item = ()=> import("../views/item.vue")
const car = ()=> import("../views/car.vue")
const my = ()=> import("../views/my.vue")
Vue.use(Router)
const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:home
  },
  {
    path:"/item",
    component:item
  },
  {
    path:"/car",
    component:car
  },
  {
    path:"/my",
    component:my
  }
]
export default new Router({
  routes,
  mode:"history"
})
