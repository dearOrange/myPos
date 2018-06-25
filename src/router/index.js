import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/pos'
import HelloWorld from '@/components/page/HelloWorld'
import Person from '@/components/page/person'
import Goods from '@/components/page/goods'
import H1 from '@/components/page/H1'
import H2 from '@/components/page/H2'
import Error from '@/components/page/error'
import Count from '@/components/page/count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: Pos
    },
    {
      path: '/HelloWorld',
      name:'HelloWorld',
      redirect: '/person'
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/goods/:newsId(\\d+)/:newsTitle',
      name: 'Goods',
      component: Goods,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      },
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    }
  ]
})
