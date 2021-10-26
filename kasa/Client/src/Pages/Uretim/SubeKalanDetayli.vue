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
            <a href="/Uretim/GidecekOlan" class="breadcrumb-item">Şube Kalan</a>
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
            <div class="col-12">
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
                      <th>CEP</th>
                      <th>ATA</th>
                      <th>KAŞ</th>
                      <th>UMI</th>
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
                            v-model="Gordion.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Arcadium.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Armada.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Bahceli.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Bilkent.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Ankamall.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Cepa.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Atakule.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Kasmir.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>

                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Umitkoy.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Batikent.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Incek.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Tunali.AksamKalan.DoksanGr"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12">
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
                      <th>CEP</th>
                      <th>ATA</th>
                      <th>KAŞ</th>
                      <th>UMI</th>
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
                            v-model="Gordion.AksamKalan.Tavuk"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Arcadium.AksamKalan.Tavuk"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Armada.AksamKalan.Tavuk"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Bahceli.AksamKalan.Tavuk"
                          />
                        </div>
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Bilkent.AksamKalan.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Ankamall.AksamKalan.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Cepa.AksamKalan.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Atakule.AksamKalan.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Kasmir.AksamKalan.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Umitkoy.AksamKalan.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Batikent.AksamKalan.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Incek.AksamKalan.Tavuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Tunali.AksamKalan.Tavuk"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
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
                      <th>CEP</th>
                      <th>ATA</th>
                      <th>KAŞ</th>
                      <th>UMI</th>
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
                            v-model="Gordion.AksamKalan.YuzKirkGr"
                          />
                        </div>
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Arcadium.AksamKalan.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Armada.AksamKalan.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Bahceli.AksamKalan.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Bilkent.AksamKalan.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Ankamall.AksamKalan.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Cepa.AksamKalan.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Atakule.AksamKalan.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Kasmir.AksamKalan.YuzKirkGr"
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Umitkoy.AksamKalan.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Batikent.AksamKalan.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Incek.AksamKalan.YuzKirkGr"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Tunali.AksamKalan.YuzKirkGr"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12">
              <h2 class="headerKucukTavukKofte">Kucuk Tavuk Köfte</h2>
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
                      <th>CEP</th>
                      <th>ATA</th>
                      <th>KAŞ</th>
                      <th>UMI</th>
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
                          v-model="Gordion.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Arcadium.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Armada.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Bahceli.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Bilkent.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Ankamall.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Cepa.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Atakule.AksamKalan.KucukTavukKofte"
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Kasmir.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Umitkoy.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Batikent.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Incek.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Tunali.AksamKalan.KucukTavukKofte"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12">
              <h2 class="headerKucukTavukKofte">Buyuk Tavuk Köfte</h2>
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
                      <th>CEP</th>
                      <th>ATA</th>
                      <th>KAŞ</th>
                      <th>UMI</th>
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
                          v-model="Gordion.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Arcadium.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Armada.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Bahceli.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Bilkent.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Ankamall.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Cepa.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Atakule.AksamKalan.TavukKofte"
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Kasmir.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Umitkoy.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Batikent.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Incek.AksamKalan.TavukKofte"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          readonly="true"
                          v-model="Tunali.AksamKalan.TavukKofte"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12">
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
                      <th>CEP</th>
                      <th>ATA</th>
                      <th>KAŞ</th>
                      <th>UMI</th>
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
                            v-model="Gordion.AksamKalan.Cocuk"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group form-control-sm">
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="Arcadium.AksamKalan.Cocuk"
                          />
                        </div>
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Armada.AksamKalan.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Bahceli.AksamKalan.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Bilkent.AksamKalan.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Ankamall.AksamKalan.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Cepa.AksamKalan.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Atakule.AksamKalan.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Kasmir.AksamKalan.Cocuk"
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Umitkoy.AksamKalan.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Batikent.AksamKalan.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Incek.AksamKalan.Cocuk"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          class="form-control input-sm"
                          readonly="true"
                          v-model="Tunali.AksamKalan.Cocuk"
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
import { GetAksamKalan, GetSubeIhtiyac } from "../../Helpers/GidecekOlanTools";
import { GidecekOlanModel } from '../../Helpers/GidecekOlanModel';
export default {
  data() {
    return {
      Incek: {
        ...GidecekOlanModel
      },
      Tunali: {
        ...GidecekOlanModel
      },
      Ankamall: {
        ...GidecekOlanModel
      },
      Gordion: {
        ...GidecekOlanModel
      },
      Arcadium: {
        ...GidecekOlanModel
      },
      Armada: {
        ...GidecekOlanModel
      },
      Batikent: {
        ...GidecekOlanModel
      },
      Atakule: {
        ...GidecekOlanModel
      },

      Bahceli: {
        ...GidecekOlanModel
      },
      Bilkent: {
        ...GidecekOlanModel
      },
      Cepa: {
        ...GidecekOlanModel
      },
      Kasmir: {
        ...GidecekOlanModel
      },
      Umitkoy: {
        ...GidecekOlanModel
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

    subeList.data.forEach((item) => {
      if (item.name === "ARMADA") {
        this.Armada.SubeId = item;
        this.sifirlama("Armada");
      } else if (item.name === "ANKAMALL") {
        this.Ankamall.SubeId = item;
        this.sifirlama("Ankamall");
      } else if (item.name === "ARCADIUM") {
        this.Arcadium.SubeId = item;
        this.sifirlama("Arcadium");
      } else if (item.name === "BAHCELIEVLER") {
        this.Bahceli.SubeId = item;
        this.sifirlama("Bahceli");
      } else if (item.name === "BILKENT") {
        this.Bilkent.SubeId = item;
        this.sifirlama("Bilkent");
      } else if (item.name === "GORDION") {
        this.Gordion.SubeId = item;
        this.sifirlama("Gordion");
      } else if (item.name === "CEPA") {
        this.Cepa.SubeId = item;
        this.sifirlama("Cepa");
      } else if (item.name === "KAŞMİR") {
        this.Kasmir.SubeId = item;
        this.sifirlama("Kasmir");
      } else if (item.name === "ATAKULE") {
        this.Atakule.SubeId = item;
        this.sifirlama("Atakule");
      } else if (item.name === "Ümitköy") {
        this.Umitkoy.SubeId = item;
        this.sifirlama("Umitkoy");
      } else if (item.name === "Batıkent") {
        this.Batikent.SubeId = item;
        this.sifirlama("Batikent");
      } else if (item.name === "INCEK") {
        this.Incek.SubeId = item;
        this.sifirlama("Incek");
      } else if (item.name === "TUNALI") {
        this.Tunali.SubeId = item;
        this.sifirlama("Tunali");
      }
    });
  },
  methods: {
    async sifirlama(SubeAdi) {
      this[SubeAdi].AksamKalan.Cocuk = 0;
      this[SubeAdi].AksamKalan.DoksanGr = 0;
      this[SubeAdi].AksamKalan.YuzKirkGr = 0;
      this[SubeAdi].AksamKalan.Tavuk = 0;
      this[SubeAdi].AksamKalan.KucukTavukKofte = 0;
      this[SubeAdi].AksamKalan.KucukKucukTavukKofte = 0;
    },
    async GetReport() {
      //ŞUBELER KALAN BAŞLANGIÇ
      // eslint-disable-next-line no-console

      moment.locale("tr");
      this.GetDate = moment().format("YYYY.MM.DD");
      this.birGünOnceTarih = moment(this.formDate)
        .add(-1, "days")
        .format("YYYY.MM.DD");
      this.birGünOnceTarihFormat = moment(this.formDate)
        .format("dddd")
        .replace(/Ğ/gim, "g")
        .replace(/Ü/gim, "u")
        .replace(/Ş/gim, "s")
        .replace(/I/gim, "i")
        .replace(/İ/gim, "i")
        .replace(/Ö/gim, "o")
        .replace(/Ç/gim, "C")
        .replace(/ğ/gim, "g")
        .replace(/ü/gim, "u")
        .replace(/ş/gim, "s")
        .replace(/ı/gim, "i")
        .replace(/ö/gim, "o")
        .replace(/ç/gim, "c");
      //ŞUBELER KALAN BAŞLANGIÇ
      //TUNALI KALANLAR

      this.Tunali.AksamKalan = await GetAksamKalan(
        this.Tunali.SubeId._id,
        this.birGünOnceTarih
      );
      //ARMADA KALANLAR
      this.Armada.AksamKalan = await GetAksamKalan(
        this.Armada.SubeId._id,
        this.birGünOnceTarih
      );
      //Atakule KALANLAR
      this.Atakule.AksamKalan = await GetAksamKalan(
        this.Atakule.SubeId._id,
        this.birGünOnceTarih
      );
      //Batıkent KALANLAR
      this.Batikent.AksamKalan = await GetAksamKalan(
        this.Batikent.SubeId._id,
        this.birGünOnceTarih
      );
      //ANKAMALL KALANLAR
      this.Ankamall.AksamKalan = await GetAksamKalan(
        this.Ankamall.SubeId._id,
        this.birGünOnceTarih
      );
      //ÜmitKöy akalanlar
      this.Umitkoy.AksamKalan = await GetAksamKalan(
        this.Umitkoy.SubeId._id,
        this.birGünOnceTarih
      );
      //GORDİON
      this.Gordion.AksamKalan = await GetAksamKalan(
        this.Gordion.SubeId._id,
        this.birGünOnceTarih
      );
      //CEPA
      this.Cepa.AksamKalan = await GetAksamKalan(
        this.Cepa.SubeId._id,
        this.birGünOnceTarih
      );

      //BİLKENT
      this.Bilkent.AksamKalan = await GetAksamKalan(
        this.Bilkent.SubeId._id,
        this.birGünOnceTarih
      );

      //Arcadium
      this.Arcadium.AksamKalan = await GetAksamKalan(
        this.Arcadium.SubeId._id,
        this.birGünOnceTarih
      );

      //BAHÇELİ
      this.Bahceli.AksamKalan = await GetAksamKalan(
        this.Bahceli.SubeId._id,
        this.birGünOnceTarih
      );

      //KAŞMİR
      this.Kasmir.AksamKalan = await GetAksamKalan(
        this.Kasmir.SubeId._id,
        this.birGünOnceTarih
      );

      //ŞUBE İHTİYAÇ BİTİŞ
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
.headerKucukTavukKofte {
  color: chocolate;
}
</style>
