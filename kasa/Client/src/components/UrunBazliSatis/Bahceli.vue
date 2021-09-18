<template>
  <div class="col-md-12">
    <export-excel
      :data="BahceliData.data"
      class="btn btn-success"
      name="bahceli.xls"
    >
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
          <td>{{ item.UrunGrubu }}</td>
          <td>{{ item.UrunAdi }}</td>
          <td>{{ item.Miktar }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["BahceliData"],
};
</script>
