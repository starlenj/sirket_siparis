<template>
  <div class="col-md-12">
   
<export-excel :data="BahceliData.data" class='btn btn-success' name="bahceli.xlsx">
           Excel Aktar 
</export-excel>
    <table class="table">
      <thead>
        <tr>
          <th>Urun Grubu</th>
          <th>Urun Adi</th>
          <th>Miktar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in BahceliData.data" :key="item._id">
       	<td>{{item.UrunGrubu}}</td>
       	<td>{{item.UrunAdi}}</td>
       	<td>{{item.Miktar}}</td>
			 </tr>
      </tbody>
    </table>
  
   
  </div>
</template>

<script>
import { DetailKasa } from "../../Helpers/KasaSubeModel";
export default {
  props: ["tarihData", "BahceliData"],
  data() {
    return {
      ...DetailKasa,
    };
  },
  methods: {
    async GetKasa() {
      // eslint-disable-next-line no-console
      console.log("BAHÇELİ PROGRAM DATA", this.BahceliData);
    },
  },
};
</script>
