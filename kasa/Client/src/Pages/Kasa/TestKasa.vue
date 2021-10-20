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

        <div
          class="
            breadcrumb-line breadcrumb-line-light
            header-elements-md-inline
          "
        >
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
          <button class="btn btn-primary" type="button" @click="GetReport">
            Getir
          </button>
        </div>
        <div class="page has-sidebar-left bg-light height-full">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" v-for="item in SubeList" :key="item._id">
              <a
                class="nav-link"
                :id="item.name + '-tab'"
                data-toggle="tab"
                :href="'#' + item.name"
                role="tab"
                :aria-controls="item.name"
                >{{ item.name }}</a
              >
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              v-for="item in SubeList"
              :key="item._id"
              class="tab-pane fade show"
              :id="item.name"
              role="tabpanel"
              :aria-labelledby="item.name + '-tab'"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>{{ item.name }}</h1>
                    <bahceli-kasa @BahceliData="Bahceli" ref="BahceliKasa" />
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
import BahceliKasa from "../../components/KasaDetail/Bahceli";
import { KasaModel } from "../../Helpers/KasaSubeModel";
import { GetKasaReport, GetSefimReport } from "../../Helpers/GetReportTools";
export default {
  components: {
    BahceliKasa,
  },
  data() {
    return {
      tarih: "",
      SubeList: [],
      Test: [],
      subeData: {
        ARMADA: {
          ...KasaModel,
        },
        Ümitköy: {
          ...KasaModel,
        },
        ANKAMALL: {
          ...KasaModel,
        },
        BAHCELIEVLER: {
          ...KasaModel,
        },
        BILKENT: {
          ...KasaModel,
        },
        GORDION: {
          ...KasaModel,
        },
        CEPA: {
          ...KasaModel,
        },
        Kaşmir: {
          SubeId: "",
        },
        ATAKULE: {
          ...KasaModel,
        },
        ARCADIUM: {
          ...KasaModel,
        },
        Adana: {
          ...KasaModel,
        },
        MERSIN: {
          ...KasaModel,
        },
      },
      starDate: "",
      endDate: "",
    };
  },
  methods: {
    async GetReport() {
      var Subeler = await Service.list("sube");

      this.SubeList = Subeler.data;
      let data = { programData: [], data: [] };

      this.SubeList.forEach(async (Sube) => {
        data.data = await GetKasaReport(Sube._id, this.startDate, this.endDate);
        data.programData = await GetSefimReport(
          Sube,
          this.startDate,
          this.endDate
        );
        this.Test[Sube.name] = data;
        console.log(this.Test[Sube.name], Sube.name);
        this.$emit("BahceliData", this.Test[Sube.name]);
      });
    },
  },
};
</script>

