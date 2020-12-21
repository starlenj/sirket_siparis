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
            <a href="/Sube" class="breadcrumb-item">Onay Listesi</a>
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
          <h5 class="card-title">Onay Listesi</h5>
        </div>

        <div class="card-body">
          <a href="/Onay/New" class="btn bg-primary">
            <i class="mi-add"></i>Yeni
          </a>
          <br />
          <br />
          <table id="table" class="table datatable-columns">
            <thead>
              <tr>
                <th>Adı</th>
                <th>Düzenle</th>
                <th>Sil</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="OnayListData in OnayListData" :key="OnayListData._id">
                <td>{{ OnayListData.name }}</td>
                <td>
                  <a
                    :href="'/Onay/AddUser/' + OnayListData._id"
                    class="btn btn-primary"
                    >Kullanıcı Ekle</a
                  >
                </td>
                <td>
                  <a
                    :href="'/CheckList/Update/' + OnayListData._id"
                    class="btn btn-primary"
                  >
                    Düzenle
                  </a>
                </td>
                <td>
                  <button
                    class="btn btn-danger"
                    @click="DeleteCheckList(OnayListData._id)"
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
export default {
  data() {
    return {
      OnayListData: [],
    };
  },
  async mounted() {
    let subeListResult = await Service.list("OnayHeader");
    this.OnayListData = subeListResult.data;
  },
  methods: {
    async DeleteCheckList(id) {
      await Service.delete(id, "/OnayHeader");
      window.location.reload();
    },
  },
};
</script>
