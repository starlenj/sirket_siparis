<template>
  <div>
    <!-- Page header -->
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Üretim</span> - Şube İhtiyaç Listesi
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
            <a href="/Uretim/SubeKalanDetayli" class="breadcrumb-item">Şube Kalan Detaylı</a>
            <a href="/Uretim/Gunluk" class="breadcrumb-item">Günlük Üretim</a>
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
          <h5 class="card-title">Şube İhtiyaç Listesi</h5>
        </div>

        <div class="card-body">
          <br />
          <br />
          <table id="table" class="table datatable-columns">
            <thead>
              <tr>
                <th>Şube Adı</th>

                <th>Düzenle</th>
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
                    data-target="#newListForm"
                    @click="Get(items._id,items.name)"
                  >
                    <i class="mi-mode-edit"></i>Liste
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Yeni Şube Formu -->

          <!--Şube Üretim Formu-->
          <div id="newListForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-primary">
                  <h6 class="modal-title">{{SelectSube}} Şube İhtiyaç</h6>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                  <table>
                    <thead>
                      <tr>
                        <th></th>

                        <th>90 GR(Adet)</th>
                        <th>140 GR(Adet)</th>
                        <th>Tavuk Köfte(Adet)</th>
                        <th>Tavuk Fleto(KG)</th>
                        <th>Çocuk Köfte(Menü)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Pazartesi</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.DoksanGr.Pazartesi.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.YuzKirkGr.Pazartesi.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukKofte.Pazartesi.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukFileto.Pazartesi.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.CocukKofte.Pazartesi.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Salı</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.DoksanGr.Sali.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.YuzKirkGr.Sali.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukKofte.Sali.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukFileto.Sali.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.CocukKofte.Sali.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Çarşamba</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.DoksanGr.Carsamba.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.YuzKirkGr.Carsamba.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukKofte.Carsamba.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukFileto.Carsamba.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.CocukKofte.Carsamba.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Perşembe</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.DoksanGr.Persembe.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.YuzKirkGr.Persembe.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukKofte.Persembe.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukFileto.Persembe.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.CocukKofte.Persembe.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Cuma</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.DoksanGr.Cuma.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.YuzKirkGr.Cuma.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukKofte.Cuma.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukFileto.Cuma.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.CocukKofte.Cuma.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Cumartesi</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.DoksanGr.Cumartesi.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.YuzKirkGr.Cumartesi.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukKofte.Cumartesi.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukFileto.Cumartesi.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.CocukKofte.Cumartesi.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Pazar</th>

                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.DoksanGr.Pazar.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.YuzKirkGr.Pazar.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukKofte.Pazar.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.TavukFileto.Pazar.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.CocukKofte.Pazar.Miktar"
                              min="0"
                            />
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
                    @click="New"
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
        dbname: ""
      },
      SubeList: [],
      UpdateData: [],
      SelectData: [],
      SelectSube: "",
      FormModal: {
        CocukKofte: {
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "CocukKofte"
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "CocukKofte"
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "CocukKofte"
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "CocukKofte"
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "CocukKofte"
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "CocukKofte"
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "CocukKofte"
          }
        },
        DoksanGr: {
          SubeId: this.SelectData,
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "DoksanGr"
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "DoksanGr"
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "DoksanGr"
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "DoksanGr"
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "DoksanGr"
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "DoksanGr"
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "DoksanGr"
          }
        },
        YuzKirkGr: {
          SubeId: this.SelectData,
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "YuzKirkGr"
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "YuzKirkGr"
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "YuzKirkGr"
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "YuzKirkGr"
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "YuzKirkGr"
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "YuzKirkGr"
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "YuzKirkGr"
          }
        },
        TavukKofte: {
          SubeId: this.SelectData,
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "TavukKofte"
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "TavukKofte"
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "TavukKofte"
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "TavukKofte"
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "TavukKofte"
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "TavukKofte"
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "TavukKofte"
          }
        },
        TavukFileto: {
          SubeId: this.SelectData,
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "TavukFileto"
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "TavukFileto"
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "TavukFileto"
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "TavukFileto"
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "TavukFileto"
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "TavukFileto"
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "TavukFileto"
          }
        }
      }
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
      //önce çocuk köfte
      // eslint-disable-next-line no-console
      await Service.save("/SubeIhtiyac", {
        data: this.FormModal.CocukKofte,
        SubeId: this.SelectData
      });

      await Service.save("/SubeIhtiyac", {
        data: this.FormModal.DoksanGr,
        SubeId: this.SelectData
      });
      await Service.save("/SubeIhtiyac", {
        data: this.FormModal.YuzKirkGr,
        SubeId: this.SelectData
      });
      await Service.save("/SubeIhtiyac", {
        data: this.FormModal.TavukKofte,
        SubeId: this.SelectData
      });
      await Service.save("/SubeIhtiyac", {
        data: this.FormModal.TavukFileto,
        SubeId: this.SelectData
      });
    },
    async Get(id, name) {
      this.SelectSube = name;
      //SIFIRLAMA
      this.FormModal.CocukKofte.Pazartesi.Miktar = 0;
      this.FormModal.CocukKofte.Sali.Miktar = 0;
      this.FormModal.CocukKofte.Carsamba.Miktar = 0;
      this.FormModal.CocukKofte.Persembe.Miktar = 0;
      this.FormModal.CocukKofte.Cuma.Miktar = 0;
      this.FormModal.CocukKofte.Cumartesi.Miktar = 0;
      this.FormModal.CocukKofte.Pazar.Miktar = 0;

      this.FormModal.DoksanGr.Pazartesi.Miktar = 0;
      this.FormModal.DoksanGr.Sali.Miktar = 0;
      this.FormModal.DoksanGr.Carsamba.Miktar = 0;
      this.FormModal.DoksanGr.Persembe.Miktar = 0;
      this.FormModal.DoksanGr.Cuma.Miktar = 0;
      this.FormModal.DoksanGr.Cumartesi.Miktar = 0;
      this.FormModal.DoksanGr.Pazar.Miktar = 0;

      this.FormModal.YuzKirkGr.Pazartesi.Miktar = 0;
      this.FormModal.YuzKirkGr.Sali.Miktar = 0;
      this.FormModal.YuzKirkGr.Carsamba.Miktar = 0;
      this.FormModal.YuzKirkGr.Persembe.Miktar = 0;
      this.FormModal.YuzKirkGr.Cuma.Miktar = 0;
      this.FormModal.YuzKirkGr.Cumartesi.Miktar = 0;
      this.FormModal.YuzKirkGr.Pazar.Miktar = 0;

      this.FormModal.TavukKofte.Pazartesi.Miktar = 0;
      this.FormModal.TavukKofte.Sali.Miktar = 0;
      this.FormModal.TavukKofte.Carsamba.Miktar = 0;
      this.FormModal.TavukKofte.Persembe.Miktar = 0;
      this.FormModal.TavukKofte.Cuma.Miktar = 0;
      this.FormModal.TavukKofte.Cumartesi.Miktar = 0;
      this.FormModal.TavukKofte.Pazar.Miktar = 0;

      this.FormModal.TavukFileto.Pazartesi.Miktar = 0;
      this.FormModal.TavukFileto.Sali.Miktar = 0;
      this.FormModal.TavukFileto.Carsamba.Miktar = 0;
      this.FormModal.TavukFileto.Persembe.Miktar = 0;
      this.FormModal.TavukFileto.Cuma.Miktar = 0;
      this.FormModal.TavukFileto.Cumartesi.Miktar = 0;
      this.FormModal.TavukFileto.Pazar.Miktar = 0;
      //END SIFIRLAMA

      this.SelectData = id;
      let result = await Service.get("/SubeIhtiyac", id);
      result.data.forEach(item => {
        //ÇOCUK KÖFTE GETİR
        if (item.gun === "Pazartesi" && item.urunAdi === "CocukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.CocukKofte.Pazartesi.Miktar = item.miktar;
        if (item.gun === "Sali" && item.urunAdi === "CocukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.CocukKofte.Sali.Miktar = item.miktar;
        if (item.gun === "Carsamba" && item.urunAdi === "CocukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.CocukKofte.Carsamba.Miktar = item.miktar;
        if (item.gun === "Persembe" && item.urunAdi === "CocukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.CocukKofte.Persembe.Miktar = item.miktar;
        if (item.gun === "Cuma" && item.urunAdi === "CocukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.CocukKofte.Cuma.Miktar = item.miktar;
        if (item.gun === "Cumartesi" && item.urunAdi === "CocukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.CocukKofte.Cumartesi.Miktar = item.miktar;
        if (item.gun === "Pazar" && item.urunAdi === "CocukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.CocukKofte.Pazar.Miktar = item.miktar;

        //90GR GETİR

        if (item.gun === "Pazartesi" && item.urunAdi === "DoksanGr")
          // eslint-disable-next-line no-console
          this.FormModal.DoksanGr.Pazartesi.Miktar = item.miktar;
        if (item.gun === "Sali" && item.urunAdi === "DoksanGr")
          // eslint-disable-next-line no-console
          this.FormModal.DoksanGr.Sali.Miktar = item.miktar;
        if (item.gun === "Carsamba" && item.urunAdi === "DoksanGr")
          // eslint-disable-next-line no-console
          this.FormModal.DoksanGr.Carsamba.Miktar = item.miktar;
        if (item.gun === "Persembe" && item.urunAdi === "DoksanGr")
          // eslint-disable-next-line no-console
          this.FormModal.DoksanGr.Persembe.Miktar = item.miktar;
        if (item.gun === "Cuma" && item.urunAdi === "DoksanGr")
          // eslint-disable-next-line no-console
          this.FormModal.DoksanGr.Cuma.Miktar = item.miktar;
        if (item.gun === "Cumartesi" && item.urunAdi === "DoksanGr")
          // eslint-disable-next-line no-console
          this.FormModal.DoksanGr.Cumartesi.Miktar = item.miktar;
        if (item.gun === "Pazar" && item.urunAdi === "DoksanGr")
          // eslint-disable-next-line no-console
          this.FormModal.DoksanGr.Pazar.Miktar = item.miktar;

        //140GR GETİR

        if (item.gun === "Pazartesi" && item.urunAdi === "YuzKirkGr")
          // eslint-disable-next-line no-console
          this.FormModal.YuzKirkGr.Pazartesi.Miktar = item.miktar;
        if (item.gun === "Sali" && item.urunAdi === "YuzKirkGr")
          // eslint-disable-next-line no-console
          this.FormModal.YuzKirkGr.Sali.Miktar = item.miktar;
        if (item.gun === "Carsamba" && item.urunAdi === "YuzKirkGr")
          // eslint-disable-next-line no-console
          this.FormModal.YuzKirkGr.Carsamba.Miktar = item.miktar;
        if (item.gun === "Persembe" && item.urunAdi === "YuzKirkGr")
          // eslint-disable-next-line no-console
          this.FormModal.YuzKirkGr.Persembe.Miktar = item.miktar;
        if (item.gun === "Cuma" && item.urunAdi === "YuzKirkGr")
          // eslint-disable-next-line no-console
          this.FormModal.YuzKirkGr.Cuma.Miktar = item.miktar;
        if (item.gun === "Cumartesi" && item.urunAdi === "YuzKirkGr")
          // eslint-disable-next-line no-console
          this.FormModal.YuzKirkGr.Cumartesi.Miktar = item.miktar;
        if (item.gun === "Pazar" && item.urunAdi === "YuzKirkGr")
          // eslint-disable-next-line no-console
          this.FormModal.YuzKirkGr.Pazar.Miktar = item.miktar;

        //TAVUK KÖFTE GETİR

        if (item.gun === "Pazartesi" && item.urunAdi === "TavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.TavukKofte.Pazartesi.Miktar = item.miktar;
        if (item.gun === "Sali" && item.urunAdi === "TavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.TavukKofte.Sali.Miktar = item.miktar;
        if (item.gun === "Carsamba" && item.urunAdi === "TavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.TavukKofte.Carsamba.Miktar = item.miktar;
        if (item.gun === "Persembe" && item.urunAdi === "TavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.TavukKofte.Persembe.Miktar = item.miktar;
        if (item.gun === "Cuma" && item.urunAdi === "TavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.TavukKofte.Cuma.Miktar = item.miktar;
        if (item.gun === "Cumartesi" && item.urunAdi === "TavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.TavukKofte.Cumartesi.Miktar = item.miktar;
        if (item.gun === "Pazar" && item.urunAdi === "TavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.TavukKofte.Pazar.Miktar = item.miktar;

        //TAVUK FİLETO GETİR

        if (item.gun === "Pazartesi" && item.urunAdi === "TavukFileto")
          // eslint-disable-next-line no-console
          this.FormModal.TavukFileto.Pazartesi.Miktar = item.miktar;
        if (item.gun === "Sali" && item.urunAdi === "TavukFileto")
          // eslint-disable-next-line no-console
          this.FormModal.TavukFileto.Sali.Miktar = item.miktar;
        if (item.gun === "Carsamba" && item.urunAdi === "TavukFileto")
          // eslint-disable-next-line no-console
          this.FormModal.TavukFileto.Carsamba.Miktar = item.miktar;
        if (item.gun === "Persembe" && item.urunAdi === "TavukFileto")
          // eslint-disable-next-line no-console
          this.FormModal.TavukFileto.Persembe.Miktar = item.miktar;
        if (item.gun === "Cuma" && item.urunAdi === "TavukFileto")
          // eslint-disable-next-line no-console
          this.FormModal.TavukFileto.Cuma.Miktar = item.miktar;
        if (item.gun === "Cumartesi" && item.urunAdi === "TavukFileto")
          // eslint-disable-next-line no-console
          this.FormModal.TavukFileto.Cumartesi.Miktar = item.miktar;
        if (item.gun === "Pazar" && item.urunAdi === "TavukFileto")
          // eslint-disable-next-line no-console
          this.FormModal.TavukFileto.Pazar.Miktar = item.miktar;
      });
    },
    async DeleteModal(id) {
      this.SelectData = id;
    },
    async Delete() {
      await Service.delete(
        { data: this.SelectData, subeId: this.SelectData },
        "Sube"
      );
      let result = await Service.list("Sube");
      if (result) {
        this.SubeList = result.data;
      }
    }
  }
};
</script>
