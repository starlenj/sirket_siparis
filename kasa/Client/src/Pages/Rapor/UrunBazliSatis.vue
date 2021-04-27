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
        <div class="form-group">
          
        </div>
        <div class="page has-sidebar-left bg-light height-full">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="arcadium-tab"
                data-toggle="tab"
                href="#arcadium"
                role="tab"
                aria-controls="arcadium"
              >Arcadium</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="gordion-tab"
                data-toggle="tab"
                href="#gordion"
                role="tab"
                aria-controls="gordion"
              >Gordion</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="armada-tab"
                data-toggle="tab"
                href="#armada"
                role="tab"
                aria-controls="armada"
              >Armada</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="bahceli-tab"
                data-toggle="tab"
                href="#bahceli"
                role="tab"
                aria-controls="bahceli"
              >Bahçelievler</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="bilkent-tab"
                data-toggle="tab"
                href="#bilkent"
                role="tab"
                aria-controls="bilkent"
              >Bilkent</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="ankamall-tab"
                data-toggle="tab"
                href="#ankamall"
                role="tab"
                aria-controls="ankamall"
              >Ankamall</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="atakule-tab"
                data-toggle="tab"
                href="#atakule"
                role="tab"
                aria-controls="atakule"
              >Atakule</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="cepa-tab"
                data-toggle="tab"
                href="#cepa"
                role="tab"
                aria-controls="cepa"
              >Cepa</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="adana-tab"
                data-toggle="tab"
                href="#adana"
                role="tab"
                aria-controls="adana"
              >Adana</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="mersin-tab"
                data-toggle="tab"
                href="#mersin"
                role="tab"
                aria-controls="mersin"
              >Mersin</a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                id="umitkoy-tab"
                data-toggle="tab"
                href="#umitkoy"
                role="tab"
                aria-controls="umitkoy"
              >Ümitköy</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="batikent-tab"
                data-toggle="tab"
                href="#batikent"
                role="tab"
                aria-controls="batikent"
              >Batıkent</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="arcadium"
              role="tabpanel"
              aria-labelledby="arcadium-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Arcadium</h1>
                    <arcadium-kasa v-bind:ArcadiumData="Arcadium" ref="ArcadiumKasa" />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade show"
              id="gordion"
              role="tabpanel"
              aria-labelledby="gordion-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Gordion</h1>
                    <gordion-kasa v-bind:GordionData="Gordion" ref="GordionKasa" />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="armada"
              role="tabpanel"
              aria-labelledby="armada-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Armada</h1>
                    <armada-kasa v-bind:ArmadaData="Armada" ref="ArmadaKasa" />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="bahceli"
              role="tabpanel"
              aria-labelledby="bahceli-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Bahçelievler</h1>
                    <bahceli-kasa v-bind:BahceliData="Bahceli" ref="BahceliKasa" />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="bilkent"
              role="tabpanel"
              aria-labelledby="bilkent-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Bilkent</h1>
                    <bilkent-kasa v-bind:BilkentData="Bilkent" ref="BilkentKasa" />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="ankamall"
              role="tabpanel"
              aria-labelledby="ankamall-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Ankamall</h1>
                    <ankamall-kasa v-bind:AnkamallData="Ankamall" ref="AnkamallKasa" />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="atakule"
              role="tabpanel"
              aria-labelledby="ankamall-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Atakule</h1>
                    <atakule-kasa v-bind:AtakuleData="Atakule" ref="AtakuleKasa" />
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade show" id="cepa" role="tabpanel" aria-labelledby="cepa-tab">
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Cepa</h1>
                    <cepa-kasa v-bind:CepaData="Cepa" ref="CepaKasa" />
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade show" id="adana" role="tabpanel" aria-labelledby="adana-tab">
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Adana</h1>
                    <adana-kasa v-bind:AdanaData="Adana" ref="AdanaKasa" />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="mersin"
              role="tabpanel"
              aria-labelledby="mersin-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Mersin</h1>
                    <mersin-kasa v-bind:MersinData="Mersin" ref="MersinKasa" />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade show"
              id="umitkoy"
              role="tabpanel"
              aria-labelledby="mersin-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Ümitköy</h1>
                    <umitkoy-kasa v-bind:UmitkoyData="Umitkoy" ref="UmitkoyKasa" />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade show"
              id="batikent"
              role="tabpanel"
              aria-labelledby="batikent-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Batıkent</h1>
                    <batikent-kasa v-bind:BatikentData="Batikent" ref="BatikentKasa" />
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

