import Vue from 'vue';
import Router from 'vue-router';
import component1 from '@/components/component1';
import component2 from '@/components/component2';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Investments',
      name: 'Investments',
      component: component1,
    },
    {
      path: '/Members',
      name: 'Members',
      component: component2,
    },
  ],
});
