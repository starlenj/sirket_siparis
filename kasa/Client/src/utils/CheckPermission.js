import store from "../Store";
import Service from "../Service";

export default {
  async CheckRoute(to, from, next) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.getUserLoggedIn) {
        if (to.matched.some(record => record.meta.isAdmin)) {
          if (this.CheckAdmin()) {
            next();
          } else {
            next('/user/home');
          }
        }
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
  async CheckAdmin() {
    store.dispatch("SetSessionUser").then(response => {
      return response.data.data.data[0].isAdmin;
    });
  },
  async CheckPermission(query) {
    return new Promise(resolve => {
      store.dispatch("SetSessionUser").then(response => {
        Service.get(
          "Users/UserPermission/",
          response.data.data[0]._id
        ).then(permissions => {
          var result = permissions.data.filter(roles => {
            if (roles.name === "admin") return roles;
            else return roles.name === query;
          });
          resolve(result[0]);
        });
      });
    });
  }
};
