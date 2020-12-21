<template>
  <div>
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

      <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
        <div class="d-flex">
          <div class="breadcrumb">
            <a href="/" class="breadcrumb-item">
              <i class="icon-home2 mr-2"></i> Anasayfa
            </a>
            <a href="/Uretim/GidecekOlan" class="breadcrumb-item">Şube Kalan </a>
          </div>

          <a href="#" class="header-elements-toggle text-default d-md-none">
            <i class="icon-more"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="content">
      <!-- Form inputs -->
      <div class="card">
        <div class="card-body">
          <div class="form-group">
            <label>Başlangıç Tarihi</label>
            <input type="date" class="form-control" v-model="formDate" />
          </div>
          <div class="form-group">
            <button class="btn btn-primary" @click="GetReport">Getir</button>
          </div>
          <br />
          <br />
          <br />

          <div class="row">
            <div class="col-6">
              <h2 class="headerDoksanGr">90GR</h2>
              <div >
                <table >
                  <thead>
                    <tr>
                      <th >GOR</th>
                      <th >ARC</th>
                      <th >ARM</th>
                      <th >BAH</th>
                      <th >BİL</th>
                      <th >ANK</th>
                      <th >CEP</th>
                      <th >ATA</th>
                      <th >KAŞ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >
                          <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                        v-model="Gordion.AksamKalan.DoksanGr.Miktar"
                        />
                         </div>
                        
                      
                      </td>
                      <td >

                                <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                        v-model="Arcadium.AksamKalan.DoksanGr.Miktar"
                        />
                         </div>

                      </td>
                      <td >

                    <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                        v-model="Armada.AksamKalan.DoksanGr.Miktar"
                        />
                         </div>

                     
                      </td>
                      <td >

                            <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                         v-model="Bahceli.AksamKalan.DoksanGr.Miktar"
                        />
                         </div>

                      
                      </td>
                      <td >

                        
                            <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                        v-model="Bilkent.AksamKalan.DoksanGr.Miktar"
                        />
                         </div>

                      
                      </td>
                      <td >

                         <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                        v-model="Ankamall.AksamKalan.DoksanGr.Miktar"
                        />
                         </div>

                      </td>
                      <td >

                         <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                      v-model="Cepa.AksamKalan.DoksanGr.Miktar"
                        />
                         </div>

                      </td>
                       <td >

                               <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                     v-model="Atakule.AksamKalan.DoksanGr.Miktar"
                        />
                         </div>


                      </td>
                      <td >
                                    <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                      v-model="Kasmir.AksamKalan.DoksanGr.Miktar"
                        />
                         </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-6">
              <h2 class="headerTavuk">Tavuk</h2>
              <div >
                <table >
                  <thead>
                    <tr>
                      <th>GOR</th>
                      <th>ARC</th>
                      <th>ARM</th>
                      <th>BAH</th>
                      <th>BİL</th>
                      <th>ANK</th>
                      <th>CEP</th>
                      <th>ATA</th>
                      <th>KAŞ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >
                      <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                          v-model="Gordion.AksamKalan.Tavuk.Miktar"
                        />
                         </div>
                      </td>
                      <td >
                        <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                       v-model="Arcadium.AksamKalan.Tavuk.Miktar"
                        />
                         </div>
                       
                      </td>
                      <td >
                           <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                        v-model="Armada.AksamKalan.Tavuk.Miktar"
                        />
                         </div>
                       
                      </td>
                      <td >
                          <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                        v-model="Bahceli.AksamKalan.Tavuk.Miktar"
                        />
                         </div>

                    
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Bilkent.AksamKalan.Tavuk.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Ankamall.AksamKalan.Tavuk.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Cepa.AksamKalan.Tavuk.Miktar"
                        />
                      </td>
                            <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Atakule.AksamKalan.Tavuk.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Kasmir.AksamKalan.Tavuk.Miktar"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <h2 class="headerYuzGr">140GR</h2>
              <div >
                <table >
                  <thead>
                    <tr>
                      <th>GOR</th>
                      <th>ARC</th>
                      <th>ARM</th>
                      <th>BAH</th>
                      <th>BİL</th>
                      <th>ANK</th>
                      <th>CEP</th>
                      <th>ATA</th>
                      <th>KAŞ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >

                         <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                          v-model="Gordion.AksamKalan.YuzKirkGr.Miktar"
                        />
                         </div>

                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Arcadium.AksamKalan.YuzKirkGr.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Armada.AksamKalan.YuzKirkGr.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Bahceli.AksamKalan.YuzKirkGr.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Bilkent.AksamKalan.YuzKirkGr.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Ankamall.AksamKalan.YuzKirkGr.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Cepa.AksamKalan.YuzKirkGr.Miktar"
                        />
                      </td>
                       <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Atakule.AksamKalan.YuzKirkGr.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Kasmir.AksamKalan.YuzKirkGr.Miktar"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-6">
              <h2 class="headerTavukKofte">Tavuk Köfte</h2>
              <div>
                <table >
                  <thead>
                    <tr>
                      <th>GOR</th>
                      <th>ARC</th>
                      <th>ARM</th>
                      <th>BAH</th>
                      <th>BİL</th>
                      <th>ANK</th>
                      <th>CEP</th>
                      <th>ATA</th>
                      <th>KAŞ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Gordion.AksamKalan.TavukKofte.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Arcadium.AksamKalan.TavukKofte.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Armada.AksamKalan.TavukKofte.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Bahceli.AksamKalan.TavukKofte.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Bilkent.AksamKalan.TavukKofte.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Ankamall.AksamKalan.TavukKofte.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Cepa.AksamKalan.TavukKofte.Miktar"
                        />
                      </td>
                         <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Atakule.AksamKalan.TavukKofte.Miktar"
                        />
                      </td>

                      <td >
                        <input
                          type="number"
                          class="form-control"
                         
                          v-model="Kasmir.AksamKalan.TavukKofte.Miktar"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-6">
              <h2 class="headerCocukKofte">Çocuk Köfte</h2>
              <div >
                <table>
                  <thead>
                    <tr  >
                      <th  >GOR</th>
                      <th  >ARC</th>
                      <th >ARM</th>
                      <th  >BAH</th>
                      <th  >BİL</th>
                      <th  >ANK</th>
                      <th  >CEP</th>
                      <th   >ATA</th>
                      <th  >KAŞ</th>
                    </tr>
                  </thead>
                  <tbody> 
                    <tr>
                      <td  >
                         <div class="form-group form-control-sm">
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                          v-model="Gordion.AksamKalan.Cocuk.Miktar"
                        />
                         </div>
                      </td>
                      <td >
                         <div class="form-group form-control-sm">
                        <input
                          type="number"
                        class="form-control input-sm"
                         
                          v-model="Arcadium.AksamKalan.Cocuk.Miktar"
                        />
                         </div>
                      </td>
                      <td >
                        <input
                          type="number"
                         class="form-control input-sm"
                         
                          v-model="Armada.AksamKalan.Cocuk.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control input-sm"
                         
                          v-model="Bahceli.AksamKalan.Cocuk.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control input-sm"
                         
                          v-model="Bilkent.AksamKalan.Cocuk.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control input-sm"
                         
                          v-model="Ankamall.AksamKalan.Cocuk.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control input-sm"
                         
                          v-model="Cepa.AksamKalan.Cocuk.Miktar"
                        />
                      </td>
                              <td >
                        <input
                          type="number"
                          class="form-control input-sm"
                         
                          v-model="Atakule.AksamKalan.Cocuk.Miktar"
                        />
                      </td>
                      <td >
                        <input
                          type="number"
                          class="form-control input-sm"
                         
                          v-model="Kasmir.AksamKalan.Cocuk.Miktar"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="form-group">
                         <button class="btn btn-primary" @click="Update">Güncelle</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>
