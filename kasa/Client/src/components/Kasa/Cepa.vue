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
              v-model="CepaData.programVisa"
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
              v-model="CepaData.programNakit"
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
              v-model="CepaData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="CepaData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="CepaData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="CepaData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="CepaData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="CepaData.data.sodexoGunSonu"
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
              v-model="CepaData.programYemekCeki"
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
              v-model="CepaData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="CepaData.programYemekSepeti"
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
  props: ["tarihData", "CepaData"],
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
      console.log(this.CepaData.data);
      this.ToplamMasraf =
        parseFloat(this.CepaData.data.masraf.tutarBir) +
        parseFloat(this.CepaData.data.masraf.tutarIki) +
        parseFloat(this.CepaData.data.masraf.tutarUc) +
        parseFloat(this.CepaData.data.masraf.tutarDort) +
        parseFloat(this.CepaData.data.masraf.tutarBes) +
        parseFloat(this.CepaData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.CepaData.data.iade.tutarBir) +
        parseFloat(this.CepaData.data.iade.tutarIki) +
        parseFloat(this.CepaData.data.iade.tutarUc) +
        parseFloat(this.CepaData.data.iade.tutarDort) +
        parseFloat(this.CepaData.data.iade.tutarBes) +
        parseFloat(this.CepaData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.CepaData.data.sodexo.yuz) * 100 +
        parseFloat(this.CepaData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.CepaData.data.sodexo.elli) * 50 +
        parseFloat(this.CepaData.data.sodexo.yirmi) * 20 +
        parseFloat(this.CepaData.data.sodexo.ontl) * 10 +
        parseFloat(this.CepaData.data.sodexo.bes) * 5 +
        parseFloat(this.CepaData.data.sodexo.bir) +
        parseFloat(this.CepaData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.CepaData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.CepaData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.CepaData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.CepaData.data.ticket.yuz) * 100 +
        parseFloat(this.CepaData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.CepaData.data.ticket.elli) * 50 +
        parseFloat(this.CepaData.data.ticket.yirmi) * 20 +
        parseFloat(this.CepaData.data.ticket.ontl) * 10 +
        parseFloat(this.CepaData.data.ticket.bes) * 5 +
        parseFloat(this.CepaData.data.ticket.bir) +
        parseFloat(this.CepaData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.CepaData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.CepaData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.CepaData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.CepaData.data.credit.bir) +
        parseFloat(this.CepaData.data.credit.iki) +
        parseFloat(this.CepaData.data.credit.uc) +
        parseFloat(this.CepaData.data.credit.dort) +
        parseFloat(this.CepaData.data.credit.bes) +
        parseFloat(this.CepaData.data.credit.alti) +
        parseFloat(this.CepaData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.CepaData.data.cash.yuz) * 100 +
        parseFloat(this.CepaData.data.cash.ikiyuz) * 200 +
        parseFloat(this.CepaData.data.cash.elli) * 50 +
        parseFloat(this.CepaData.data.cash.yirmi) * 20 +
        parseFloat(this.CepaData.data.cash.ontl) * 10 +
        parseFloat(this.CepaData.data.cash.bes) * 5 +
        parseFloat(this.CepaData.data.cash.bir) +
        parseFloat(this.CepaData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.CepaData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.CepaData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.CepaData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.CepaData.data.avmKuponu) +
        parseFloat(this.CepaData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.CepaData.data.setCardGunSonu) +
        parseFloat(this.CepaData.data.multinetGunSonu) +
        parseFloat(this.CepaData.data.ceoCardGunSonu) +
        parseFloat(this.CepaData.data.metropolGunSonu) +
        parseFloat(this.CepaData.data.ticketGunSonu) +
        parseFloat(this.CepaData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.CepaData.programYemekCeki);

      this.NakitFark = this.Nakit - this.CepaData.programNakit;

      this.VisaFark = this.Visa - this.CepaData.programVisa;
      this.YemekSepetiFark =
        this.CepaData.data.yemekSepeti - this.CepaData.programYemekSepeti;
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
