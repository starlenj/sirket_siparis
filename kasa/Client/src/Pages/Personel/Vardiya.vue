<template>
  <div>
    <!-- Page header -->
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Tanımlar</span> - Vardiya Listesi
          </h4>
          <a href="#" class="header-elements-toggle text-default d-md-none">
            <i class="icon-more"></i>
          </a>
        </div>
      </div>

      <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
        <div class="d-flex">
          <div class="breadcrumb">
            <a href="/" class="breadcrumb-item">
              <i class="icon-home2 mr-2"></i> Anasayfa
            </a>
            <a href="/Sube" class="breadcrumb-item">Vardiya Listesi</a>
          </div>

          <a href="#" class="header-elements-toggle text-default d-md-none">
            <i class="icon-more"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- /page header -->
    <!-- Content area -->
    <div class="content">
      <!-- Form inputs -->
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">Vardiya Listesi</h5>
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
                <th>Adı</th>

                <th>Düzenle</th>
                <th>Sil</th>
                <th>Tanımlar</th>
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
                    data-target="#updateForm"
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
                    @click="SelectVardiya(items)"
                    data-toggle="modal"
                    data-target="#VardiyaForm"
                  >
                    <i class="far fa-clock"></i>Saat Tanımı
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Yeni Şube Formu -->
          <div id="newSubeForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-primary">
                  <h6 class="modal-title">Yeni Vardiya</h6>
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
                            v-model="data.VardiyaAdi"
                            required
                          />
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
          <div id="updateForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-primary">
                  <h6 class="modal-title">Yeni Vardiya</h6>
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

          <div id="VardiyaForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-primary">
                  <h6 class="modal-title">{{SelectData.name}} Vardiyası Tanımı</h6>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                  <table>
                    <thead>
                      <tr>
                        <th></th>

                        <th>Giriş</th>
                        <th>Çıkış</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Pazartesi</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="time"
                              class="form-control input-sm"
                              min="0"
                              v-model="Vardiya.Pazartesi.Giris"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="time"
                              class="form-control input-sm"
                              min="0"
                              v-model="Vardiya.Pazartesi.Cikis"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Salı</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Çarşamba</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Perşembe</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Cuma</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Cumartesi</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Pazar</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input type="time" class="form-control input-sm" min="0" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-link" data-dismiss="modal">İptal</button>
                  <button
                    type="button"
                    class="btn bg-primary"
                    data-dismiss="modal"
                    @click="NewVardiya"
                  >Kaydet</button>
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
        VardiyaAdi: "",
        VardiyaId: ""
      },
      Vardiya: {
        Pazartesi: {
          Gun: "Pazartesi",
          Giris: "",
          Cikis: ""
        },
        Sali: {
          Gun: "Salı",
          Giris: "",
          Cikis: ""
        },
        Carsamba: {
          Gun: "Çarşamba",
          Giris: "",
          Cikis: ""
        },
        Persembe: {
          Gun: "Perşembe",
          Giris: "",
          Cikis: ""
        },
        Cuma: {
          Gun: "Cuma",
          Giris: "",
          Cikis: ""
        },
        Cumartesi: {
          Gun: "Cumartesi",
          Giris: "",
          Cikis: ""
        },
        Pazar: {
          Gun: "Pazar",
          Giris: "",
          Cikis: ""
        }
      },
      SubeList: [],
      UpdateData: [],
      SelectData: [],
      UserList: []
    };
  },
  async mounted() {
    let result = await Service.list("Vardiya");
    if (result) {
      this.UserList = result.data;
    }
    let VardiyHareket  =await Service.list('VardiyaHareket')
      // eslint-disable-next-line no-console
      console.log(VardiyHareket)
  },
  methods: {
    async New() {
      // console.log(this.data)
      await Service.save("Vardiya", this.data);
      let result = await Service.list("Vardiya");
      if (result) {
        this.UserList = result.data;
      }
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
      let data = await Service.get("Vardiya", id);
      this.UpdateData = data.data;
    },
    async DeleteModal(id) {
      this.SelectData = id;
    },
    async Delete() {
      await Service.delete(this.SelectData, "Vardiya");
      let result = await Service.list("Vardiya");
      if (result) {
        this.UserList = result.data;
      }
    },
    async Update() {
      await Service.update("Vardiya", this.UpdateData);
      let result = await Service.list("Vardiya");
      if (result) {
        this.UserList = result.data;
      }
    },
    async NewVardiya() {
      Service.save("VardiyaHareket", {
        data: this.Vardiya,
        VardiyaId: this.SelectData._id
      });
    },
    async SelectVardiya(value) {
      this.SelectData = value;
    }
  }
};
</script>