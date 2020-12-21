import Service from "../Services/Login";
export default {
  async Login(context, model) {
    return new Promise((resolve, reject) => {
      Service.save('/Users/login',model.email, model.password)
        .then(response => {
          if (response.data.success) {
            context.commit("setUsers", response.data.email);
            context.commit("setToken", response.data.token);
            context.commit("setUserSube", response.data.subeId);
            resolve(response.data);
          }
        })
        .catch(error => reject(error));
    });
  },
  async SetSessionUser() {
    return new Promise((resolve, reject) => {
      Service.ValidToken()
        .then(response => {
            
          if (response.data.success) {
            resolve(response);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  async SetPermission(context, permissions) {
    context.commit("setPermission", permissions);
  }
};
