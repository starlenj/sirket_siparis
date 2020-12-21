<template>
  <div>
    <div>
      <div class="page-header page-header-light">
        <div class="page-header-content header-elements-md-inline">
          <div class="page-title d-flex">
            <h4>
              <i class="icon-arrow-left52 mr-2"></i>
              <span class="font-weight-semibold">Kasa</span> - Kasa Raporu
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
              <a href="/Sube" class="breadcrumb-item">Kasa Raporu</a>
            </div>

            <a href="#" class="header-elements-toggle text-default d-md-none">
              <i class="icon-more"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="form-group">
          <label>Başlangıç Tarhi</label>
          <input type="date" class="form-control" v-model="startDate" />
        </div>
        <div class="form-group">
          <label>Bitiş Tarhi</label>
          <input type="date" class="form-control" v-model="endDate" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="button" @click="GetReport">Getir</button>
        </div>
        <div class="page has-sidebar-left bg-light height-full">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" v-for="items in SubeList" :key="items._id">
              <a
                class="nav-link"
                v-bind:id="items.name.toLowerCase()"
                data-toggle="tab"
                v-bind:href="'#'+items.name.toLowerCase()"
                role="tab"
                v-bind:aria-controls="items.name.toLowerCase()"
                >{{items.name}}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="geneltoplam"
                data-toggle="tab"
                href="#genelToplam"
                role="tab"
                aria-controls="umitkoy"
              >Genel Toplam</a>
            </li>
          </ul>
          <div class="tab-content" id="myTab">
            <div
              v-for="items in SubeList"
              :key="items._id"
              class="tab-pane fade show"
              v-bind:id="items.name.toLowerCase()"
              role="tabpanel"
              v-bind:aria-labelledby="items.name.toLowerCase()"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Arcadium</h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade show"
              id="armada"
              role="tabpanel"
              aria-labelledby="geneltoplam"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Armada</h1>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="genelToplam"
              role="tabpanel"
              aria-labelledby="geneltoplam"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Genel Toplam</h1>
                    <genel-kasa v-bind:GenelData="GenelKasa" ref="GenelKasa" />
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
import Service from "../../Service";
import GenelKasa from "../../components/KasaDetail/GenelToplam";
import { KasaModel, DefaultKasa } from "../../Helpers/KasaSubeModel";
import { GetSefimReport, GetKasaReport } from "../../Helpers/GetReportTools";
export default {
  components: {
   GenelKasa,
  },
  data() {
    return {
      SubeList :  [],
      Bahceli: {
        ...KasaModel,
      },
      GenelKasa: {
        ...DefaultKasa,
      },
      starDate: "",
      endDate: "",
    };
  },
  methods: {
    async GetReport() {

     //BAHÇELİ KASA REPORT
      let BahceliReportResult = await GetKasaReport(
        this.Bahceli.SubeId._id,
        this.startDate,
        this.endDate
      );

      //BAHÇELİ ŞEFİM CİRO
      let BahceliSefimKasa = await GetSefimReport(
        this.Bahceli.SubeId,
        this.startDate,
        this.endDate
      );
      this.Bahceli.programData = BahceliSefimKasa;
      this.Bahceli.data = BahceliReportResult;
      this.$refs.BahceliKasa.GetKasa();
      this.$emit("BahceliData", this.Bahceli);
   },
  },
  async mounted(){
    let SubeListData  = await Service.list("sube");
    this.SubeList = SubeListData.data
  }
};
</script>
