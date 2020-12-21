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
                id="kayseri-tab"
                data-toggle="tab"
                href="#kayseri"
                role="tab"
                aria-controls="kayseri"
              >Kayseri</a>
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
                id="geneltoplam-tab"
                data-toggle="tab"
                href="#genelToplam"
                role="tab"
                aria-controls="umitkoy"
              >Genel Toplam</a>
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
            <div
              class="tab-pane fade show"
              id="kayseri"
              role="tabpanel"
              aria-labelledby="kayseri-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Kayseri</h1>
                    <kayseri-kasa v-bind:KayseriData="Kayseri" ref="KayseriKasa" />
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
              id="genelToplam"
              role="tabpanel"
              aria-labelledby="geneltoplam-tab"
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
import moment from "moment";
import BahceliKasa from "../../components/KasaDetail/Bahceli";
import AdanaKasa from "../../components/KasaDetail/Adana";
import AnkamallKasa from "../../components/KasaDetail/Ankamall";
import ArcadiumKasa from "../../components/KasaDetail/Arcadium";
import ArmadaKasa from "../../components/KasaDetail/Armada";
import AtakuleKasa from "../../components/KasaDetail/Atakule";
import BilkentKasa from "../../components/KasaDetail/Bilkent";
import CepaKasa from "../../components/KasaDetail/Cepa";
import GordionKasa from "../../components/KasaDetail/Gordion";
import KayseriKasa from "../../components/KasaDetail/Kayseri";
import MersinKasa from "../../components/KasaDetail/Mersin";
import UmitkoyKasa from "../../components/KasaDetail/Umitkoy";
import GenelKasa from "../../components/KasaDetail/GenelToplam";
import { KasaModel, DefaultKasa } from "../../Helpers/KasaSubeModel";
import { GetSefimReport, GetKasaReport } from "../../Helpers/GetReportTools";
export default {
  components: {
    BahceliKasa,
    AdanaKasa,
    AnkamallKasa,
    ArcadiumKasa,
    ArmadaKasa,
    AtakuleKasa,
    BilkentKasa,
    CepaKasa,
    GordionKasa,
    KayseriKasa,
    MersinKasa,
    UmitkoyKasa,
    GenelKasa,
  },
  data() {
    return {
      tarih: "",
      subeData: [],
      Armada: {
        ...KasaModel,
      },
      Umitkoy: {
        ...KasaModel,
      },
      Ankamall: {
        ...KasaModel,
      },
      Bahceli: {
        ...KasaModel,
      },
      Bilkent: {
        ...KasaModel,
      },
      Gordion: {
        ...KasaModel,
      },
      Cepa: {
        ...KasaModel,
      },
      Kasmir: {
        SubeId: "",
      },
      Atakule: {
        ...KasaModel,
      },
      Arcadium: {
        ...KasaModel,
      },
      Adana: {
        ...KasaModel,
      },
      Kayseri: {
        ...KasaModel,
      },
      Mersin: {
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
        } else if (item.name === "KAYSERİ") {
          this.Kayseri.SubeId = item;
        } else if (item.name === "MERSIN") {
          this.Mersin.SubeId = item;
        } else if (item.name === "Ümitköy") {
          this.Umitkoy.SubeId = item;
        }
      });

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

      //Adana kasa raporu
      let AdanaReportResult = await GetKasaReport(
        this.Adana.SubeId._id,
        this.startDate,
        this.endDate
      );

      this.Adana.data = AdanaReportResult;

      this.$refs.AdanaKasa.GetKasa();
      this.$emit("AdanaData", this.Adana);

      //Ankamall kasa raporu
      let AnkamallReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Ankamall.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );

      this.Ankamall.data = AnkamallReportResult;

      this.$refs.AnkamallKasa.GetKasa();
      this.$emit("AnkamallData", this.Ankamall);

      //Arcadium kasa raporu
      let ArcadiumReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Arcadium.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );

      this.Arcadium.data = ArcadiumReportResult;

      this.$refs.ArcadiumKasa.GetKasa();
      this.$emit("ArcadiumKasa", this.Arcadium);

      //Armada kasa raporu
      let ArmadaReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Armada.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );

      this.Armada.data = ArmadaReportResult;

      this.$refs.ArmadaKasa.GetKasa();
      this.$emit("ArmadaKasa", this.Armada);

      //Atakule kasa raporu
      let AtakuleReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Atakule.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );

      this.Atakule.data = AtakuleReportResult;

      this.$refs.AtakuleKasa.GetKasa();
      this.$emit("AtakuleData", this.Atakule);

      //Bilkent kasa raporu
      let BilkentReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Bilkent.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );

      this.Bilkent.data = BilkentReportResult;

      this.$refs.BilkentKasa.GetKasa();
      this.$emit("BilkentData", this.Bilkent);

      //Cepa kasa raporu
      let CepaReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Cepa.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );

      this.Cepa.data = CepaReportResult;

      this.$refs.CepaKasa.GetKasa();
      this.$emit("CepaData", this.Cepa);

      //Gordion kasa raporu
      let GordionResult = await Service.save("shopReportView/GetDateReport", {
        subeId: this.Gordion.SubeId._id,
        startDate: moment(this.startDate).format("YYYY.MM.DD"),
        finishDate: moment(this.endDate).format("YYYY.MM.DD"),
      });

      this.Gordion.data = GordionResult;

      this.$refs.GordionKasa.GetKasa();
      this.$emit("GordionData", this.Gordion);

      //Kayseri kasa raporu
      let KayseriResult = await Service.save("shopReportView/GetDateReport", {
        subeId: this.Kayseri.SubeId._id,
        startDate: moment(this.startDate).format("YYYY.MM.DD"),
        finishDate: moment(this.endDate).format("YYYY.MM.DD"),
      });

      this.Kayseri.data = KayseriResult;

      this.$refs.KayseriKasa.GetKasa();
      this.$emit("KayseriData", this.Kayseri);

      //Mersin kasa raporu
      let MersinResult = await Service.save("shopReportView/GetDateReport", {
        subeId: this.Mersin.SubeId._id,
        startDate: moment(this.startDate).format("YYYY.MM.DD"),
        finishDate: moment(this.endDate).format("YYYY.MM.DD"),
      });

      this.Mersin.data = MersinResult;

      this.$refs.MersinKasa.GetKasa();
      this.$emit("MersinData", this.Mersin);
      //Mersin kasa raporu
      let UmitkoyResult = await Service.save("shopReportView/GetDateReport", {
        subeId: this.Umitkoy.SubeId._id,
        startDate: moment(this.startDate).format("YYYY.MM.DD"),
        finishDate: moment(this.endDate).format("YYYY.MM.DD"),
      });

      this.Umitkoy.data = UmitkoyResult;

      this.$refs.UmitkoyKasa.GetKasa();
      this.$emit("UmitkoyData", this.Umitkoy);

      let GenelResult = await Service.save("shopReportView/GetGenelToplam", {
        startDate: moment(this.startDate).format("YYYY.MM.DD"),
        finishDate: moment(this.endDate).format("YYYY.MM.DD"),
      });

      this.GenelKasa.data = GenelResult;

      this.$refs.GenelKasa.GetKasa();
      this.$emit("GenelData", this.GenelKasa);
    },
  },
};
</script>
