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
            <li class="nav-item" v-for="item in SubeList " :key="item._id">
              <a
                class="nav-link"
                :id="item.name"
                data-toggle="tab"
                :href="'#'+item.name"
                role="tab"
                :aria-controls="item.name"
              >{{item.name}}</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              v-for="item in SubeList"
              :key="item._id"
              class="tab-pane fade show"
              :id="item.name"
              role="tabpanel"
              :aria-labelledby="item.name"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>{{item.name}}</h1>
                    <bahceli-kasa v-bind:BahceliData="Bahceli" ref="BahceliKasa" />
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
import { GetKasaReport } from "../../Helpers/GetReportTools";
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
      this.SubeList.forEach(async (Subeler) => {
        this.Test[Subeler.name] = await GetKasaReport(
          Subeler._id,
          this.startDate,
          this.endDate
        );
      });
      // eslint-disable-next-line no-console
      console.log(this.Test);
      /*
      //BAHÇELİ KASA REPORT
      let BahceliReportResult = await GetKasaReport(
        this.Bahceli.SubeId._id,
        this.startDate,
        this.endDate:
      );
      // eslint-disable-next-line no-console
      console.log("BAHÇELİ KASA RAPORU", BahceliReportResult);
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
      let AdanaSefimKasa = await GetSefimReport(
        this.Adana.SubeId,
        this.startDate,
        this.endDate
      );
      this.Adana.programData = AdanaSefimKasa;
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

      let AnkamallSefimKasa = await GetSefimReport(
        this.Ankamall.SubeId,
        this.startDate,
        this.endDate
      );
      this.Ankamall.programData = AnkamallSefimKasa;
      this.Ankamall.data = AnkamallReportResult;
      this.$refs.BilkentKasa.GetKasa();
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

      //ARCADİUM ŞEFİM CİRO
      let ArcadiumSefimKasa = await GetSefimReport(
        this.Arcadium.SubeId,
        this.startDate,
        this.endDate
      );
      this.Arcadium.programData = ArcadiumSefimKasa;
      this.Arcadium.data = ArcadiumReportResult;
      this.$refs.ArcadiumKasa.GetKasa();
      this.$emit("ArcadiumData", this.Arcadium);

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

      let ArmadaSefimKasa = await GetSefimReport(
        this.Armada.SubeId,
        this.startDate,
        this.endDate
      );
      this.Armada.programData = ArmadaSefimKasa;
      this.Armada.data = ArmadaReportResult;
      this.$refs.ArmadaKasa.GetKasa();
      this.$emit("ArmadaData", this.Armada);
      //Atakule kasa raporu
      let AtakuleReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Atakule.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );

      let AtakuleSefimKasa = await GetSefimReport(
        this.Atakule.SubeId,
        this.startDate,
        this.endDate
      );
      this.Atakule.programData = AtakuleSefimKasa;
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

      let BilkentSefimKasa = await GetSefimReport(
        this.Bilkent.SubeId,
        this.startDate,
        this.endDate
      );
      this.Bilkent.programData = BilkentSefimKasa;
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

      let CepaSefimKasa = await GetSefimReport(
        this.Cepa.SubeId,
        this.startDate,
        this.endDate
      );
      this.Cepa.programData = CepaSefimKasa;
      this.Cepa.data = CepaReportResult;
      this.$refs.CepaKasa.GetKasa();
      this.$emit("CepaData", this.Cepa);

      //Gordion kasa raporu
      let GordionReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Gordion.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );

      let GordionSefimKasa = await GetSefimReport(
        this.Gordion.SubeId,
        this.startDate,
        this.endDate
      );
      this.Gordion.programData = GordionSefimKasa;
      this.Gordion.data = GordionReportResult;
      this.$refs.GordionKasa.GetKasa();
      this.$emit("GordionData", this.Gordion);

      //Kayseri kasa raporu
      let KayseriReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Kayseri.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );

      let KayseriSefimKasa = await GetSefimReport(
        this.Kayseri.SubeId,
        this.startDate,
        this.endDate
      );
      this.Kayseri.programData = KayseriSefimKasa;
      this.Kayseri.data = KayseriReportResult;
      this.$refs.KayseriKasa.GetKasa();
      this.$emit("KayseriData", this.Kayseri);

      //Mersin kasa raporu
      let MersinReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Mersin.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );
      let MersinSefimKasa = await GetSefimReport(
        this.Mersin.SubeId,
        this.startDate,
        this.endDate
      );
      this.Mersin.programData = MersinSefimKasa;
      this.Mersin.data = MersinReportResult;
      this.$refs.MersinKasa.GetKasa();
      this.$emit("MersinData", this.Mersin);
      //Mersin kasa raporu
      let UmitkoyReportResult = await Service.save(
        "shopReportView/GetDateReport",
        {
          subeId: this.Umitkoy.SubeId._id,
          startDate: moment(this.startDate).format("YYYY.MM.DD"),
          finishDate: moment(this.endDate).format("YYYY.MM.DD"),
        }
      );

      let UmitkoySefimKasa = await GetSefimReport(
        this.Umitkoy.SubeId,
        this.startDate,
        this.endDate
      );
      this.Umitkoy.programData = UmitkoySefimKasa;
      this.Umitkoy.data = UmitkoyReportResult;
      this.$refs.UmitkoyKasa.GetKasa();
      this.$emit("UmiykoyData", this.Umitkoy);*/
    },
  },
};
</script>

