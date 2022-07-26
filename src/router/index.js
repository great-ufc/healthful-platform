import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Dashboard.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'Login',
      path: "/sign-in",
      component: () => import("../views/SignIn.vue"),
    },
    {
      name: 'Register',
      path: "/sign-up",
      component: () => import("../views/SignUp.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    var isLogged = localStorage.getItem('isLogged');
    console.log(isLogged)

    if (isLogged === null || isLogged == 'false') {
      console.log('go to login')
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
    
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

/*router.afterEach((to, from) => {
  to
  from
  localStorage.setItem('customOperations', 'true');
  window.addEventListener("DOMSubtreeModified", function() {
    if(localStorage.getItem('customOperations') === 'true'){
      window.performCustomOperations();
      localStorage.setItem('customOperations', 'false');
      console.log('eita');
    }
  });
})*/

export default router;