<script>
import Service from "../../Service";
import moment from "moment";
export default {
  data() {
    return {
      Ankamall: {
        SubeId: "",
        AksamKalan: {
         
          Cocuk: { Miktar : 0,_id:''},
          DoksanGr:{ Miktar : 0,_id:''},
          YuzKirkGr: { Miktar : 0,_id:''},
          Tavuk: { Miktar : 0,_id:''},
          TavukKofte:{ Miktar : 0,_id:''},
        },
        ihtiyac: {
          Cocuk:{ Miktar : 0,_id:''},
          DoksanGr: { Miktar : 0,_id:''},
          YuzKirkGr:{ Miktar : 0,_id:''},
          Tavuk: { Miktar : 0,_id:''},
          TavukKofte: { Miktar : 0,_id:''},
        }
      },
      Gordion: {
        SubeId: "",
        AksamKalan: {
            
          Cocuk: { Miktar : 0,_id:''},
          DoksanGr: { Miktar : 0,_id:''},
          YuzKirkGr: { Miktar : 0,_id:''},
          Tavuk: { Miktar : 0,_id:''},
          TavukKofte: { Miktar : 0,_id:''},
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        }
      },
      Arcadium: {
        SubeId: "",
        AksamKalan: {
           
          Cocuk: { Miktar : 0,_id:''},
          DoksanGr: { Miktar : 0,_id:''},
          YuzKirkGr: { Miktar : 0,_id:''},
          Tavuk: { Miktar : 0,_id:''},
          TavukKofte: { Miktar : 0,_id:''},
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        }
      },
      Armada: {
        SubeId: "",
        AksamKalan: {
            
          Cocuk: { Miktar : 0,_id:''},
          DoksanGr:{ Miktar : 0,_id:''},
          YuzKirkGr:{ Miktar : 0,_id:''},
          Tavuk: { Miktar : 0,_id:''},
          TavukKofte: { Miktar : 0,_id:''},
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        }
      },
      Atakule: {
        SubeId: "",
        AksamKalan: {
         
          Cocuk: { Miktar : 0,_id:''},
          DoksanGr:{ Miktar : 0,_id:''},
          YuzKirkGr: { Miktar : 0,_id:''},
          Tavuk: { Miktar : 0,_id:''},
          TavukKofte: { Miktar : 0,_id:''},
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        }
      },

      Bahceli: {
        SubeId: "",
        AksamKalan: {
           
          Cocuk: { Miktar : 0,_id:''},
          DoksanGr: { Miktar : 0,_id:''},
          YuzKirkGr: { Miktar : 0,_id:''},
          Tavuk: { Miktar : 0,_id:''},
          TavukKofte: { Miktar : 0,_id:''},
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        }
      },
      Bilkent: {
        SubeId: "",
        AksamKalan: {
           
          Cocuk:{ Miktar : 0,_id:''},
          DoksanGr: { Miktar : 0,_id:''},
          YuzKirkGr: { Miktar : 0,_id:''},
          Tavuk:{ Miktar : 0,_id:''},
          TavukKofte: { Miktar : 0,_id:''},
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        }
      },
      Cepa: {
        SubeId: "",
        AksamKalan: {
            
          Cocuk: { Miktar : 0,_id:''},
          DoksanGr: { Miktar : 0,_id:''},
          YuzKirkGr: { Miktar : 0,_id:''},
          Tavuk: { Miktar : 0,_id:''},
          TavukKofte:{ Miktar : 0,_id:''},
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        }
      },
      Kasmir: {
        SubeId: "",
        AksamKalan: {
           
          Cocuk: { Miktar : 0,_id:''},
          DoksanGr: { Miktar : 0,_id:''},
          YuzKirkGr: { Miktar : 0,_id:''},
          Tavuk: { Miktar : 0,_id:''},
          TavukKofte: { Miktar : 0,_id:''},
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        }
      },
      GidecekOlan: {
        Gordion: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        },
        Arcadium: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        },
        Armada: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        },
        Bahceli: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        },
        Bilkent: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        },
        Ankamall: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        },
        Cepa: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        },
        Kasmir: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        },
        Atakule: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0
        }
      },
      GetDate: "",
      formDate: "",
      birGünOnceTarih: "",
      birGünOnceTarihFormat: ""
    };
  },
  async mounted() {
    moment.locale("tr");
    this.GetDate = moment(this.formDate).format("YYYY.MM.DD");

    let subeList = await Service.list("sube");

    subeList.data.forEach(item => {
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
      }
    });
  },
  methods: {
    async GetReport() {
      //SIFIRLAMA

      //ATAKULE SIFIRLAMA
      this.Atakule.AksamKalan.Cocuk.Miktar = 0;
      this.Atakule.AksamKalan.DoksanGr.Miktar = 0;
      this.Atakule.AksamKalan.YuzKirkGr.Miktar = 0;
      this.Atakule.AksamKalan.Tavuk.Miktar = 0;
      this.Atakule.AksamKalan.TavukKofte.Miktar = 0;

      //GORDİON SIFIRLAMA
      this.Gordion.AksamKalan.Cocuk.Miktar = 0;
      this.Gordion.AksamKalan.DoksanGr.Miktar = 0;
      this.Gordion.AksamKalan.YuzKirkGr.Miktar = 0;
      this.Gordion.AksamKalan.Tavuk.Miktar = 0;
      this.Gordion.AksamKalan.TavukKofte.Miktar = 0;

      

      //ARCADİUM SIFIRLAMA
      this.Arcadium.AksamKalan.Cocuk.Miktar = 0;
      this.Arcadium.AksamKalan.DoksanGr.Miktar = 0;
      this.Arcadium.AksamKalan.YuzKirkGr.Miktar = 0;
      this.Arcadium.AksamKalan.Tavuk.Miktar = 0;
      this.Arcadium.AksamKalan.TavukKofte.Miktar = 0;


      //ARMADA SIFIRLAMA

      this.Armada.AksamKalan.Cocuk.Miktar = 0;
      this.Armada.AksamKalan.DoksanGr.Miktar = 0;
      this.Armada.AksamKalan.YuzKirkGr.Miktar = 0;
      this.Armada.AksamKalan.Tavuk.Miktar = 0;
      this.Armada.AksamKalan.TavukKofte.Miktar = 0;


      //BAHÇELİ SIFIRLAMA

      this.Bahceli.AksamKalan.Cocuk.Miktar = 0;
      this.Bahceli.AksamKalan.DoksanGr.Miktar = 0;
      this.Bahceli.AksamKalan.YuzKirkGr.Miktar = 0;
      this.Bahceli.AksamKalan.Tavuk.Miktar = 0;
      this.Bahceli.AksamKalan.TavukKofte.Miktar = 0;



      //BİLKENT SIFIRLAMA

      this.Bilkent.AksamKalan.Cocuk.Miktar = 0;
      this.Bilkent.AksamKalan.DoksanGr.Miktar = 0;
      this.Bilkent.AksamKalan.YuzKirkGr.Miktar = 0;
      this.Bilkent.AksamKalan.Tavuk.Miktar = 0;
      this.Bilkent.AksamKalan.TavukKofte.Miktar = 0;

 

      //ANKAMALL SIFIRLAMA

      this.Ankamall.AksamKalan.Cocuk.Miktar= 0;
      this.Ankamall.AksamKalan.DoksanGr.Miktar = 0;
      this.Ankamall.AksamKalan.YuzKirkGr.Miktar = 0;
      this.Ankamall.AksamKalan.Tavuk.Miktar = 0;
      this.Ankamall.AksamKalan.TavukKofte.Miktar = 0;



      //CEPA SIFIRLAMA

      this.Cepa.AksamKalan.Cocuk.Miktar = 0;
      this.Cepa.AksamKalan.DoksanGr.Miktar = 0;
      this.Cepa.AksamKalan.YuzKirkGr.Miktar = 0;
      this.Cepa.AksamKalan.Tavuk.Miktar = 0;
      this.Cepa.AksamKalan.TavukKofte.Miktar = 0;

   
      //KAŞMİR SIFIRLAMA

      this.Kasmir.AksamKalan.Cocuk.Miktar = 0;
      this.Kasmir.AksamKalan.DoksanGr.Miktar = 0;
      this.Kasmir.AksamKalan.YuzKirkGr.Miktar = 0;
      this.Kasmir.AksamKalan.Tavuk.Miktar = 0;
      this.Kasmir.AksamKalan.TavukKofte.Miktar = 0;

  

      //ŞUBELER KALAN BAŞLANGIÇ
      // eslint-disable-next-line no-console

      this.birGünOnceTarih = moment(this.formDate)
        .add(-1, "days")
        .format("YYYY.MM.DD");
      this.birGünOnceTarihFormat = moment(this.formDate).format("dddd");
      //ARMADA KALANLAR
      let armadaResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Armada.SubeId._id,
        startDate: moment(this.formDate).format("YYYY.MM.DD")
      });
      armadaResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Armada.AksamKalan.DoksanGr.Miktar = item.miktar;
          this.Armada.AksamKalan.DoksanGr._id = item._id;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Armada.AksamKalan.YuzKirkGr.Miktar = item.miktar;
           this.Armada.AksamKalan.YuzKirkGr._id = item._id;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Armada.AksamKalan.Cocuk.Miktar = item.miktar;
           this.Armada.AksamKalan.Cocuk._id = item._id;
        }
        if (item.urunAdi === "TavukFileto") {
         this.Armada.AksamKalan.Tavuk.Miktar = item.miktar;
           this.Armada.AksamKalan.Tavuk._id = item._id;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Armada.AksamKalan.TavukKofte.Miktar = item.miktar;
           this.Armada.AksamKalan.TavukKofte._id = item._id;
        }
      });
      //Atakule KALANLAR
      let atakuleResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Atakule.SubeId._id,
        startDate:moment(this.formDate).format("YYYY.MM.DD")
      });
      atakuleResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Atakule.AksamKalan.DoksanGr.Miktar = item.miktar;
           this.Atakule.AksamKalan.DoksanGr._id = item._id;  
        }
        if (item.urunAdi === "YuzKirkGr") {
           this.Atakule.AksamKalan.YuzKirkGr.Miktar = item.miktar;
           this.Atakule.AksamKalan.YuzKirkGr._id = item._id;  
        }
        if (item.urunAdi === "CocukKofte") {
            this.Atakule.AksamKalan.Cocuk.Miktar = item.miktar;
           this.Atakule.AksamKalan.Cocuk._id = item._id;  
        }
        if (item.urunAdi === "TavukFileto") {
         this.Atakule.AksamKalan.Tavuk.Miktar = item.miktar;
           this.Atakule.AksamKalan.Tavuk._id = item._id;  
        }
        if (item.urunAdi === "TavukKofte") {
           this.Atakule.AksamKalan.TavukKofte.Miktar = item.miktar;
           this.Atakule.AksamKalan.TavukKofte._id = item._id;  
        }
      });
      //ANKAMALL KALANLAR

      let ankamallResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Ankamall.SubeId._id,
        startDate: moment(this.formDate).format("YYYY.MM.DD")
      });
      ankamallResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
           this.Ankamall.AksamKalan.DoksanGr.Miktar = item.miktar;
           this.Ankamall.AksamKalan.DoksanGr.id = item._id;  
        }
        if (item.urunAdi === "YuzKirkGr") {
              this.Ankamall.AksamKalan.YuzKirkGr.Miktar = item.miktar;
           this.Ankamall.AksamKalan.YuzKirkGr._id = item._id;  
        }
        if (item.urunAdi === "CocukKofte") {
             this.Ankamall.AksamKalan.Cocuk.Miktar = item.miktar;
           this.Ankamall.AksamKalan.Cocuk._id = item._id;  
        }
        if (item.urunAdi === "TavukFileto") {
             this.Ankamall.AksamKalan.Tavuk.Miktar = item.miktar;
           this.Ankamall.AksamKalan.Tavuk._id = item._id;  
        }
        if (item.urunAdi === "TavukKofte") {
              this.Ankamall.AksamKalan.TavukKofte.Miktar = item.miktar;
           this.Ankamall.AksamKalan.TavukKofte._id = item._id;  
        }
      });

      //GORDİON
      let gordionResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Gordion.SubeId._id,
        startDate: moment(this.formDate).format("YYYY.MM.DD")
      });
      gordionResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Gordion.AksamKalan.DoksanGr.Miktar = item.miktar;
          this.Gordion.AksamKalan.DoksanGr._id = item._id;
        }
        if (item.urunAdi === "YuzKirkGr") {
           this.Gordion.AksamKalan.YuzKirkGr.Miktar = item.miktar;
          this.Gordion.AksamKalan.YuzKirkGr._id = item._id;
        }
        if (item.urunAdi === "CocukKofte") {
           this.Gordion.AksamKalan.Cocuk.Miktar = item.miktar;
          this.Gordion.AksamKalan.Cocuk._id = item._id;
        }
        if (item.urunAdi === "TavukFileto") {
           this.Gordion.AksamKalan.Tavuk.Miktar = item.miktar;
          this.Gordion.AksamKalan.Tavuk._id = item._id;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Gordion.AksamKalan.TavukKofte.Miktar = item.miktar;
          this.Gordion.AksamKalan.TavukKofte.id = item._id;
        }
      });

      //CEPA
      let cepaResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Cepa.SubeId._id,
        startDate: moment(this.formDate).format("YYYY.MM.DD")
      });
      cepaResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Cepa.AksamKalan.DoksanGr.Miktar = item.miktar;
          this.Cepa.AksamKalan.DoksanGr._id = item._id;
        }
        if (item.urunAdi === "YuzKirkGr") {
                this.Cepa.AksamKalan.YuzKirkGr.Miktar = item.miktar;
          this.Cepa.AksamKalan.YuzKirkGr._id = item._id;
        }
        if (item.urunAdi === "CocukKofte") {
               this.Cepa.AksamKalan.Cocuk.Miktar = item.miktar;
          this.Cepa.AksamKalan.Cocuk._id = item._id;
        }
        if (item.urunAdi === "TavukFileto") {
                 this.Cepa.AksamKalan.Tavuk.Miktar = item.miktar;
          this.Cepa.AksamKalan.Tavuk._id = item._id;
        }
        if (item.urunAdi === "TavukKofte") {
                 this.Cepa.AksamKalan.TavukKofte.Miktar = item.miktar;
          this.Cepa.AksamKalan.TavukKofte._id = item._id;
        }
      });

      //BİLKENT
      let bilkentResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Bilkent.SubeId._id,
        startDate: moment(this.formDate).format("YYYY.MM.DD")
      });
      bilkentResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Bilkent.AksamKalan.DoksanGr.Miktar = item.miktar;
           this.Bilkent.AksamKalan.DoksanGr._id = item._id;
        }
        if (item.urunAdi === "YuzKirkGr") {
                 this.Bilkent.AksamKalan.YuzKirkGr.Miktar = item.miktar;
           this.Bilkent.AksamKalan.YuzKirkGr._id = item._id;
        }
        if (item.urunAdi === "CocukKofte") {
                 this.Bilkent.AksamKalan.Cocuk.Miktar = item.miktar;
           this.Bilkent.AksamKalan.Cocuk._id = item._id;
        }
        if (item.urunAdi === "TavukFileto") {
                 this.Bilkent.AksamKalan.Tavuk.Miktar = item.miktar;
           this.Bilkent.AksamKalan.Tavuk._id = item._id;
        }
        if (item.urunAdi === "TavukKofte") {
                 this.Bilkent.AksamKalan.TavukKofte.Miktar = item.miktar;
           this.Bilkent.AksamKalan.TavukKofte._id = item._id;
        }
      });

      //Arcadium
      let arcadiumResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Arcadium.SubeId._id,
        startDate: moment(this.formDate).format("YYYY.MM.DD")
      });
      arcadiumResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Arcadium.AksamKalan.DoksanGr.Miktar = item.miktar;
          this.Arcadium.AksamKalan.DoksanGr._id = item._id;
        }
        if (item.urunAdi === "YuzKirkGr") {
             this.Arcadium.AksamKalan.YuzKirkGr.Miktar = item.miktar;
          this.Arcadium.AksamKalan.YuzKirkGr._id = item._id;
        }
        if (item.urunAdi === "CocukKofte") {
            this.Arcadium.AksamKalan.Cocuk.Miktar = item.miktar;
          this.Arcadium.AksamKalan.Cocuk._id = item._id;
        }
        if (item.urunAdi === "TavukFileto") {
           this.Arcadium.AksamKalan.Tavuk.Miktar = item.miktar;
          this.Arcadium.AksamKalan.Tavuk._id = item._id;
        }
        if (item.urunAdi === "TavukKofte") {
            this.Arcadium.AksamKalan.TavukKofte.Miktar = item.miktar;
          this.Arcadium.AksamKalan.TavukKofte._id = item._id;
        }
      });

      //BAHÇELİ
      let bahceliResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Bahceli.SubeId._id,
        startDate: moment(this.formDate).format("YYYY.MM.DD")
      });
      bahceliResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Bahceli.AksamKalan.DoksanGr.Miktar = item.miktar;
          this.Bahceli.AksamKalan.DoksanGr._id = item._id;
        }
        if (item.urunAdi === "YuzKirkGr") {
             this.Bahceli.AksamKalan.YuzKirkGr.Miktar = item.miktar;
          this.Bahceli.AksamKalan.YuzKirkGr._id = item._id;
        }
        if (item.urunAdi === "CocukKofte") {
             this.Bahceli.AksamKalan.Cocuk.Miktar = item.miktar;
          this.Bahceli.AksamKalan.Cocuk._id = item._id;
        }
        if (item.urunAdi === "TavukFileto") {
            this.Bahceli.AksamKalan.Tavuk.Miktar = item.miktar;
          this.Bahceli.AksamKalan.Tavuk._id = item._id;
        }
        if (item.urunAdi === "TavukKofte") {
           this.Bahceli.AksamKalan.Tavuk.Miktar = item.miktar;
          this.Bahceli.AksamKalan.Tavuk._id = item._id;
        }
      });

      //KAŞMİR
      let kasmirResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Kasmir.SubeId._id,
        startDate:moment(this.formDate).format("YYYY.MM.DD")
      });
      kasmirResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Kasmir.AksamKalan.DoksanGr.Miktar = item.miktar;
                this.Kasmir.AksamKalan.DoksanGr._id = item._id;
        }
        if (item.urunAdi === "YuzKirkGr") {
           this.Kasmir.AksamKalan.YuzKirkGr.Miktar = item.miktar;
                this.Kasmir.AksamKalan.YuzKirkGr._id = item._id;
        }
        if (item.urunAdi === "CocukKofte") {
           this.Kasmir.AksamKalan.Cocuk.Miktar = item.miktar;
                this.Kasmir.AksamKalan.Cocuk._id = item._id;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Kasmir.AksamKalan.Tavuk.Miktar = item.miktar;
                this.Kasmir.AksamKalan.Tavuk._id = item._id;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Kasmir.AksamKalan.TavukKofte.Miktar = item.miktar;
                this.Kasmir.AksamKalan.TavukKofte._id = item._id;
        }
      });

      // eslint-disable-next-line no-console
      console.log(this.Armada.AksamKalan);
      //ŞUBELER KALAN BİTİŞ

      //ŞUBE İHTİYAÇ BAŞLANGIÇ

      //ARMADA İHTİYAÇ
      let armadaIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Armada.SubeId._id,
        gun: this.birGünOnceTarihFormat
      });
      armadaIhtiyacResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Armada.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Armada.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Armada.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Armada.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Armada.ihtiyac.TavukKofte = item.miktar;
        }
      });
      //ATAKULE İHTİYAÇ
      let atakuleIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Atakule.SubeId._id,
        gun: this.birGünOnceTarihFormat
      });
      atakuleIhtiyacResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Atakule.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Atakule.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Atakule.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Atakule.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Atakule.ihtiyac.TavukKofte = item.miktar;
        }
      });
      //ANKAMALL İHTİYAÇ

      let ankamallIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Ankamall.SubeId._id,
        gun: this.birGünOnceTarihFormat
      });
      ankamallIhtiyacResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Ankamall.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Ankamall.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Ankamall.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Ankamall.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Ankamall.ihtiyac.TavukKofte = item.miktar;
        }
      });

      //GORDİON İHTİYAÇ
      let gordionIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Gordion.SubeId._id,
        gun: this.birGünOnceTarihFormat
      });
      gordionIhtiyacResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Gordion.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Gordion.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Gordion.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Gordion.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Gordion.ihtiyac.TavukKofte = item.miktar;
        }
      });

      //CEPA İHTİYAÇ
      let cepaIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Cepa.SubeId._id,
        gun: this.birGünOnceTarihFormat
      });
      cepaIhtiyacResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Cepa.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Cepa.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Cepa.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Cepa.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Cepa.ihtiyac.TavukKofte = item.miktar;
        }
      });

      //BİLKENT İHTİYAÇ
      let bilkentIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Bilkent.SubeId._id,
        gun: this.birGünOnceTarihFormat
      });
      bilkentIhtiyacResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Bilkent.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Bilkent.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Bilkent.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Bilkent.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Bilkent.ihtiyac.TavukKofte = item.miktar;
        }
      });

      //Arcadium İHTİYAÇ
      let arcadiumIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Arcadium.SubeId._id,
        gun: this.birGünOnceTarihFormat
      });
      arcadiumIhtiyacResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Arcadium.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Arcadium.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Arcadium.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Arcadium.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Arcadium.ihtiyac.TavukKofte = item.miktar;
        }
      });

      //BAHÇELİ İHTİYAÇ
      let bahceliIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Bahceli.SubeId._id,
        gun: this.birGünOnceTarihFormat
      });
      bahceliIhtiyacResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Bahceli.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Bahceli.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Bahceli.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Bahceli.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Bahceli.ihtiyac.TavukKofte = item.miktar;
        }
      });

      //KAŞMİR İHTİYAÇ
      let kasmirIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Kasmir.SubeId._id,
        gun: this.birGünOnceTarihFormat
      });
      kasmirIhtiyacResult.forEach(item => {
        if (item.urunAdi === "DoksanGr") {
          this.Kasmir.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Kasmir.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Kasmir.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Kasmir.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Kasmir.ihtiyac.TavukKofte = item.miktar;
        }
      });

      


    },
    async Update(){

        //şube şube gönder
        //Gordion güncelleme
        await Service.update('SubeKalan',this.Gordion.AksamKalan)
        //arcadium güncelleme
        await Service.update('SubeKalan',this.Arcadium.AksamKalan)
         //armada güncelleme
       await Service.update('SubeKalan',this.Armada.AksamKalan)
        //bahçeli güncelleme
       await   Service.update('SubeKalan',this.Bahceli.AksamKalan)
        //Bilkent güncelleme
       await   Service.update('SubeKalan',this.Bilkent.AksamKalan)
        //Ankamal güncelleme
        await  Service.update('SubeKalan',this.Ankamall.AksamKalan)
          //Cepa güncelleme
         await Service.update('SubeKalan',this.Cepa.AksamKalan)
          //atakule güncelleme
        await    Service.update('SubeKalan',this.Atakule.AksamKalan)
        //kaşmir güncelleme
       await   Service.update('SubeKalan',this.Kasmir.AksamKalan)
    }
  }
};
</script>
<style scoped>
.headerDoksanGr {
  color: red;
}
.headerYuzGr {
  color: blue;
}
.headerCocukKofte {
  color: yellowgreen;
}
.headerTavuk {
  color: brown;
}
.headerTavukKofte {
  color: chocolate;
}
</style>