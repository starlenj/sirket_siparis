<template>
  <div>
    <!-- Page header -->
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Tanımlar</span> - Kullanıcı Listesi
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
            <a href="/Sube" class="breadcrumb-item">Kullanıcı Listesi</a>
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
        <div class="card-header header-elements-inline">
          <h5 class="card-title">Kullanıcı Listesi</h5>
        </div>

        <div class="card-body">
          <button
            type="button"
            class="btn bg-primary"
            data-toggle="modal"
            data-target="#newSubeForm
       "
          >
            <i class="mi-add"></i>Yeni
          </button>
          <br />
          <br />
          <table id="table" class="table datatable-columns">
            <thead>
              <tr>
                <th>Kullanıcı Adı</th>

                <th>Düzenle</th>
                <th>Sil</th>
                <th>Yetkiler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="items in UserList" :key="items._id">
                <td>{{items.name}}</td>

                <td>
                  <button
                    type="button"
                    class="btn bg-primary"
                    data-toggle="modal"
                    data-target="#updateSubeForm"
                    @click="Get(items._id)"
                  >
                    <i class="mi-mode-edit"></i>Düzenle
                  </button>
                </td>
                <td>
                  <button
                    class="btn btn-danger"
                    @click="DeleteModal(items._id)"
                    data-toggle="modal"
                    data-target="#deleteSubeForm"
                  >
                    <i class="mi-delete"></i>Sil
                  </button>
                </td>

                <td>
                  <button
                    class="btn btn-primary"
                    @click="DeleteModal(items._id)"
                    data-toggle="modal"
                    data-target="#YetkiModal"
                  >Yetkiler</button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Yeni Şube Formu -->
          <div id="newSubeForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-primary">
                  <h6 class="modal-title">Yeni Kullanıcı</h6>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                  <fieldset class="mb-5">
                    <form v-on:submit="New">
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Adı :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="data.name" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Soyadı :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="data.lastName" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">E-Posta :</label>
                        <div class="col-lg-5">
                          <input type="email" class="form-control" v-model="data.email" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Şifre :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="data.password" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Kullanıcı Türü :</label>
                        <div class="col-lg-5">
                          <select class="form-control" v-model="data.userType">
                            <option value="user">Kullanıcı</option>
                            <option value="admin">Yönetici</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Şube :</label>
                        <div class="col-lg-5">
                          <select class="form-control" v-model="data.subeId">
                            <option
                              v-for="items in SubeList"
                              :key="items._id"
                              v-bind:value="items._id"
                              v-on:change="ChangeItem(items._id)"
                            >{{items.name}}</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </fieldset>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-link" data-dismiss="modal">İptal</button>
                  <button
                    type="button"
                    class="btn bg-primary"
                    data-dismiss="modal"
                    @click="New"
                  >Kaydet</button>
                </div>
              </div>
            </div>
          </div>
          <!--Şube Güncel Formu-->
          <div id="updateSubeForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-primary">
                  <h6 class="modal-title">Kullanıcı Düzenle</h6>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                  <fieldset class="mb-5">
                    <form v-on:submit="New">
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Adı :</label>
                        <div class="col-lg-5">
                          <input
                            type="text"
                            class="form-control"
                            v-model="UpdateData.name"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Soyadı :</label>
                        <div class="col-lg-5">
                          <input
                            type="text"
                            class="form-control"
                            v-model="UpdateData.lastName"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">E-Posta :</label>
                        <div class="col-lg-5">
                          <input
                            type="email"
                            class="form-control"
                            v-model="UpdateData.email"
                            required
                          />
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Kullanıcı Türü :</label>
                        <div class="col-lg-5">
                          <select class="form-control" v-model="UpdateData.userType">
                            <option value="user">Kullanıcı</option>
                            <option value="admin">Yönetici</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Şube :</label>
                        <div class="col-lg-5">
                          <select class="form-control" v-model="UpdateData.subeId">
                            <option
                              v-for="items in SubeList"
                              :key="items._id"
                              v-bind:value="items._id"
                              v-on:change="ChangeItem(items._id)"
                            >{{items.name}}</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </fieldset>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-link" data-dismiss="modal">İptal</button>
                  <button
                    type="button"
                    class="btn bg-primary"
                    data-dismiss="modal"
                    @click="Update"
                  >Kaydet</button>
                </div>
              </div>
            </div>
          </div>

          <!--Şube Silme Modal-->

          <div id="deleteSubeForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <h1>Kayıt Silinecek Onaylıyor musunuz ?</h1>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-link" data-dismiss="modal">İptal</button>
                  <button
                    type="button"
                    class="btn bg-primary"
                    data-dismiss="modal"
                    @click="Delete"
                  >Sil</button>
                </div>
              </div>
            </div>
          </div>

          <!--Yeti Modal-->

          <div id="YetkiModal" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-primary">
                  <h6 class="modal-title">Kullanıcı Yetki</h6>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                  <select class="form-control" v-model="UserPermission">
                    <optgroup label="Admin">
                      <option value="admin">Admin</option>
                    </optgroup>

                    <optgroup label="Şube">
                      <option value="sube.new">Ekleme</option>
                      <option value="sube.delete">Silme</option>
                      <option value="sube.edit">Düzenleme</option>
                    </optgroup>
                    <optgroup label="Rapor">
                      <option value="report.new">Ekleme</option>
                      <option value="report.edit">Düzenleme</option>
                      <option value="report.view">Görüntüleme</option>
                    </optgroup>
                    <optgroup label="Sipariş">
                      <option value="order.new">Ekleme</option>
                      <option value="order.delete">Silme</option>
                      <option value="order.view">Görüntüleme</option>
                      <option value="order.edit">Düzenleme</option>
                    </optgroup>
                    <optgroup label="Transfer">
                      <option value="transfer.new">Ekleme</option>
                      <option value="transfer.delete">Silme</option>
                      <option value="transfer.view">Görüntüleme</option>
                      <option value="transfer.edit">Düzenleme</option>
                    </optgroup>
                    <optgroup label="Kullanıcı">
                      <option value="user.new">Ekleme</option>
                      <option value="user.delete">Silme</option>
                      <option value="user.edit">Düzenleme</option>
                    </optgroup>
                    <optgroup label="Üretim">
                      <option value="subeuretim.subeuretim">Tanımlama</option>
                      <option value="subeuretim.delete">Silme</option>
                      <option value="subeuretim.view">Görüntüleme</option>
                      <option value="subeuretim.edit">Düzenleme</option>
                    </optgroup>
                  </select>
                  <br />
                  <br />
                  <button class="btn btn-primary btn-lg btn-block" @click="NewPermission">Ekle</button>
                  <table id="table" class="table datatable-columns">
                    <thead>
                      <tr>
                        <th>Adı</th>

                        <th>Sil</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="items in YetkiList" :key="items._id">
                        <td>{{items.name}}</td>

                        <td>
                          <button class="btn btn-danger" @click="DeletePermission(items._id)">
                            <i class="mi-delete"></i>Sil
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-link" data-dismiss="modal">Tamam</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../Service";
export default {
  data() {
    return {
      data: {
        name: "",
        host: "",
        password: "",
        username: "",
        port: "",
        lastName: "",
        email: "",
        dbname: "",
        address: "adres"
      },
      SubeList: [],
      UpdateData: [],
      SelectData: [],
      UserPermission: [],
      YetkiList: [],
      UserList: []
    };
  },
  async mounted() {
    let result = await Service.list("Users");
    if (result) {
      this.UserList = result.data;
    }

    let subeler = await Service.list("Sube");
    if (subeler) {
      this.SubeList = subeler.data;
    }
    let UserInfo = await Service.save("users/login/validToken/", {
      token: localStorage.getItem("TOKEN")
    });
    let yetkiler = await Service.list(
      "/Users/UserPermission/" + UserInfo.data.data[0]._id
    );
    this.YetkiList = yetkiler.data;
  },
  methods: {
    async New() {
      // console.log(this.data)
      await Service.save("Users", this.data);
      let result = await Service.list("Users");
      if (result) {
        this.UserList = result.data;
      }
    },
    async NewPermission() {
      await Service.save("Users/UserPermission", {
        name: this.UserPermission,
        userId: this.SelectData
      });
      let UserInfo = await Service.save("users/login/validToken/", {
        token: localStorage.getItem("TOKEN")
      });
      let yetkiler = await Service.list(
        "/Users/UserPermission/" + UserInfo.data.data[0]._id
      );
      this.YetkiList = yetkiler.data;
    },

    async DeletePermission(id) {
      await Service.delete(id, "Users/UserPermission");
      let UserInfo = await Service.save("users/login/validToken/", {
        token: localStorage.getItem("TOKEN")
      });
      let yetkiler = await Service.list(
        "/Users/UserPermission/" + UserInfo.data.data[0]._id
      );
      this.YetkiList = yetkiler.data;
    },
    async Get(id) {
      let data = await Service.get("Users", id);
      this.UpdateData = data.data;
    },
    async DeleteModal(id) {
      this.SelectData = id;
    },
    async Delete() {
      await Service.delete(this.SelectData, "Users");
      let result = await Service.list("Users");
      if (result) {
        this.UserList = result.data;
      }
    },
    async Update() {
      await Service.update("Users", this.UpdateData);
    },
    async ChangeItem(value) {
      alert(value);
    }
  }
};
</script>