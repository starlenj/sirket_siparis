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

      </div>

      <div
        class="breadcrumb-line breadcrumb-line-light header-elements-md-inline"
      >
        <div class="d-flex">
          <div class="breadcrumb">
            <a href="/" class="breadcrumb-item">
              <i class="icon-home2 mr-2"></i> Anasayfa
            </a>
            <a href="/Uretim/SubeKalan" class="breadcrumb-item">Şube Kalan</a>
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
          <h5 class="card-title">Şube Kalan</h5>
        </div>

        <div class="card-body">
          <br />
          <br />
          <table style="width : 100%">
            <thead>
              <tr>
                <th></th>

                <th>90 GR (Küvet) 64 AD</th>
                <th>140 GR (Küvet) 42 AD</th>
                <th>T.Köfte Buyuk (Küvet) 50 AD</th>
                <th>T.Köfte Kucuk (Küvet) 50 AD</th>
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
                      v-model="FormModal.KucukTavukKofte.Pazartesi.Miktar"
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
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            @click="New"
          >
            Kaydet
          </button>
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
        dbname: "",
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
            Tarih: "",
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
        TavukKofte: {
          SubeId: this.SelectData,
          Pazartesi: {
            Miktar: 0,
            Gun: "Pazartesi",
            UrunAdi: "TavukKofte",
          },
          Sali: {
            Miktar: 0,
            Gun: "Sali",
            UrunAdi: "TavukKofte",
          },
          Carsamba: {
            Miktar: 0,
            Gun: "Carsamba",
            UrunAdi: "TavukKofte",
          },
          Persembe: {
            Miktar: 0,
            Gun: "Persembe",
            UrunAdi: "TavukKofte",
          },
          Cuma: {
            Miktar: 0,
            Gun: "Cuma",
            UrunAdi: "TavukKofte",
          },
          Cumartesi: {
            Miktar: 0,
            Gun: "Cumartesi",
            UrunAdi: "TavukKofte",
          },
          Pazar: {
            Miktar: 0,
            Gun: "Pazar",
            UrunAdi: "TavukKofte",
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
    let response = await Service.save("users/login/validToken/", {
      token: localStorage.getItem("TOKEN"),
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
    this.FormModal.KucukTavukKofte.Pazartesi.Tarih =
      moment().format("YYYY.MM.DD");
  },
  methods: {
    async New() {
      //önce çocuk köfte
      // eslint-disable-next-line no-console
      await Service.save("/SubeKalan", {
        data: this.FormModal.CocukKofte,
        SubeId: this.UserInfo.subeId,
      });

      await Service.save("/SubeKalan", {
        data: this.FormModal.DoksanGr,
        SubeId: this.UserInfo.subeId,
      });
      await Service.save("/SubeKalan", {
        data: this.FormModal.YuzKirkGr,
        SubeId: this.UserInfo.subeId,
      });
      await Service.save("/SubeKalan", {
        data: this.FormModal.TavukKofte,
        SubeId: this.UserInfo.subeId,
      });
      await Service.save("/SubeKalan", {
        data: this.FormModal.TavukFileto,
        SubeId: this.UserInfo.subeId,
      });

      await Service.save("/SubeKalan", {
        data: this.FormModal.KucukTavukKofte,
        SubeId: this.UserInfo.subeId,
      });
      this.FormModal.CocukKofte.Pazartesi.Miktar = 0;

      this.FormModal.DoksanGr.Pazartesi.Miktar = 0;

      this.FormModal.YuzKirkGr.Pazartesi.Miktar = 0;

      this.FormModal.TavukKofte.Pazartesi.Miktar = 0;

      this.FormModal.TavukFileto.Pazartesi.Miktar = 0;

      this.FormModal.KucukTavukKofte.Pazartesi.Miktar = 0;
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
    },
  },
};
</script>
