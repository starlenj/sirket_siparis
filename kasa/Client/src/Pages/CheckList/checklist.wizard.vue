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
            <a href="/Sube" class="breadcrumb-item">CheckList Listesi</a>
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
          <h5 class="card-title">Şube Değerlendirme Formu</h5>
        </div>

        <div class="card-body">
          <br />
          <br />
          <div class="form-group">
            <label><b>Şube</b></label>
            <select class="form-control" @change="SetSube">
              <option><b>---Lütfen Şube Seçiniz---</b></option>
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
          <div
            class="form-group"
            v-for="ListBody in ListBody"
            :key="ListBody._id"
          >
            <label
              ><b>{{ ListBody.name }}</b></label
            >
            <input
              type="checkbox"
              class="form-control"
              v-model="ListBody.value"
            />
          </div>
          <div class="form-group">
            <button
              type="button"
              class="btn btn-primary"
              @click="NewSubeCheckList"
            >
              Tamamla
            </button>
          </div>
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
import {
  CheckOnayUser,
  ListOnayUser,
  MailGonder,
  OnayUser,
} from "../../Helpers/OnayTools";
export default {
  data() {
    return {
      SubeList: [],
      SelectSube: "",
      ListBody: [],
      CheckListResult: [],
    };
  },
  async mounted() {
    var response = await Service.save("/GetListBody", {
      id: this.$route.params.id,
    });
    this.ListBody = response.data;
    let subeler = await Service.list("/Sube");
    this.SubeList = subeler.data;
  },
  methods: {
    async SetSube(e) {
      this.SelectSube = e.target.value;
    },
    async NewSubeCheckList() {
      let header = await Service.save("/SubeListHeader", {
        SubeId: this.SelectSube,
        ListHeaderId: this.$route.params.id,
        Date: moment().format("YYYY.MM.DD"),
      });
      if (header._id) {
        this.ListBody.map(async (item) => {
          if (item.value === "") {
            item.value = false;
          }
          let result = await Service.save("/SubeListResult", {
            ListId: item._id,
            Result: item.value,
            HeaderId: header._id,
          });
        });
        let checkResult = await CheckOnayUser("CheckList");

        let NewOnayResult = await ListOnayUser(checkResult.Result[0]._id);

        NewOnayResult.Result.map(async (User) => {
          let CheckListResult = await OnayUser(
            header._id,
            User.UserId,
            "OnayList"
          );
          console.log(CheckListResult);
          let MailSonuc = await MailGonder(
            "CheckList",
            CheckListResult.UserId,
            header._id,
            CheckListResult._id
          );
          console.log(MailSonuc);
        });
        /* let MailSonuc = await MailGonder(
          "CheckList",
          checkResult.Result,
          header._id
        );
        console.log(MailSonuc);
*/
        // window.location.href = "/Checklist/Sube";
      }
    },
  },
};
</script>
