<template>
  <div>
    <!-- Page header -->
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Anasayfa</span>
          </h4>
          <a href="#" class="header-elements-toggle text-default d-md-none">
            <i class="icon-more"></i>
          </a>
        </div>

        <!--<div class="header-elements d-none">
         <div class="d-flex justify-content-center">
            <a
              href="#"
              class="btn btn-link btn-float font-size-sm font-weight-semibold text-default"
            >
              <i class="icon-bars-alt text-pink-300"></i>
              <span>Statistics</span>
            </a>
            <a
              href="#"
              class="btn btn-link btn-float font-size-sm font-weight-semibold text-default"
            >
              <i class="icon-calculator text-pink-300"></i>
              <span>Invoices</span>
            </a>
            <a
              href="#"
              class="btn btn-link btn-float font-size-sm font-weight-semibold text-default"
            >
              <i class="icon-calendar5 text-pink-300"></i>
              <span>Schedule</span>
            </a>
          </div>
        </div>-->
      </div>

      <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
        <div class="d-flex">
          <div class="breadcrumb">
            <a href="/" class="breadcrumb-item">
              <i class="icon-home2 mr-2"></i> Anasayfa
            </a>
          </div>

          <a href="#" class="header-elements-toggle text-default d-md-none">
            <i class="icon-more"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- /page header -->
    <!-- Content area -->
    <div class="content">
      <!-- Support tickets -->
      <div class="card">
        <div class="card-header header-elements-sm-inline">
          <h6 class="card-title">Şube Durumları</h6>
        </div>

        <div
          class="card-body d-md-flex align-items-md-center justify-content-md-between flex-md-wrap"
        >
          <div class="d-flex align-items-center mb-3 mb-md-0">
            <a
              href="#"
              class="btn bg-transparent border-indigo-400 text-indigo-400 rounded-round border-2 btn-icon"
            >
              <i class="material-icons">money</i>
            </a>
            <div class="ml-3">
              <h5>Nakit</h5>
              <h5 class="font-weight-semibold mb-0">
                <currency-input
                  v-model="nakit"
                  currency="TRY"
                  locale="tr"
                  class="form-control"
                  readonly="true"
                />
              </h5>
              <span class="text-muted">Toplam Nakit</span>
            </div>
          </div>

          <div class="d-flex align-items-center mb-3 mb-md-0">
            <a
              href="#"
              class="btn bg-transparent border-indigo-400 text-indigo-400 rounded-round border-2 btn-icon"
            >
              <i class="material-icons">credit_card</i>
            </a>
            <div class="ml-3">
              <h5>Kredi Kartı</h5>
              <h5 class="font-weight-semibold mb-0">
                <currency-input
                  v-model="visa"
                  currency="TRY"
                  locale="tr"
                  class="form-control"
                  readonly="true"
                />
              </h5>
              <span class="text-muted">Toplam Kredi Kartı</span>
            </div>
          </div>

          <div class="d-flex align-items-center mb-3 mb-md-0">
            <a
              href="#"
              class="btn bg-transparent border-indigo-400 text-indigo-400 rounded-round border-2 btn-icon"
            >
              <i class="material-icons">credit_card</i>
            </a>
            <div class="ml-3">
              <h5>Yemek Çeki</h5>
              <h5 class="font-weight-semibold mb-0">
                <currency-input
                  v-model="yemekCeki"
                  currency="TRY"
                  locale="tr"
                  class="form-control"
                  readonly="true"
                />
              </h5>
              <span class="text-muted">Toplam Yemek Çeki</span>
            </div>
          </div>

          <div>
            <a href="#" class="btn bg-teal-400">
              <i class="icon-statistics mr-2"></i> Kasa Raporu
            </a>
          </div>
        </div>

        <div class="table-responsive">
        <h3>Günlük İşlem Listesi</h3>
          <table class="table text-nowrap">
            <thead>
              <tr>
                <th style="width: 50px">Saat</th>
                <th style="width: 300px;">Şube</th>
                <th>Yapılan İşlem</th>
                <th class="text-center" style="width: 20px;">
                  <i class="icon-arrow-down12"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-active table-border-double">
                <td colspan="3">Yapılan İşlemler</td>
                <td class="text-right">
                  <span class="badge bg-blue badge-pill">1</span>
                </td>
              </tr>

              <tr>
                <td class="text-center">
                  <h6 class="mb-0">12</h6>
                  <div class="font-size-sm text-muted line-height-1">Saat</div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div>
                      <a
                        href="#"
                        class="text-default font-weight-semibold letter-icon-title"
                      >Bilkent</a>
                      <div class="text-muted font-size-sm">
                        <span class="badge badge-mark border-blue mr-1"></span> Active
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <a href="#" class="text-default">
                    <div
                      class="font-weight-semibold"
                    >Kasa Gün Sonu İşlemi</div>
                    <span
                      class="text-muted"
                    >bilkent@hmbrgr.com.tr Adlı Kullanıcı Tarafından Yapıldı </span>
                  </a>
                </td>
                <td class="text-center">
                  <div class="list-icons">
                    <div class="dropdown">
                      <a
                        href="#"
                        class="list-icons-item dropdown-toggle caret-0"
                        data-toggle="dropdown"
                      >
                        <i class="icon-menu7"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a href="#" class="dropdown-item">
                          <i class="icon-undo"></i> İşleme Git
                        </a>
                        <a href="#" class="dropdown-item">
                          <i class="icon-history"></i> İşlem Dökümü
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                          <i class="icon-checkmark3 text-success"></i> Kontrol Edildi
                        </a>
                        <a href="#" class="dropdown-item">
                          <i class="icon-cross2 text-danger"></i> İşlem Hatalı
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>


              <tr class="table-active table-border-double">
                <td colspan="3">Yapılmayan İşlemler</td>
                <td class="text-right">
                  <span class="badge bg-danger badge-pill">1</span>
                </td>
              </tr>

              <tr>
                <td class="text-center">
                  <i class="icon-cross2 text-danger-400"></i>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div>
                      <a href="#" class="text-default font-weight-semibold">Armada</a>
                      <div class="text-muted font-size-sm">
                        <span class="badge badge-mark border-danger mr-1"></span> Süresi  Doldu
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <a href="#" class="text-default">
                    <div>Kasa Gün Sonu İşlemi Yapılmadı</div>
                    <span
                      class="text-muted"
                    >İşlemi Tekrar Yönlendirebilirsiniz..</span>
                  </a>
                </td>
                <td class="text-center">
                  <div class="list-icons">
                    <div class="dropdown">
                      <a
                        href="#"
                        class="list-icons-item dropdown-toggle caret-0"
                        data-toggle="dropdown"
                      >
                        <i class="icon-menu7"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a href="#" class="dropdown-item">
                          <i class="icon-undo"></i>Görevi Hatırlat
                          </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                          <i class="icon-plus3 text-blue"></i> İşlemi İptal Et
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <!-- /support tickets -->
    </div>
  </div>
