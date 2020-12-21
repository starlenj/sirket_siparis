import Service from '../Service'

const LoginService = {
  async Login(email, password) {
    var result = await Service.save("Users/Login", { email, password });
    if (result.status === 200) {
      return result;
    } else {
      throw result.error;
    }
  },
  async ValidToken() {
    var result = await Service.save("Users/login/validToken", {
      token: localStorage.getItem('TOKEN')
    });

    if (result.status === 200) {
      return result;
    } else {

      throw result.error;
    }
  }
};

export default LoginService;
