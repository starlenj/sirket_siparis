<template>
  <div class="col-md-12">
    <!--KASA GİRİŞ BİTİŞ-->

    <h2>Visa</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Gelen</th>
          <th>Program</th>
          <th>Fark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <currency-input
              v-model="Visa"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AdanaData.programVisa"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="VisaFark"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Nakit</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Gelen</th>
          <th>Program</th>
          <th>Fark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <currency-input
              v-model="Nakit"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AdanaData.programNakit"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="NakitFark"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Yemek Kartı</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Set Kart</th>
          <th>Multinet</th>
          <th>Cio Kart</th>
          <th>Metropol</th>
          <th>Ticket</th>
          <th>Sodexo</th>
          <th>Diğer</th>
          <th>Y.K Ticket</th>
          <th>Y.K Sodexo</th>
          <th>Toplam Gelen</th>
          <th>Program</th>
          <th>Fark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <currency-input
              v-model="AdanaData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AdanaData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AdanaData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AdanaData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AdanaData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AdanaData.data.sodexoGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="YKDiger"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="YKTicket"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="YKSodexo"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ToplamGelenYemekCeki"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AdanaData.programYemekCeki"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="YKFark"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Yemek Sepeti</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Gelen</th>
          <th>Program</th>
          <th>Fark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <currency-input
              v-model="AdanaData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AdanaData.programYemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="YemekSepetiFark"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Iade/Masraf/Sonuç</h2>
    <table class="table">
      <thead>
        <tr>
          <th>İptal-İade</th>
          <th>Açıklama</th>
          <th>Toplam Masraf</th>
          <th>Sonuç</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <currency-input
              v-model="ToplamIade"
              currency="TRY"
              locale="tr"
              class="form-control"
              disabled
            />
          </td>
          <td>
            <input type="text" class="form-control" v-model="IadeAciklama" />
          </td>
          <td>
            <currency-input
              v-model="ToplamMasraf"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="Kontrol"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["tarihData", "AdanaData"],
  data() {
    return {
      Nakit: 0,
      IadeAciklama: "",
      Sodexo: 0,
      YKSodexo: 0,
      YKTicket: 0,
      YKDiger: 0,
      YKFark: 0,
      YemekSepetiFark: 0,
      NakitFark: 0,
      IadeIptal: 0,
      Kontrol: 0,
      ProgramYemekCeki: 0,
      ToplamGelenYemekCeki: 0,
      ProgramNakit: 0,
      Visa: 0,
      VisaFark: 0,
      ToplamMasraf: 0,
      ToplamIade: 0,
    };
  },
  methods: {
    async GetKasa() {
      // eslint-disable-next-line no-console
      console.log(this.AdanaData.data);
      this.ToplamMasraf =
        parseFloat(this.AdanaData.data.masraf.tutarBir) +
        parseFloat(this.AdanaData.data.masraf.tutarIki) +
        parseFloat(this.AdanaData.data.masraf.tutarUc) +
        parseFloat(this.AdanaData.data.masraf.tutarDort) +
        parseFloat(this.AdanaData.data.masraf.tutarBes) +
        parseFloat(this.AdanaData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.AdanaData.data.iade.tutarBir) +
        parseFloat(this.AdanaData.data.iade.tutarIki) +
        parseFloat(this.AdanaData.data.iade.tutarUc) +
        parseFloat(this.AdanaData.data.iade.tutarDort) +
        parseFloat(this.AdanaData.data.iade.tutarBes) +
        parseFloat(this.AdanaData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.AdanaData.data.sodexo.yuz) * 100 +
        parseFloat(this.AdanaData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.AdanaData.data.sodexo.elli) * 50 +
        parseFloat(this.AdanaData.data.sodexo.yirmi) * 20 +
        parseFloat(this.AdanaData.data.sodexo.ontl) * 10 +
        parseFloat(this.AdanaData.data.sodexo.bes) * 5 +
        parseFloat(this.AdanaData.data.sodexo.bir) +
        parseFloat(this.AdanaData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.AdanaData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.AdanaData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.AdanaData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.AdanaData.data.ticket.yuz) * 100 +
        parseFloat(this.AdanaData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.AdanaData.data.ticket.elli) * 50 +
        parseFloat(this.AdanaData.data.ticket.yirmi) * 20 +
        parseFloat(this.AdanaData.data.ticket.ontl) * 10 +
        parseFloat(this.AdanaData.data.ticket.bes) * 5 +
        parseFloat(this.AdanaData.data.ticket.bir) +
        parseFloat(this.AdanaData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.AdanaData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.AdanaData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.AdanaData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.AdanaData.data.credit.bir) +
        parseFloat(this.AdanaData.data.credit.iki) +
        parseFloat(this.AdanaData.data.credit.uc) +
        parseFloat(this.AdanaData.data.credit.dort) +
        parseFloat(this.AdanaData.data.credit.bes) +
        parseFloat(this.AdanaData.data.credit.alti) +
        parseFloat(this.AdanaData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.AdanaData.data.cash.yuz) * 100 +
        parseFloat(this.AdanaData.data.cash.ikiyuz) * 200 +
        parseFloat(this.AdanaData.data.cash.elli) * 50 +
        parseFloat(this.AdanaData.data.cash.yirmi) * 20 +
        parseFloat(this.AdanaData.data.cash.ontl) * 10 +
        parseFloat(this.AdanaData.data.cash.bes) * 5 +
        parseFloat(this.AdanaData.data.cash.bir) +
        parseFloat(this.AdanaData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.AdanaData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.AdanaData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.AdanaData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.AdanaData.data.avmKuponu) +
        parseFloat(this.AdanaData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.AdanaData.data.setCardGunSonu) +
        parseFloat(this.AdanaData.data.multinetGunSonu) +
        parseFloat(this.AdanaData.data.ceoCardGunSonu) +
        parseFloat(this.AdanaData.data.metropolGunSonu) +
        parseFloat(this.AdanaData.data.ticketGunSonu) +
        parseFloat(this.AdanaData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.AdanaData.programYemekCeki);

      this.NakitFark = this.Nakit - this.AdanaData.programNakit;

      this.VisaFark = this.Visa - this.AdanaData.programVisa;
      this.YemekSepetiFark =
        this.AdanaData.data.yemekSepeti - this.AdanaData.programYemekSepeti;
      this.Kontrol =
        this.YKFark +
        this.NakitFark +
        this.VisaFark +
        this.ToplamIade +
        this.YemekSepetiFark +
        this.YKDiger;
    },
  },
};
</script>
