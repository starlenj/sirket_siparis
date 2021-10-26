
<template>
  <div class="col-md-12">
   
<export-excel :data="TunaliData.data" class='btn btn-success' name = "tunali.xls" >
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
        <tr v-for="(item, index) in TunaliData.data" :key="item._id">
       	<td>{{item.UrunGrubu}}</td>
       	<td>{{item.UrunAdi}}</td>
       	<td>{{item.Miktar}}</td>
			 </tr>
      </tbody>
    </table>
  
   
  </div>
</template>

<script>
export default {
  props: ["TunaliData"],
};
</script>
