<template>
  <div>
    <div v-if="model.reportRole">
      <div class="page-header page-header-light">
        <div class="page-header-content header-elements-md-inline">
          <div class="page-title d-flex">
            <h4>
              <i class="icon-arrow-left52 mr-2"></i>
              <span class="font-weight-semibold">Kasa</span> - Kasa Durum Raporu
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
              <a href="/Sube" class="breadcrumb-item">Kasa Durum Raporu</a>
            </div>

            <a href="#" class="header-elements-toggle text-default d-md-none">
              <i class="icon-more"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="page has-sidebar-left bg-light height-full" v-if="model.reportSuccess">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >Günlük Kasa</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="card">
                <div class="card-body b-b">
                  <div class="form-group">
                    <label for>Tarih</label>
                    <input type="date" class="form-control" v-model="tarih" />
                    <br />
                    <button class="btn btn-primary" @click="GetReport">Getir</button>
                  </div>

                  <!--KASA GİRİŞ BAŞLANGIÇ-->
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nakit</th>
                        <th>Ticket</th>
                        <th>Sodexo</th>
                        <th>Poslar</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">200</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.ikiyuz"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.ikiyuz"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.ikiyuz"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <th>POS1</th>
                        <td>
                          <currency-input
                            v-model="model.pos.bir"
                            currency="TRY"
                            locale="tr"
                            class="form-control"
                            readonly="true"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">100</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.yuz"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.yuz"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.yuz"
                              readonly="true"
                            />
                          </div>
                        </td>

                        <th>POS2</th>
                        <td>
                          <currency-input
                            v-model="model.pos.iki"
                            currency="TRY"
                            locale="tr"
                            class="form-control"
                            readonly="true"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">50</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.elli"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.elli"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.elli"
                              readonly="true"
                            />
                          </div>
                        </td>

                        <th>POS3</th>
                        <td>
                          <currency-input
                            v-model="model.pos.uc"
                            currency="TRY"
                            locale="tr"
                            class="form-control"
                            readonly="true"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">20</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.yirmi"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.yirmi"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.yirmi"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <th>POS4</th>
                        <td>
                          <currency-input
                            v-model="model.pos.dort"
                            currency="TRY"
                            locale="tr"
                            class="form-control"
                            readonly="true"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.ontl"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.ontl"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.ontl"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <th>POS5</th>
                        <td>
                          <currency-input
                            v-model="model.pos.bes"
                            currency="TRY"
                            locale="tr"
                            class="form-control"
                            readonly="true"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.bes"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.bes"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.bes"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <th>POS6</th>
                        <td>
                          <currency-input
                            v-model="model.pos.alti"
                            currency="TRY"
                            locale="tr"
                            class="form-control"
                            readonly="true"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.bir"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.bir"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.bir"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <th>POS7</th>
                        <td>
                          <currency-input
                            v-model="model.pos.yedi"
                            currency="TRY"
                            locale="tr"
                            class="form-control"
                            readonly="true"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">0.5</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.sifirbes"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.sifirbes"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.sifirbes"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">0.25</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.sifiryirmibes"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.sifiryirmibes"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.sifiryirmibes"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">0.1</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.sifirbir"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.sifirbir"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.sifirbir"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">0.05</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.nakit.sifirsifirbes"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.sifirsifirbes"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.sifirsifirbes"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr></tr>
                      <tr>
                        <th>Ticket/Sodexo Kupon</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.ticketKupon"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.sodexoKupon"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>Nakit/Visa Gün Sonu</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.nakitGunSonu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.visa"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Mutlinet/Set Card Sonu</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.multiNetGunSonu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.setCardGunSonu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Ticket/Sodexo Card Sonu</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.ticketGunSonu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.sodexoGunSonu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Cio Card/Metropol Gün Sonu</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.ceoCardGunSonu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.metropolGunSonu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Sinema Bileti/Avm Kupon Gün Sonu</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.sinemaBileti"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>

                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.avmKuponu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>Genel Toplam</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.GenelToplam"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <br />
                  <h1>Masraf</h1>
                  <table>
                    <thead>
                      <tr>
                        <th>Açıklama</th>
                        <th>Masraf Türü</th>
                        <th>Resim</th>
                        <th>Tutar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="text"
                              class="form-control input-sm"
                              v-model="model.masraf.aciklamaBir"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <span v-if="model.masraf.turuBir=== 'hammadde'">Hammadde</span>
                            <span v-if="model.masraf.turuBir === 'magaza'">Mağaza Gideri</span>
                            <span v-if="model.masraf.turuBir === 'personel'">Personel Yemeği</span>
                            <span v-if="model.masraf.turuBir === 'volkan'">Volkan Beye Verilen</span>
                            <span v-if="model.masraf.turuBir === 'avans'">Personel Avans</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="file1"
                              v-on:change="masrafResim()"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarBir"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="text"
                              class="form-control input-sm"
                              v-model="model.masraf.aciklamaIki"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <span v-show="model.masraf.turuIki ==='hammadde'">Hammdde</span>
                            <span v-show="model.masraf.turuIki ==='magaza'">Mağaza Gideri</span>
                            <span v-show="model.masraf.turuIki ==='personel'">Personel Yemeği</span>
                            <span v-show="model.masraf.turuIki ==='volkan'">Volkan Beye Verilen</span>
                            <span v-show="model.masraf.turuIki ==='avans'">Çalışan Avans</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="file1"
                              v-on:change="masrafResim()"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarIki"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="text"
                              class="form-control input-sm"
                              v-model="model.masraf.aciklamaUc"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <span v-if="model.masraf.turuUC=== 'hammadde'">Hammadde</span>
                            <span v-if="model.masraf.turuUC === 'magaza'">Mağaza Gideri</span>
                            <span v-if="model.masraf.turuUC === 'personel'">Personel Yemeği</span>
                            <span v-if="model.masraf.turuUC === 'volkan'">Volkan Beye Verilen</span>
                            <span v-if="model.masraf.turuUC === 'avans'">Personel Avans</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="file1"
                              v-on:change="masrafResim()"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarUc"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="text"
                              class="form-control input-sm"
                              v-model="model.masraf.aciklamaDort"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <span v-if="model.masraf.turuDort=== 'hammadde'">Hammadde</span>
                            <span v-if="model.masraf.turuDort === 'magaza'">Mağaza Gideri</span>
                            <span v-if="model.masraf.turuDort === 'personel'">Personel Yemeği</span>
                            <span v-if="model.masraf.turuDort === 'volkan'">Volkan Beye Verilen</span>
                            <span v-if="model.masraf.turuDort === 'avans'">Personel Avans</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="file1"
                              v-on:change="masrafResim()"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarDort"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="text"
                              class="form-control input-sm"
                              v-model="model.masraf.aciklamaBes"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <span v-if="model.masraf.turuBes=== 'hammadde'">Hammadde</span>
                            <span v-if="model.masraf.turuBes === 'magaza'">Mağaza Gideri</span>
                            <span v-if="model.masraf.turuBes === 'personel'">Personel Yemeği</span>
                            <span v-if="model.masraf.turuBes === 'volkan'">Volkan Beye Verilen</span>
                            <span v-if="model.masraf.turuBes === 'avans'">Personel Avans</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="file1"
                              v-on:change="masrafResim()"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarBes"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="text"
                              class="form-control input-sm"
                              v-model="model.masraf.aciklamaAlti"
                              readonly="true"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <span v-if="model.masraf.turuAlti=== 'hammadde'">Hammadde</span>
                            <span v-if="model.masraf.turuAlti === 'magaza'">Mağaza Gideri</span>
                            <span v-if="model.masraf.turuAlti === 'personel'">Personel Yemeği</span>
                            <span v-if="model.masraf.turuAlti === 'volkan'">Volkan Beye Verilen</span>
                            <span v-if="model.masraf.turuAlti === 'avans'">Personel Avans</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="file1"
                              v-on:change="masrafResim()"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarAlti"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                              readonly="true"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <!--KASA GİRİŞ BİTİŞ-->
                  <div class="modal" tabindex="-1" role="dialog" id="onay">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Gün Sonu Raporu</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>Rapor Gönderilecek Düzenleme Yapamazsınız Onaylıyor musunuz?.</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">İptal</button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-dismiss="modal"
                            @click="saveReport()"
                          >Gönder</button>
                        </div>
                      </div>
                    </div>
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
import * as moment from "moment";

