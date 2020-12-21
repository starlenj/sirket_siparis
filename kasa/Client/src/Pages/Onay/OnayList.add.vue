<template>
  <div>
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Tanımlar</span> -Checklist
            Listesi
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
            <a href="/Sube" class="breadcrumb-item">Onay Süreç Listesi</a>
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
      <!-- Form inputs -->
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">Onay Süreç Oluşturma</h5>
        </div>

        <div class="card-body">
          <br />
          <br />
          <div class="form-group">
            <label>Adı</label>
            <input type="text" v-model="Name" class="form-control" />
          </div>

          <div class="form-group">
            <label>Tür</label>
            <select class="form-control" v-model="Type">
              <option>---Lütfen Seçiniz---</option>
              <option value="KasaRaporu">Kasa</option>
              <option value="CheckList">CheckList</option>
            </select>
          </div>

          <button class="btn btn-primary" v-on:click="NewListHeader">
            Kaydet
          </button>
          <div id="deleteSubeForm" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <h1>Kayıt Silinecek Onaylıyor musunuz ?</h1>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-link"
                    data-dismiss="modal"
                  >
                    İptal
                  </button>
                  <button
                    type="button"
                    class="btn bg-primary"
                    data-dismiss="modal"
                  >
                    Sil
                  </button>
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
export default {
  data() {
    return {
      Name: "",
      Type: "",
    };
  },
  methods: {
    async NewListHeader() {
      var response = await Service.save("OnayHeader", {
        name: this.Name,
        type: this.Type,
        Date: moment().format("YYYY.MM.DD"),
      });
      window.location.href = "/Onay/Index";
    },
  },
};
</script>
