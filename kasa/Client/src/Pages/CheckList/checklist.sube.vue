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
          <h5 class="card-title">CheckList Listesi</h5>
        </div>

        <div class="card-body">
          <a href="/CheckList/New" class="btn bg-primary">
            <i class="mi-add"></i>Yeni
          </a>
          <br />
          <br />
          <table id="table" class="table datatable-columns">
            <thead>
              <tr>
                <th>Adı</th>
                <th>Seç</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="CheckListData in CheckListData"
                :key="CheckListData._id"
              >
                <td>{{ CheckListData.name }}</td>
                <td>
                  <a
                    :href="'/CheckList/SubeCheck/' + CheckListData._id"
                    class="btn btn-primary"
                    >Değerlendirme Başlat</a
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
export default {
  data() {
    return {
      CheckListData: [],
    };
  },
  async mounted() {
    let subeListResult = await Service.list("ListHeader");
    this.CheckListData = subeListResult.data;
  },
  methods: {
    async DeleteCheckList(id) {
      await Service.delete(id, "/ListHeader");
      window.location.reload();
    },
  },
};
</script>
