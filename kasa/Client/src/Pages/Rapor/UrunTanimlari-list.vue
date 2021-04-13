
<template>
  <div>
    <div class="page has-sidebar-left bg-light height-full">
      <div class="col-lg-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3"></div>
          <div class="card-body">
            <table class="table">
              <thead>
            
                <th>Urun Adi</th>
                <th>Urun Grubu</th>
                <th>Duzenle/Sil</th>
              </thead>
              <tbody>
                <tr v-for=" items in data" :key="items.name">
                  <td>{{items.name}}</td>
                  <td>{{items.groupName}}</td>
                  <td>
                    <button data-toggle="modal" data-target="#EditModal" class="btn btn-primary" @click="SetEdit(items)"> Duzenle</button>
                    <button class="btn btn-danger" @click="SetDelete(items)"> Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

<div id="EditModal" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Duzenle</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <RaporProductEdit  v-bind:EditData ="SelectData" ref="EditFormData" />
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import Service from "../../Service.js"
import RaporProductEdit from "./UrunTanimlari-edit.vue"
export default {
  components:{
    RaporProductEdit
  },
  data() {
    return {
      data:[],
      SelectData :[]
    };
  },
  async mounted() {
  let response = await Service.list("RaporProduct");
    this.data= response.data;
  },
  methods: {
    async SetEdit(data){
      this.SelectData = data;
      this.$refs.EditFormData.GetData();
      this.$emit("EditData", data);
    },
    async SetDelete(data){
      let response = await Service.delete(data._id,"RaporProduct");
      if(response){
        window.location.reload();
      }
    }
  },
};
</script>
