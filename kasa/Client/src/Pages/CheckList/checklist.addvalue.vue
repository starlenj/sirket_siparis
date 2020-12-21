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
          <h5 class="card-title">CheckList Form Oluşturma</h5>
        </div>

        <div class="card-body">
          <br />
          <br />
          <div class="form-group">
            <label>Adı</label>
            <input type="text" v-model="Name" class="form-control" />
          </div>
          <div class="form-group">
            <label>Türü</label>
            <select v-model="Type" class="form-control">
              <option value="checkbox">Doğru/Yalnış</option>
              <option value="text">Metin</option>
            </select>
          </div>
          <button class="btn btn-primary" v-on:click="NewListHeader">
            Kaydet
          </button>
          <table id="table" class="table datatable-columns">
            <thead>
              <tr>
                <th>Adı</th>
                <th>Türü</th>
                <th>Düzenle/Sil</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ListBody in ListBody" :key="ListBody._id">
                <td>{{ ListBody.name }}</td>
                <td>
                  {{ ListBody.type === "checkbox" ? "Doğru/Yalnış" : "Metin" }}
                </td>
                <td>
                  <button
                    type="button"
                    @click="DeleteValue(ListBody._id)"
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
export default {
  data() {
    return {
      Name: "",
      ListBody: [],
    };
  },
  async mounted() {
    var response = await Service.save("GetListBody", {
      id: this.$route.params.id,
    });
    this.ListBody = response.data;
  },
  methods: {
    async NewListHeader() {
      var response = await Service.save("ListBody", {
        headerId: this.$route.params.id,
        name: this.Name,
        type: this.Type,
        value : this.value
      });

      if (response) window.location.reload();
    },
    async DeleteValue(id) {
      var response = await Service.delete(id, "ListBody");

      if (response) {
        window.location.reload();
      }
    },
  },
};
</script>
