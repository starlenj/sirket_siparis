<template>
  <div>
    <div>
      <div class="page-header page-header-light">
        <div class="page-header-content header-elements-md-inline">
          <div class="page-title d-flex">
            <h4>
              <i class="icon-arrow-left52 mr-2"></i>
              <span class="font-weight-semibold">Rapor</span> - Urun bazli satis
              Raporu
            </h4>
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

        <div
          class="tab-pane fade show active"
          id="arcadium"
          role="tabpanel"
          aria-labelledby="arcadium-tab"
        >
          <div class="content">
            <div class="card">
              <div class="card-body b-b"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../Service";

import { UrunBazliSatisModel } from "../../Helpers/KasaSubeModel";
import { GetUrunBazliSatis } from "../../Helpers/ReportTools";
export default {
  components: {},
  data() {
    return {
      ReportData: [],
      startDate: "",
      endDate: "",
      Armada: {
        ...UrunBazliSatisModel,
      },
      Umitkoy: {
        ...UrunBazliSatisModel,
      },
      Ankamall: {
        ...UrunBazliSatisModel,
      },
      Bahceli: {
        ...UrunBazliSatisModel,
      },
      Bilkent: {
        ...UrunBazliSatisModel,
      },
      Gordion: {
        ...UrunBazliSatisModel,
      },
      Cepa: {
        ...UrunBazliSatisModel,
      },
      Kasmir: {
        SubeId: "",
      },
      Atakule: {
        ...UrunBazliSatisModel,
      },
      Arcadium: {
        ...UrunBazliSatisModel,
      },
      Adana: {
        ...UrunBazliSatisModel,
      },
      Kayseri: {
        ...UrunBazliSatisModel,
      },
      Mersin: {
        ...UrunBazliSatisModel,
      },
      Batikent: {
        ...UrunBazliSatisModel,
      },
    };
  },
  methods: {
    async GetReport() {
      let subeList = await Service.list("sube");

      subeList.data.forEach((item) => {
        if (item.name === "ARMADA") {
          this.Armada.SubeId = item;
        } else if (item.name === "ANKAMALL") {
          this.Ankamall.SubeId = item;
        } else if (item.name === "ARCADIUM") {
          this.Arcadium.SubeId = item;
        } else if (item.name === "BAHCELIEVLER") {
          this.Bahceli.SubeId = item;
        } else if (item.name === "BILKENT") {
          this.Bilkent.SubeId = item;
        } else if (item.name === "GORDION") {
          this.Gordion.SubeId = item;
        } else if (item.name === "CEPA") {
          this.Cepa.SubeId = item;
        } else if (item.name === "KAŞMİR") {
          this.Kasmir.SubeId = item;
        } else if (item.name === "ATAKULE") {
          this.Atakule.SubeId = item;
        } else if (item.name === "ADANA") {
          this.Adana.SubeId = item;
        } else if (item.name === "MERSIN") {
          this.Mersin.SubeId = item;
        } else if (item.name === "Ümitköy") {
          this.Umitkoy.SubeId = item;
        } else if (item.name === "Batıkent") {
          this.Batikent.SubeId = item;
        }
      });
      //BAHÇELİ KASA REPORT
      let BahceliUrunBazliSatis = await GetUrunBazliSatis(
        this.Bahceli.SubeId,
        this.startDate,
        this.endDate
      );
      BahceliUrunBazliSatis = BahceliUrunBazliSatis.sort((a, b) => {
        if (a.ProductName < b.ProductName) {
          return -1;
        }
        if (a.ProductName > b.ProductName) {
          return 1;
        }
        return 0;
      });
      console.log(BahceliUrunBazliSatis);
    },
  },
};
</script>
