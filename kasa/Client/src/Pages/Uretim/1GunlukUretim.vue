<template>
  <div>
    <!-- Page header -->

    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Üretim</span> - Günlük
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
            <a href="/Uretim" class="breadcrumb-item">Şube İhtiyaç</a>
            <a href="/Uretim/SubeKalanDetayli" class="breadcrumb-item">Şube Kalan</a>
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
        <label for="">Tarih</label>
        <input type = "date" class="form-control" v-model="tarih"/>
        <button class="btn btn-primary" @click="GetReport">Getir</button>
        <div class="card-header header-elements-inline">
          <h5 class="card-title">Günlük Üretim Listesi</h5>
        </div>

        <div class="card-body">
          <!--<div class="form-group">
            <label>Tarih:</label>
            <div class="input-group">
              <span class="input-group-prepend">
                <span class="input-group-text">
                  <i class="icon-calendar22"></i>
                </span>
              </span>
              <input type="text" class="form-control daterange-single" v-bind:value="GetDate" />
            </div>
          </div>-->
          <br />
          <br />

          <br />
          <ul class="nav nav-tabs nav-tabs-highlight justify-content-center">
            <li class="nav-item">
              <a href="#Et" class="nav-link active" data-toggle="tab">Et</a>
            </li>
            <li class="nav-item">
              <a href="#SosluTavuk" class="nav-link" data-toggle="tab">Soslu Tavuk</a>
            </li>
            <li class="nav-item">
              <a href="#TavukKofte" class="nav-link" data-toggle="tab">Tavuk Köfte</a>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane fade show active" id="Et">
              <div class="row">
                <div class="col-3">
                  <h2 class="sub-header">Dağıtılacak Et</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Çocuk Köfte(Menü)</th>
                          <th>90 GR(Adet)</th>
                          <th>140 GR(Adet)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="DagitalacakEt.Cocuk"
                              readonly="true"
                            />
                          </td>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="DagitalacakEt.DoksanGr"
                              readonly="true"
                            />
                          </td>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="DagitalacakEt.YuzKirkGr"
                              readonly="true"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-3">
                  <h2 class="sub-header">Eldeki Stok</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Çocuk Köfte(Menü)</th>
                          <th>90 GR(Adet)</th>
                          <th>140 GR(Adet)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="GunIcinDeYapilacakEt.Cocuk"
                              min="0"
                            />
                          </td>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="GunIcinDeYapilacakEt.DoksanGr"
                              min="0"
                            />
                          </td>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="GunIcinDeYapilacakEt.YuzKirkGr"
                              min="0"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-3">
                  <h2 class="sub-header">Kalan Stok</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Çocuk Köfte(Menü)</th>
                          <th>90 GR(Adet)</th>
                          <th>140 GR(Adet)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="ErtesiGuneKalanlar.Cocuk"
                              readonly="true"
                            />
                          </td>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="ErtesiGuneKalanlar.DoksanGr"
                              readonly="true"
                            />
                          </td>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="ErtesiGuneKalanlar.YuzKirkGr"
                              readonly="true"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-3">
                  <h2 class="sub-header">Üretim Planlama</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Çocuk Köfte(Menü)</th>
                          <th>90 GR(Adet)</th>
                          <th>140 GR(Adet)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="GelecekGunYapilacak.Cocuk"
                              readonly="true"
                            />
                          </td>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="GelecekGunYapilacak.DoksanGr"
                              readonly="true"
                            />
                          </td>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="GelecekGunYapilacak.YuzKirkGr"
                              readonly="true"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="SosluTavuk">
              <div class="row">
                <div class="col-3">
                  <h2 class="sub-header">Dağıtılacak Tavuk</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Adet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="DagitalacakTavuk.Fileto"
                              readonly="true"
                              min="0"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-3">
                  <h2 class="sub-header">Eldeki Stok</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Adet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              min="0"
                              v-model="GunIcinDeYapilacakTavuk.Fileto"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-3">
                  <h2 class="sub-header">Kalan Stok</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Adet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              min="0"
                              v-model="ErtesiGuneKalanTavuk.Fileto"
                              readonly="true"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-3">
                  <h2 class="sub-header">Üretim Planlama</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Adet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              min="0"
                              v-model="GelecekGunYapilacakTavuk.Fileto"
                              readonly="true"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="TavukKofte">
              <div class="row">
                <div class="col-3">
                  <h2 class="sub-header">Dağıtılacak Tavuk</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Adet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              v-model="DagitalacakTavuk.Kofte"
                              readonly="true"
                              min="0"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-3">
                  <h2 class="sub-header">Eldeki Stok</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Adet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              min="0"
                              v-model="GunIcinDeYapilacakTavuk.Kofte"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-3">
                  <h2 class="sub-header">Kalan Stok</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Adet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              min="0"
                              v-model="ErtesiGuneKalanTavuk.Kofte"
                              readonly="true"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-3">
                  <h2 class="sub-header">Üretim Planlama</h2>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Adet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="col-md-1">
                            <input
                              type="number"
                              class="form-control"
                              min="0"
                              v-model="GelecekGunYapilacakTavuk.Kofte"
                              readonly="true"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <button type="button" class="btn btn-primary btn-lg btn-block" @click="New">Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Service from "../../Service";

