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
            <label>Tarih</label>
            <input type="date" class="form-control" v-model="Tarih" />
          </div>
          <div class="form-group">
            <label>Şube</label>
            <select class="form-control" v-model="SelectSube" @change="SetSube">
              <option>--Lütfen Şube Seçiniz--</option>
              <option
                v-for="SubeList in SubeList"
                :key="SubeList._id"
                :value="SubeList._id"
              >
                {{ SubeList.name }}
              </option>
            </select>
          </div>
          <br />
          <br />
          <div class="form-group">
            <button class="btn btn-primary" @click="GetReport">Getir</button>
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
                  <a
                    :href="
                      '/CheckList/Report/Details/' + CheckListData.HeaderId
                    "
                    class="btn btn-primary"
                    >Detay</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../Service";
import moment from "moment";
import { GetReport } from "../../Helpers/CheckListTools";
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
    let subeListResult = await Service.list("sube");
    this.SubeList = subeListResult.data;
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
