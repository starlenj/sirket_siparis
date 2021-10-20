<template>
  <div>
    <!-- Page header -->
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Üretim</span> - Şube İhtiyaç
            Listesi
          </h4>
          <a href="#" class="header-elements-toggle text-default d-md-none">
            <i class="icon-more"></i>
          </a>
        </div>
      </div>

      <div
        class="breadcrumb-line breadcrumb-line-light header-elements-md-inline"
      >
        <div class="d-flex">
          <div class="breadcrumb">
            <a href="/" class="breadcrumb-item">
              <i class="icon-home2 mr-2"></i> Anasayfa
            </a>
            <a href="/Uretim/SubeKalanDetayli" class="breadcrumb-item"
              >Şube Kalan Detaylı</a
            >
            <a href="/Uretim/Gunluk" class="breadcrumb-item">Günlük Üretim</a>
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
                <td>{{ items.name }}</td>

                <td>
                  <button
                    type="button"
                    class="btn bg-primary"
                    data-toggle="modal"
                    data-target="#newListForm"
                    @click="Get(items._id, items.name)"
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
                  <h6 class="modal-title">{{ SelectSube }} Şube İhtiyaci</h6>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div class="modal-body">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>90 GR(Adet)</th>
                        <th>140 GR(Adet)</th>
                        <th>K.Tavuk Köfte(Adet)</th>
                        <th>B.Tavuk Köfte(Adet)</th>
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
                              v-model="
                                FormModal.KucukTavukKofte.Pazartesi.Miktar
                              "
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="
                                FormModal.BuyukTavukKofte.Pazartesi.Miktar
                              "
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
                              v-model="FormModal.KucukTavukKofte.Sali.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.BuyukTavukKofte.Sali.Miktar"
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
                              v-model="
                                FormModal.KucukTavukKofte.Carsamba.Miktar
                              "
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="
                                FormModal.BuyukTavukKofte.Carsamba.Miktar
                              "
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
                              v-model="
                                FormModal.KucukTavukKofte.Persembe.Miktar
                              "
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="
                                FormModal.BuyukTavukKofte.Persembe.Miktar
                              "
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
                              v-model="FormModal.KucukTavukKofte.Cuma.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.BuyukTavukKofte.Cuma.Miktar"
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
                              v-model="
                                FormModal.KucukTavukKofte.Cumartesi.Miktar
                              "
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="
                                FormModal.BuyukTavukKofte.Cumartesi.Miktar
                              "
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
                              v-model="FormModal.KucukTavukKofte.Pazar.Miktar"
                              min="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="FormModal.BuyukTavukKofte.Pazar.Miktar"
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
                  <button
                    type="button"
                    class="btn btn-link"
                    data-dismiss="modal"
                  >
                    İptal
                  </button>
                  <button
                    type="button"
                    class="btn bg-primary"
                    data-dismiss="modal"
                    @click="New"
                  >
                    Kaydet
                  </button>
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
                  <button
                    type="button"
                    class="btn btn-link"
                    data-dismiss="modal"
                  >
                    İptal
                  </button>
                  <button
                    type="button"
                    class="btn bg-primary"
                    data-dismiss="modal"
                    @click="Delete"
                  >
                    Sil
                  </button>
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
            UrunAdi: "CocukKofte",
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "CocukKofte",
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "CocukKofte",
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "CocukKofte",
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "CocukKofte",
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "CocukKofte",
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "CocukKofte",
          },
        },
        DoksanGr: {
          SubeId: this.SelectData,
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "DoksanGr",
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "DoksanGr",
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "DoksanGr",
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "DoksanGr",
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "DoksanGr",
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "DoksanGr",
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "DoksanGr",
          },
        },
        YuzKirkGr: {
          SubeId: this.SelectData,
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "YuzKirkGr",
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "YuzKirkGr",
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "YuzKirkGr",
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "YuzKirkGr",
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "YuzKirkGr",
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "YuzKirkGr",
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "YuzKirkGr",
          },
        },
        BuyukTavukKofte: {
          SubeId: this.SelectData,
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "BuyukTavukKofte",
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "BuyukTavukKofte",
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "BuyukTavukKofte",
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "BuyukTavukKofte",
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "BuyukTavukKofte",
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "BuyukTavukKofte",
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "BuyukTavukKofte",
          },
        },
        KucukTavukKofte: {
          SubeId: this.SelectData,
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "KucukTavukKofte",
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "KucukTavukKofte",
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "KucukTavukKofte",
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "KucukTavukKofte",
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "KucukTavukKofte",
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "KucukTavukKofte",
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "KucukTavukKofte",
          },
        },
        TavukFileto: {
          SubeId: this.SelectData,
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "TavukFileto",
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "TavukFileto",
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "TavukFileto",
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "TavukFileto",
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "TavukFileto",
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "TavukFileto",
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "TavukFileto",
          },
        },
      },
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
        SubeId: this.SelectData,
      });

      await Service.save("/SubeIhtiyac", {
        data: this.FormModal.DoksanGr,
        SubeId: this.SelectData,
      });
      await Service.save("/SubeIhtiyac", {
        data: this.FormModal.YuzKirkGr,
        SubeId: this.SelectData,
      });
      await Service.save("/SubeIhtiyac", {
        data: this.FormModal.BuyukTavukKofte,
        SubeId: this.SelectData,
      });
      await Service.save("/SubeIhtiyac", {
        data: this.FormModal.KucukTavukKofte,
        SubeId: this.SelectData,
      });
      await Service.save("/SubeIhtiyac", {
        data: this.FormModal.TavukFileto,
        SubeId: this.SelectData,
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

      this.FormModal.KucukTavukKofte.Pazartesi.Miktar = 0;
      this.FormModal.KucukTavukKofte.Sali.Miktar = 0;
      this.FormModal.KucukTavukKofte.Carsamba.Miktar = 0;
      this.FormModal.KucukTavukKofte.Persembe.Miktar = 0;
      this.FormModal.KucukTavukKofte.Cuma.Miktar = 0;
      this.FormModal.KucukTavukKofte.Cumartesi.Miktar = 0;
      this.FormModal.KucukTavukKofte.Pazar.Miktar = 0;

      this.FormModal.BuyukTavukKofte.Pazartesi.Miktar = 0;
      this.FormModal.BuyukTavukKofte.Sali.Miktar = 0;
      this.FormModal.BuyukTavukKofte.Carsamba.Miktar = 0;
      this.FormModal.BuyukTavukKofte.Persembe.Miktar = 0;
      this.FormModal.BuyukTavukKofte.Cuma.Miktar = 0;
      this.FormModal.BuyukTavukKofte.Cumartesi.Miktar = 0;
      this.FormModal.BuyukTavukKofte.Pazar.Miktar = 0;
      //END SIFIRLAMA

      this.SelectData = id;
      let result = await Service.get("/SubeIhtiyac", id);
      result.data.forEach((item) => {
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

        if (item.gun === "Pazartesi" && item.urunAdi === "BuyukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.BuyukTavukKofte.Pazartesi.Miktar = item.miktar;
        if (item.gun === "Sali" && item.urunAdi === "BuyukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.BuyukTavukKofte.Sali.Miktar = item.miktar;
        if (item.gun === "Carsamba" && item.urunAdi === "BuyukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.BuyukTavukKofte.Carsamba.Miktar = item.miktar;
        if (item.gun === "Persembe" && item.urunAdi === "BuyukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.BuyukTavukKofte.Persembe.Miktar = item.miktar;
        if (item.gun === "Cuma" && item.urunAdi === "BuyukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.BuyukTavukKofte.Cuma.Miktar = item.miktar;
        if (item.gun === "Cumartesi" && item.urunAdi === "BuyukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.BuyukTavukKofte.Cumartesi.Miktar = item.miktar;
        if (item.gun === "Pazar" && item.urunAdi === "BuyukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.BuyukTavukKofte.Pazar.Miktar = item.miktar;

        // kucuk tavuk kofte getir
        if (item.gun === "Pazartesi" && item.urunAdi === "KucukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.KucukTavukKofte.Pazartesi.Miktar = item.miktar;
        if (item.gun === "Sali" && item.urunAdi === "KucukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.KucukTavukKofte.Sali.Miktar = item.miktar;
        if (item.gun === "Carsamba" && item.urunAdi === "KucukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.KucukTavukKofte.Carsamba.Miktar = item.miktar;
        if (item.gun === "Persembe" && item.urunAdi === "KucukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.KucukTavukKofte.Persembe.Miktar = item.miktar;
        if (item.gun === "Cuma" && item.urunAdi === "KucukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.KucukTavukKofte.Cuma.Miktar = item.miktar;
        if (item.gun === "Cumartesi" && item.urunAdi === "KucukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.KucukTavukKofte.Cumartesi.Miktar = item.miktar;
        if (item.gun === "Pazar" && item.urunAdi === "KucukTavukKofte")
          // eslint-disable-next-line no-console
          this.FormModal.KucukTavukKofte.Pazar.Miktar = item.miktar;

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
    },
  },
};
</script>
