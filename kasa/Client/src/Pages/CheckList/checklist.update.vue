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
    <div class="content">
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">CheckList Oluşturma</h5>
        </div>

        <div class="card-body">
          <br />
          <br />
          <div class="form-group">
            <label>Adı</label>
            <input type="text" v-model="Name" class="form-control" />
          </div>
          <div class="form-group">
            <label>Grup Puani</label>
            <input type="number" v-model="grupPuani" class="form-control" />
          </div>
          <div class="form-group">
            <label>Denetleme Turu</label>
            <select v-model="Type" class="form-control">
              <option value="mudur" :selected="Type ==='mudur'">Mudur</option>
              <option value="sube" :selected="Type === 'sube'">Sube</option>
            </select>
          </div>
 
          <button class="btn btn-primary" v-on:click="UpdateListHeader">
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
export default {
  data() {
    return {
      Name: "",
      grupPuani:0, 
      Type: "",
      id: "",
    };
  },
  async mounted() {
    let response = await Service.get("ListHeader", this.$route.params.id);
    this.Name = response.data.name;
    this.grupPuani = response.data.grupPuani;
    this.Type = response.data.type;
    this.id = response.data._id;
  },
  methods: {
    async UpdateListHeader() {
      var response = await Service.update("ListHeader", {
        name: this.Name,
        grupPuani: this.grupPuani,
        type: this.Type,
        _id: this.id,
      });
      if (response) {
        window.location.href = "/CheckList/Index";
      }
    },
  },
};
</script>
