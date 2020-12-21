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
            <label>Kullanıcı</label>
            <select class="form-control" v-model="UserId">
              <option>---Lütfen Seçiniz---</option>
              <option
                :value="UserList._id"
                v-for="UserList in UserList"
                :key="UserList._id"
              >
                {{ UserList.name }}
              </option>
            </select>
          </div>

          <button class="btn btn-primary" v-on:click="NewListHeader">
            Kaydet
          </button>

          <table id="table" class="table datatable-columns">
            <thead>
              <tr>
                <th>Adı</th>

                <th>Düzenle/Sil</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="OnayUserList in OnayUserList" :key="OnayUserList._id">
                <td v-for="UserList in UserList" :key="UserList._id">
                  <span v-if="UserList._id === OnayUserList.UserId">
                    {{ UserList.name }}</span
                  >
                </td>

                <td>
                  <button
                    type="button"
                    @click="DeleteValue(OnayUserList._id)"
                    class="btn btn-danger"
                  >
                    Sil
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
export default {
  data() {
    return {
      UserList: [],
      UserId: "",
      OnayUserList: [],
    };
  },
  async mounted() {
    let users = await Service.list("Users");
    this.UserList = users.data;

    let Onaybody = await Service.save("OnayUserList", {
      headerId: this.$route.params.id,
    });
    this.OnayUserList = Onaybody.Result;
  },
  methods: {
    async NewListHeader() {
      var response = await Service.save("OnayBody", {
        UserId: this.UserId,
        headerId: this.$route.params.id,
        Date: moment().format("YYYY.MM.DD"),
      });
      //window.location.href = "/Onay/Index";
    },

    async DeleteValue(id) {
      var response = await Service.delete(id, "OnayBody");
      if (response) {
        window.location.reload();
      }
    },
  },
};
</script>
