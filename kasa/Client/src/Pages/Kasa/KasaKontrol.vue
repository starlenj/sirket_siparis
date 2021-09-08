<template>
  <div>
    <div>
      <div class="page-header page-header-light">
        <div class="page-header-content header-elements-md-inline">
          <div class="page-title d-flex">
            <h4>
              <i class="icon-arrow-left52 mr-2"></i>
              <span class="font-weight-semibold">Kasa</span> - Kasa Kontrolu
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
              <a href="/Sube" class="breadcrumb-item">Kasa Kontrolu</a>
            </div>

            <a href="#" class="header-elements-toggle text-default d-md-none">
              <i class="icon-more"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="form-group">
          <label>Tarih</label>
          <input type="date" class="form-control" v-model="tarihData" />
          <br />
          <br />
          <button class="btn btn-primary" @click="GetReport">Getir</button>
        </div>
        <div class="page has-sidebar-left bg-light height-full">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link"
                id="arcadium-tab"
                data-toggle="tab"
                href="#arcadium"
                role="tab"
                aria-controls="arcadium"
                >Arcadium</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="gordion-tab"
                data-toggle="tab"
                href="#gordion"
                role="tab"
                aria-controls="gordion"
                >Gordion</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="armada-tab"
                data-toggle="tab"
                href="#armada"
                role="tab"
                aria-controls="armada"
                >Armada</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="bahceli-tab"
                data-toggle="tab"
                href="#bahceli"
                role="tab"
                aria-controls="bahceli"
                >Bahçelievler</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="bilkent-tab"
                data-toggle="tab"
                href="#bilkent"
                role="tab"
                aria-controls="bilkent"
                >Bilkent</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="ankamall-tab"
                data-toggle="tab"
                href="#ankamall"
                role="tab"
                aria-controls="ankamall"
                >Ankamall</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="atakule-tab"
                data-toggle="tab"
                href="#atakule"
                role="tab"
                aria-controls="atakule"
                >Atakule</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="cepa-tab"
                data-toggle="tab"
                href="#cepa"
                role="tab"
                aria-controls="cepa"
                >Cepa</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="kayseri-tab"
                data-toggle="tab"
                href="#kayseri"
                role="tab"
                aria-controls="kayseri"
                >Kayseri</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="adana-tab"
                data-toggle="tab"
                href="#adana"
                role="tab"
                aria-controls="adana"
                >Adana</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="mersin-tab"
                data-toggle="tab"
                href="#mersin"
                role="tab"
                aria-controls="mersin"
                >Mersin</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="umitkoy-tab"
                data-toggle="tab"
                href="#umitkoy"
                role="tab"
                aria-controls="umitkoy"
                >Ümitkoy</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="batikent-tab"
                data-toggle="tab"
                href="#batikent"
                role="tab"
                aria-controls="batikent"
                >Batıkent</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="tunali-tab"
                data-toggle="tab"
                href="#tunali"
                role="tab"
                aria-controls="tunali"
                >Tunali</a
              >
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
                    <arcadium-kasa
                      v-bind:ArcadiumData="Arcadium"
                      ref="ArcadiumKasa"
                    />
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
                    <gordion-kasa
                      v-bind:GordionData="Gordion"
                      ref="GordionKasa"
                    />
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
                    <bahceli-kasa
                      v-bind:BahceliData="Bahceli"
                      ref="BahceliKasa"
                    />
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
                    <bilkent-kasa
                      v-bind:BilkentData="Bilkent"
                      ref="BilkentKasa"
                    />
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
                    <ankamall-kasa
                      v-bind:AnkamallData="Ankamall"
                      ref="AnkamallKasa"
                    />
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
                    <atakule-kasa
                      v-bind:AtakuleData="Atakule"
                      ref="AtakuleKasa"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="cepa"
              role="tabpanel"
              aria-labelledby="cepa-tab"
            >
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
                    <kayseri-kasa
                      v-bind:KayseriData="Kayseri"
                      ref="KayseriKasa"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="adana"
              role="tabpanel"
              aria-labelledby="adana-tab"
            >
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
              aria-labelledby="umitkoy-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Ümitkoy</h1>
                    <umitkoy-kasa
                      v-bind:UmitkoyData="Umitkoy"
                      ref="UmitkoyKasa"
                    />
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
                    <batikent-kasa
                      v-bind:BatikentData="Batikent"
                      ref="BatikentKasa"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="tunali"
              role="tabpanel"
              aria-labelledby="tunali-tab"
            >
              <div class="content">
                <div class="card">
                  <div class="card-body b-b">
                    <h1>Tunali</h1>
                    <tunali-kasa
                      v-bind:TunaliData="Tunali"
                      ref="TunaliKasa"
                    />
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
import ArcadiumKasa from "../../components/Kasa/Arcadium";
import GordionKasa from "../../components/Kasa/Gordion";
import ArmadaKasa from "../../components/Kasa/Armada";
import BahceliKasa from "../../components/Kasa/Bahceli";
import BilkentKasa from "../../components/Kasa/Bilkent";
import AnkamallKasa from "../../components/Kasa/Ankamall";
import AtakuleKasa from "../../components/Kasa/Atakule";
import CepaKasa from "../../components/Kasa/Cepa";
import KayseriKasa from "../../components/Kasa/Kayseri";
import AdanaKasa from "../../components/Kasa/Adana";
import MersinKasa from "../../components/Kasa/Mersin";
import UmitkoyKasa from "../../components/Kasa/Umitkoy";
import BatikentKasa from "../../components/Kasa/Batikent";
import TunaliKasa from "../../components/Kasa/Tunali";
export default {
  components: {
    ArcadiumKasa,
    GordionKasa,
    ArmadaKasa,
    BahceliKasa,
    BilkentKasa,
    AnkamallKasa,
    AtakuleKasa,
    CepaKasa,
    KayseriKasa,
    AdanaKasa,
    MersinKasa,
    UmitkoyKasa,
    BatikentKasa,
    TunaliKasa,
  },
  data() {
    return {
      tarih: "",
      subeData: [],
      Armada: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Ankamall: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Tunali: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Bahceli: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Bilkent: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Gordion: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Cepa: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Kasmir: {
        SubeId: "",
      },
      Umitkoy: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        programYemekSepeti: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Batikent: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        programYemekSepeti: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Atakule: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Arcadium: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Adana: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Kayseri: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      Mersin: {
        SubeId: "",
        YKSodexo: 0,
        YKTicket: 0,
        toplamGelenYemekCeki: 0,
        programYemekCeki: 0,
        YKDiger: 0,
        data: [],
        YKFark: 0,
        Nakit: 0,
        programNakit: 0,
        nakitFark: 0,
        Visa: 0,
        programVisa: 0,
        visaFark: 0,
        kontrol: 0,
        iadeAciklama: "",
        iadeIptal: 0,
      },
      initialData: {
        ticket: {
          yuz: "0",
          ikiyuz: "0",
          elli: "0",
          yirmi: "0",
          ontl: "0",
          bes: "0",
          bir: "0",
          sifirbes: "0",
          sifiryirmibes: "0",
          sifirbir: "0",
          sifirsifirbes: "0",
        },
        sodexo: {
          yuz: "0",
          ikiyuz: "0",
          elli: "0",
          yirmi: "0",
          ontl: "0",
          bes: "0",
          bir: "0",
          sifirbes: "0",
          sifiryirmibes: "0",
          sifirbir: "0",
          sifirsifirbes: "0",
        },
        cash: {
          yuz: "0",
          ikiyuz: "0",
          elli: "0",
          yirmi: "0",
          sifiryirmibes: "0",
          sifirbir: "0",
          sifirsifirbes: "0",
          ontl: "0",
          bes: "0",
          bir: "0",
          sifirbes: "0",
        },
        credit: {
          bir: "0",
          iki: "0",
          uc: "0",
          dort: "0",
          bes: "0",
          alti: "0",
          yedi: "0",
        },
        setCardGunSonu: "0",
        multinetGunSonu: "0",
        metropolGunSonu: "0",
        ceoCardGunSonu: "0",
        avmKuponu: "0",
        sinemaBileti: "0",

        sodexoGunSonu: "0",
        ticketGunSonu: "0",
        yemekSepeti: "0",
        masraf: {
          aciklamaBir: "",
          turuBir: "",
          tutarBir: "0",
          resimBir: "",
          aciklamaIki: "",
          turuIki: "",
          tutarIki: "0",
          aciklamaUc: "",
          turuUc: "",
          tutarUc: "0",
          aciklamaDort: "",
          turuDort: "",
          tutarDort: "0",
          aciklamaBes: "",
          turuBes: "",
          tutarBes: "0",
          aciklamaAlti: "",
          turuAlti: "",
          tutarAlti: "0",
        },
        iade: {
          aciklamaBir: "",
          tutarBir: "0",
          aciklamaIki: "",
          tutarIki: "0",
          aciklamaUc: "",
          tutarUc: "0",
          aciklamaDort: "",
          tutarDort: "0",
          aciklamaBes: "",
          tutarBes: "0",
          aciklamaAlti: "",
          tutarAlti: "0",
        },
      },
      tarihData: "",
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
        } else if (item.name === "Batıkent") {
          this.Batikent.SubeId = item;
        } else if (item.name === "TUNALI") { 
          this.Tunali.SubeId = item;
        }
      });
      //Arcadium kasa raporu
      let ArcadiumReportResult = await Service.save(
        "shopReportView/CheckReport",
        {
          subeId: this.Arcadium.SubeId._id,
          date: moment(this.tarihData).format("YYYY.MM.DD"),
        }
      );

      this.Arcadium.data = ArcadiumReportResult[0];
      //ARCADİUM ŞEFİM CİRO
      let SefimkasaData = await Service.save("Sefim/GetCiro", {
        data: this.Arcadium.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      // eslint-disable-next-line no-console
      if (SefimkasaData.length === 0) {
        this.Arcadium.programYemekCeki = 0;
        this.Arcadium.programNakit = 0;
        this.Arcadium.programVisa = 0;
        this.$refs.ArcadiumKasa.GetKasa();
        this.$emit("ArcadiumData", this.Arcadium);
      } else {
        this.Arcadium.programYemekCeki = SefimkasaData[0]["TICKET"];
        this.Arcadium.programNakit = SefimkasaData[0]["NAKIT"];
        this.Arcadium.programVisa = SefimkasaData[0]["KREDI"];
        this.$refs.ArcadiumKasa.GetKasa();
        this.$emit("ArcadiumData", this.Arcadium);
      }

      //Gordion kasa raporu
      let GordionReportResult = await Service.save(
        "shopReportView/CheckReport",
        {
          subeId: this.Gordion.SubeId._id,
          date: moment(this.tarihData).format("YYYY.MM.DD"),
        }
      );

      this.Gordion.data = GordionReportResult[0];
      //GORDİON ŞEFİM CİRO
      let GordionSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Gordion.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      this.Gordion.programYemekCeki = GordionSefimKasa[0]["TICKET"];
      this.Gordion.programNakit = GordionSefimKasa[0]["NAKIT"];
      this.Gordion.programVisa = GordionSefimKasa[0]["KREDI"];
      this.$refs.GordionKasa.GetKasa();
      this.$emit("GordionData", this.Gordion);

      //Armada kasa raporu
      let ArmadaReportResult = await Service.save(
        "shopReportView/CheckReport",
        {
          subeId: this.Armada.SubeId._id,
          date: moment(this.tarihData).format("YYYY.MM.DD"),
        }
      );

      this.Armada.data = ArmadaReportResult[0];
      //ARMADA ŞEFİM CİRO
      let ArmadaSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Armada.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      if (ArmadaSefimKasa.length === 0) {
        this.Armada.programYemekCeki = 0;
        this.Armada.programNakit = 0;
        this.Armada.programVisa = 0;
        this.$refs.ArmadaKasa.GetKasa();
        this.$emit("ArmadaData", this.Armada);
      } else {
        this.Armada.programYemekCeki = ArmadaSefimKasa[0]["TICKET"];
        this.Armada.programNakit = ArmadaSefimKasa[0]["NAKIT"];
        this.Armada.programVisa = ArmadaSefimKasa[0]["KREDI"];
        this.$refs.ArmadaKasa.GetKasa();
        this.$emit("ArmadaData", this.Armada);
      }
      //Bahçeli kasa raporu
      let BahceliResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Bahceli.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      // eslint-disable-next-line no-console
      console.log("BAHÇELİ RESULT", BahceliResult);
      if (BahceliResult.length !== 0) {
        this.Bahceli.data = BahceliResult[0];
      } else {
        this.Bahceli.data = this.initialData;
      }

      //BAHÇELİ ŞEFİM CİRO
      let BahceliSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Bahceli.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      if (BahceliSefimKasa.length > 0) {
        this.Bahceli.programYemekCeki = BahceliSefimKasa[0]["TICKET"];
        this.Bahceli.programNakit = BahceliSefimKasa[0]["NAKIT"];
        this.Bahceli.programVisa = BahceliSefimKasa[0]["KREDI"];
        this.Bahceli.programYemekSepeti = BahceliSefimKasa[0]["YEMEKSEPETI"];
        this.$refs.BahceliKasa.GetKasa();
        this.$emit("BahceliData", this.Bahceli);
      } else {
        this.Bahceli.programYemekCeki = 0;
        this.Bahceli.programNakit = 0;
        this.Bahceli.programVisa = 0;
        this.$refs.BahceliKasa.GetKasa();
        this.$emit("BahceliData", this.Bahceli);
      }
      //Bilkent kasa raporu
      let BilkentResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Bilkent.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      this.Bilkent.data = BilkentResult[0];
      //BİLKENT ŞEFİM CİRO
      let BilkentSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Bilkent.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      if (BilkentSefimKasa.length > 0) {
        this.Bilkent.programYemekCeki = BilkentSefimKasa[0]["TICKET"];
        this.Bilkent.programNakit = BilkentSefimKasa[0]["NAKIT"];
        this.Bilkent.programVisa = BilkentSefimKasa[0]["KREDI"];
        this.$refs.BilkentKasa.GetKasa();
        this.$emit("BilkentData", this.Bilkent);
      } else {
        this.Bilkent.programYemekCeki = 0;
        this.Bilkent.programNakit = 0;
        this.Bilkent.programVisa = 0;
        this.$refs.BilkentKasa.GetKasa();
        this.$emit("BilkentData", this.Bilkent);
      }

      //ANKAMALL kasa raporu
      let AnkamallResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Ankamall.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      this.Ankamall.data = AnkamallResult[0];
      //ANKAMALL ŞEFİM CİRO
      let AnkamallSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Ankamall.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      if (AnkamallSefimKasa.length > 0) {
        this.Ankamall.programYemekCeki = AnkamallSefimKasa[0]["TICKET"];
        this.Ankamall.programNakit = AnkamallSefimKasa[0]["NAKIT"];
        this.Ankamall.programVisa = AnkamallSefimKasa[0]["KREDI"];
        this.$refs.AnkamallKasa.GetKasa();
        this.$emit("AnkamalllData", this.Ankamall);
      } else {
        this.Ankamall.programYemekCeki = 0;
        this.Ankamall.programNakit = 0;
        this.Ankamall.programVisa = 0;
        this.$refs.AnkamallKasa.GetKasa();
        this.$emit("AnkamalllData", this.Ankamall);
      }

      //Atakule kasa raporu
      let AtakuleResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Atakule.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      this.Atakule.data = AtakuleResult[0];
      //Atakule ŞEFİM CİRO
      let AtakuleSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Atakule.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      if (AtakuleSefimKasa.length > 0) {
        this.Atakule.programYemekCeki = AtakuleSefimKasa[0]["TICKET"];
        this.Atakule.programNakit = AtakuleSefimKasa[0]["NAKIT"];
        this.Atakule.programVisa = AtakuleSefimKasa[0]["KREDI"];
        this.Atakule.programYemekSepeti = AtakuleSefimKasa[0]["YEMEKSEPETI"];
        this.$refs.AtakuleKasa.GetKasa();
        this.$emit("AtakuleData", this.Atakule);
      } else {
        this.Atakule.programYemekCeki = 0;
        this.Atakule.programNakit = 0;
        this.Atakule.programVisa = 0;
        this.$refs.AtakuleKasa.GetKasa();
        this.$emit("AtakuleData", this.Atakule);
      }

      //Cepa kasa raporu
      let CepaResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Cepa.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      this.Cepa.data = CepaResult[0];
      //Cepa ŞEFİM CİRO
      let CepaSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Cepa.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      if (CepaSefimKasa.length > 0) {
        this.Cepa.programYemekCeki = CepaSefimKasa[0]["TICKET"];
        this.Cepa.programNakit = CepaSefimKasa[0]["NAKIT"];
        this.Cepa.programVisa = CepaSefimKasa[0]["KREDI"];
        this.$refs.CepaKasa.GetKasa();
        this.$emit("CepaData", this.Cepa);
      } else {
        this.Cepa.programYemekCeki = 0;
        this.Cepa.programNakit = 0;
        this.Cepa.programVisa = 0;
        this.$refs.CepaKasa.GetKasa();
        this.$emit("CepaData", this.Cepa);
      }

      //Kayseri kasa raporu
      let KayseriResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Kayseri.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      this.Kayseri.data = KayseriResult[0];
      //Kayseri ŞEFİM CİRO
      let KayseriSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Kayseri.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      if (KayseriSefimKasa.length > 0) {
        this.Kayseri.programYemekCeki = KayseriSefimKasa[0]["TICKET"];
        this.Kayseri.programNakit = KayseriSefimKasa[0]["NAKIT"];
        this.Kayseri.programVisa = KayseriSefimKasa[0]["KREDI"];
        this.$refs.KayseriKasa.GetKasa();
        this.$emit("KayseriData", this.Kayseri);
      } else {
        this.Kayseri.programYemekCeki = 0;
        this.Kayseri.programNakit = 0;
        this.Kayseri.programVisa = 0;
        this.$refs.KayseriKasa.GetKasa();
        this.$emit("KayseriData", this.Kayseri);
      }

      //Adana kasa raporu
      let AdanaResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Adana.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      this.Adana.data = AdanaResult[0];
      //Adana ŞEFİM CİRO
      let AdanaSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Adana.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      if (AdanaSefimKasa.length > 0) {
        this.Adana.programYemekCeki = AdanaSefimKasa[0]["TICKET"];
        this.Adana.programNakit = AdanaSefimKasa[0]["NAKIT"];
        this.Adana.programVisa = AdanaSefimKasa[0]["KREDI"];
        this.$refs.AdanaKasa.GetKasa();
        this.$emit("AdanaData", this.Adana);
      } else {
        this.Adana.programYemekCeki = 0;
        this.Adana.programNakit = 0;
        this.Adana.programVisa = 0;
        this.$refs.AdanaKasa.GetKasa();
        this.$emit("AdanaData", this.Adana);
      }

      //Mersin kasa raporu
      let MersinResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Mersin.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      this.Mersin.data = MersinResult[0];
      //mersin ŞEFİM CİRO
      let MersinSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Mersin.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      if (MersinSefimKasa.length > 0) {
        this.Mersin.programYemekCeki = MersinSefimKasa[0]["TICKET"];
        this.Mersin.programNakit = MersinSefimKasa[0]["NAKIT"];
        this.Mersin.programVisa = MersinSefimKasa[0]["KREDI"];
        this.$refs.MersinKasa.GetKasa();
        this.$emit("MersinData", this.Mersin);
      } else {
        this.Mersin.programYemekCeki = 0;
        this.Mersin.programNakit = 0;
        this.Mersin.programVisa = 0;
        this.$refs.MersinKasa.GetKasa();
        this.$emit("MersinData", this.Mersin);
      }

      //ÜMİTKÖY kasa raporu
      let UmitkoyResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Umitkoy.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      this.Umitkoy.data = UmitkoyResult[0];
      //ÜMİTKÖY ŞEFİM CİRO
      let UmikoySefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Umitkoy.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      if (UmikoySefimKasa.length > 0) {
        this.Umitkoy.programYemekCeki = UmikoySefimKasa[0]["TICKET"];
        this.Umitkoy.programNakit = UmikoySefimKasa[0]["NAKIT"];
        this.Umitkoy.programVisa = UmikoySefimKasa[0]["KREDI"];
        this.Umitkoy.programYemekSepeti = UmikoySefimKasa[0]["YEMEKSEPETI"];
        this.$refs.UmitkoyKasa.GetKasa();
        this.$emit("UmitkoyData", this.Umitkoy);
      } else {
        this.Umitkoy.programYemekCeki = 0;
        this.Umitkoy.programNakit = 0;
        this.Umitkoy.programVisa = 0;
        this.$refs.UmitkoyKasa.GetKasa();
        this.$emit("UmitkoyData", this.Umitkoy);
      }

      //BATIKENT kasa raporu
      let BatikentResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Batikent.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      this.Batikent.data = BatikentResult[0];
      //BATIKENT ŞEFİM CİRO
      let BatikentSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Batikent.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      if (BatikentSefimKasa.length > 0) {
        this.Batikent.programYemekCeki = BatikentSefimKasa[0]["TICKET"];
        this.Batikent.programNakit = BatikentSefimKasa[0]["NAKIT"];
        this.Batikent.programVisa = BatikentSefimKasa[0]["KREDI"];
        this.Batikent.programYemekSepeti = BatikentSefimKasa[0]["YEMEKSEPETI"];
        this.$refs.BatikentKasa.GetKasa();
        this.$emit("BatikentKasa", this.Batikent);
      } else {
        this.Batikent.programYemekCeki = 0;
        this.Batikent.programNakit = 0;
        this.Batikent.programVisa = 0;

        this.$refs.BatikentKasa.GetKasa();
        this.$emit("BatikentKasa", this.Batikent);
      }
      //tunali kasa raporu
      let TunaliResult = await Service.save("shopReportView/CheckReport", {
        subeId: this.Tunali.SubeId._id,
        date: moment(this.tarihData).format("YYYY.MM.DD"),
      });
      this.Tunali.data = TunaliResult[0];
      //TUNALI ŞEFİM CİRO
      let TunaliSefimKasa = await Service.save("Sefim/GetCiro", {
        data: this.Tunali.SubeId,
        startDate: moment(this.tarihData).format("YYYY.MM.DD"),
        endDate: moment(this.tarihData).format("YYYY.MM.DD"),
      });

      if (TunaliSefimKasa.length > 0) {
        this.Tunali.programYemekCeki = TunaliSefimKasa[0]["TICKET"];
        this.Tunali.programNakit = TunaliSefimKasa[0]["NAKIT"];
        this.Tunali.programVisa = TunaliSefimKasa[0]["KREDI"];
        this.Tunali.programYemekSepeti = TunaliSefimKasa[0]["YEMEKSEPETI"];
        this.$refs.TunaliKasa.GetKasa();
        this.$emit("TunaliKasa", this.Tunali);
      } else {
        this.Tunali.programYemekCeki = 0;
        this.Tunali.programNakit = 0;
        this.Tunali.programVisa = 0;

        this.$refs.TunaliKasa.GetKasa();
        this.$emit("TunaliKasa", this.Tunali);
      }
    },
  },
};
</script>
