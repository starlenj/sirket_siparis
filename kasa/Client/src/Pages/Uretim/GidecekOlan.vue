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

      <div
        class="breadcrumb-line breadcrumb-line-light header-elements-md-inline"
      >
        <div class="d-flex">
          <div class="breadcrumb">
            <a href="/" class="breadcrumb-item">
              <i class="icon-home2 mr-2"></i> Anasayfa
            </a>
            <a href="/Uretim/GidecekOlan" class="breadcrumb-item"
              >Gidecek Olan</a
            >
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
            <div class="row">
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
            <div class="row">
              <div class="col-12">
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
            </div>
            <div class="row">
              <div class="col-12">
                <h2 class="headerCocukKofte">Kucuk Tavuk Köfte</h2>
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
                              v-model="GidecekOlan.Gordion.KucukTavukKofte"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              readonly="true"
                              v-model="GidecekOlan.Arcadium.KucukTavukKofte"
                            />
                          </div>
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Armada.KucukTavukKofte"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Bahceli.KucukTavukKofte"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Bilkent.KucukTavukKofte"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Ankamall.KucukTavukKofte"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Atakule.KucukTavukKofte"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Cepa.KucukTavukKofte"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Umitkoy.KucukTavukKofte"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Kasmir.KucukTavukKofte"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Batikent.KucukTavukKofte"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Incek.KucukTavukKofte"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control input-sm"
                            readonly="true"
                            v-model="GidecekOlan.Tunali.KucukTavukKofte"
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
      </div>
    </div>
  </div>
