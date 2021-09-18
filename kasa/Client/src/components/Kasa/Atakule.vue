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
              v-model="AtakuleData.programVisa"
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
              v-model="AtakuleData.programNakit"
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
              v-model="AtakuleData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AtakuleData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AtakuleData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AtakuleData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AtakuleData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AtakuleData.data.sodexoGunSonu"
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
              v-model="AtakuleData.programYemekCeki"
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
              v-model="AtakuleData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="AtakuleData.programYemekSepeti"
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
  props: ["tarihData", "AtakuleData"],
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
      console.log(this.AtakuleData.data);
      this.ToplamMasraf =
        parseFloat(this.AtakuleData.data.masraf.tutarBir) +
        parseFloat(this.AtakuleData.data.masraf.tutarIki) +
        parseFloat(this.AtakuleData.data.masraf.tutarUc) +
        parseFloat(this.AtakuleData.data.masraf.tutarDort) +
        parseFloat(this.AtakuleData.data.masraf.tutarBes) +
        parseFloat(this.AtakuleData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.AtakuleData.data.iade.tutarBir) +
        parseFloat(this.AtakuleData.data.iade.tutarIki) +
        parseFloat(this.AtakuleData.data.iade.tutarUc) +
        parseFloat(this.AtakuleData.data.iade.tutarDort) +
        parseFloat(this.AtakuleData.data.iade.tutarBes) +
        parseFloat(this.AtakuleData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.AtakuleData.data.sodexo.yuz) * 100 +
        parseFloat(this.AtakuleData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.AtakuleData.data.sodexo.elli) * 50 +
        parseFloat(this.AtakuleData.data.sodexo.yirmi) * 20 +
        parseFloat(this.AtakuleData.data.sodexo.ontl) * 10 +
        parseFloat(this.AtakuleData.data.sodexo.bes) * 5 +
        parseFloat(this.AtakuleData.data.sodexo.bir) +
        parseFloat(this.AtakuleData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.AtakuleData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.AtakuleData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.AtakuleData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.AtakuleData.data.ticket.yuz) * 100 +
        parseFloat(this.AtakuleData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.AtakuleData.data.ticket.elli) * 50 +
        parseFloat(this.AtakuleData.data.ticket.yirmi) * 20 +
        parseFloat(this.AtakuleData.data.ticket.ontl) * 10 +
        parseFloat(this.AtakuleData.data.ticket.bes) * 5 +
        parseFloat(this.AtakuleData.data.ticket.bir) +
        parseFloat(this.AtakuleData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.AtakuleData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.AtakuleData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.AtakuleData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.AtakuleData.data.credit.bir) +
        parseFloat(this.AtakuleData.data.credit.iki) +
        parseFloat(this.AtakuleData.data.credit.uc) +
        parseFloat(this.AtakuleData.data.credit.dort) +
        parseFloat(this.AtakuleData.data.credit.bes) +
        parseFloat(this.AtakuleData.data.credit.alti) +
        parseFloat(this.AtakuleData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.AtakuleData.data.cash.yuz) * 100 +
        parseFloat(this.AtakuleData.data.cash.ikiyuz) * 200 +
        parseFloat(this.AtakuleData.data.cash.elli) * 50 +
        parseFloat(this.AtakuleData.data.cash.yirmi) * 20 +
        parseFloat(this.AtakuleData.data.cash.ontl) * 10 +
        parseFloat(this.AtakuleData.data.cash.bes) * 5 +
        parseFloat(this.AtakuleData.data.cash.bir) +
        parseFloat(this.AtakuleData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.AtakuleData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.AtakuleData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.AtakuleData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.AtakuleData.data.avmKuponu) +
        parseFloat(this.AtakuleData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.AtakuleData.data.setCardGunSonu) +
        parseFloat(this.AtakuleData.data.multinetGunSonu) +
        parseFloat(this.AtakuleData.data.ceoCardGunSonu) +
        parseFloat(this.AtakuleData.data.metropolGunSonu) +
        parseFloat(this.AtakuleData.data.ticketGunSonu) +
        parseFloat(this.AtakuleData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.AtakuleData.programYemekCeki);

      this.NakitFark = this.Nakit - this.AtakuleData.programNakit;

      this.VisaFark = this.Visa - this.AtakuleData.programVisa;
      this.YemekSepetiFark =
        this.AtakuleData.data.yemekSepeti - this.AtakuleData.programYemekSepeti;
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