export default {
  data() {
    return {
      file1: "",
      tarih: "",
      model: {
        visa: 0,
        reportRole: true,
        user: [],
        reportSuccess: true,
        pos: {
          bir: 0,
          iki: 0,
          uc: 0,
          dort: 0,
          bes: 0,
          alti: 0,
          yedi: 0
        },
        nakit: {
          yuz: 0,
          ikiyuz: 0,
          elli: 0,
          yirmi: 0,
          ontl: 0,
          bes: 0,
          bir: 0,
          sifirbes: 0,
          sifiryirmibes: 0,
          sifirbir: 0,
          sifirsifirbes: 0
        },
        ticket: {
          yuz: 0,
          ikiyuz: 0,
          elli: 0,
          yirmi: 0,
          ontl: 0,
          bes: 0,
          bir: 0,
          sifirbes: 0,
          sifiryirmibes: 0,
          sifirbir: 0,
          sifirsifirbes: 0
        },
        sodexo: {
          yuz: 0,
          ikiyuz: 0,
          elli: 0,
          yirmi: 0,
          ontl: 0,
          bes: 0,
          bir: 0,
          sifirbes: 0,
          sifiryirmibes: 0,
          sifirbir: 0,
          sifirsifirbes: 0
        },
        masrafTuru: [
          { text: "Hammadde", value: "hammadde" },
          { text: "Mağaza Gideri", value: "magaza" },
          { text: "Personel Yemeği", value: "personel" },
          { text: "Volkan Beye Verilen", value: "volkan" },
          { text: "Çalışan Avans", value: "avans" }
        ],
        masraf: {
          aciklamaBir: "",
          turuBir: "",
          tutarBir: 0,
          resimBir: "",

          aciklamaIki: "",
          turuIki: "",
          tutarIki: 0,

          aciklamaUc: "",
          turuUc: "",
          tutarUc: 0,

          aciklamaDort: "",
          turuDort: "",
          tutarDort: 0,

          aciklamaBes: "",
          turuBes: "",
          tutarBes: 0,

          aciklamaAlti: "",
          turuAlti: "",
          tutarAlti: 0
        },
        setCardGunSonu: 0,
        multinetGunSonu: 0,
        metropolGunSonu: 0,
        ceoCardGunSonu: 0,
        avmKuponu: 0,
        sinemaBileti: 0,
        nakitGunSonu: 0,
        GenelToplam: 0
      },
      UserInfo: [],
      SubeData: [],
      SelectSube: [],
      ReportId: "",
      sodexoGunSonu: 0,
      ticketGunSonu: 0,
      sodexoKupon: 0,
      ticketKupon: 0,
      multinetGunSonu: 0
    };
  },
  methods: {
    async ShopReportSave() {
      await Service.save("shopReportView", {
        sodexo: this.model.sodexo,
        ticket: this.model.ticket,
        cash: this.model.nakit,
        credit: this.model.pos,
        masraf: this.model.masraf,
        created_at: moment().format("YYYY.MM.DD"),
        subeId: this.SelectSube,
        setCardGunSonu: this.model.setCardGunSonu,
        multinetGunSonu: this.model.multiNetGunSonu,
        metropolGunSonu: this.model.metropolGunSonu,
        ceoCardGunSonu: this.model.ceoCardGunSonu,
        avmKuponu: this.model.avmKuponu,
        sinemaBileti: this.model.sinemaBileti,
        ticketGunSonu: this.model.ticketGunSonu,
        sodexoGunSonu: this.model.sodexoGunSonu
      });
    },

    async SetSube(id) {
      this.SelectSube = id;
    },
    async GetReport() {
      let ShopResponse = await Service.save("shopReportView/CheckReport", {
        subeId: this.UserInfo.subeId,
        date: moment(this.tarih).format("YYYY.MM.DD")
      });

      this.model.nakit = ShopResponse[0].cash ;
      this.model.ticket = ShopResponse[0].ticket;
      this.model.sodexo = ShopResponse[0].sodexo;
      this.model.pos = ShopResponse[0].credit;
      this.model.setCardGunSonu = parseInt(ShopResponse[0].setCardGunSonu) ;
      this.model.multiNetGunSonu = parseInt(ShopResponse[0].multinetGunSonu);
      this.model.metropolGunSonu = parseInt(ShopResponse[0].metropolGunSonu) ;
      this.model.ceoCardGunSonu = parseInt(ShopResponse[0].ceoCardGunSonu) === null ? 0 : parseInt(ShopResponse[0].ceoCardGunSonu)  ;
      this.model.avmKuponu = parseInt(ShopResponse[0].avmKuponu) ;
      this.model.sinemaBileti = parseInt(ShopResponse[0].sinemaBileti) ;
      this.model.masraf = ShopResponse[0].masraf;
      this.model.ticketGunSonu = ShopResponse[0].ticketGunSonu;
      this.model.sodexoGunSonu = ShopResponse[0].sodexoGunSonu;
      // eslint-disable-next-line no-console
    console.log(ShopResponse);
      this.model.visa =
        parseInt(this.model.pos.bir) +
        parseInt(this.model.pos.iki) +
        parseInt(this.model.pos.uc) +
        parseInt(this.model.pos.dort) +
        parseInt(this.model.pos.bes) +
        parseInt(this.model.pos.alti) +
        parseInt(this.model.pos.yedi);

      this.model.nakitGunSonu =
        parseInt(this.model.nakit.yuz) * 100 +
        parseInt(this.model.nakit.ikiyuz) * 200 +
        parseInt(this.model.nakit.elli) * 50 +
        parseInt(this.model.nakit.yirmi) * 20 +
        parseInt(this.model.nakit.ontl) * 10 +
        parseInt(this.model.nakit.bes) * 5 +
        parseInt(this.model.nakit.bir) +
        parseInt(this.model.nakit.sifirbes) * 0.5 +
        parseInt(this.model.nakit.sifiryirmibes) * 0.25 +
        parseInt(this.model.nakit.sifirbir) * 0.1 +
        parseInt(this.model.nakit.sifirsifirbes) * 0.05;

      this.model.ticketKupon =
        parseInt(this.model.ticket.yuz) * 100 +
        parseInt(this.model.ticket.ikiyuz) * 200 +
        parseInt(this.model.ticket.elli) * 50 +
        parseInt(this.model.ticket.yirmi) * 20 +
        parseInt(this.model.ticket.ontl) * 10 +
        parseInt(this.model.ticket.bes) * 5 +
        parseInt(this.model.ticket.bir) +
        parseInt(this.model.ticket.sifirbes) * 0.5 +
        parseInt(this.model.ticket.sifiryirmibes) * 0.25 +
        parseInt(this.model.ticket.sifirbir) * 0.1 +
        parseInt(this.model.ticket.sifirsifirbes) * 0.05;

      this.model.sodexoKupon =
        parseInt(this.model.sodexo.yuz) * 100 +
        parseInt(this.model.sodexo.ikiyuz) * 200 +
        parseInt(this.model.sodexo.elli) * 50 +
        parseInt(this.model.sodexo.yirmi) * 20 +
        parseInt(this.model.sodexo.ontl) * 10 +
        parseInt(this.model.sodexo.bes) * 5 +
        parseInt(this.model.sodexo.bir) +
        parseInt(this.model.sodexo.sifirbes) * 0.5 +
        parseInt(this.model.sodexo.sifiryirmibes) * 0.25 +
        parseInt(this.model.sodexo.sifirbir) * 0.1 +
        parseInt(this.model.sodexo.sifirsifirbes) * 0.05;
      this.model.sodexoGunSonu =
        parseFloat(this.model.sodexoKupon) +
        parseFloat(this.model.sodexoGunSonu);
      this.model.ticketGunSonu =
        parseFloat(this.model.ticketKupon) +
        parseFloat(this.model.ticketGunSonu);

      this.model.GenelToplam =
        parseFloat(this.model.sodexoGunSonu) +
        parseFloat(this.model.ticketGunSonu) +
        parseFloat(this.model.nakitGunSonu) +
        parseFloat(this.model.visa) +
        parseFloat(this.model.setCardGunSonu) +
        parseFloat(this.model.multiNetGunSonu) +
        parseFloat(this.model.metropolGunSonu) +
        parseFloat(this.model.ceoCardGunSonu) +
        parseFloat(this.model.sinemaBileti) +
        parseFloat(this.model.avmKuponu);
    }
  },

  async mounted() {
    let response = await Service.save("users/login/validToken/", {
      token: localStorage.getItem("TOKEN")
    });

    this.UserInfo = response.data.data[0];

    let SubeResponse = await Service.list("Sube");
    this.SubeData = SubeResponse.data;
  }
};
</script>