</template>
<script>
import Service from "../../Service";
import moment from "moment";
import { GetAksamKalan, GetSubeIhtiyac } from "../../Helpers/GidecekOlanTools";
import { GidecekOlanModel, GidecekModel } from "../../Helpers/GidecekOlanModel";
export default {
  data() {
    return {
      Ankamall: {
        ...GidecekOlanModel,
      },
      Incek: {
        ...GidecekOlanModel,
      },
      Tunali: {
        ...GidecekOlanModel,
      },

      Umitkoy: {
        ...GidecekOlanModel,
      },
      Gordion: {
        ...GidecekOlanModel,
      },
      Arcadium: {
        ...GidecekOlanModel,
      },
      Armada: {
        ...GidecekOlanModel,
      },
      Atakule: {
        ...GidecekOlanModel,
      },
      Batikent: {
        ...GidecekOlanModel,
      },

      Bahceli: {
        ...GidecekOlanModel,
      },
      Bilkent: {
        ...GidecekOlanModel,
      },
      Cepa: {
        ...GidecekOlanModel,
      },
      Kasmir: {
        ...GidecekOlanModel,
      },

      GidecekOlan: {
        Gordion: {
          ...GidecekModel,
        },
        Incek: {
          ...GidecekModel,
        },
        Tunali: {
          ...GidecekModel,
        },
        Arcadium: {
          ...GidecekModel,
        },
        Armada: {
          ...GidecekModel,
        },
        Batikent: {
          ...GidecekModel,
        },
        Bahceli: {
          ...GidecekModel,
        },
        Bilkent: {
          ...GidecekModel,
        },
        Ankamall: {
          ...GidecekModel,
        },
        Cepa: {
          ...GidecekModel,
        },
        Kasmir: {
          ...GidecekModel,
        },
        Atakule: {
          ...GidecekModel,
        },
        Umitkoy: {
          ...GidecekModel,
        },
      },
      GetDate: "",
      formDate: "",
      birGünOnceTarih: "",
      birGünOnceTarihFormat: "",
    };
  },
  async mounted() {
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
    async tarihFix(gun) {
      if (gun === "Çarşamba") {
        return "Carsamba";
      } else if (gun === "Perşembe") {
        return "Persembe";
      } else if (gun === "Salı") {
        return "Sali";
      } else {
        return gun;
      }
    },
    async GetReport() {
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

      //ŞUBELER KALAN BİTİŞ

      //ŞUBE İHTİYAÇ BAŞLANGIÇ

      //INCEK İHTİYAÇ
      console.log(this.birGünOnceTarihFormat);
      this.Incek.Ihtiyac = await GetSubeIhtiyac(
        this.Incek.SubeId._id,
        this.birGünOnceTarihFormat
      );
      //TUNALI İHTİYAÇ
      this.Tunali.Ihtiyac = await GetSubeIhtiyac(
        this.Tunali.SubeId._id,
        this.birGünOnceTarihFormat
      );
      //ARMADA İHTİYAÇ
      this.Armada.Ihtiyac = await GetSubeIhtiyac(
        this.Armada.SubeId._id,
        this.birGünOnceTarihFormat
      );
      //ATAKULE İHTİYAÇ
      this.Atakule.Ihtiyac = await GetSubeIhtiyac(
        this.Atakule.SubeId._id,
        this.birGünOnceTarihFormat
      );

      //Batıkent İHTİYAÇ
      this.Batikent.Ihtiyac = await GetSubeIhtiyac(
        this.Batikent.SubeId._id,
        this.birGünOnceTarihFormat
      );

      //ANKAMALL İHTİYAÇ
      this.Ankamall.Ihtiyac = await GetSubeIhtiyac(
        this.Ankamall.SubeId._id,
        this.birGünOnceTarihFormat
      );

      //GORDİON İHTİYAÇ
      this.Gordion.Ihtiyac = await GetSubeIhtiyac(
        this.Gordion.SubeId._id,
        this.birGünOnceTarihFormat
      );

      //CEPA İHTİYAÇ
      this.Cepa.Ihtiyac = await GetSubeIhtiyac(
        this.Cepa.SubeId._id,
        this.birGünOnceTarihFormat
      );

      //BİLKENT İHTİYAÇ
      this.Bilkent.Ihtiyac = await GetSubeIhtiyac(
        this.Bilkent.SubeId._id,
        this.birGünOnceTarihFormat
      );

      //Arcadium İHTİYAÇ
      this.Arcadium.Ihtiyac = await GetSubeIhtiyac(
        this.Arcadium.SubeId._id,
        this.birGünOnceTarihFormat
      );

      //BAHÇELİ İHTİYAÇ
      this.Bahceli.Ihtiyac = await GetSubeIhtiyac(
        this.Bahceli.SubeId._id,
        this.birGünOnceTarihFormat
      );
      // eslint-disable-next-line

      //ÜMİTKÖY İHTİYAÇ
      this.Umitkoy.Ihtiyac = await GetSubeIhtiyac(
        this.Umitkoy.SubeId._id,
        this.birGünOnceTarihFormat
      );
      //KASMIR İHTİYAÇ
      this.Kasmir.Ihtiyac = await GetSubeIhtiyac(
        this.Kasmir.SubeId._id,
        this.birGünOnceTarihFormat
      );

      //ŞUBE İHTİYAÇ BİTİŞ

      //BİR GÜN ÖNCE KALAN -BUGUN İHTİYAÇ
      //ARMADA GİDECEK OLAN
      this.GidecekOlan.Armada.Cocuk =
        this.Armada.Ihtiyac.Cocuk - this.Armada.AksamKalan.Cocuk;
      this.GidecekOlan.Armada.DoksanGr =
        this.Armada.Ihtiyac.DoksanGr - this.Armada.AksamKalan.DoksanGr;
      this.GidecekOlan.Armada.YuzKirkGr =
        this.Armada.Ihtiyac.YuzKirkGr - this.Armada.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Armada.Tavuk =
        this.Armada.Ihtiyac.Tavuk - this.Armada.AksamKalan.Tavuk;
      this.GidecekOlan.Armada.TavukKofte =
        this.Armada.Ihtiyac.TavukKofte - this.Armada.AksamKalan.TavukKofte;
      this.GidecekOlan.Armada.KucukTavukKofte =
        this.Armada.Ihtiyac.KucukTavukKofte -
        this.Armada.AksamKalan.KucukTavukKofte;

      //GORDİON GİDECEK OLAN

      this.GidecekOlan.Gordion.Cocuk =
        this.Gordion.Ihtiyac.Cocuk - this.Gordion.AksamKalan.Cocuk;
      this.GidecekOlan.Gordion.DoksanGr =
        this.Gordion.Ihtiyac.DoksanGr - this.Gordion.AksamKalan.DoksanGr;
      this.GidecekOlan.Gordion.YuzKirkGr =
        this.Gordion.Ihtiyac.YuzKirkGr - this.Gordion.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Gordion.Tavuk =
        this.Gordion.Ihtiyac.Tavuk - this.Gordion.AksamKalan.Tavuk;
      this.GidecekOlan.Gordion.TavukKofte =
        this.Gordion.Ihtiyac.TavukKofte - this.Gordion.AksamKalan.TavukKofte;
      this.GidecekOlan.Gordion.KucukTavukKofte =
        this.Gordion.Ihtiyac.KucukTavukKofte -
        this.Gordion.AksamKalan.KucukTavukKofte;
      //ARCADİUM GİDECEK OLAN
      this.GidecekOlan.Arcadium.Cocuk =
        this.Arcadium.Ihtiyac.Cocuk - this.Arcadium.AksamKalan.Cocuk;
      this.GidecekOlan.Arcadium.DoksanGr =
        this.Arcadium.Ihtiyac.DoksanGr - this.Arcadium.AksamKalan.DoksanGr;
      this.GidecekOlan.Arcadium.YuzKirkGr =
        this.Arcadium.Ihtiyac.YuzKirkGr - this.Arcadium.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Arcadium.Tavuk =
        this.Arcadium.Ihtiyac.Tavuk - this.Arcadium.AksamKalan.Tavuk;
      this.GidecekOlan.Arcadium.TavukKofte =
        this.Arcadium.Ihtiyac.TavukKofte - this.Arcadium.AksamKalan.TavukKofte;
      this.GidecekOlan.Arcadium.KucukTavukKofte =
        this.Arcadium.Ihtiyac.KucukTavukKofte -
        this.Arcadium.AksamKalan.KucukTavukKofte;
      //BAHÇELİ GİDECEK OLAN

      this.GidecekOlan.Bahceli.Cocuk =
        this.Bahceli.Ihtiyac.Cocuk - this.Bahceli.AksamKalan.Cocuk;
      this.GidecekOlan.Bahceli.DoksanGr =
        this.Bahceli.Ihtiyac.DoksanGr - this.Bahceli.AksamKalan.DoksanGr;
      this.GidecekOlan.Bahceli.YuzKirkGr =
        this.Bahceli.Ihtiyac.YuzKirkGr - this.Bahceli.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Bahceli.Tavuk =
        this.Bahceli.Ihtiyac.Tavuk - this.Bahceli.AksamKalan.Tavuk;
      this.GidecekOlan.Bahceli.TavukKofte =
        this.Bahceli.Ihtiyac.TavukKofte - this.Bahceli.AksamKalan.TavukKofte;
      this.GidecekOlan.Bahceli.KucukTavukKofte =
        this.Bahceli.Ihtiyac.KucukTavukKofte -
        this.Bahceli.AksamKalan.KucukTavukKofte;
      //BATIKENT GİDECEK OLAN

      this.GidecekOlan.Batikent.Cocuk =
        this.Batikent.Ihtiyac.Cocuk - this.Batikent.AksamKalan.Cocuk;
      this.GidecekOlan.Batikent.DoksanGr =
        this.Batikent.Ihtiyac.DoksanGr - this.Batikent.AksamKalan.DoksanGr;
      this.GidecekOlan.Batikent.YuzKirkGr =
        this.Batikent.Ihtiyac.YuzKirkGr - this.Batikent.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Batikent.Tavuk =
        this.Batikent.Ihtiyac.Tavuk - this.Batikent.AksamKalan.Tavuk;
      this.GidecekOlan.Batikent.TavukKofte =
        this.Batikent.Ihtiyac.TavukKofte - this.Batikent.AksamKalan.TavukKofte;
      this.GidecekOlan.Batikent.KucukTavukKofte =
        this.Batikent.Ihtiyac.KucukTavukKofte -
        this.Batikent.AksamKalan.KucukTavukKofte;
      // BİLKENT GİDECEK OLAN

      this.GidecekOlan.Bilkent.Cocuk =
        this.Bilkent.Ihtiyac.Cocuk - this.Bilkent.AksamKalan.Cocuk;
      this.GidecekOlan.Bilkent.DoksanGr =
        this.Bilkent.Ihtiyac.DoksanGr - this.Bilkent.AksamKalan.DoksanGr;
      this.GidecekOlan.Bilkent.YuzKirkGr =
        this.Bilkent.Ihtiyac.YuzKirkGr - this.Bilkent.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Bilkent.Tavuk =
        this.Bilkent.Ihtiyac.Tavuk - this.Bilkent.AksamKalan.Tavuk;
      this.GidecekOlan.Bilkent.TavukKofte =
        this.Bilkent.Ihtiyac.TavukKofte - this.Bilkent.AksamKalan.TavukKofte;
      this.GidecekOlan.Bilkent.KucukTavukKofte =
        this.Bilkent.Ihtiyac.KucukTavukKofte -
        this.Bilkent.AksamKalan.KucukTavukKofte;
      //ANKAMALL GİDECEK OLAN

      this.GidecekOlan.Ankamall.Cocuk =
        this.Ankamall.Ihtiyac.Cocuk - this.Ankamall.AksamKalan.Cocuk;
      this.GidecekOlan.Ankamall.DoksanGr =
        this.Ankamall.Ihtiyac.DoksanGr - this.Ankamall.AksamKalan.DoksanGr;
      this.GidecekOlan.Ankamall.YuzKirkGr =
        this.Ankamall.Ihtiyac.YuzKirkGr - this.Ankamall.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Ankamall.Tavuk =
        this.Ankamall.Ihtiyac.Tavuk - this.Ankamall.AksamKalan.Tavuk;
      this.GidecekOlan.Ankamall.TavukKofte =
        this.Ankamall.Ihtiyac.TavukKofte - this.Ankamall.AksamKalan.TavukKofte;
      this.GidecekOlan.Ankamall.KucukTavukKofte =
        this.Ankamall.Ihtiyac.KucukTavukKofte -
        this.Ankamall.AksamKalan.KucukTavukKofte;
      //Atakule GİDECEK OLAN

      this.GidecekOlan.Atakule.Cocuk =
        this.Atakule.Ihtiyac.Cocuk - this.Atakule.AksamKalan.Cocuk;
      this.GidecekOlan.Atakule.DoksanGr =
        this.Atakule.Ihtiyac.DoksanGr - this.Atakule.AksamKalan.DoksanGr;
      this.GidecekOlan.Atakule.YuzKirkGr =
        this.Atakule.Ihtiyac.YuzKirkGr - this.Atakule.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Atakule.Tavuk =
        this.Atakule.Ihtiyac.Tavuk - this.Atakule.AksamKalan.Tavuk;
      this.GidecekOlan.Atakule.TavukKofte =
        this.Atakule.Ihtiyac.TavukKofte - this.Atakule.AksamKalan.TavukKofte;
      this.GidecekOlan.Atakule.KucukTavukKofte =
        this.Atakule.Ihtiyac.KucukTavukKofte -
        this.Atakule.AksamKalan.KucukTavukKofte;

      //CEPA GİDECEK OLAN

      this.GidecekOlan.Cepa.Cocuk =
        this.Cepa.Ihtiyac.Cocuk - this.Cepa.AksamKalan.Cocuk;
      this.GidecekOlan.Cepa.DoksanGr =
        this.Cepa.Ihtiyac.DoksanGr - this.Cepa.AksamKalan.DoksanGr;
      this.GidecekOlan.Cepa.YuzKirkGr =
        this.Cepa.Ihtiyac.YuzKirkGr - this.Cepa.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Cepa.Tavuk =
        this.Cepa.Ihtiyac.Tavuk - this.Cepa.AksamKalan.Tavuk;
      this.GidecekOlan.Cepa.TavukKofte =
        this.Cepa.Ihtiyac.TavukKofte - this.Cepa.AksamKalan.TavukKofte;
      this.GidecekOlan.Cepa.KucukTavukKofte =
        this.Cepa.Ihtiyac.KucukTavukKofte -
        this.Cepa.AksamKalan.KucukTavukKofte;
      //KAŞMİR GİDECEK OLAN
      this.GidecekOlan.Kasmir.Cocuk =
        this.Kasmir.Ihtiyac.Cocuk - this.Kasmir.AksamKalan.Cocuk;
      this.GidecekOlan.Kasmir.DoksanGr =
        this.Kasmir.Ihtiyac.DoksanGr - this.Kasmir.AksamKalan.DoksanGr;
      this.GidecekOlan.Kasmir.Tavuk =
        this.Kasmir.Ihtiyac.Tavuk - this.Kasmir.AksamKalan.Tavuk;
      this.GidecekOlan.Kasmir.YuzKirkGr =
        this.Kasmir.Ihtiyac.YuzKirkGr - this.Kasmir.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Kasmir.TavukKofte =
        this.Kasmir.Ihtiyac.TavukKofte - this.Kasmir.AksamKalan.TavukKofte;
      this.GidecekOlan.Kasmir.KucukTavukKofte =
        this.Kasmir.Ihtiyac.KucukTavukKofte -
        this.Kasmir.AksamKalan.KucukTavukKofte;
      // umitkoy gidecek olan
      this.GidecekOlan.Umitkoy.Cocuk =
        this.Umitkoy.Ihtiyac.Cocuk - this.Umitkoy.AksamKalan.Cocuk;
      this.GidecekOlan.Umitkoy.DoksanGr =
        this.Umitkoy.Ihtiyac.DoksanGr - this.Umitkoy.AksamKalan.DoksanGr;
      this.GidecekOlan.Umitkoy.Tavuk =
        this.Umitkoy.Ihtiyac.Tavuk - this.Umitkoy.AksamKalan.Tavuk;
      this.GidecekOlan.Umitkoy.YuzKirkGr =
        this.Umitkoy.Ihtiyac.YuzKirkGr - this.Umitkoy.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Umitkoy.TavukKofte =
        this.Umitkoy.Ihtiyac.TavukKofte - this.Umitkoy.AksamKalan.TavukKofte;
      this.GidecekOlan.Umitkoy.KucukTavukKofte =
        this.Umitkoy.Ihtiyac.KucukTavukKofte -
        this.Umitkoy.AksamKalan.KucukTavukKofte;
      //tunali GİDECEK OLAN
      this.GidecekOlan.Tunali.Cocuk =
        this.Tunali.Ihtiyac.Cocuk - this.Tunali.AksamKalan.Cocuk;
      this.GidecekOlan.Tunali.DoksanGr =
        this.Tunali.Ihtiyac.DoksanGr - this.Tunali.AksamKalan.DoksanGr;
      this.GidecekOlan.Tunali.Tavuk =
        this.Tunali.Ihtiyac.Tavuk - this.Tunali.AksamKalan.Tavuk;
      this.GidecekOlan.Tunali.YuzKirkGr =
        this.Tunali.Ihtiyac.YuzKirkGr - this.Tunali.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Tunali.TavukKofte =
        this.Tunali.Ihtiyac.TavukKofte - this.Tunali.AksamKalan.TavukKofte;
      this.GidecekOlan.Tunali.KucukTavukKofte =
        this.Tunali.Ihtiyac.KucukTavukKofte -
        this.Tunali.AksamKalan.KucukTavukKofte;
      //incek GİDECEK OLAN
      this.GidecekOlan.Incek.Cocuk =
        this.Incek.Ihtiyac.Cocuk - this.Incek.AksamKalan.Cocuk;
      this.GidecekOlan.Incek.DoksanGr =
        this.Incek.Ihtiyac.DoksanGr - this.Incek.AksamKalan.DoksanGr;
      this.GidecekOlan.Incek.Tavuk =
        this.Incek.Ihtiyac.Tavuk - this.Incek.AksamKalan.Tavuk;
      this.GidecekOlan.Incek.YuzKirkGr =
        this.Incek.Ihtiyac.YuzKirkGr - this.Incek.AksamKalan.YuzKirkGr;
      this.GidecekOlan.Incek.TavukKofte =
        this.Incek.Ihtiyac.TavukKofte - this.Incek.AksamKalan.TavukKofte;
      this.GidecekOlan.Incek.KucukTavukKofte =
        this.Incek.Ihtiyac.KucukTavukKofte -
        this.Incek.AksamKalan.KucukTavukKofte;
    },
    async sifirlama(SubeAdi) {
      this[SubeAdi].AksamKalan.Cocuk = 0;
      this[SubeAdi].AksamKalan.DoksanGr = 0;
      this[SubeAdi].AksamKalan.YuzKirkGr = 0;
      this[SubeAdi].AksamKalan.Tavuk = 0;
      this[SubeAdi].AksamKalan.TavukKofte = 0;
      this[SubeAdi].AksamKalan.KucukTavukKofte = 0;
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
