<template>
  <div>
    <div class="page has-sidebar-left bg-light height-full">
      <header class="blue accent-3 relative nav-sticky">
        <div class="container-fluid text-white">
          <div class="row">
            <div class="col">
              <h3 class="my-3">
                Mağaza Sipariş Geçmişi
                <span class="s-14"></span>
              </h3>
            </div>
          </div>
        </div>
      </header>

      <div class="col-lg-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3"></div>
          <div class="card-body">
            <div class="form-group">
              <label>Tarih</label>
              <input type="date" class="form-control" v-model="date" data-date-format="YYYY MM DD" />
            </div>

            <div class="form-group">
              <label>Sipariş Durumu</label>
              <select v-model="model.orderState" class="form-control">
                <option value="0">Onay Bekleyen</option>
                <option value="1">Onaylanmış</option>
              </select>
            </div>
            <div class="form-group">
              <button class="btn btn-primary" @click="SiparisGetir()">Getir</button>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3">Siparişler</div>
          <div class="card-body">
            <table class="table">
              <thead>
                <th>Malıncınsı</th>
                <th>Miktar</th>
                <th>Karşılanan Miktar</th>
                <th>Sipariş Durumu</th>
              </thead>
              <tbody>
                <tr v-for="order in model.orderData" :key="order._id">
                  <td>{{order.malinCinsi}}</td>
                  <td>{{order.miktar}} {{order.birimAdi}}</td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="order.onayMiktar"
                      readonly="true"
                    />
                  </td>
                  <td>
                    <textarea class="form-control" v-model="order.onayAciklama" readonly="true"></textarea>
                  </td>
                  <td>
                    <span v-if="order.status===0">Onay Bekliyor</span>
                    <span v-if="order.status===1">Onaylanmış</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../Services/Sube";
import UserService from "../../Services/Login";
import SepetService from "../../Services/Sepet";
import * as moment from "moment";

export default {
  data() {
    return {
      model: {
        selectSubeData: [],
        order: [],
        data: [],
        date: "",
        selectSube: [],
        orderState: 0,
        orderData: []
      }
    };
  },
  async mounted() {
    var result = await Service.list();
    this.model.data = result.data;
    this.model.data.forEach(sube => {
      this.model.selectSubeData.push({ text: sube.name, value: sube._id });
    });
  },
  methods: {
    async SiparisGetir() {
      let users = await UserService.ValidToken(localStorage.getItem("TOKEN"));
      var user = users.data.data[0];
      var date = moment(this.date).format("YYYY.MM.DD");
      var subeId = user.subeId;
      var filterData = { subeId, date, orderState: this.model.orderState };
      let result = await SepetService.GetSubeOrder(filterData);
      this.model.orderData = result.data;
    },
    async SiparisOnayla() {
      this.model.orderData.forEach(async order => {
        if (order.onayMiktar === 0) {
          order.onayMiktar = order.miktar;
          order.status = 1;
        }
        order.status = 1;
        await SepetService.SepetOnay(order);
      });
    }
  }
};
</script>
