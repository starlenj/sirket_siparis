<template>
  <div>
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Üretim</span> - Gidecek Olan
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
            <a href="/Uretim/GidecekOlan" class="breadcrumb-item">Gidecek Olan</a>
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
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>GOR</th>
                      <th>ARC</th>
                      <th>ARM</th>
                      <th>BAH</th>
                      <th>BİL</th>
                      <th>ANK</th>
                      <th>ATA</th>
                      <th>CEP</th>
                      <th>UMI</th>
                      <th>KAŞ</th>
                      <th>BAT</th>
                      <th>INC</th>
                      <th>TUN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Gordion.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Arcadium.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Armada.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Bahceli.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Bilkent.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Ankamall.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Atakule.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Cepa.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Umitkoy.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Kasmir.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Batikent.DoksanGr"
                          />
                        </div>
                      </td>
                       <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Incek.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Tunali.DoksanGr"
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
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>GOR</th>
                      <th>ARC</th>
                      <th>ARM</th>
                      <th>BAH</th>
                      <th>BİL</th>
                      <th>ANK</th>
                      <th>ATA</th>
                      <th>CEP</th>
                      <th>UMI</th>
                      <th>KAŞ</th>
                      <th>BAT</th>
                      <th>INC</th>
                      <th>TUN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Gordion.Tavuk"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Arcadium.Tavuk"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Armada.Tavuk"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Bahceli.Tavuk"
                          />
                        </div>
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Bilkent.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Ankamall.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Atakule.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Cepa.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Umitkoy.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Kasmir.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Batikent.Tavuk"
                        />
                      </td>
                           <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Incek.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Tunali.Tavuk"
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
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>GOR</th>
                      <th>ARC</th>
                      <th>ARM</th>
                      <th>BAH</th>
                      <th>BİL</th>
                      <th>ANK</th>
                      <th>ATA</th>
                      <th>CEP</th>
                      <th>UMI</th>

                      <th>KAŞ</th>
                      <th>BAT</th>
                      <th>INC</th>
                      <th>TUN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Gordion.YuzKirkGr"
                          />
                        </div>
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Arcadium.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Armada.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Bahceli.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Bilkent.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Ankamall.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Atakule.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Cepa.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Umitkoy.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Kasmir.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Batikent.YuzKirkGr"
                        />
                      </td>
                         <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Incek.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Tunali.YuzKirkGr"
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
                <table>
                  <thead>
                    <tr>
                      <th>GOR</th>
                      <th>ARC</th>
                      <th>ARM</th>
                      <th>BAH</th>
                      <th>BİL</th>
                      <th>ANK</th>
                      <th>ATA</th>
                      <th>CEP</th>
                      <th>UMI</th>

                      <th>KAŞ</th>
                      <th>BAT</th>
                      <th>INC</th>
                      <th>TUN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Gordion.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Arcadium.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Armada.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Bahceli.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Bilkent.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Ankamall.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Atakule.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Cepa.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Umitkoy.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Kasmir.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Batikent.TavukKofte"
                        />
                      </td>
                       <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Incek.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="GidecekOlan.Tunali.TavukKofte"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-6">
              <h2 class="headerCocukKofte">Çocuk Köfte</h2>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>GOR</th>
                      <th>ARC</th>
                      <th>ARM</th>
                      <th>BAH</th>
                      <th>BİL</th>
                      <th>ANK</th>
                      <th>ATA</th>
                      <th>CEP</th>
                      <th>UMI</th>

                      <th>KAŞ</th>
                      <th>BAT</th>
                      <th>INC</th>
                      <th>TUN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Gordion.Cocuk"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Arcadium.Cocuk"
                          />
                        </div>
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Armada.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Bahceli.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Bilkent.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Ankamall.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Atakule.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Cepa.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Umitkoy.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Kasmir.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Batikent.Cocuk"
                        />
                      </td>
                       <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Incek.Cocuk"
                        />
                      </td>
                       <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="GidecekOlan.Tunali.Cocuk"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      Incek: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      Tunali: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },

      Umitkoy: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      Gordion: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      Arcadium: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      Armada: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      Atakule: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      Batikent: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },

      Bahceli: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      Bilkent: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      Cepa: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      Kasmir: {
        SubeId: "",
        AksamKalan: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        ihtiyac: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },

      GidecekOlan: {
        Gordion: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Incek: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Tunali: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Arcadium: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Armada: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Batikent: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Bahceli: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Bilkent: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Ankamall: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Cepa: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Kasmir: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Atakule: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
        Umitkoy: {
          Cocuk: 0,
          DoksanGr: 0,
          YuzKirkGr: 0,
          Tavuk: 0,
          TavukKofte: 0,
        },
      },
      GetDate: "",
      formDate: "",
      birGünOnceTarih: "",
      birGünOnceTarihFormat: "",
    };
  },
  async mounted() {
    moment.locale("tr");
    this.GetDate = moment().format("YYYY.MM.DD");

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
      } else if (item.name === "Ümitköy") {
        this.Umitkoy.SubeId = item;
      } else if (item.name === "Batıkent") {
        this.Batikent.SubeId = item;
      } else if (item.name === "Incek") {
        this.Incek.SubeId = item;
      } else if (item.name === "TUNALI") {
        this.Tunali.SubeId = item;
      } 
    });
  },
  methods: {
    async GetReport() {
      //SIFIRLAMA

      //Incek SIFIRLAMA
      this.Incek.AksamKalan.Cocuk = 0;
      this.Incek.AksamKalan.DoksanGr = 0;
      this.Incek.AksamKalan.YuzKirkGr = 0;
      this.Incek.AksamKalan.Tavuk = 0;
      this.Incek.AksamKalan.TavukKofte = 0;

      this.Incek.ihtiyac.Cocuk = 0;
      this.Incek.ihtiyac.DoksanGr = 0;
      this.Incek.ihtiyac.YuzKirkGr = 0;
      this.Incek.ihtiyac.Tavuk = 0;
      this.Incek.ihtiyac.TavukKofte = 0;
      //Tunali SIFIRLAMA
      this.Tunali.AksamKalan.Cocuk = 0;
      this.Tunali.AksamKalan.DoksanGr = 0;
      this.Tunali.AksamKalan.YuzKirkGr = 0;
      this.Tunali.AksamKalan.Tavuk = 0;
      this.Tunali.AksamKalan.TavukKofte = 0;

      this.Tunali.ihtiyac.Cocuk = 0;
      this.Tunali.ihtiyac.DoksanGr = 0;
      this.Tunali.ihtiyac.YuzKirkGr = 0;
      this.Tunali.ihtiyac.Tavuk = 0;
      this.Tunali.ihtiyac.TavukKofte = 0;

      //ATAKULE SIFIRLAMA
      this.Atakule.AksamKalan.Cocuk = 0;
      this.Atakule.AksamKalan.DoksanGr = 0;
      this.Atakule.AksamKalan.YuzKirkGr = 0;
      this.Atakule.AksamKalan.Tavuk = 0;
      this.Atakule.AksamKalan.TavukKofte = 0;

      this.Atakule.ihtiyac.Cocuk = 0;
      this.Atakule.ihtiyac.DoksanGr = 0;
      this.Atakule.ihtiyac.YuzKirkGr = 0;
      this.Atakule.ihtiyac.Tavuk = 0;
      this.Atakule.ihtiyac.TavukKofte = 0;

      //GORDİON SIFIRLAMA
      this.Gordion.AksamKalan.Cocuk = 0;
      this.Gordion.AksamKalan.DoksanGr = 0;
      this.Gordion.AksamKalan.YuzKirkGr = 0;
      this.Gordion.AksamKalan.Tavuk = 0;
      this.Gordion.AksamKalan.TavukKofte = 0;

      this.Gordion.ihtiyac.Cocuk = 0;
      this.Gordion.ihtiyac.DoksanGr = 0;
      this.Gordion.ihtiyac.YuzKirkGr = 0;
      this.Gordion.ihtiyac.Tavuk = 0;
      this.Gordion.ihtiyac.TavukKofte = 0;

      //ARCADİUM SIFIRLAMA
      this.Arcadium.AksamKalan.Cocuk = 0;
      this.Arcadium.AksamKalan.DoksanGr = 0;
      this.Arcadium.AksamKalan.YuzKirkGr = 0;
      this.Arcadium.AksamKalan.Tavuk = 0;
      this.Arcadium.AksamKalan.TavukKofte = 0;

      this.Arcadium.ihtiyac.Cocuk = 0;
      this.Arcadium.ihtiyac.DoksanGr = 0;
      this.Arcadium.ihtiyac.YuzKirkGr = 0;
      this.Arcadium.ihtiyac.Tavuk = 0;
      this.Arcadium.ihtiyac.TavukKofte = 0;
      //ARMADA SIFIRLAMA

      this.Armada.AksamKalan.Cocuk = 0;
      this.Armada.AksamKalan.DoksanGr = 0;
      this.Armada.AksamKalan.YuzKirkGr = 0;
      this.Armada.AksamKalan.Tavuk = 0;
      this.Armada.AksamKalan.TavukKofte = 0;

      this.Armada.ihtiyac.Cocuk = 0;
      this.Armada.ihtiyac.DoksanGr = 0;
      this.Armada.ihtiyac.YuzKirkGr = 0;
      this.Armada.ihtiyac.Tavuk = 0;
      this.Armada.ihtiyac.TavukKofte = 0;
      //BAHÇELİ SIFIRLAMA

      this.Bahceli.AksamKalan.Cocuk = 0;
      this.Bahceli.AksamKalan.DoksanGr = 0;
      this.Bahceli.AksamKalan.YuzKirkGr = 0;
      this.Bahceli.AksamKalan.Tavuk = 0;
      this.Bahceli.AksamKalan.TavukKofte = 0;

      this.Bahceli.ihtiyac.Cocuk = 0;
      this.Bahceli.ihtiyac.DoksanGr = 0;
      this.Bahceli.ihtiyac.YuzKirkGr = 0;
      this.Bahceli.ihtiyac.Tavuk = 0;
      this.Bahceli.ihtiyac.TavukKofte = 0;

      //BİLKENT SIFIRLAMA

      this.Bilkent.AksamKalan.Cocuk = 0;
      this.Bilkent.AksamKalan.DoksanGr = 0;
      this.Bilkent.AksamKalan.YuzKirkGr = 0;
      this.Bilkent.AksamKalan.Tavuk = 0;
      this.Bilkent.AksamKalan.TavukKofte = 0;

      this.Bilkent.ihtiyac.Cocuk = 0;
      this.Bilkent.ihtiyac.DoksanGr = 0;
      this.Bilkent.ihtiyac.YuzKirkGr = 0;
      this.Bilkent.ihtiyac.Tavuk = 0;
      this.Bilkent.ihtiyac.TavukKofte = 0;

      //ANKAMALL SIFIRLAMA

      this.Ankamall.AksamKalan.Cocuk = 0;
      this.Ankamall.AksamKalan.DoksanGr = 0;
      this.Ankamall.AksamKalan.YuzKirkGr = 0;
      this.Ankamall.AksamKalan.Tavuk = 0;
      this.Ankamall.AksamKalan.TavukKofte = 0;

      this.Ankamall.ihtiyac.Cocuk = 0;
      this.Ankamall.ihtiyac.DoksanGr = 0;
      this.Ankamall.ihtiyac.YuzKirkGr = 0;
      this.Ankamall.ihtiyac.Tavuk = 0;
      this.Ankamall.ihtiyac.TavukKofte = 0;

      //CEPA SIFIRLAMA

      this.Cepa.AksamKalan.Cocuk = 0;
      this.Cepa.AksamKalan.DoksanGr = 0;
      this.Cepa.AksamKalan.YuzKirkGr = 0;
      this.Cepa.AksamKalan.Tavuk = 0;
      this.Cepa.AksamKalan.TavukKofte = 0;

      this.Cepa.ihtiyac.Cocuk = 0;
      this.Cepa.ihtiyac.DoksanGr = 0;
      this.Cepa.ihtiyac.YuzKirkGr = 0;
      this.Cepa.ihtiyac.Tavuk = 0;
      this.Cepa.ihtiyac.TavukKofte = 0;
      //KAŞMİR SIFIRLAMA

      this.Kasmir.AksamKalan.Cocuk = 0;
      this.Kasmir.AksamKalan.DoksanGr = 0;
      this.Kasmir.AksamKalan.YuzKirkGr = 0;
      this.Kasmir.AksamKalan.Tavuk = 0;
      this.Kasmir.AksamKalan.TavukKofte = 0;

      this.Kasmir.ihtiyac.Cocuk = 0;
      this.Kasmir.ihtiyac.DoksanGr = 0;
      this.Kasmir.ihtiyac.YuzKirkGr = 0;
      this.Kasmir.ihtiyac.Tavuk = 0;
      this.Kasmir.ihtiyac.TavukKofte = 0;

      //Ümitköy Sıfırlama

      //KAŞMİR SIFIRLAMA

      this.Umitkoy.AksamKalan.Cocuk = 0;
      this.Umitkoy.AksamKalan.DoksanGr = 0;
      this.Umitkoy.AksamKalan.YuzKirkGr = 0;
      this.Umitkoy.AksamKalan.Tavuk = 0;
      this.Umitkoy.AksamKalan.TavukKofte = 0;

      this.Umitkoy.ihtiyac.Cocuk = 0;
      this.Umitkoy.ihtiyac.DoksanGr = 0;
      this.Umitkoy.ihtiyac.YuzKirkGr = 0;
      this.Umitkoy.ihtiyac.Tavuk = 0;
      this.Umitkoy.ihtiyac.TavukKofte = 0;

      //BATIKENT SIFIRLAMA

      this.Batikent.AksamKalan.Cocuk = 0;
      this.Batikent.AksamKalan.DoksanGr = 0;
      this.Batikent.AksamKalan.YuzKirkGr = 0;
      this.Batikent.AksamKalan.Tavuk = 0;
      this.Batikent.AksamKalan.TavukKofte = 0;

      this.Batikent.ihtiyac.Cocuk = 0;
      this.Batikent.ihtiyac.DoksanGr = 0;
      this.Batikent.ihtiyac.YuzKirkGr = 0;
      this.Batikent.ihtiyac.Tavuk = 0;
      this.Batikent.ihtiyac.TavukKofte = 0;
      //ŞUBELER KALAN BAŞLANGIÇ

      this.birGünOnceTarih = moment(this.formDate)
        .add(-1, "days")
        .format("YYYY.MM.DD");
      this.birGünOnceTarihFormat = moment(this.formDate).format("dddd");

      //INCEK KALANLAR
      let incekResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Incek.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      incekResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Incek.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Incek.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Incek.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Incek.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Incek.AksamKalan.TavukKofte = item.miktar;
        }
      });
      //TUNALI KALANLAR
      let tunaliResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Tunali.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      tunaliResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Tunali.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Tunali.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Tunali.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Tunali.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Tunali.AksamKalan.TavukKofte = item.miktar;
        }
      });

      //ARMADA KALANLAR
      let armadaResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Armada.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      armadaResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Armada.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Armada.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Armada.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Armada.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Armada.AksamKalan.TavukKofte = item.miktar;
        }
      });
      //Atakule KALANLAR
      let atakuleResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Atakule.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      atakuleResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Atakule.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Atakule.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Atakule.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Atakule.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Atakule.AksamKalan.TavukKofte = item.miktar;
        }
      });

      //Batıkent KALANLAR
      let batikentResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Batikent.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      batikentResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Batikent.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Batikent.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Batikent.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Batikent.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Batikent.AksamKalan.TavukKofte = item.miktar;
        }
      });
      //ANKAMALL KALANLAR

      let ankamallResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Ankamall.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      ankamallResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Ankamall.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Ankamall.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Ankamall.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Ankamall.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Ankamall.AksamKalan.TavukKofte = item.miktar;
        }
      });

      //ÜmitKöy akalanlar
      let UmitkoyResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Umitkoy.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      UmitkoyResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Umitkoy.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Umitkoy.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Umitkoy.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Umitkoy.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Umitkoy.AksamKalan.TavukKofte = item.miktar;
        }
      });
      //GORDİON
      let gordionResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Gordion.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      gordionResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Gordion.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Gordion.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Gordion.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Gordion.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Gordion.AksamKalan.TavukKofte = item.miktar;
        }
      });

      //CEPA
      let cepaResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Cepa.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      cepaResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Cepa.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Cepa.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Cepa.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Cepa.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Cepa.AksamKalan.TavukKofte = item.miktar;
        }
      });

      //BİLKENT
      let bilkentResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Bilkent.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      bilkentResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Bilkent.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Bilkent.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Bilkent.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Bilkent.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Bilkent.AksamKalan.TavukKofte = item.miktar;
        }
      });

      //Arcadium
      let arcadiumResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Arcadium.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      arcadiumResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Arcadium.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Arcadium.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Arcadium.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Arcadium.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Arcadium.AksamKalan.TavukKofte = item.miktar;
        }
      });

      //BAHÇELİ
      let bahceliResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Bahceli.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      bahceliResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Bahceli.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Bahceli.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Bahceli.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Bahceli.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Bahceli.AksamKalan.TavukKofte = item.miktar;
        }
      });

      //KAŞMİR
      let kasmirResult = await Service.save("SubeKalan/GetReport", {
        subeId: this.Kasmir.SubeId._id,
        startDate: this.birGünOnceTarih,
      });
      kasmirResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Kasmir.AksamKalan.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Kasmir.AksamKalan.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Kasmir.AksamKalan.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Kasmir.AksamKalan.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Kasmir.AksamKalan.TavukKofte = item.miktar;
        }
      });

      //ŞUBELER KALAN BİTİŞ

      //ŞUBE İHTİYAÇ BAŞLANGIÇ

      //INCEK İHTİYAÇ
      let incekIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Incek.SubeId._id,
        gun: this.birGünOnceTarihFormat,
      });
      incekIhtiyacResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Incek.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Incek.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Incek.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Incek.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Incek.ihtiyac.TavukKofte = item.miktar;
        }
      });
      //TUNALI İHTİYAÇ
      let tunaliIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Tunali.SubeId._id,
        gun: this.birGünOnceTarihFormat,
      });
      tunaliIhtiyacResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Tunali.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Tunali.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Tunali.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Tunali.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Tunali.ihtiyac.TavukKofte = item.miktar;
        }
      });
      //ARMADA İHTİYAÇ
      let armadaIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Armada.SubeId._id,
        gun: this.birGünOnceTarihFormat,
      });
      armadaIhtiyacResult.forEach((item) => {
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
        gun: this.birGünOnceTarihFormat,
      });
      atakuleIhtiyacResult.forEach((item) => {
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

      //Batıkent İHTİYAÇ
      let batikentIhtiyac = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Batikent.SubeId._id,
        gun: this.birGünOnceTarihFormat,
      });
      batikentIhtiyac.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Batikent.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Batikent.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Batikent.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Batikent.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Batikent.ihtiyac.TavukKofte = item.miktar;
        }
      });
      //ANKAMALL İHTİYAÇ

      let ankamallIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Ankamall.SubeId._id,
        gun: this.birGünOnceTarihFormat,
      });
      ankamallIhtiyacResult.forEach((item) => {
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
        gun: this.birGünOnceTarihFormat,
      });
      gordionIhtiyacResult.forEach((item) => {
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
        gun: this.birGünOnceTarihFormat,
      });
      cepaIhtiyacResult.forEach((item) => {
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
        gun: this.birGünOnceTarihFormat,
      });
      bilkentIhtiyacResult.forEach((item) => {
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
        gun: this.birGünOnceTarihFormat,
      });
      arcadiumIhtiyacResult.forEach((item) => {
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
        gun: this.birGünOnceTarihFormat,
      });
      bahceliIhtiyacResult.forEach((item) => {
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
          // eslint-disable-next-line
      console.log(bahceliIhtiyacResult,bahceliResult);
      //KAŞMİR İHTİYAÇ
      let kasmirIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Kasmir.SubeId._id,
        gun: this.birGünOnceTarihFormat,
      });
      kasmirIhtiyacResult.forEach((item) => {
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

      //ÜMİTKÖY İHTİYAÇ
      let umitkoyIhtiyacResult = await Service.save("SubeIhtiyac/GetReport", {
        subeId: this.Umitkoy.SubeId._id,
        gun: this.birGünOnceTarihFormat,
      });
      umitkoyIhtiyacResult.forEach((item) => {
        if (item.urunAdi === "DoksanGr") {
          this.Umitkoy.ihtiyac.DoksanGr = item.miktar;
        }
        if (item.urunAdi === "YuzKirkGr") {
          this.Umitkoy.ihtiyac.YuzKirkGr = item.miktar;
        }
        if (item.urunAdi === "CocukKofte") {
          this.Umitkoy.ihtiyac.Cocuk = item.miktar;
        }
        if (item.urunAdi === "TavukFileto") {
          this.Umitkoy.ihtiyac.Tavuk = item.miktar;
        }
        if (item.urunAdi === "TavukKofte") {
          this.Umitkoy.ihtiyac.TavukKofte = item.miktar;
        }
      });

      // eslint-disable-next-line no-console
      console.log(this.Umitkoy.ihtiyac);

      //ŞUBE İHTİYAÇ BİTİŞ

      //BİR GÜN ÖNCE KALAN -BUGUN İHTİYAÇ
      //ARMADA GİDECEK OLAN
      this.GidecekOlan.Armada.Cocuk =
        this.Armada.ihtiyac.Cocuk - this.Armada.AksamKalan.Cocuk;
      this.GidecekOlan.Armada.DoksanGr =
        this.Armada.ihtiyac.DoksanGr - this.Armada.AksamKalan.DoksanGr;
      this.GidecekOlan.Armada.YuzKirkGr =
        this.Armada.ihtiyac.YuzKirkGr - this.Armada.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Armada.Tavuk =
        this.Armada.ihtiyac.Tavuk - this.Armada.AksamKalan.Tavuk;
      this.GidecekOlan.Armada.TavukKofte =
        this.Armada.ihtiyac.TavukKofte - this.Armada.AksamKalan.TavukKofte;

      //GORDİON GİDECEK OLAN

      this.GidecekOlan.Gordion.Cocuk =
        this.Gordion.ihtiyac.Cocuk - this.Gordion.AksamKalan.Cocuk;
      this.GidecekOlan.Gordion.DoksanGr =
        this.Gordion.ihtiyac.DoksanGr - this.Gordion.AksamKalan.DoksanGr;
      this.GidecekOlan.Gordion.YuzKirkGr =
        this.Gordion.ihtiyac.YuzKirkGr - this.Gordion.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Gordion.Tavuk =
        this.Gordion.ihtiyac.Tavuk - this.Gordion.AksamKalan.Tavuk;
      this.GidecekOlan.Gordion.TavukKofte =
        this.Gordion.ihtiyac.TavukKofte - this.Gordion.AksamKalan.TavukKofte;
      //ARCADİUM GİDECEK OLAN
      this.GidecekOlan.Arcadium.Cocuk =
        this.Arcadium.ihtiyac.Cocuk - this.Arcadium.AksamKalan.Cocuk;
      this.GidecekOlan.Arcadium.DoksanGr =
        this.Arcadium.ihtiyac.DoksanGr - this.Arcadium.AksamKalan.DoksanGr;
      this.GidecekOlan.Arcadium.YuzKirkGr =
        this.Arcadium.ihtiyac.YuzKirkGr - this.Arcadium.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Arcadium.Tavuk =
        this.Arcadium.ihtiyac.Tavuk - this.Arcadium.AksamKalan.Tavuk;
      this.GidecekOlan.Arcadium.TavukKofte =
        this.Arcadium.ihtiyac.TavukKofte - this.Arcadium.AksamKalan.TavukKofte;
      //BAHÇELİ GİDECEK OLAN

      this.GidecekOlan.Bahceli.Cocuk =
        this.Bahceli.ihtiyac.Cocuk - this.Bahceli.AksamKalan.Cocuk;
      this.GidecekOlan.Bahceli.DoksanGr =
        this.Bahceli.ihtiyac.DoksanGr - this.Bahceli.AksamKalan.DoksanGr;
      this.GidecekOlan.Bahceli.YuzKirkGr =
        this.Bahceli.ihtiyac.YuzKirkGr - this.Bahceli.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Bahceli.Tavuk =
        this.Bahceli.ihtiyac.Tavuk - this.Bahceli.AksamKalan.Tavuk;
      this.GidecekOlan.Bahceli.TavukKofte =
        this.Bahceli.ihtiyac.TavukKofte - this.Bahceli.AksamKalan.TavukKofte;

      //BATIKENT GİDECEK OLAN

      this.GidecekOlan.Batikent.Cocuk =
        this.Batikent.ihtiyac.Cocuk - this.Batikent.AksamKalan.Cocuk;
      this.GidecekOlan.Batikent.DoksanGr =
        this.Batikent.ihtiyac.DoksanGr - this.Batikent.AksamKalan.DoksanGr;
      this.GidecekOlan.Batikent.YuzKirkGr =
        this.Batikent.ihtiyac.YuzKirkGr - this.Batikent.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Batikent.Tavuk =
        this.Batikent.ihtiyac.Tavuk - this.Batikent.AksamKalan.Tavuk;
      this.GidecekOlan.Batikent.TavukKofte =
        this.Batikent.ihtiyac.TavukKofte - this.Batikent.AksamKalan.TavukKofte;
      // BİLKENT GİDECEK OLAN

      this.GidecekOlan.Bilkent.Cocuk =
        this.Bilkent.ihtiyac.Cocuk - this.Bilkent.AksamKalan.Cocuk;
      this.GidecekOlan.Bilkent.DoksanGr =
        this.Bilkent.ihtiyac.DoksanGr - this.Bilkent.AksamKalan.DoksanGr;
      this.GidecekOlan.Bilkent.YuzKirkGr =
        this.Bilkent.ihtiyac.YuzKirkGr - this.Bilkent.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Bilkent.Tavuk =
        this.Bilkent.ihtiyac.Tavuk - this.Bilkent.AksamKalan.Tavuk;
      this.GidecekOlan.Bilkent.TavukKofte =
        this.Bilkent.ihtiyac.TavukKofte - this.Bilkent.AksamKalan.TavukKofte;
      //ANKAMALL GİDECEK OLAN

      this.GidecekOlan.Ankamall.Cocuk =
        this.Ankamall.ihtiyac.Cocuk - this.Ankamall.AksamKalan.Cocuk;
      this.GidecekOlan.Ankamall.DoksanGr =
        this.Ankamall.ihtiyac.DoksanGr - this.Ankamall.AksamKalan.DoksanGr;
      this.GidecekOlan.Ankamall.YuzKirkGr =
        this.Ankamall.ihtiyac.YuzKirkGr - this.Ankamall.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Ankamall.Tavuk =
        this.Ankamall.ihtiyac.Tavuk - this.Ankamall.AksamKalan.Tavuk;
      this.GidecekOlan.Ankamall.TavukKofte =
        this.Ankamall.ihtiyac.TavukKofte - this.Ankamall.AksamKalan.TavukKofte;
      //Atakule GİDECEK OLAN

      this.GidecekOlan.Atakule.Cocuk =
        this.Atakule.ihtiyac.Cocuk - this.Atakule.AksamKalan.Cocuk;
      this.GidecekOlan.Atakule.DoksanGr =
        this.Atakule.ihtiyac.DoksanGr - this.Atakule.AksamKalan.DoksanGr;
      this.GidecekOlan.Atakule.YuzKirkGr =
        this.Atakule.ihtiyac.YuzKirkGr - this.Atakule.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Atakule.Tavuk =
        this.Atakule.ihtiyac.Tavuk - this.Atakule.AksamKalan.Tavuk;
      this.GidecekOlan.Atakule.TavukKofte =
        this.Atakule.ihtiyac.TavukKofte - this.Atakule.AksamKalan.TavukKofte;

      //CEPA GİDECEK OLAN

      this.GidecekOlan.Cepa.Cocuk =
        this.Cepa.ihtiyac.Cocuk - this.Cepa.AksamKalan.Cocuk;
      this.GidecekOlan.Cepa.DoksanGr =
        this.Cepa.ihtiyac.DoksanGr - this.Cepa.AksamKalan.DoksanGr;
      this.GidecekOlan.Cepa.YuzKirkGr =
        this.Cepa.ihtiyac.YuzKirkGr - this.Cepa.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Cepa.Tavuk =
        this.Cepa.ihtiyac.Tavuk - this.Cepa.AksamKalan.Tavuk;
      this.GidecekOlan.Cepa.TavukKofte =
        this.Cepa.ihtiyac.TavukKofte - this.Cepa.AksamKalan.TavukKofte;
      //KAŞMİR GİDECEK OLAN
      this.GidecekOlan.Kasmir.Cocuk =
        this.Kasmir.ihtiyac.Cocuk - this.Kasmir.AksamKalan.Cocuk;
      this.GidecekOlan.Kasmir.DoksanGr =
        this.Kasmir.ihtiyac.DoksanGr - this.Kasmir.AksamKalan.DoksanGr;
      this.GidecekOlan.Kasmir.Tavuk =
        this.Kasmir.ihtiyac.Tavuk - this.Kasmir.AksamKalan.Tavuk;
      this.GidecekOlan.Kasmir.YuzKirkGr =
        this.Kasmir.ihtiyac.YuzKirkGr - this.Kasmir.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Kasmir.TavukKofte =
        this.Kasmir.ihtiyac.TavukKofte - this.Kasmir.AksamKalan.TavukKofte;

      this.GidecekOlan.Umitkoy.Cocuk =
        this.Umitkoy.ihtiyac.Cocuk - this.Umitkoy.AksamKalan.Cocuk;
      this.GidecekOlan.Umitkoy.DoksanGr =
        this.Umitkoy.ihtiyac.DoksanGr - this.Umitkoy.AksamKalan.DoksanGr;
      this.GidecekOlan.Umitkoy.Tavuk =
        this.Umitkoy.ihtiyac.Tavuk - this.Umitkoy.AksamKalan.Tavuk;
      this.GidecekOlan.Umitkoy.YuzKirkGr =
        this.Umitkoy.ihtiyac.YuzKirkGr - this.Umitkoy.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Umitkoy.TavukKofte =
        this.Umitkoy.ihtiyac.TavukKofte - this.Umitkoy.AksamKalan.TavukKofte;
      //tunali GİDECEK OLAN
      this.GidecekOlan.Kasmir.Cocuk =
        this.Tunali.ihtiyac.Cocuk - this.Kasmir.AksamKalan.Cocuk;
      this.GidecekOlan.Kasmir.DoksanGr =
        this.Tunali.ihtiyac.DoksanGr - this.Kasmir.AksamKalan.DoksanGr;
      this.GidecekOlan.Kasmir.Tavuk =
        this.Tunali.ihtiyac.Tavuk - this.Kasmir.AksamKalan.Tavuk;
      this.GidecekOlan.Kasmir.YuzKirkGr =
        this.Tunali.ihtiyac.YuzKirkGr - this.Kasmir.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Kasmir.TavukKofte =
        this.Tunali.ihtiyac.TavukKofte - this.Kasmir.AksamKalan.TavukKofte;

      this.GidecekOlan.Tunali.Cocuk =
        this.Tunali.ihtiyac.Cocuk - this.Tunali.AksamKalan.Cocuk;
      this.GidecekOlan.Tunali.DoksanGr =
        this.Tunali.ihtiyac.DoksanGr - this.Tunali.AksamKalan.DoksanGr;
      this.GidecekOlan.Tunali.Tavuk =
        this.Tunali.ihtiyac.Tavuk - this.Tunali.AksamKalan.Tavuk;
      this.GidecekOlan.Tunali.YuzKirkGr =
        this.Tunali.ihtiyac.YuzKirkGr - this.Tunali.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Tunali.TavukKofte =
        this.Tunali.ihtiyac.TavukKofte - this.Tunali.AksamKalan.TavukKofte;
    },
  },
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
