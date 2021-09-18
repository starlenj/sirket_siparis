<template>
  <div class="col-md-12">
   
<<<<<<< HEAD
    <table class="table">
      <thead>
        <tr>
          <th></th>
=======
<export-excel :data="BahceliData.data" class='btn btn-success' name="bahceli.xlsx">
           Excel Aktar 
</export-excel>
    <table class="table">
      <thead>
        <tr>
          <th>Urun Grubu</th>
          <th>Urun Adi</th>
>>>>>>> origin/microservice
          <th>Miktar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in BahceliData.data" :key="item._id">
<<<<<<< HEAD
          <th>{{ item._id | formatDate }}</th>
          <td>{{ item.credit.toFixed(2) }}</td>
          <td>
            {{
              BahceliData.programData[index] === undefined
                ? 0
                : BahceliData.programData[index]["KREDI"]
            }}
          </td>
          <td>
            {{
              (
                parseFloat(item.credit) -
                (BahceliData.programData[index] === undefined
                  ? 0
                  : BahceliData.programData[index]["KREDI"])
              ).toFixed(2)
            }}
          </td>
        </tr>
=======
       	<td>{{item.UrunGrubu}}</td>
       	<td>{{item.UrunAdi}}</td>
       	<td>{{item.Miktar}}</td>
			 </tr>
>>>>>>> origin/microservice
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
