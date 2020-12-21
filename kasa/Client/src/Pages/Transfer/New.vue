<template>
  <div>
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Sipariş</span> - Sipariş
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
            <a href="/Sube" class="breadcrumb-item">Sipariş</a>
          </div>

          <a href="#" class="header-elements-toggle text-default d-md-none">
            <i class="icon-more"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="card">
        <div class="col-lg-12">
          <div class="card shadow mb-4">
            <div class="card-header py-3"></div>
            <div class="card-body">
              <input type="text" class="form-control" placeholder="Arama.." v-model="SearchQuery" />
              <div class="form-group">
                <label>Hede Şube :</label>

                <select class="form-control" v-model="hedefSube">
                  <option
                    v-for="item in subeList"
                    :key="item._id"
                    v-bind:value="item.value"
                  >{{item.text}}</option>
                </select>
              </div>

              
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="OnayForm()"
                data-toggle="modal"
                data-target="#onay"
              >Sepete Onayla</button>

              <button
                type="button"
                class="btn btn-primary"
                style="float:right"
                v-on:click="addSepet()"
              >Sepete Ekle</button>
              <br/>
              <br/>
              <table id="transferTable" class="table datatable-columns">
                <thead>
                  <tr>
                    <th>Ürün Adı</th>
                    <th>Birim</th>
                    <th>Miktar</th>
                    <th>Açıklama</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="items in filterTable" :key="items.IND">
                    <td>{{items.MALINCINSI}}</td>
                    <td>{{items.BIRIMADI}}</td>
                    <td>
                      <input type="number" class="form-control" v-model="items.MIKTAR" />
                    </td>
                    <td>
                      <input type="text" class="form-control" v-model="items.ACIKLAMA" />
                    </td>
                  </tr>
                </tbody>
              </table>


              <div class="modal" tabindex="-1" role="dialog" id="onay">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <div>
                        <table class="table">
                          <thead>
                            <th>Ürün Adı</th>
                            <th>Miktar</th>
                            <th>Açıklama</th>
                            <th>Çıkar</th>
                          </thead>
                          <tbody>
                            <tr v-for="Sepet in Sepet" :key="Sepet.STOKNO">
                              <td>{{Sepet.MALINCINSI}}</td>
                              <td>
                                <input type="number" class="form-control" v-model="Sepet.MIKTAR" />
                              </td>
                              <td>
                                <input type="text" class="form-control" v-model="Sepet.ACIKLAMA" />
                              </td>
                              <td>
                                <button class="btn btn-danger" @click="SplitStok(Sepet)">Çıkar</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <button
                      class="btn btn-primary"
                      v-on:click="SetOnay()"
                      data-dismiss="modal"
                    >Onayla</button>
                  </div>
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
const items = [];
import Services from "../../Services/Vega";
import SubeService from "../../Services/Sube";
import Vue from "vue";
import SepetService from "../../Services/Transfer";
import * as moment from "moment";
import UserService from "../../Services/Login";
export default {
  data() {
    return {
      subeList: [],
      data: [],
      Sepet: [],
      SearchQuery: "",
      items: [],
      hedefSube: [],
      SelectStok: [],
      fields: [
        {
          key: "MALINCINSI",
          label: "Adı",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "BIRIMADI",
          label: "Birim",
          sortable: true,
          sortDirection: "desc"
        },

        { key: "aciklama", label: "Açıklama" },
        { key: "sepet", label: "Miktar" }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      modalInfo: { title: "", content: "" },
      miktar: 0
    };
  },
  async mounted() {
    const subeler = await SubeService.list();

    let users = await UserService.ValidToken(localStorage.getItem("TOKEN"));

    subeler.data.forEach(sube => {
      var user = users.data.data[0];
      if (sube._id !== user.subeId) {
        this.subeList.push({ text: sube.name, value: sube._id });
      }
    });

    const result = await Services.GetStokList();
    var dataList = result;

    dataList.forEach(element => {
      this.items.push({
        STOKKODU: element.STOKKODU,
        MALINCINSI: element.MALINCINSI,
        BIRIMADI: element.BIRIMADI,
        MIKTAR: 0,
        STOKNO: element.STOKNO,
        BIRIMNO: element.BIRIMNO,
        ACIKLAMA: element.ACIKLAMA,
        ONAYACIKLAMA: element.ONAYACIKLAMA,
        IND : element.IND
      });
    });
  },
  computed: {
    filterTable() {
      return this.items.filter(items => {
        return items.MALINCINSI.toLowerCase().match(
          this.SearchQuery.toLowerCase()
        );
      });
    }
  },
  methods: {
    AddStokForm(data) {
      this.SelectStok = [];
      this.SelectStok.push({ data });
      this.$refs.newOrderForm.show();
    },
    SetMiktar(miktar) {
      if (miktar === 0) {
        Vue.notify({
          group: "foo",
          title: "Sepet",
          type: "error",
          text: "Miktar Sıfır Olamaz."
        });
      }
      if (miktar < 0) {
        Vue.notify({
          group: "foo",
          title: "Sepet",
          type: "error",
          text: "Miktar Sıfırdan Küçük Olamaz."
        });
      }
      this.SelectStok[0]["data"].MIKTAR = miktar;
      if (this.SelectStok[0]["data"].MIKTAR > 0) {
        this.AddSepetStok(this.SelectStok[0]["data"]);
        Vue.notify({
          group: "foo",
          title: "Sepet",
          type: "success",
          text: "Ürün Sepete Eklendi"
        });
        this.miktar = 0;
        this.$refs.newOrderForm.hide();
      }
    },
    addSepet() {
      this.items.forEach(items => {
        if (items.MIKTAR > 0) {
          this.Sepet.push({
            MALINCINSI: items.MALINCINSI,
            MIKTAR: items.MIKTAR,
            STOKNO: items.STOKNO,
            birimNo: items.BIRIMNO,
            BIRIMADI: items.BIRIMADI,
            ACIKLAMA: items.ACIKLAMA,
            ONAYACIKLAMA: items.ONAYACIKLAMA
          });
          Vue.notify({
            group: "foo",
            title: "Sepet",
            type: "success",
            text: "Sepet Ekleme Başarılı.."
          });
        }
      });
    },
    async OnayForm() {
      this.$refs.OnayForm.show();
    },
    async SetOnay() {
      if (this.hedefSube.length === 0) {
        Vue.notify({
          group: "foo",
          title: "Sepet",
          type: "error",
          text: "Hedef Şube Seçimi Zorunludur."
        });
      }
      if (this.Sepet === undefined) {
        Vue.notify({
          group: "foo",
          title: "Sepet",
          type: "error",
          text: "Sepet Boş Olamaz.."
        });
      }
      let users = await UserService.ValidToken(localStorage.getItem("TOKEN"));
      // eslint-disable-next-line no-console
      console.log(users);
      var user = users.data.data[0];
      var subeId = user.subeId;
      this.Sepet.forEach(async sepet => {
        var sepetData = {
          hedefSube: this.hedefSube,
          kaynakSube: subeId,
          userId: user._id,
          stokNo: sepet.STOKNO,
          birimNo: sepet.birimNo,
          miktar: sepet.MIKTAR,
          status: 0,
          created_at: moment().format("YYYY.MM.DD"),
          birimAdi: sepet.BIRIMADI,
          stokKodu: sepet.STOKKODU,
          malinCinsi: sepet.MALINCINSI,
          aciklama: sepet.ACIKLAMA,
          onayAciklama: sepet.onayAciklama
        };
        let result = await SepetService.save(sepetData);
        if (result.success) {
          setInterval(() => {
            window.location.reload();
          }, 3000);
        }
      });
      // SEPETI ONAYLA
    },
    async SplitStok(order) {
      this.Sepet.splice(this.Sepet.indexOf(order), 1);
    },
    async MiktarAzalt(order) {
      order.MIKTAR--;
    },
    async MiktarArtir(order) {
      order.MIKTAR++;
    }
  }
};
</script>
