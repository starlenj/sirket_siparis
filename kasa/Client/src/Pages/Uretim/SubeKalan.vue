<template>
  <div>
    <!-- Page header -->
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Üretim</span> - Şube Kalan
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
            <a href="/Uretim/Sube" class="breadcrumb-item">Şube İhtiyaç</a>
            <a href="/Uretim/SubeKalan" class="breadcrumb-item">Şube Kalan</a>
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
          <h5 class="card-title">Şube Kalan</h5>
        </div>

        <div class="card-body">
          <br />
          <br />
          <table>
            <thead>
              <tr>
                <th></th>
               
                <th>90 GR (Küvet) 64 AD</th>
                <th>140 GR (Küvet) 42 AD</th>
                <th>T.Köfte (Küvet) 50 AD</th>
                <th>T.Fleto (Küvet) 10 KG</th>
                 <th>Çocuk Köfte (Menü)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
           
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
            </tbody>
          </table>
          <br />
          <button type="button" class="btn btn-primary btn-lg btn-block" @click="New">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../Service";
import moment from "moment";
export default {
  data() {
    return {
      UserInfo: [],
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
      FormModal: {
        CocukKofte: {
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "CocukKofte",
            Tarih: ""
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
    let response = await Service.save("users/login/validToken/", {
      token: localStorage.getItem("TOKEN")
    });

    this.UserInfo = response.data.data[0];
  // eslint-disable-next-line no-console
    console.log(this.UserInfo);
    this.FormModal.CocukKofte.Pazartesi.Miktar = 0;

    this.FormModal.DoksanGr.Pazartesi.Miktar = 0;

    this.FormModal.YuzKirkGr.Pazartesi.Miktar = 0;

    this.FormModal.TavukKofte.Pazartesi.Miktar = 0;

    this.FormModal.TavukFileto.Pazartesi.Miktar = 0;

    //END SIFIRLAMA
    this.FormModal.CocukKofte.Pazartesi.Tarih = moment().format("YYYY.MM.DD");
    this.FormModal.DoksanGr.Pazartesi.Tarih = moment().format("YYYY.MM.DD");
    this.FormModal.YuzKirkGr.Pazartesi.Tarih = moment().format("YYYY.MM.DD");
    this.FormModal.TavukKofte.Pazartesi.Tarih = moment().format("YYYY.MM.DD");
    this.FormModal.TavukFileto.Pazartesi.Tarih = moment().format("YYYY.MM.DD");
  
  },
  methods: {
    async New() {
      //önce çocuk köfte
      // eslint-disable-next-line no-console
      await Service.save("/SubeKalan", {
        data: this.FormModal.CocukKofte,
        SubeId: this.UserInfo.subeId
      });

      await Service.save("/SubeKalan", {
        data: this.FormModal.DoksanGr,
        SubeId: this.UserInfo.subeId
      });
      await Service.save("/SubeKalan", {
        data: this.FormModal.YuzKirkGr,
        SubeId: this.UserInfo.subeId
      });
      await Service.save("/SubeKalan", {
        data: this.FormModal.TavukKofte,
        SubeId: this.UserInfo.subeId
      });
      await Service.save("/SubeKalan", {
        data: this.FormModal.TavukFileto,
        SubeId: this.UserInfo.subeId
      });
      this.FormModal.CocukKofte.Pazartesi.Miktar = 0;

      this.FormModal.DoksanGr.Pazartesi.Miktar = 0;

      this.FormModal.YuzKirkGr.Pazartesi.Miktar = 0;

      this.FormModal.TavukKofte.Pazartesi.Miktar = 0;

      this.FormModal.TavukFileto.Pazartesi.Miktar = 0;
    },
    async Get() {
      //SIFIRLAMA
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
