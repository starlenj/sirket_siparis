<template>
  <div class="page-header page-header-light">
    <div class="page-header-content header-elements-md-inline">
      <div class="page-title d-flex">
        <h4>
          <i class="icon-arrow-left52 mr-2"></i>
          <span class="font-weight-semibold">Tanımlar</span> - Şube Listesi
        </h4>
        <a href="#" class="header-elements-toggle text-default d-md-none">
          <i class="icon-more"></i>
        </a>
      </div>

      <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
        <div class="d-flex">
          <div class="breadcrumb">
            <a href="/" class="breadcrumb-item">
              <i class="icon-home2 mr-2"></i> Anasayfa
            </a>
            <a href="/Sube" class="breadcrumb-item">Şube Listesi</a>
          </div>

          <a href="#" class="header-elements-toggle text-default d-md-none">
            <i class="icon-more"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- Form inputs -->
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">Şube Listesi</h5>
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
          <table id="table" class="table">
            <thead>
              <tr>
                <th>Şube Adı</th>

                <th>Düzenle</th>
                <th>Sil</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="items in SubeList" :key="items._id">
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
              </tr>
            </tbody>
          </table>

          <!-- Yeni Şube Formu -->
          <div id="newSubeForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-primary">
                  <h6 class="modal-title">Yeni Şube</h6>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                  <fieldset class="mb-5">
                    <form v-on:submit="New">
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Şube Adı :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="data.name" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sunucu Adı :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="data.host" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sunucu Kullanıcı :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="data.username" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sunucu Şifre :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="data.password" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sunucu Port :</label>
                        <div class="col-lg-5">
                          <input type="number" class="form-control" v-model="data.port" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sunucu Veritabanı :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="data.dbname" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sıralama :</label>
                        <div class="col-lg-5">
                          <input type="number" class="form-control" v-model="data.Order" required />
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
                  <h6 class="modal-title">Şube Güncelle</h6>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                  <fieldset class="mb-5">
                    <form v-on:submit="New">
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Şube Adı :</label>
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
                        <label class="col-form-label col-lg-3">Sunucu Adı :</label>
                        <div class="col-lg-5">
                          <input
                            type="text"
                            class="form-control"
                            v-model="UpdateData.host"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sunucu Kullanıcı :</label>
                        <div class="col-lg-5">
                          <input
                            type="text"
                            class="form-control"
                            v-model="UpdateData.username"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sunucu Şifre :</label>
                        <div class="col-lg-5">
                          <input
                            type="text"
                            class="form-control"
                            v-model="UpdateData.password"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sunucu Port :</label>
                        <div class="col-lg-5">
                          <input
                            type="number"
                            class="form-control"
                            v-model="UpdateData.port"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sunucu Veritabanı :</label>
                        <div class="col-lg-5">
                          <input
                            type="text"
                            class="form-control"
                            v-model="UpdateData.dbname"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Sıralama :</label>
                        <div class="col-lg-5">
                          <input type="number" class="form-control" v-model="UpdateData.Order" required />
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
        dbname: "",
        Order: 0
      },
      SubeList: [],
      UpdateData: [],
      SelectData: []
    };
  },
  async mounted() {
    let result = await Service.list("Sube");
    if (result) {
      this.SubeList = result.data;
    }
  },
  methods: {
    async New() {
      await Service.save("Sube", this.data);
      let result = await Service.list("Sube");
      if (result) {
        this.SubeList = result.data;
      }
      this.data=[];
    },
    async Update() {
      await Service.update("Sube", this.UpdateData);
    },
    async Get(id) {
      this.UpdateData = [];
      let data = await Service.get("Sube", id);
      this.UpdateData = data.data;
    },
    async DeleteModal(id) {
      this.SelectData = id;
    },
    async Delete() {
      await Service.delete(this.SelectData, "Sube");
      let result = await Service.list("Sube");
      if (result) {
        this.SubeList = result.data;
      }
    }
  }
};
</script>
