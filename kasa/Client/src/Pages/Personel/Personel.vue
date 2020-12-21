<template>
  <div>
    <!-- Page header -->
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Tanımlar</span> - Personel Listesi
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
            <a href="/Sube" class="breadcrumb-item">Personel Listesi</a>
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
          <h5 class="card-title">Personel Listesi</h5>
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
                <th>Soyadı</th>
                <th>Düzenle</th>
                <th>Sil</th>
                <th>Yetkiler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="items in Personel" :key="items._id">
                <td>{{items.Ad }}</td>
                <td>{{items.Soyad }}</td>

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
              </tr>
            </tbody>
          </table>

          <!-- Yeni Şube Formu -->
          <div id="newSubeForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-primary">
                  <h6 class="modal-title">Yeni Personel</h6>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                  <fieldset class="mb-5">
                    <form v-on:submit="New">
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Şube :</label>
                        <div class="col-lg-5">
                          <select
                            class="form-control"
                            v-model="data.SubeId"
                            @change="ChangeItem($event)"
                          >
                            <option
                              v-for="items in SubeList"
                              :key="items.Personelno"
                              :value="items._id"
                            >{{items.name}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Ad :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="data.Ad" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Soyad :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="data.SoyAd" required />
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
          <!-- Personel güncelleme Formu-->

          <div id="updateForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-primary">
                  <h6 class="modal-title">Personel Güncelleme</h6>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                  <fieldset class="mb-5">
                    <form>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Şube :</label>
                        <div class="col-lg-5">
                          <select
                            class="form-control"
                            v-model="data.SubeId"
                            @change="ChangeItem($event)"
                          >
                            <option
                              v-for="items in SubeList"
                              :key="items.Personelno"
                              selected="items.SubeId===UpdateData.SubeId"
                              :value="items._id"
                            >{{items.name}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Ad :</label>
                        <div class="col-lg-5">
                          <input type="text" class="form-control" v-model="UpdateData.Ad" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-lg-3">Soyad :</label>
                        <div class="col-lg-5">
                          <input
                            type="text"
                            class="form-control"
                            v-model="UpdateData.Soyad"
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
        SubeId: "",
        Ad: "",
        SoyAd: ""
      },
      PersonelList: [],
      SubeList: [],
      Personel: [],
      SelectData: [],
      UpdateData: []
    };
  },
  async mounted() {
    let subeListResult = await Service.list("Sube");
    this.SubeList = subeListResult.data;
    let personeller = await Service.list("Personel");
    this.Personel = personeller.data;
  },
  methods: {
    async New() {
      let data = {
        Sifre: this.data.Sifre,
        SubeId: this.data.SubeId,
        Ad: this.data.Ad,
        Soyad: this.data.SoyAd
      };

      await Service.save("Personel", data);
      let personeller = await Service.list("Personel");
      this.Personel = personeller.data;
    },

    async Get(id) {
      let data = await Service.get("Personel", id);
      this.UpdateData = data.data;
    },
    async DeleteModal(id) {
      this.SelectData = id;
    },
    async Delete() {
      await Service.delete(this.SelectData, "Personel");
      let personeller = await Service.list("Personel");
      this.Personel = personeller.data;
    },
    async Update() {
      await Service.update("Personel", this.UpdateData);
      let personeller = await Service.list("Personel");
      this.Personel = personeller.data;
    },
    async ChangeItem() {
      this.data.Ad = this.data.PersonelId.Ad;
      this.data.SoyAd = this.data.PersonelId.Soyad;
    }
  }
};
</script>