import { UrunBazliSatisModel } from "../../Helpers/KasaSubeModel";
import { GetUrunBazliSatis } from "../../Helpers/ReportTools";
import BahceliKasa from "../../components/UrunBazliSatis/Bahceli.vue";
import ArcadiumKasa from "../../components/UrunBazliSatis/Arcadium.vue";
import GordionKasa from "../../components/UrunBazliSatis/Gordion.vue";
import BilkentKasa from "../../components/UrunBazliSatis/Bilkent.vue";
import ArmadaKasa from "../../components/UrunBazliSatis/Armada.vue";
import AnkamallKasa from "../../components/UrunBazliSatis/Ankamall.vue";
import AtakuleKasa from "../../components/UrunBazliSatis/Atakule.vue";
import CepaKasa from "../../components/UrunBazliSatis/Cepa.vue";
import AdanaKasa from "../../components/UrunBazliSatis/Adana.vue";
import MersinKasa from "../../components/UrunBazliSatis/Mersin.vue";
import UmitkoyKasa from "../../components/UrunBazliSatis/Umitkoy.vue";
import BatikentKasa from "../../components/UrunBazliSatis/Batikent.vue";
import xlsx from "xlsx";
export default {
  components: {
	BahceliKasa,
	ArcadiumKasa,
	GordionKasa,
	BilkentKasa,
	ArmadaKasa,
	AnkamallKasa,
	AtakuleKasa,
	CepaKasa,
	AdanaKasa,
	MersinKasa,
	UmitkoyKasa,
	BatikentKasa,
	},
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
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Bahceli.data = BahceliUrunBazliSatis;
      this.$refs.BahceliKasa.GetKasa();
      this.$emit("BahceliData", this.Bahceli);
      //Arcadium KASA REPORT
      let ArcadiumUrunBazliSatis = await GetUrunBazliSatis(
        this.Arcadium.SubeId,
        this.startDate,
        this.endDate
      );
      ArcadiumUrunBazliSatis = ArcadiumUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Arcadium.data = ArcadiumUrunBazliSatis;
      this.$refs.ArcadiumKasa.GetKasa();
      this.$emit("ArcadiumData", this.Arcadium);
      //Gordion KASA REPORT
      let GordionUrunBazliSatis = await GetUrunBazliSatis(
        this.Gordion.SubeId,
        this.startDate,
        this.endDate
      );
      GordionUrunBazliSatis = GordionUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Gordion.data = GordionUrunBazliSatis;
      this.$refs.GordionKasa.GetKasa();
      this.$emit("GordionData", this.Gordion);
      //Bilkent KASA REPORT
      let BilkentUrunBazliSatis = await GetUrunBazliSatis(
        this.Bilkent.SubeId,
        this.startDate,
        this.endDate
      );
     BilkentUrunBazliSatis = BilkentUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Bilkent.data =BilkentUrunBazliSatis;
      this.$refs.BilkentKasa.GetKasa();
      this.$emit("BilkentData", this.Bilkent);
      //Aramada KASA REPORT
      let ArmadaUrunBazliSatis = await GetUrunBazliSatis(
        this.Armada.SubeId,
        this.startDate,
        this.endDate
      );
     ArmadaUrunBazliSatis = ArmadaUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Armada.data =ArmadaUrunBazliSatis;
      this.$refs.ArmadaKasa.GetKasa();
      this.$emit("ArmadaData", this.Armada);
      //Ankamall KASA REPORT
      let AnkamallUrunBazliSatis = await GetUrunBazliSatis(
        this.Ankamall.SubeId,
        this.startDate,
        this.endDate
      );
     AnkamallUrunBazliSatis = AnkamallUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Ankamall.data =AnkamallUrunBazliSatis;
      this.$emit("AnkamallData", this.Ankamall);
      //Atakule KASA REPORT
      let AtakuleUrunBazliSatis = await GetUrunBazliSatis(
        this.Atakule.SubeId,
        this.startDate,
        this.endDate
      );
     AtakuleUrunBazliSatis = AtakuleUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Atakule.data =AtakuleUrunBazliSatis;
      this.$emit("AtakuleData", this.Atakule);
      //Cepa KASA REPORT
      let CepaUrunBazliSatis = await GetUrunBazliSatis(
        this.Cepa.SubeId,
        this.startDate,
        this.endDate
      );
     CepaUrunBazliSatis = CepaUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Cepa.data =CepaUrunBazliSatis;
      this.$emit("CepaData", this.Cepa);
      //Cepa KASA REPORT
      let AdanaUrunBazliSatis = await GetUrunBazliSatis(
        this.Adana.SubeId,
        this.startDate,
        this.endDate
      );
     AdanaUrunBazliSatis = AdanaUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Adana.data =AdanaUrunBazliSatis;
      this.$emit("AdanaData", this.Adana);
      //mersin KASA REPORT
      let MersinUrunBazliSatis = await GetUrunBazliSatis(
        this.Mersin.SubeId,
        this.startDate,
        this.endDate
      );
     MersinUrunBazliSatis = MersinUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Mersin.data =MersinUrunBazliSatis;
      this.$emit("MersinData", this.Mersin);
      //umitkoy KASA REPORT
      let UmitkoyUrunBazliSatis = await GetUrunBazliSatis(
        this.Umitkoy.SubeId,
        this.startDate,
        this.endDate
      );
     UmitkoyUrunBazliSatis = UmitkoyUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Umitkoy.data =UmitkoyUrunBazliSatis;
      this.$emit("UmitkoyData", this.Umitkoy);
      //batikent KASA REPORT
      let BatikentUrunBazliSatis = await GetUrunBazliSatis(
        this.Batikent.SubeId,
        this.startDate,
        this.endDate
      );
     BatikentUrunBazliSatis = BatikentUrunBazliSatis.sort((a, b) => {
        if (a.ProductGroup < b.ProductGroup) {

          return -1;
        }
        if (a.ProductGroup > b.ProductGroup) {
          return 1;
        }
        return 0;
      });
      this.Batikent.data =BatikentUrunBazliSatis
      this.$emit("BatikentData", this.Batikent);
	    },
  },
};
</script>
