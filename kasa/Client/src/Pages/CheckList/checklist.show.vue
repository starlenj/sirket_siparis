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
          <h5 class="card-title">CheckList Raporu</h5>
        </div>

        <div class="card-body">
          <br />
          <br />

          <div class="form-group">
            <button class="btn btn-primary" @click="ReportOnay">Onayla</button>
          </div>
          <table id="table" class="table datatable-columns">
            <thead>
              <tr>
                <th>Adı</th>
                <th>Detay</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="CheckListData in CheckListData"
                :key="CheckListData.HeaderId"
              >
                <td>{{ CheckListData.name }}</td>
                <td>
                  <span style="font-weight: 'bold'"
                    ><b>{{
                      CheckListData.value === "true"
                        ? "Uygundur"
                        : "Uygun Değildir"
                    }}</b></span
                  >
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
import { GetReport, GetBodyReport } from "../../Helpers/CheckListTools";
import LoginService from "../../Services/Login";
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
    let ListHeaderData = await Service.get(
      "SubeListHeader",
      this.$route.params.id
    );
    let ListBodyResult = await GetBodyReport(ListHeaderData.data._id);
    this.CheckListData = ListBodyResult;
  },
  methods: {
    async ReportOnay() {
      let UserInfo = await LoginService.ValidToken();
      let UserInfoData = UserInfo.data.data;
      let OnayBodyResult = await Service.save("Onaylama", {
        headerId: this.$route.params.onayId,
        UserId: UserInfoData[0]._id,
      });
      if (OnayBodyResult) {
        window.location.href = "/Onay/Bekleyen";
      }
    },
  },
};
</script>
