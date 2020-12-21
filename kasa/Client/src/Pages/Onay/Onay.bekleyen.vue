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
          <table id="table" class="table datatable-columns">
            <thead>
              <tr>
                <th>Adı</th>
                <th>İncele</th>
                <th>Onayla</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="OnayListData in OnayListData" :key="OnayListData._id">
                <td>{{ OnayListData.name }}</td>
                <td>
                  <button
                    class="btn btn-primary"
                    @click="
                      BelgeOnIzleme(OnayListData.type, OnayListData.BelgeId)
                    "
                  >
                    Belge Önizleme
                  </button>
                </td>
                <td>
                  <button
                    @click="Onayla(OnayListData.BodyId)"
                    class="btn btn-primary"
                  >
                    Onayla
                  </button>
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
import LoginService from "../../Services/Login";
export default {
  data() {
    return {
      OnayListData: [],
    };
  },
  async mounted() {
    let UserInfo = await LoginService.ValidToken();
    let UserInfoData = UserInfo.data.data;
    let OnayList = await Service.save("/GetUserOnayList", {
      UserId: UserInfoData[0]._id,
    });
    let OnayBekleyenList = [];
    OnayList.Result.map(async (item) => {
      let OnayHeader = await Service.get("/OnayHeader", item.HeaderId);

      OnayBekleyenList.push({
        name: OnayHeader.data.name,
        _id: OnayHeader.data._id,
        BodyId: item._id,
        BelgeId: item.BelgeId,
        type: OnayHeader.data.type,
      });
      console.log(OnayBekleyenList);
    });
    this.OnayListData = OnayBekleyenList;
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
    async BelgeOnIzleme(type, id) {
      if (type === "CheckList") {
        window.location.href = "/Checklist/Show/" + id;
      }
    },
    async Onayla(id) {
      let OnayService = await Service.update("/OnayList", {
        Status: true,
        _id: id,
      });
      if (OnayService) {
        window.location.reload();
      }
    },
  },
};
</script>