export default {
  data() {
    return {
      GetDate: "",
      tarih : '',
      GetDateFormat: "",
      GunIcinDeYapilacakEt: {
        Cocuk: 0,
        DoksanGr: 0,
        YuzKirkGr: 0
      },
      GunIcinDeYapilacakTavuk: {
        Kofte: 0,
        Fileto: 0
      },
      DagitalacakEt: {
        Cocuk: 0,
        DoksanGr: 0,
        YuzKirkGr: 0
      },
      DagitalacakTavuk: {
        Kofte: 0,
        Fileto: 0
      },
      ErtesiGuneKalanlar: {
        Cocuk: 0,
        DoksanGr: 0,
        YuzKirkGr: 0
      },
      ErtesiGuneKalanTavuk: {
        Kofte: 0,
        Fileto: 0
      },
      ikiGunOnceYapilanlar: {
        Et: {
          DoksanGr: {
            Miktar: 0
          },
          YuzKirkGr: {
            Miktar: 0
          },
          CocukKofte: {
            Miktar: 0
          }
        },
        TavukKofte: {
          Miktar: 0
        },
        TavukFileto: {
          Miktar: 0
        }
      },
      GelecekGunYapilacak: {
        Cocuk: 0,
        DoksanGr: 0,
        YuzKirkGr: 0
      },
      GelecekGunYapilacakTavuk: {
        Kofte: 0,
        Fileto: 0
      },
      SubeKalanlar: {
        Et: {
          DoksanGr: {
            Miktar: 0
          },
          YuzKirkGr: {
            Miktar: 0
          },
          CocukKofte: {
            Miktar: 0
          }
        },
        TavukKofte: {
          Miktar: 0
        },
        TavukFileto: {
          Miktar: 0
        }
      },
      SubeBirGunOnceKalanlar: {
        Et: {
          DoksanGr: {
            Miktar: 0
          },
          YuzKirkGr: {
            Miktar: 0
          },
          CocukKofte: {
            Miktar: 0
          }
        },
        TavukKofte: {
          Miktar: 0
        },
        TavukFileto: {
          Miktar: 0
        }
      },
      SubeIhtiyac: {
        Et: {
          DoksanGr: {
            Miktar: 0
          },
          YuzKirkGr: {
            Miktar: 0
          },
          CocukKofte: {
            Miktar: 0
          }
        },
        TavukKofte: {
          Miktar: 0
        },
        TavukFileto: {
          Miktar: 0
        }
      },
      SubeBirGunOnceIhtiyac: {
        Et: {
          DoksanGr: {
            Miktar: 0
          },
          YuzKirkGr: {
            Miktar: 0
          },
          CocukKofte: {
            Miktar: 0
          }
        },
        TavukKofte: {
          Miktar: 0
        },
        TavukFileto: {
          Miktar: 0
        }
      },

      UserInfo: [],
      ikiGunOnceTarih: "",
      ikiGunOnceTarihAdi: "",
      birGünOnceTarih: "",
      birGünOnceTarihFormat: ""
    };
  },
  async mounted() {
    let response = await Service.save("users/login/validToken/", {
      token: localStorage.getItem("TOKEN")
    });

    this.UserInfo = response.data.data[0];
    
  },
  methods: {
    async New() {
      await Service.save("GunIcindeYapilan", {
        data: this.GunIcinDeYapilacakEt,
        subeId: this.UserInfo.subeId
      });
    },
    async GetReport() {
      this.GetDate = moment(this.tarih).format("M.D.Y");
      this.GetDateFormat = moment(this.tarih)
        .subtract(1, "month")
        .startOf("month")
        .format("MMMM");
      moment.locale("tr");
      let weekDayName = moment(this.tarih).format("dddd");
      ///
      this.ikiGunOnceTarih = moment(this.tarih)
        .add(-2, "days")
        .format("YYYY.MM.DD");
      this.birGünOnceTarih = moment(this.tarih)
        .add(-1, "days")
        .format("YYYY.MM.DD");
      this.birGünOnceTarihFormat = moment(this.tarih)
        .add(-1, "days")
        .format("dddd");
      //Kalan Stoklar
      //iki gün öncesini alıcaz

      let GunIcindeYapilanResult = await Service.list(
        "/GunIcindeYapilan/Report");
     
      GunIcindeYapilanResult.data.forEach(item => {
        if (
          item.urunAdi === "CocukKofte" &&
          moment(item.created_at).format("YYYY.MM.DD") === this.ikiGunOnceTarih
        ) {
          this.ikiGunOnceYapilanlar.Et.CocukKofte.Miktar = item.miktar;
        }
        if (
          item.urunAdi === "DoksanGr" &&
          moment(item.created_at).format("YYYY.MM.DD") ===
            moment(this.tarih).format("YYYY.MM.DD")
        ) {
          this.ikiGunOnceYapilanlar.Et.DoksanGr.Miktar = item.miktar;
        }

        if (
          item.urunAdi === "YuzKirkGr" &&
          moment(item.created_at).format("YYYY.MM.DD") ===
            moment(this.tarih).format("YYYY.MM.DD")
        ) {
          this.ikiGunOnceYapilanlar.Et.YuzKirkGr.Miktar = item.miktar;
        }
      });




      //bir gün önce ŞubeKalan-Şubeİhtiyaç
      let SubeKalanBirGunOnceResult = await Service.save(
        "/SubeKalan/SubeKalanReport",
        {
          Gun: this.birGünOnceTarih
        }
      );
      SubeKalanBirGunOnceResult.forEach(item => {
        //tek tek kalanları ve ihtiyaçları çekip değişkenlere yerleştir
        if (
          item.urunAdi === "CocukKofte" &&
          moment(item.created_at).format("YYYY.MM.DD") === this.birGünOnceTarih
        ) {
          this.SubeBirGunOnceKalanlar.Et.CocukKofte.Miktar = item.miktar;
        }
        if (
          item.urunAdi === "DoksanGr" &&
          moment(item.created_at).format("YYYY.MM.DD") === this.birGünOnceTarih
        ) {
          this.SubeBirGunOnceKalanlar.Et.DoksanGr.Miktar = item.miktar;
        }

        if (
          item.urunAdi === "YuzKirkGr" &&
          moment(item.created_at).format("YYYY.MM.DD") === this.birGünOnceTarih
        ) {
          this.SubeBirGunOnceKalanlar.Et.YuzKirkGr.Miktar = item.miktar;
        }

        if (
          item.urunAdi === "TavukKofte" &&
          moment(item.created_at).format("YYYY.MM.DD") === this.birGünOnceTarih
        ) {
          this.SubeBirGunOnceKalanlar.TavukKofte.Miktar = item.miktar;
        }
        if (
          item.urunAdi === "TavukFileto" &&
          moment(item.created_at).format("YYYY.MM.DD") === this.birGünOnceTarih
        ) {
          this.SubeBirGunOnceKalanlar.TavukFileto.Miktar = item.miktar;
        }
      });

      let SubeBirGunOnceIhtiyac = await Service.save(
        "/SubeIhtiyac/SubeIhtiyacReport",
        {
          Gun: weekDayName
        }
      );

      SubeBirGunOnceIhtiyac.forEach(item => {
        if (item._id === "CocukKofte") {
          this.SubeBirGunOnceIhtiyac.Et.CocukKofte.Miktar = item.miktar;
        }
        if (item._id === "DoksanGr") {
          this.SubeBirGunOnceIhtiyac.Et.DoksanGr.Miktar = item.miktar;
        }

        if (item._id === "YuzKirkGr") {
          this.SubeBirGunOnceIhtiyac.Et.YuzKirkGr.Miktar = item.miktar;
        }

        if (item._id === "TavukKofte") {
          this.SubeBirGunOnceIhtiyac.TavukKofte.Miktar = item.miktar;
        }

        if (item._id === "TavukFileto") {
          this.SubeBirGunOnceIhtiyac.TavukFileto.Miktar = item.miktar;
        }
      });

      let SubeKalanResult = await Service.save("/SubeKalan/SubeKalanReport", {
        Gun: moment(this.tarih).format('YYYY.MM.DD')
      });
      SubeKalanResult.forEach(item => {
        //tek tek kalanları ve ihtiyaçları çekip değişkenlere yerleştir
        if (
          item.urunAdi === "CocukKofte" &&
          moment(item.created_at).format("YYYY.MM.DD") ===
            moment(this.tarih).format("YYYY.MM.DD")
        ) {
          this.SubeKalanlar.Et.CocukKofte.Miktar = item.miktar;
        }
        if (
          item.urunAdi === "DoksanGr" &&
          moment(item.created_at).format("YYYY.MM.DD") ===
            moment(this.tarih).format("YYYY.MM.DD")
        ) {
          this.SubeKalanlar.Et.DoksanGr.Miktar = item.miktar;
        }
        if (
          item.urunAdi === "YuzKirkGr" &&
          moment(item.created_at).format("YYYY.MM.DD") ===
            moment(this.tarih).format("YYYY.MM.DD")
        ) {
          this.SubeKalanlar.Et.YuzKirkGr.Miktar = item.miktar;
        }
        if (
          item.urunAdi === "TavukKofte" &&
          moment(item.created_at).format("YYYY.MM.DD") ===
            moment(this.tarih).format("YYYY.MM.DD")
        ) {
          this.SubeKalanlar.TavukKofte.Miktar = item.miktar;
        }
        if (
          item.urunAdi === "TavukFileto" &&
          moment(item.created_at).format("YYYY.MM.DD") ===
            moment(this.tarih).format("YYYY.MM.DD")
        ) {
          this.SubeKalanlar.TavukFileto.Miktar = item.miktar;
        }
      });

      let SubeIhtiyac = await Service.save("/SubeIhtiyac/SubeIhtiyacReport", {
        Gun: weekDayName
      });
      SubeIhtiyac.forEach(item => {
        if (item._id === "CocukKofte") {
          this.SubeIhtiyac.Et.CocukKofte.Miktar = item.miktar;
        }
        if (item._id === "DoksanGr") {
          this.SubeIhtiyac.Et.DoksanGr.Miktar = item.miktar;
        }

        if (item._id === "YuzKirkGr") {
          this.SubeIhtiyac.Et.YuzKirkGr.Miktar = item.miktar;
        }
        if (item._id === "TavukKofte") {
          this.SubeIhtiyac.TavukKofte.Miktar = item.miktar;
        }
        if (item._id === "TavukFileto") {
          this.SubeIhtiyac.TavukFileto.Miktar = item.miktar;
        }
      });
      //kalan ihtiyacı al hesaplamalara başla
      //TAVUK
      this.DagitalacakTavuk.Kofte =
        this.SubeIhtiyac.TavukKofte.Miktar -
        this.SubeKalanlar.TavukKofte.Miktar;

      this.DagitalacakTavuk.Fileto =
        this.SubeIhtiyac.TavukFileto.Miktar -
        this.SubeKalanlar.TavukFileto.Miktar;
      //ETLER

      this.DagitalacakEt.Cocuk =
        this.SubeIhtiyac.Et.CocukKofte.Miktar -
        this.SubeKalanlar.Et.CocukKofte.Miktar;
         // eslint-disable-next-line no-console
      console.log(this.SubeIhtiyac.Et.DoksanGr.Miktar,this.SubeKalanlar.Et.DoksanGr.Miktar)
      this.DagitalacakEt.DoksanGr =
        this.SubeIhtiyac.Et.DoksanGr.Miktar -
        this.SubeKalanlar.Et.DoksanGr.Miktar;

      this.DagitalacakEt.YuzKirkGr =
        this.SubeIhtiyac.Et.YuzKirkGr.Miktar -
        this.SubeKalanlar.Et.YuzKirkGr.Miktar;

      this.ErtesiGuneKalanTavuk.Kofte =
        this.ikiGunOnceYapilanlar.TavukKofte.Miktar -
        (this.SubeBirGunOnceIhtiyac.TavukKofte.Miktar -
          this.SubeBirGunOnceKalanlar.TavukKofte.Miktar);

      this.ErtesiGuneKalanTavuk.Fileto =
        this.ikiGunOnceYapilanlar.TavukFileto.Miktar -
        (this.SubeBirGunOnceIhtiyac.TavukFileto.Miktar -
          this.SubeBirGunOnceKalanlar.TavukFileto.Miktar);

      this.ErtesiGuneKalanlar.Cocuk =
        this.ikiGunOnceYapilanlar.Et.CocukKofte.Miktar -
        (this.SubeBirGunOnceIhtiyac.Et.CocukKofte.Miktar -
          this.SubeBirGunOnceKalanlar.Et.CocukKofte.Miktar);

      this.ErtesiGuneKalanlar.DoksanGr =
        this.ikiGunOnceYapilanlar.Et.DoksanGr.Miktar -
        (this.SubeBirGunOnceIhtiyac.Et.DoksanGr.Miktar -
          this.SubeBirGunOnceKalanlar.Et.DoksanGr.Miktar);
     
      this.ErtesiGuneKalanlar.YuzKirkGr =
        this.ikiGunOnceYapilanlar.Et.YuzKirkGr.Miktar -
        (this.SubeBirGunOnceIhtiyac.Et.YuzKirkGr.Miktar -
          this.SubeBirGunOnceKalanlar.Et.YuzKirkGr.Miktar);

      this.GelecekGunYapilacakTavuk.Kofte =
        this.DagitalacakTavuk.Kofte - this.ErtesiGuneKalanTavuk.Kofte;
      this.GelecekGunYapilacakTavuk.Fileto =
        this.DagitalacakTavuk.Fileto - this.ErtesiGuneKalanTavuk.Fileto;

      this.GelecekGunYapilacak.Cocuk =
        this.DagitalacakEt.Cocuk - this.ErtesiGuneKalanlar.Cocuk;
      this.GelecekGunYapilacak.DoksanGr =
        this.DagitalacakEt.DoksanGr - this.ErtesiGuneKalanlar.DoksanGr;
      this.GelecekGunYapilacak.YuzKirkGr =
        this.DagitalacakEt.YuzKirkGr - this.ErtesiGuneKalanlar.YuzKirkGr;
    },
    async Get() {
      //SIFIRLAMA
    },
    async DeleteModal() {},
    async Delete() {}
  }
};
</script>

