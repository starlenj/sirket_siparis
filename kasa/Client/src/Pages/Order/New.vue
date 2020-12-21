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
        <div class="card-header header-elements-inline">
          <h5 class="card-title">Sipariş Durum</h5>
        </div>
        <div class="card-body b-b">
          <input type="text" class="form-control" placeholder="Arama.." v-model="SearchQuery" />
         <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#onay"
              v-on:click="OnayForm()"
            >Sepete Onayla</button>
         
          <button
            type="button"
            class="btn btn-primary"
            style="float:right"
            v-on:click="addSepet()"
          >Sepete Ekle</button><br/><br/>
       
          <table class="table" id="table">
            <thead>
              <th>Ürün Adı</th>
              <th>Birim</th>
              <th>Miktar</th>
              <th>Açıklama</th>
            </thead>
            <tbody>
              <tr v-for="stoklar in filterTable" :key="stoklar.IND">
                <td>{{stoklar.MALINCINSI}}</td>
                <td>{{stoklar.BIRIMADI}}</td>
                <td>
                  <input type="number" class="form-control" v-model="stoklar.MIKTAR" />
                </td>
                <td>
                  <input type="text" class="form-control" v-model="stoklar.ACIKLAMA" />
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
                <button class="btn btn-primary" v-on:click="SetOnay()"    data-dismiss="modal">Onayla</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Services from "../../Services/Vega";
import Vue from "vue";
import SepetService from "../../Services/Sepet";
import moment from "moment";
import UserService from '../../Services/Login'
export default {
  data() {
    return {
      Sepet: [],
      title: "Yeni Sipariş",
      data: [],
      SelectStok: [],
      SearchQuery: "",
      currentPage: 1,
      total: 10
    };
  },
  async mounted() {
    this.getStokList();
  },
  methods: {
    getStokList() {
      this.data = [];
      Services.GetStokList().then(dataList => {
        dataList.forEach(element => {
          this.data.push({
            STOKKODU: element.STOKKODU,
            MALINCINSI: element.MALINCINSI,
            BIRIMADI: element.BIRIMADI,
            MIKTAR: 0,
            STOKNO: element.STOKNO,
            BIRIMNO: element.BIRIMNO,
            ACIKLAMA: element.ACIKLAMA
          });
        });
      });
    },
    addSepet() {
      this.data.forEach(items => {
        if (items.MIKTAR > 0) {
          this.Sepet.push({
            MALINCINSI: items.MALINCINSI,
            MIKTAR: items.MIKTAR,
            STOKNO: items.STOKNO,
            birimNo: items.BIRIMNO,
            BIRIMADI: items.BIRIMADI,
            ACIKLAMA: items.ACIKLAMA
          });
          Vue.notify({
            group: "foo",
            title: "Sepet",
            type: "success",
            text: "Sepet Ekleme Başarılı.."
          });
        }
      });
      this.getStokList();
    },

    async SetOnay() {
      if (this.Sepet === undefined) {
        Vue.notify({
          group: "foo",
          title: "Sepet",
          type: "error",
          text: "Sepet Boş Olamaz.."
        });
      }
    let users = await UserService.ValidToken(localStorage.getItem('TOKEN'))
      // eslint-disable-next-line no-console
          console.log(users)
          var user = users.data.data[0];
          
          this.Sepet.forEach(async sepet => {
            var subeId = user.subeId;
            var sepetData = {
              subeId: subeId,
              userId: user._id,
              stokNo: sepet.STOKNO,
              birimNo: sepet.birimNo,
              miktar: sepet.MIKTAR,
              aciklama: sepet.ACIKLAMA,
              status: 0,
              created_at: moment().format("YYYY.MM.DD"),
              birimAdi: sepet.BIRIMADI,
              stokKodu: sepet.STOKKODU,
              malinCinsi: sepet.MALINCINSI
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

    async OnayForm() {
      this.$refs.OnayForm.show();
    },

    onChangePage(filterTable) {
      // update page of items
      this.filterTable = filterTable;
    }
  },
  computed: {
    filterTable() {
      return this.data.filter(items => {
        return items.MALINCINSI.toLowerCase().match(
          this.SearchQuery.toLowerCase()
        );
      });
    }
  }
};
</script>
