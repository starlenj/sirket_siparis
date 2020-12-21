<template>
  <div class="col-md-12">
    <h2>Visa</h2>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Gelen</th>
          <th>Program</th>
          <th>Fark</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in MersinData.data" :key="item._id">
          <th>{{item._id | formatDate}}</th>
          <td>{{item.credit.toFixed(2)}}</td>
          <td>{{MersinData.programData[index] === undefined ? 0 : MersinData.programData[index]["KREDI"]}}</td>
          <td>{{((parseFloat(item.credit))-(MersinData.programData[index] === undefined ? 0 : MersinData.programData[index]["KREDI"])).toFixed(2)}}</td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top : 50px">
      <h2>Nakit</h2>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Gelen</th>
            <th>Program</th>
            <th>Fark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in MersinData.data" :key="item._id">
            <th>{{item._id | formatDate}}</th>
            <td>{{item.cash}}</td>
            <td>{{MersinData.programData[index] === undefined ? 0 : MersinData.programData[index]["NAKIT"]}}</td>
            <td>{{(parseFloat(item.cash)- (MersinData.programData[index] === undefined ? 0 : MersinData.programData[index]["NAKIT"])).toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>

      <h2>Yemek Kartı</h2>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Set Kart</th>
            <th>Multinet</th>
            <th>Cio Kart</th>
            <th>Metropol</th>
            <th>Ticket</th>
            <th>Sodexo</th>
            <th>Y.K Ticket</th>
            <th>Y.K Sodexo</th>
            <th>Toplam Gelen</th>
            <th>Program</th>
            <th>Fark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in MersinData.data" :key="item._id">
            <th>{{item._id | formatDate}}</th>
            <td>{{item.setCardGunSonu}}</td>
            <td>{{item.multinetGunSonu}}</td>
            <td>{{item.ceoCardGunSonu}}</td>
            <td>{{item.metropolGunSonu}}</td>
            <td>{{item.ticketGunSonu}}</td>
            <td>{{item.sodexoGunSonu}}</td>
            <td>{{item.ticketYK}}</td>
            <td>{{item.sodexoYK }}</td>
            <td>{{parseFloat(item.yemekCeki).toFixed(2)}}</td>
            <td>{{MersinData.programData[index] === undefined ? 0 : MersinData.programData[index]["YEMEKCEKI"]}}</td>
            <td>{{(parseFloat(item.yemekCeki)-(MersinData.programData[index] === undefined ? 0 : MersinData.programData[index]["YEMEKCEKI"])).toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>
      <h2>Sonuç</h2>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Sonuç</th>
            <th>Masraf</th>
            <th>Vega Masraf</th>

            <th>İptal/Iade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in MersinData.data" :key="item._id">
            <th>{{item._id | formatDate}}</th>
            <th>
              {{
              (
              parseFloat(item.iade.tutarBir)+
              parseFloat(item.iade.tutarIki)+
              parseFloat(item.iade.tutarUc)+
              parseFloat(item.iade.tutarDort)+
              parseFloat(item.iade.tutarBes)+
              parseFloat(item.iade.tutarAlti)+
              (parseFloat(item.credit)-(MersinData.programData[index] === undefined ? 0 : MersinData.programData[index]["KREDI"]))+
              (parseFloat(item.cash)- (MersinData.programData[index] === undefined ? 0 : MersinData.programData[index]["NAKIT"]))+
              (parseFloat(item.yemekCeki)-(MersinData.programData[index] === undefined ? 0 : MersinData.programData[index]["YEMEKCEKI"]))
              ).toFixed(2)
              }}
            </th>
            <td>
              {{
              parseFloat(item.masraf.tutarBir)+
              parseFloat(item.masraf.tutarIki)+
              parseFloat(item.masraf.tutarUc)+
              parseFloat(item.masraf.tutarDort)+
              parseFloat(item.masraf.tutarBes)+
              parseFloat(item.masraf.tutarAlti) | currency
              }}
            </td>
            <td>{{parseFloat(MersinData.VegaKasa[index] === undefined ? 0 : MersinData.VegaKasa[index].TLGIDER).toFixed(2)}}</td>
            <td>
              {{
              parseFloat(item.iade.tutarBir)+
              parseFloat(item.iade.tutarIki)+
              parseFloat(item.iade.tutarUc)+
              parseFloat(item.iade.tutarDort)+
              parseFloat(item.iade.tutarBes)+
              parseFloat(item.iade.tutarAlti) | currency
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { DetailKasa } from "../../Helpers/KasaSubeModel";
export default {
  props: ["tarihData", "MersinData"],
  data() {
    return {
      ...DetailKasa,
    };
  },
  methods: {
    async GetKasa() {},
  },
};
</script>
