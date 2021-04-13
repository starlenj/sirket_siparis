<template>
  <div>
    <div>
      <div class="page-header page-header-light">
        <div class="page-header-content header-elements-md-inline">
          <div class="page-title d-flex">
            <h4>
              <i class="icon-arrow-left52 mr-2"></i>
              <span class="font-weight-semibold">Rapor</span> - Urun bazli satis
              Raporu
            </h4>
            <a href="#" class="header-elements-toggle text-default d-md-none">
              <i class="icon-more"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="form-group">
          <label>Urun Adi : </label>
          <input type="text" class="form-control" v-model="name" />
        </div>
        <div class="form-group">
          <label>Urun Grubu</label>
					<select class="form-control" v-model="groupName">
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
</template>

<script>
import Service from "../../Service.js";
import RaporProduct from "./UrunTanimlari-list.vue";
export default {
  components :{
    RaporProduct
  },
  data() {
    return {
			name :"",
			groupName  : ""
  }
	},
  methods: {
    async SaveData(){
      let response = await Service.save("RaporProduct",{name: this.name,groupName:this.groupName});
      if(response){
        window.location.reload();
      }
    }
  },
};
</script>