</template>

<script>
import Service from "../Service";
import moment from "moment";
export default {
  data() {
    return {
      nakit: 0,
      visa: 0,
      yemekCeki: 0,
      yemekSepeti: 0,
      setcard: 0,
      multinet: 0,
      sodexo: 0,
      ticket: 0,
      metropol: 0,
      ceocard: 0,
      avmkuponu: 0,
      sinemabileti: 0
    };
  },
  async mounted() {
    let result = await Service.save("shopReportView/GetToplamKasa", {
      date: moment().format("YYYY.MM.DD")
    });

    const resultData = result[0];

    this.nakit =
      parseInt(resultData.cash.yuz) * 100 +
      parseInt(resultData.cash.ikiyuz) * 200 +
      parseInt(resultData.cash.elli) * 50 +
      parseInt(resultData.cash.yirmi) * 20 +
      parseInt(resultData.cash.ontl) * 10 +
      parseInt(resultData.cash.bes) * 5 +
      parseInt(resultData.cash.bir) +
      parseInt(resultData.cash.sifirbes) * 0.5 +
      parseInt(resultData.cash.sifiryirmibes) * 0.25 +
      parseInt(resultData.cash.sifirbir) * 0.1 +
      parseInt(resultData.cash.sifirsifirbes) * 0.05;

    this.visa =
      parseInt(resultData.credit.bir) +
      parseInt(resultData.credit.iki) +
      parseInt(resultData.credit.uc) +
      parseInt(resultData.credit.dort) +
      parseInt(resultData.credit.bes) +
      parseInt(resultData.credit.alti) +
      parseInt(resultData.credit.yedi);
 // eslint-disable-next-line no-console
       console.table(resultData.credit)
    this.ticket =
      parseInt(resultData.ticket.yuz) * 100 +
      parseInt(resultData.ticket.ikiyuz) * 200 +
      parseInt(resultData.ticket.elli) * 50 +
      parseInt(resultData.ticket.yirmi) * 20 +
      parseInt(resultData.ticket.ontl) * 10 +
      parseInt(resultData.ticket.bes) * 5 +
      parseInt(resultData.ticket.bir) +
      parseInt(resultData.ticket.sifirbes) * 0.5 +
      parseInt(resultData.ticket.sifiryirmibes) * 0.25 +
      parseInt(resultData.ticket.sifirbir) * 0.1 +
      parseInt(resultData.ticket.sifirsifirbes) * 0.05;

    this.sodexo =
      parseInt(resultData.sodexo.yuz) * 100 +
      parseInt(resultData.sodexo.ikiyuz) * 200 +
      parseInt(resultData.sodexo.elli) * 50 +
      parseInt(resultData.sodexo.yirmi) * 20 +
      parseInt(resultData.sodexo.ontl) * 10 +
      parseInt(resultData.sodexo.bes) * 5 +
      parseInt(resultData.sodexo.bir) +
      parseInt(resultData.sodexo.sifirbes) * 0.5 +
      parseInt(resultData.sodexo.sifiryirmibes) * 0.25 +
      parseInt(resultData.sodexo.sifirbir) * 0.1 +
      parseInt(resultData.sodexo.sifirsifirbes) * 0.05;
    this.setcard = parseInt(resultData.setCardGunSonu);
    this.multinet = parseInt(resultData.multinetGunSonu);
    this.metropol = parseInt(resultData.metropolGunSonu);
    this.ceocard = parseInt(resultData.ceoCardGunSonu);
    this.avmkuponu = parseInt(resultData.avmKuponu);
    this.sinemabileti = parseInt(resultData.sinemaBileti);
    this.yemekCeki =
      this.sodexo +
      this.ticket +
      this.setcard +
      this.multinet +
      this.metropol +
      this.ceocard +
      this.avmkuponu +
      this.sinemabileti;
  }
};
</script>
