<template>
  <div>
    <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
          <h4>
            <i class="icon-arrow-left52 mr-2"></i>
            <span class="font-weight-semibold">Tanımlar</span> -Checklist Raporu
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
            <a href="/Sube" class="breadcrumb-item">CheckList Raporu</a>
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
          <h5 class="card-title">{{ CheckListData[0].headername }} Raporu</h5>
        </div>

        <div class="card-body">
          <br />
          <br />

          <table id="table" class="table datatable-columns">
            <thead>
              <tr>
                <th>Adı</th>
                <th>Değeri</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="CheckListData in CheckListData"
                :key="CheckListData.HeaderId"
              >
                <td>{{ CheckListData.name }}</td>
                <td>
                  <label>{{
                    CheckListData.value === "true" ? "Uygun" : "Uygun Değil"
                  }}</label>
                </td>
              </tr>
            </tbody>
          </table>
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
import { GetBodyReport } from "../../Helpers/CheckListTools";
export default {
  data() {
    return {
      CheckListData: [],
      SubeList: [],
      SelectSube: "",
      Tarih: "",
    };
  },
  async mounted() {
    var ReportResult = await GetBodyReport(this.$route.params.id);
    this.CheckListData = ReportResult;
  },
  methods: {
    async SetSube(e) {
      this.SelectSube = e.target.value;
    },
    async GetReport() {
      var FormatTarih = moment(this.Tarih).format("YYYY.MM.DD");
      var ReportData = await GetReport(this.SelectSube, FormatTarih);
      this.CheckListData = ReportData;
    },
  },
};
</script>
