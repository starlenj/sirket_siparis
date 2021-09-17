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
                    <label>Şube</label>
                    <select class="form-control" v-model="SelectSube">
                      <option
                        v-for="items in SubeData"
                        :key="items._id"
                        v-bind:value="items._id"
                        @change="SetSube(items)"
                      >{{ items.name}}</option>
                    </select>
                    <label for>Tarih</label>
                    <input type="date" class="form-control" v-model="tarih" />
                  </div>
                  <div class="form-group">
                    <button type="button" class="btn btn-primary" @click="GetReport">Getir</button>
                    <button
                      type="button"
                      style="float:right"
                      class="btn btn-primary"
                      @click="ShopReportSave"
                    >Güncelle</button>
                    <button
                      type="button"
                      style="float:right"
                      class="btn btn-primary"
                      @click="KasaOnayla"
                    >Kasa Onayla</button>
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.ikiyuz"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.ikiyuz"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.yuz"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.yuz"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.elli"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.elli"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.ontl"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.ontl"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.bes"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.bes"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.bir"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.bir"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.sifirbes"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.sifirbes"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.sifiryirmibes"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.sifiryirmibes"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.sifirbir"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.sifirbir"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.ticket.sifirsifirbes"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <input
                              type="number"
                              class="form-control input-sm"
                              v-model="model.sodexo.sifirsifirbes"
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
                              v-model="model.multinetGunSonu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Ticket/Sodexo Gün Sonu</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.ticketGunSonu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Ceo Card/Avm Kupon Gün Sonu</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.ceoCardGunSonu"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Sinema Bileti/Metropol Gün Sonu</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.sinemaBileti"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Yemek Sepeti</th>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.yemekSepeti"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h1>Masraf</h1>
                  <table class="table">
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <select v-model="model.masraf.turuBir">
                              <option
                                v-for="items in model.masrafTuru"
                                :key="items.value"
                                v-bind:value="items.value"
                              >{{items.text}}</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimBir ===  undefined"
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimBir"
                              @change="masrafResim"
                            />
                          </div>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimBir !== undefined "
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.masraf.resimBir)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarBir"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <select v-model="model.masraf.turuIki">
                              <option
                                v-for="items in model.masrafTuru"
                                :key="items.value"
                                v-bind:value="items.value"
                              >{{items.text}}</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimIki === undefined"
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimIki"
                              @change="masrafResim"
                            />
                          </div>

                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimIki !== undefined"
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.masraf.resimIki)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarIki"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <select v-model="model.masraf.turuUc">
                              <option
                                v-for="items in model.masrafTuru"
                                :key="items.value"
                                v-bind:value="items.value"
                              >{{items.text}}</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimUc ===  undefined"
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimUc"
                              @change="masrafResim"
                            />
                          </div>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimUc !== undefined"
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.masraf.resimUc)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarUc"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <select v-model="model.masraf.turuDort">
                              <option
                                v-for="items in model.masrafTuru"
                                :key="items.value"
                                v-bind:value="items.value"
                              >{{items.text}}</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimDort ===  undefined"
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimDort"
                              @change="masrafResim"
                            />
                          </div>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimDort !== undefined"
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.masraf.resimDort)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarDort"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <select v-model="model.masraf.turuBes">
                              <option
                                v-for="items in model.masrafTuru"
                                :key="items.value"
                                v-bind:value="items.value"
                              >{{items.text}}</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimBes ===  undefined "
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimBes"
                              @change="masrafResim"
                            />
                          </div>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimBes !== undefined"
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.masraf.resimBes)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarBes"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                            />
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <select v-model="model.masraf.turuAlti">
                              <option
                                v-for="items in model.masrafTuru"
                                :key="items.value"
                                v-bind:value="items.value"
                              >{{items.text}}</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimAlti ===  undefined"
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimAlti"
                              @change="masrafResim"
                            />
                          </div>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.masraf.resimAlti !== undefined"
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.masraf.resimAlti)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.masraf.tutarAlti"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h1>İade</h1>
                  <!--İADE-->
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Açıklama</th>

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
                              v-model="model.iade.aciklamaBir"
                            />
                          </div>
                        </td>

                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimBir ===  undefined"
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimBir"
                              @change="iadeResim"
                            />
                          </div>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimBir !== undefined "
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.iade.resimBir)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.iade.tutarBir"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                              v-model="model.iade.aciklamaIki"
                            />
                          </div>
                        </td>

                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimIki === undefined"
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimIki"
                              @change="iadeResim"
                            />
                          </div>

                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimIki !== undefined"
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.iade.resimIki)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.iade.tutarIki"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                              v-model="model.iade.aciklamaUc"
                            />
                          </div>
                        </td>

                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimUc ===  undefined"
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimUc"
                              @change="iadeResim"
                            />
                          </div>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimUc !== undefined"
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.iade.resimUc)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.iade.tutarUc"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                              v-model="model.iade.aciklamaDort"
                            />
                          </div>
                        </td>

                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimDort ===  undefined"
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimDort"
                              @change="iadeResim"
                            />
                          </div>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimDort !== undefined"
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.iade.resimDort)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.iade.tutarDort"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                              v-model="model.iade.aciklamaBes"
                            />
                          </div>
                        </td>

                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimBes ===  undefined "
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimBes"
                              @change="iadeResim"
                            />
                          </div>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimBes !== undefined"
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.iade.resimBes)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.iade.tutarBes"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                              v-model="model.iade.aciklamaAlti"
                            />
                          </div>
                        </td>

                        <td>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimAlti ===  undefined"
                          >
                            <input
                              type="file"
                              class="form-control input-sm"
                              id="file1"
                              ref="file1"
                              name="resimAlti"
                              @change="iadeResim"
                            />
                          </div>
                          <div
                            class="form-group form-control-sm"
                            v-show="model.iade.resimAlti !== undefined"
                          >
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#showImage"
                              @click="SelectImage(model.masraf.resimAlti)"
                            >Göster</button>
                          </div>
                        </td>
                        <td>
                          <div class="form-group form-control-sm">
                            <currency-input
                              v-model="model.iade.tutarAlti"
                              currency="TRY"
                              locale="tr"
                              class="form-control"
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
                  <div class="modal" tabindex="-1" role="dialog" id="showImage">
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
                          <img
                            v-bind:src="'/assets/Upload/'+this.SelectedImage"
                            width="500"
                            height="400"
                          />
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
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
          resimBir: undefined,

          aciklamaIki: "",
          turuIki: "",
          tutarIki: 0,
          resimIki: undefined,

          aciklamaUc: "",
          turuUc: "",
          tutarUc: 0,
          resimUc: undefined,

          aciklamaDort: "",
          turuDort: "",
          tutarDort: 0,
          resimDort: undefined,

          aciklamaBes: "",
          turuBes: "",
          tutarBes: 0,
          resimBes: undefined,

          aciklamaAlti: "",
          turuAlti: "",
          tutarAlti: 0,
          resimAlti: undefined
        },
        iade: {
          aciklamaBir: "",
          turuBir: "",
          tutarBir: 0,
          resimBir: undefined,

          aciklamaIki: "",
          turuIki: "",
          tutarIki: 0,
          resimIki: undefined,

          aciklamaUc: "",
          turuUc: "",
          tutarUc: 0,
          resimUc: undefined,

          aciklamaDort: "",
          turuDort: "",
          tutarDort: 0,
          resimDort: undefined,

          aciklamaBes: "",
          turuBes: "",
          tutarBes: 0,
          resimBes: undefined,

          aciklamaAlti: "",
          turuAlti: "",
          tutarAlti: 0,
          resimAlti: undefined
        },
        setCardGunSonu: 0,
        multinetGunSonu: 0,
        metropolGunSonu: 0,
        ceoCardGunSonu: 0,
        avmKuponu: 0,
        sinemaBileti: 0,
        nakitGunSonu: 0,
        sodexoKupon: 0,
        ticketKupon: 0,
        ticketGunSonu: 0,
        sodexoGunSonu: 0,
        yemekSepeti: 0
      },
      UserInfo: [],
      SubeData: [],
      SelectSube: [],
      ReportId: "",
      SelectedImage: ""
    };
  },
  methods: {
    async KasaOnayla() {
   
    /*  await Service.put("shopReportView", {
        _id : this.
       }); */
    },
    async ShopReportSave() {
      // eslint-disable-next-line no-console
      /* console.log(this.model.masraf);
      if (
        this.model.masraf.tutarBir > 0 &&
        this.model.masraf.resimBir === undefined
      ) {
        alert("RESİM ZORUNLUDUR!! Birinci Masrafta Resim Mevcut Değildir.");
        return;
      }

      if (
        this.model.masraf.tutarIki > 0 &&
        this.model.masraf.resimIki === undefined
      ) {
        alert("RESİM ZORUNLUDUR!! İkinci Masrafta Resim Mevcut Değildir.");
        return;
      }

      if (
        this.model.masraf.tutarUc > 0 &&
        this.model.masraf.resimUc === undefined
      ) {
        alert("RESİM ZORUNLUDUR!! Üçüncü Masrfta Resim Mevcut Değildir.");
        return;
      }

      if (
        this.model.masraf.tutarDort > 0 &&
        this.model.masraf.resimDort === undefined
      ) {
        alert("RESİM ZORUNLUDUR!! Dördüncü Masrafta Resim Mevcut Değildir.");
        return;
      }
      if (
        this.model.masraf.tutarBes > 0 &&
        this.model.masraf.resimBes === undefined
      ) {
        alert("RESİM ZORUNLUDUR!! Beşinci Masrafta Resim Mevcut Değildir.");
        return;
      }

      if (
        this.model.masraf.tutarAlti > 0 &&
        this.model.masraf.resimAlti === undefined
      ) {
        alert("RESİM ZORUNLUDUR!! Atıncı Masrafta Resim Mevcut Değildir.");
        return;
      }

      if (
        (this.model.masraf.aciklamaBir !== "" &&
          this.model.masraf.tutarBir === 0) ||
        this.model.masraf.tutarBir === null
      ) {
        alert("TUTAR ZORUNLUDUR!! Birinci Masrafta Resim Mevcut Değildir.");
        return;
      }
*/
     let response =  await Service.save("shopReportView", {
        sodexo: this.model.sodexo,
        ticket: this.model.ticket,
        cash: this.model.nakit,
        credit: this.model.pos,
        masraf: this.model.masraf,
        created_at: moment(this.tarih).format("YYYY.MM.DD"),
        subeId: this.SelectSube,
        setCardGunSonu: this.model.setCardGunSonu,
        multinetGunSonu: this.model.multinetGunSonu,
        metropolGunSonu: this.model.metropolGunSonu,
        ceoCardGunSonu: this.model.ceoCardGunSonu,
        avmKuponu: this.model.avmKuponu,
        sinemaBileti: this.model.sinemaBileti,
        ticketGunSonu: this.model.ticketGunSonu,
        sodexoGunSonu: this.model.sodexoGunSonu,
        iade: this.model.iade,
        yemekSepeti: this.model.yemekSepeti
      });
      console.log("KASA KAYIT",response);
    },

    async SetSube(id) {
      this.SelectSube = id;
    },

    async GetReport() {
      let ShopResponse = await Service.save("shopReportView/CheckReport", {
        subeId: this.SelectSube,
        date: moment(this.tarih).format("YYYY.MM.DD")
      });
      // eslint-disable-next-line no-console
      console.log(ShopResponse[0].multinetGunSonu);
      this.model.nakit = ShopResponse[0].cash;
      this.model.ticket = ShopResponse[0].ticket;
      this.model.sodexo = ShopResponse[0].sodexo;
      this.model.pos = ShopResponse[0].credit;
      this.model.setCardGunSonu = parseFloat(ShopResponse[0].setCardGunSonu);
      this.model.multinetGunSonu = parseFloat(ShopResponse[0].multinetGunSonu);
      this.model.metropolGunSonu = parseFloat(ShopResponse[0].metropolGunSonu);
      this.model.ceoCardGunSonu = parseFloat(ShopResponse[0].ceoCardGunSonu);
      this.model.avmKuponu = parseFloat(ShopResponse[0].avmKuponu);
      this.model.sinemaBileti = parseFloat(ShopResponse[0].sinemaBileti);
      this.model.masraf = ShopResponse[0].masraf;
      this.model.iade = ShopResponse[0].iade;
      this.model.sodexoGunSonu = ShopResponse[0].sodexoGunSonu;
      this.model.ticketGunSonu =
        ShopResponse[0].ticketGunSonu === "null"
          ? 0
          : ShopResponse[0].ticketGunSonu;
      this.model.yemekSepeti = ShopResponse[0].yemekSepeti;
      this.model.visa =
        parseFloat(this.model.pos.bir) +
        parseFloat(this.model.pos.iki) +
        parseFloat(this.model.pos.uc) +
        parseFloat(this.model.pos.dort) +
        parseFloat(this.model.pos.bes) +
        parseFloat(this.model.pos.alti) +
        parseFloat(this.model.pos.yedi);

      this.model.nakitGunSonu =
        parseFloat(this.model.nakit.yuz) * 100 +
        parseFloat(this.model.nakit.ikiyuz) * 200 +
        parseFloat(this.model.nakit.elli) * 50 +
        parseFloat(this.model.nakit.yirmi) * 20 +
        parseFloat(this.model.nakit.ontl) * 10 +
        parseFloat(this.model.nakit.bes) * 5 +
        parseFloat(this.model.nakit.bir) +
        parseFloat(this.model.nakit.sifirbes) * 0.5 +
        parseFloat(this.model.nakit.sifiryirmibes) * 0.25 +
        parseFloat(this.model.nakit.sifirbir) * 0.1 +
        parseFloat(this.model.nakit.sifirsifirbes) * 0.05;

      this.model.ticketKupon =
        parseFloat(this.model.ticket.yuz) * 100 +
        parseFloat(this.model.ticket.ikiyuz) * 200 +
        parseFloat(this.model.ticket.elli) * 50 +
        parseFloat(this.model.ticket.yirmi) * 20 +
        parseFloat(this.model.ticket.ontl) * 10 +
        parseFloat(this.model.ticket.bes) * 5 +
        parseFloat(this.model.ticket.bir) +
        parseFloat(this.model.ticket.sifirbes) * 0.5 +
        parseFloat(this.model.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.model.ticket.sifirbir) * 0.1 +
        parseFloat(this.model.ticket.sifirsifirbes) * 0.05;

      this.model.sodexoKupon =
        parseFloat(this.model.sodexo.yuz) * 100 +
        parseFloat(this.model.sodexo.ikiyuz) * 200 +
        parseFloat(this.model.sodexo.elli) * 50 +
        parseFloat(this.model.sodexo.yirmi) * 20 +
        parseFloat(this.model.sodexo.ontl) * 10 +
        parseFloat(this.model.sodexo.bes) * 5 +
        parseFloat(this.model.sodexo.bir) +
        parseFloat(this.model.sodexo.sifirbes) * 0.5 +
        parseFloat(this.model.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.model.sodexo.sifirbir) * 0.1 +
        parseFloat(this.model.sodexo.sifirsifirbes) * 0.05;
      this.model.sodexoGunSonu =
        parseFloat(this.model.sodexoKupon) +
        parseFloat(this.model.sodexoGunSonu);
      this.model.ticketGunSonu =
        parseFloat(this.model.ticketKupon) +
        parseFloat(this.model.ticketGunSonu);
    },

    async SelectImage(image) {
      this.SelectedImage = image;
    },
    async SendReport() {
      let response = await Service.update("shopReportView", this.ReportId);

      if (response.data.success) {
        window.location.reload();
      }
    },
    async masrafResim(event) {
      const form = new FormData();
      form.append("file", event.target.files[0]);
      let result = await Service.save("Image", form);
      if (event.target.name === "resimBir") {
        this.model.masraf.resimBir = result.filename;
      } else if (event.target.name === "resimIki") {
        this.model.masraf.resimIki = result.filename;
        // eslint-disable-next-line no-console
        console.log("RESIM IKI", this.model.masraf.resimIki);
      } else if (event.target.name === "resimUc") {
        this.model.masraf.resimUc = result.filename;
        // eslint-disable-next-line no-console
        console.log(this.model.masraf.resimUc);
      } else if (event.target.name === "resimDort") {
        this.model.masraf.resimDort = result.filename;
        // eslint-disable-next-line no-console
        console.log(this.model.masraf.resimDort);
      } else if (event.target.name === "resimBes") {
        this.model.masraf.resimBes = result.filename;
        // eslint-disable-next-line no-console
        console.log(this.model.masraf.resimBir);
      } else if (event.target.name === "resimAlti") {
        this.model.masraf.resimAlti = result.filename;
        // eslint-disable-next-line no-console
        console.log(this.model.masraf.resimBir);
      }
    },
    async iadeResim(event) {
      const form = new FormData();
      form.append("file", event.target.files[0]);
      let result = await Service.save("Image", form);
      if (event.target.name === "resimBir") {
        this.model.iade.resimBir = result.filename;
      } else if (event.target.name === "resimIki") {
        this.model.iade.resimIki = result.filename;
        // eslint-disable-next-line no-console
        console.log("RESIM IKI", this.model.iade.resimIki);
      } else if (event.target.name === "resimUc") {
        this.model.iade.resimUc = result.filename;
        // eslint-disable-next-line no-console
        console.log(this.model.iade.resimUc);
      } else if (event.target.name === "resimDort") {
        this.model.iade.resimDort = result.filename;
        // eslint-disable-next-line no-console
        console.log(this.model.iade.resimDort);
      } else if (event.target.name === "resimBes") {
        this.model.iade.resimBes = result.filename;
        // eslint-disable-next-line no-console
        console.log(this.model.iade.resimBir);
      } else if (event.target.name === "resimAlti") {
        this.model.iade.resimAlti = result.filename;
        // eslint-disable-next-line no-console
        console.log(this.model.iade.resimBir);
      }
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
