import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import ChatRoom from '../views/ChatRoom.vue';

Vue.use(VueRouter);

//라우터 인스턴스
export const router = new VueRouter({
 mode : 'history',
 base: process.env.BASE_URL,
  routes:[
    {
        path: '/',
        name: 'Login',
        component: Login,
      },
      {
        path: '/char-room/:username',
        name: 'ChatRoom',
        component: ChatRoom,
      },
  ]
});

