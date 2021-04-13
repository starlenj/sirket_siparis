<template>
  <div>
    <div class="page has-sidebar-left bg-light height-full">
      <div class="col-lg-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3"></div>
          <div class="card-body">
      <div class="content">
        <div class="form-group">
          <label>Urun Adi : </label>
          <input type="text" class="form-control" v-model="EditData.name" />
        </div>
        <div class="form-group">
          <label>Urun Grubu</label>
					<select class="form-control" v-model="EditData.groupName">
						<option>YemekSepeti</option>
						<option>Gel-Al</option>
						<option>Paket Servis</option>
					</select>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="button" @click="SaveData">
           Kaydet 
          </button>
        </div>
        <RaporProduct />
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../Service.js"
export default {
  props :["EditData"],
  data() {
    return {
      data:[]
    };
  },
  methods: {
    async GetData(){
    console.log(this.EditData);
    },
    async SaveData(){
      let response = await Service.update("RaporProduct",this.EditData);
      if(response){
        window.location.reload();
      }
    }
  },
};
</script>
