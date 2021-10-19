<template>
  <div class="sidebar sidebar-light sidebar-main sidebar-expand-md">
    <!-- Sidebar mobile toggler -->
    <div class="sidebar-mobile-toggler text-center">
      <a href="#" class="sidebar-mobile-main-toggle">
        <i class="icon-arrow-left8"></i>
      </a>
      <span class="font-weight-semibold">Menü</span>
      <a href="#" class="sidebar-mobile-expand">
        <i class="icon-screen-full"></i>
        <i class="icon-screen-normal"></i>
      </a>
    </div>
    <!-- /sidebar mobile toggler -->
    <!-- Sidebar content -->
    <div class="sidebar-content">
      <!-- User menu -->
      <div class="sidebar-user-material">
        <div class="sidebar-user-material-body">
          <div class="card-body text-center">
            <a href="#">
              <img
                src="/assets/logo.png"
                class="img-fluid rounded-circle shadow-1 mb-3"
                width="200"
                height="200"
                alt
              />
            </a>
            <h6 class="mb-0 text-white text-shadow-dark">
              {{ UserInfo.email }}
            </h6>
            <span class="font-size-sm text-white text-shadow-dark">{{
              SubeInfo.name
            }}</span>
          </div>

          <div class="sidebar-user-material-footer">
            <a
              href="#user-nav"
              class="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle"
              data-toggle="collapse"
            >
              <span>Kullanıcı İşlemleri</span>
            </a>
          </div>
        </div>

        <div class="collapse" id="user-nav">
          <ul class="nav nav-sidebar">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="icon-user-plus"></i>
                <span>Profilim</span>
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="icon-comment-discussion"></i>
                <span>Mesajlarım</span>
                <span
                  class="badge bg-teal-400 badge-pill align-self-center ml-auto"
                  >58</span
                >
              </a>
            </li>

            <li class="nav-item">
              <a href="/User/Logout" class="nav-link">
                <i class="icon-switch2"></i>
                <span>Çıkış Yap</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /user menu -->

      <!-- ADMİN navigation -->

      <div class="card card-sidebar-mobile">
        <ul class="nav nav-sidebar" data-nav-type="accordion">
          <!-- Main -->

          <li class="nav-item">
            <a href="/" class="nav-link active">
              <i class="icon-home4"></i>
              <span>Anasayfa</span>
            </a>
          </li>
          <li class="nav-item-header">
            <div class="text-uppercase font-size-xs line-height-xs">Üretim</div>
            <i class="icon-menu" title="Üretim"></i>
          </li>
          <li class="nav-item nav-item-submenu">
            <a href="#" class="nav-link">
              <i class="icon-copy"></i>
              <span>Üretim İşlemleri</span>
            </a>
            <ul class="nav nav-group-sub" data-submenu-title="Üretim">
              <li class="nav-item">
                <a href="/Uretim" class="nav-link" v-show="isAdmin"
                  >İhtiyaç Listesi</a
                >
              </li>
              <li class="nav-item">
                <a href="/Uretim/SubeKalan" class="nav-link" v-show="!isAdmin"
                  >Şube Kalan Listesi</a
                >
              </li>

              <li class="nav-item" v-show="isAdmin">
                <a
                  href="/Uretim/SubeKalanDetayli"
                  class="nav-link"
                  v-show="isAdmin"
                  >Şube Kalan Detaylı</a
                >
              </li>
              <li class="nav-item" v-show="isAdmin">
                <a href="/Uretim/Gunluk" class="nav-link">Günlük Üretim</a>
              </li>
              <li class="nav-item">
                <a href="/Uretim/GidecekOlan" class="nav-link" v-show="isAdmin"
                  >Gidecek Olan</a
                >
              </li>
            </ul>
          </li>

          <li class="nav-item-header">
            <div class="text-uppercase font-size-xs line-height-xs">Kasa</div>
            <i class="icon-menu" title="Üretim"></i>
          </li>
          <li class="nav-item nav-item-submenu">
            <a href="#" class="nav-link">
              <i class="material-icons">monetization_on</i>
              <span>Kasa İşlemleri</span>
            </a>
            <ul class="nav nav-group-sub" data-submenu-title="Üretim">
              <li class="nav-item">
                <a href="/kasaDurum" class="nav-link" v-show="!isAdmin"
                  >Kasa Durumu</a
                >
              </li>
              <li class="nav-item">
                <a href="/KasaDurumSubeBazli" v-show="isAdmin" class="nav-link"
                  >Kasa Durum Şube Bazlı</a
                >
              </li>
              <li class="nav-item">
                <a href="/SubeKasaRaporu" v-show="!isAdmin" class="nav-link"
                  >Kasa Raporu</a
                >
              </li>
              <li class="nav-item">
                <a href="/kasaKontrol" class="nav-link" v-show="isAdmin"
                  >Kasa Kontrol</a
                >
              </li>
              <li class="nav-item">
                <a href="/kasaRaporu" class="nav-link" v-show="isAdmin"
                  >Kasa Raporu</a
                >
              </li>
            </ul>
          </li>

          <li class="nav-item nav-item-submenu" v-show="isAdmin">
            <a href="#" class="nav-link">
              <i class="material-icons">transform</i>
              <span>Checklist İşlemleri</span>
            </a>
            <ul class="nav nav-group-sub" data-submenu-title="Üretim">
              <li class="nav-item">
                <a href="/Checklist/Index" class="nav-link" v-show="isAdmin"
                  >Checklist Tanımları</a
                >
              </li>
              <li class="nav-item">
                <a href="/Checklist/Sube" class="nav-link" v-show="isAdmin"
                  >Yeni Checklist İşlemi</a
                >
              </li>
              <li class="nav-item">
                <a href="/Checklist/Report" class="nav-link" v-show="isAdmin"
                  >Checklist Raporu</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item nav-item-submenu" v-show="isAdmin">
            <a href="#" class="nav-link">
              <i class="material-icons">transform</i>
              <span>Merkez Istekleri</span>
            </a>
            <ul class="nav nav-group-sub" data-submenu-title="Üretim">
              <li class="nav-item">
                <a href="/Checklist/Index" class="nav-link" v-show="isAdmin"
                  >Siparis</a
                >
              </li>
              <li class="nav-item">
                <a href="/Checklist/Sube" class="nav-link" v-show="isAdmin"
                  >Teknik Servis</a
                >
              </li>
              <li class="nav-item">
                <a href="/Checklist/Report" class="nav-link" v-show="isAdmin"
                  >Sube Transfer</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item nav-item-submenu" v-show="isAdmin">
            <a href="#" class="nav-link">
              <i class="material-icons">transform</i>
              <span>Stok Islemleri</span>
            </a>
            <ul class="nav nav-group-sub" data-submenu-title="Üretim">
              <li class="nav-item">
                <a href="/Checklist/Index" class="nav-link" v-show="isAdmin"
                  >Yeni Stok Karti</a
                >
              </li>
              <li class="nav-item">
                <a href="/Checklist/Sube" class="nav-link" v-show="isAdmin"
                  >Stok Listesi</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item nav-item-submenu" v-show="isAdmin">
            <a href="#" class="nav-link">
              <i class="material-icons">check</i>
              <span>Onay Süreç İşlemleri</span>
            </a>
            <ul class="nav nav-group-sub" data-submenu-title="Üretim">
              <li class="nav-item">
                <a href="/Onay/Index" class="nav-link" v-show="isAdmin"
                  >Onay Süreç Tanımları</a
                >
              </li>
              <li class="nav-item">
                <a href="/Onay/Bekleyen" class="nav-link" v-show="isAdmin"
                  >Bekleyen Onaylar</a
                >
              </li>
            </ul>
          </li>

          
          <div v-show="isAdmin">
            <li class="nav-item-header">
              <div class="text-uppercase font-size-xs line-height-xs">
                Raporlar
              </div>
              <i class="icon-menu" title="Tanımlar"></i>
            </li>
            <li class="nav-item nav-item-submenu">
              <a href="#" class="nav-link">
                <i class="icon-stack"></i>
                <span>Raporlar</span>
              </a>

              <ul class="nav nav-group-sub" data-submenu-title="Kullanıcı">
                <li class="nav-item">
                  <a href="/Rapor/UrunBazliSatis" class="nav-link"
                    >Urun Bazli Satis</a
                  >
                </li>
                <li class="nav-item">
                  <a href="/Rapor/AlisRaporu" class="nav-link">Stok Raporu</a>
                </li>
                <li class="nav-item">
                  <a href="/Rapor/WebOdeme" class="nav-link"
                    >Web Odeme Raporu</a
                  >
                </li>
              </ul>
            </li>
          </div>

          <div v-show="isAdmin">
            <li class="nav-item-header">
              <div class="text-uppercase font-size-xs line-height-xs">
                Tanımlar
              </div>
              <i class="icon-menu" title="Tanımlar"></i>
            </li>
            <li class="nav-item nav-item-submenu">
              <a href="#" class="nav-link">
                <i class="icon-users"></i>
                <span>Kullanıcı İşlemleri</span>
              </a>

              <ul class="nav nav-group-sub" data-submenu-title="Kullanıcı">
                <li class="nav-item">
                  <a href="/User" class="nav-link">Kullanıcı Tanımları</a>
                </li>
              </ul>
            </li>

            <li class="nav-item nav-item-submenu">
              <a href="#" class="nav-link">
                <i class="icon-stack"></i>
                <span>Şube Tanımları</span>
              </a>
              <ul class="nav nav-group-sub" data-submenu-title="Şube Tanımları">
                <li class="nav-item">
                  <a href="/Sube" class="nav-link">Şube Listesi</a>
                </li>
              </ul>
            </li>

            <!-- <li class="nav-item-header">
              <div class="text-uppercase font-size-xs line-height-xs">Raporlar</div>
              <i class="icon-menu" title="Raporlar"></i>
            </li>
            <li class="nav-item nav-item-submenu">
              <a href="#" class="nav-link">
                <i class="icon-file-css"></i>
                <span>Sipariş & Transfer</span>
              </a>
              <ul class="nav nav-group-sub" data-submenu-title="Şube  & Transfer">
                <li class="nav-item">
                  <a href="alpaca_basic.html" class="nav-link">Sipariş</a>
                </li>
                <li class="nav-item">
                  <a href="alpaca_advanced.html" class="nav-link">Transfer</a>
                </li>
              </ul>
            </li>-->
            <!-- <li class="nav-item nav-item-submenu">
              <a href="#" class="nav-link">
                <i class="icon-spell-check"></i>
                <span>Kasa Raporu</span>
              </a>
              <ul class="nav nav-group-sub" data-submenu-title="Kasa Raporu">
                <li class="nav-item">
                  <a href="editor_summernote.html" class="nav-link">Kasa Bildirimi</a>
                </li>
                <li class="nav-item">
                  <a href="editor_ckeditor.html" class="nav-link">Program Kasası</a>
                </li>
                <li class="nav-item">
                  <a href="editor_trumbowyg.html" class="nav-link">Şubeler Gün Sonu</a>
                </li>
              </ul>
            </li>-->
            <!--<li class="nav-item nav-item-submenu">
              <a href="#" class="nav-link">
                <i class="icon-select2"></i>
                <span>Üretim</span>
              </a>
              <ul class="nav nav-group-sub" data-submenu-title="Üretim Raporları">
                <li class="nav-item">
                  <a href="picker_date.html" class="nav-link">Günlük İhtiyaç</a>
                </li>
                <li class="nav-item">
                  <a href="picker_color.html" class="nav-link">Fabrika Üretim</a>
                </li>
                <li class="nav-item">
                  <a href="picker_location.html" class="nav-link">Şube Üretim Hareketleri</a>
                </li>
              </ul>
            </li>-->
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../Service";

export default {
  data() {
    return {
      UserInfo: [],
      isAdmin: false,
      SubeInfo: [],
    };
  },
  async mounted() {
    let result = await Service.save("users/login/validToken/", {
      token: localStorage.getItem("TOKEN"),
    });
    this.UserInfo = result.data.data[0];

    if (result.data.data[0].isAdmin) {
      this.isAdmin = true;
    }
    let sube = await Service.get("Sube", this.UserInfo.subeId);
    // eslint-disable-next-line no-console
    this.SubeInfo = sube.data;
  },
};
</script>
