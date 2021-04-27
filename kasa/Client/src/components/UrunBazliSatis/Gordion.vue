<template>
	<div class="col-md-12">
	 
<export-excel :data="GordionData.data" class='btn btn-success' name = "gordion.xls" >
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
				<tr v-for="(item, index) in GordionData.data" :key="item._id">
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
	props: ["GordionData"],
	data() {
		return {
			...DetailKasa,
		};
	},
	methods: {
		async GetKasa() {
		},
	},
};
</script>

