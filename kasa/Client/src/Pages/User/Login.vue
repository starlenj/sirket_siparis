<template>
  <div>
    <div class="page-content">
      <!-- Main content -->
      <div class="content-wrapper">
        <!-- Content area -->
        <div class="content d-flex justify-content-center align-items-center">
          <!-- Login card -->
          <form class="login-form">
            <div class="card mb-0">
              <div class="card-body">
                <div class="text-center mb-3">
                  <img class="logo" src="/assets/logo.png" />
                  
                  <h5 class="mb-0">Lütfen Giriş Yapınız</h5>
                  <span class="d-block text-muted">Hesap Bilgileriniz</span>
                </div>

                <div class="form-group form-group-feedback form-group-feedback-left">
                  <input type="text" class="form-control" placeholder="E-Posta" v-model="username" />
                  <div class="form-control-feedback">
                    <i class="icon-user text-muted"></i>
                  </div>
                </div>

                <div class="form-group form-group-feedback form-group-feedback-left">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Şifre"
                    v-model="password"
                  />
                  <div class="form-control-feedback">
                    <i class="icon-lock2 text-muted"></i>
                  </div>
                </div>

                <div class="form-group d-flex align-items-center">
                  <!-- <a href="login_password_recover.html" class="ml-auto">Forgot password?</a>-->
                </div>

                <div class="form-group">
                  <button type="button" class="btn btn-primary btn-block" @click="Login">
                    Giriş Yap
                    <i class="icon-circle-right2 ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <!-- /login card -->
        </div>
        <!-- /content area -->
      </div>
      <!-- /main content -->
    </div>
  </div>
</template>
<script>
import Service from "../../Services/Login";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  async mounted() {
    if (localStorage.getItem("TOKEN") !== null) {
      window.location.href = "/";
    }
  },
  methods: {
    async Login() {
      let result = await Service.Login(this.username, this.password);
        // eslint-disable-next-line no-console
     if (result) {
        localStorage.setItem("TOKEN", result.token);
        window.location.href = "/";
      }
    }
  }
};
</script>
<style scoped>
.logo{
  width: 60%
}
</style>