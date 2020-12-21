<template>
  <div>
    <!-- Page header -->
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Tanımlar</span> - Şube Tanımı
          </h4>
          <a href="#" class="header-elements-toggle text-default d-md-none">
            <i class="icon-more"></i>
          </a>
        </div>

        <!--<div class="header-elements d-none">
         <div class="d-flex justify-content-center">
            <a
              href="#"
              class="btn btn-link btn-float font-size-sm font-weight-semibold text-default"
            >
              <i class="icon-bars-alt text-pink-300"></i>
              <span>Statistics</span>
            </a>
            <a
              href="#"
              class="btn btn-link btn-float font-size-sm font-weight-semibold text-default"
            >
              <i class="icon-calculator text-pink-300"></i>
              <span>Invoices</span>
            </a>
            <a
              href="#"
              class="btn btn-link btn-float font-size-sm font-weight-semibold text-default"
            >
              <i class="icon-calendar5 text-pink-300"></i>
              <span>Schedule</span>
            </a>
          </div>
        </div>-->
      </div>

      <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
        <div class="d-flex">
          <div class="breadcrumb">
            <a href="/" class="breadcrumb-item">
              <i class="icon-home2 mr-2"></i> Anasayfa
            </a>
             <a href="/Sube" class="breadcrumb-item">Şube Listesi</a>
            <a href="/Sube/New" class="breadcrumb-item">Şube Tanımı</a>
          </div>

          <a href="#" class="header-elements-toggle text-default d-md-none">
            <i class="icon-more"></i>
          </a>
        </div>
        <!--
        <div class="header-elements d-none">
          <div class="breadcrumb justify-content-center">
            <a href="#" class="breadcrumb-elements-item">
              <i class="icon-comment-discussion mr-2"></i>
              Support
            </a>

            <div class="breadcrumb-elements-item dropdown p-0">
              <a href="#" class="breadcrumb-elements-item dropdown-toggle" data-toggle="dropdown">
                <i class="icon-gear mr-2"></i>
                Settings
              </a>

              <div class="dropdown-menu dropdown-menu-right">
                <a href="#" class="dropdown-item">
                  <i class="icon-user-lock"></i> Account security
                </a>
                <a href="#" class="dropdown-item">
                  <i class="icon-statistics"></i> Analytics
                </a>
                <a href="#" class="dropdown-item">
                  <i class="icon-accessibility"></i> Accessibility
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                  <i class="icon-gear"></i> All settings
                </a>
              </div>
            </div>
          </div>
        </div>-->
      </div>
    </div>
    <!-- /page header -->
    <!-- Content area -->
    <div class="content">
      <!-- Form inputs -->
      <div class="card">
        <div class="card-header header-elements-inline"></div>

        <div class="card-body">
          <fieldset class="mb-3">
            <legend class="text-uppercase font-size-sm font-weight-bold">Yeni Şube</legend>
            <form v-on:submit="New">
              <div class="form-group row">
                <label class="col-form-label col-lg-2">Şube Adı :</label>
                <div class="col-lg-5">
                  <input type="text" class="form-control" v-model="data.name" required />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-lg-2">Sunucu Adı :</label>
                <div class="col-lg-5">
                  <input type="text" class="form-control" v-model="data.host" required />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-lg-2">Sunucu Kullanıcı :</label>
                <div class="col-lg-5">
                  <input type="text" class="form-control" v-model="data.username" required />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-lg-2">Sunucu Şifre :</label>
                <div class="col-lg-5">
                  <input type="text" class="form-control" v-model="data.password" required />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-lg-2">Sunucu Port :</label>
                <div class="col-lg-5">
                  <input type="number" class="form-control" v-model="data.port" required />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-lg-2">Sunucu Veritabanı :</label>
                <div class="col-lg-5">
                  <input type="text" class="form-control" v-model="data.dbname" required />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-lg-2">Sıralama :</label>
                <div class="col-lg-5">
                  <input type="Number" class="form-control" v-model="data.Order" required />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-5">
                  <button type="submit" class="btn btn-primary">Kaydet</button>
                </div>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: "",
        host: "",
        password: "",
        username: "",
        port: "",
        dbname: "",
        Order : 0
      }
    };
  },

  methods: {
    New() {
      
    }
  }
};
</script>
