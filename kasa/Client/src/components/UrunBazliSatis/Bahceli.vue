<template>
  <div class="col-md-12">
   
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Miktar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in BahceliData.data" :key="item._id">
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
