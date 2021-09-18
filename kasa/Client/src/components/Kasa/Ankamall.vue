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
              v-model="AnkamallData.programVisa"
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
              v-model="AnkamallData.programNakit"
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
              v-model="AnkamallData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AnkamallData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AnkamallData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AnkamallData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AnkamallData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AnkamallData.data.sodexoGunSonu"
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
              v-model="AnkamallData.programYemekCeki"
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
              v-model="AnkamallData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AnkamallData.programYemekSepeti"
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
  props: ["tarihData", "AnkamallData"],
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
      console.log(this.AnkamallData.data);
      this.ToplamMasraf =
        parseFloat(this.AnkamallData.data.masraf.tutarBir) +
        parseFloat(this.AnkamallData.data.masraf.tutarIki) +
        parseFloat(this.AnkamallData.data.masraf.tutarUc) +
        parseFloat(this.AnkamallData.data.masraf.tutarDort) +
        parseFloat(this.AnkamallData.data.masraf.tutarBes) +
        parseFloat(this.AnkamallData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.AnkamallData.data.iade.tutarBir) +
        parseFloat(this.AnkamallData.data.iade.tutarIki) +
        parseFloat(this.AnkamallData.data.iade.tutarUc) +
        parseFloat(this.AnkamallData.data.iade.tutarDort) +
        parseFloat(this.AnkamallData.data.iade.tutarBes) +
        parseFloat(this.AnkamallData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.AnkamallData.data.sodexo.yuz) * 100 +
        parseFloat(this.AnkamallData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.AnkamallData.data.sodexo.elli) * 50 +
        parseFloat(this.AnkamallData.data.sodexo.yirmi) * 20 +
        parseFloat(this.AnkamallData.data.sodexo.ontl) * 10 +
        parseFloat(this.AnkamallData.data.sodexo.bes) * 5 +
        parseFloat(this.AnkamallData.data.sodexo.bir) +
        parseFloat(this.AnkamallData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.AnkamallData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.AnkamallData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.AnkamallData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.AnkamallData.data.ticket.yuz) * 100 +
        parseFloat(this.AnkamallData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.AnkamallData.data.ticket.elli) * 50 +
        parseFloat(this.AnkamallData.data.ticket.yirmi) * 20 +
        parseFloat(this.AnkamallData.data.ticket.ontl) * 10 +
        parseFloat(this.AnkamallData.data.ticket.bes) * 5 +
        parseFloat(this.AnkamallData.data.ticket.bir) +
        parseFloat(this.AnkamallData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.AnkamallData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.AnkamallData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.AnkamallData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.AnkamallData.data.credit.bir) +
        parseFloat(this.AnkamallData.data.credit.iki) +
        parseFloat(this.AnkamallData.data.credit.uc) +
        parseFloat(this.AnkamallData.data.credit.dort) +
        parseFloat(this.AnkamallData.data.credit.bes) +
        parseFloat(this.AnkamallData.data.credit.alti) +
        parseFloat(this.AnkamallData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.AnkamallData.data.cash.yuz) * 100 +
        parseFloat(this.AnkamallData.data.cash.ikiyuz) * 200 +
        parseFloat(this.AnkamallData.data.cash.elli) * 50 +
        parseFloat(this.AnkamallData.data.cash.yirmi) * 20 +
        parseFloat(this.AnkamallData.data.cash.ontl) * 10 +
        parseFloat(this.AnkamallData.data.cash.bes) * 5 +
        parseFloat(this.AnkamallData.data.cash.bir) +
        parseFloat(this.AnkamallData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.AnkamallData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.AnkamallData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.AnkamallData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.AnkamallData.data.avmKuponu) +
        parseFloat(this.AnkamallData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.AnkamallData.data.setCardGunSonu) +
        parseFloat(this.AnkamallData.data.multinetGunSonu) +
        parseFloat(this.AnkamallData.data.ceoCardGunSonu) +
        parseFloat(this.AnkamallData.data.metropolGunSonu) +
        parseFloat(this.AnkamallData.data.ticketGunSonu) +
        parseFloat(this.AnkamallData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.AnkamallData.programYemekCeki);

      this.NakitFark = this.Nakit - this.AnkamallData.programNakit;

      this.VisaFark = this.Visa - this.AnkamallData.programVisa;
      this.YemekSepetiFark =
        this.AnkamallData.data.yemekSepeti -
        this.AnkamallData.programYemekSepeti;
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
