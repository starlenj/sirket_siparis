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
              v-model="GordionData.programVisa"
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
              v-model="GordionData.programNakit"
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
              v-model="GordionData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GordionData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GordionData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GordionData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GordionData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GordionData.data.sodexoGunSonu"
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
              v-model="GordionData.programYemekCeki"
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
              v-model="GordionData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GordionData.programYemekSepeti"
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
  props: ["tarihData", "GordionData"],
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
      console.log(this.GordionData.data);
      this.ToplamMasraf =
        parseFloat(this.GordionData.data.masraf.tutarBir) +
        parseFloat(this.GordionData.data.masraf.tutarIki) +
        parseFloat(this.GordionData.data.masraf.tutarUc) +
        parseFloat(this.GordionData.data.masraf.tutarDort) +
        parseFloat(this.GordionData.data.masraf.tutarBes) +
        parseFloat(this.GordionData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.GordionData.data.iade.tutarBir) +
        parseFloat(this.GordionData.data.iade.tutarIki) +
        parseFloat(this.GordionData.data.iade.tutarUc) +
        parseFloat(this.GordionData.data.iade.tutarDort) +
        parseFloat(this.GordionData.data.iade.tutarBes) +
        parseFloat(this.GordionData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.GordionData.data.sodexo.yuz) * 100 +
        parseFloat(this.GordionData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.GordionData.data.sodexo.elli) * 50 +
        parseFloat(this.GordionData.data.sodexo.yirmi) * 20 +
        parseFloat(this.GordionData.data.sodexo.ontl) * 10 +
        parseFloat(this.GordionData.data.sodexo.bes) * 5 +
        parseFloat(this.GordionData.data.sodexo.bir) +
        parseFloat(this.GordionData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.GordionData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.GordionData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.GordionData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.GordionData.data.ticket.yuz) * 100 +
        parseFloat(this.GordionData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.GordionData.data.ticket.elli) * 50 +
        parseFloat(this.GordionData.data.ticket.yirmi) * 20 +
        parseFloat(this.GordionData.data.ticket.ontl) * 10 +
        parseFloat(this.GordionData.data.ticket.bes) * 5 +
        parseFloat(this.GordionData.data.ticket.bir) +
        parseFloat(this.GordionData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.GordionData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.GordionData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.GordionData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.GordionData.data.credit.bir) +
        parseFloat(this.GordionData.data.credit.iki) +
        parseFloat(this.GordionData.data.credit.uc) +
        parseFloat(this.GordionData.data.credit.dort) +
        parseFloat(this.GordionData.data.credit.bes) +
        parseFloat(this.GordionData.data.credit.alti) +
        parseFloat(this.GordionData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.GordionData.data.cash.yuz) * 100 +
        parseFloat(this.GordionData.data.cash.ikiyuz) * 200 +
        parseFloat(this.GordionData.data.cash.elli) * 50 +
        parseFloat(this.GordionData.data.cash.yirmi) * 20 +
        parseFloat(this.GordionData.data.cash.ontl) * 10 +
        parseFloat(this.GordionData.data.cash.bes) * 5 +
        parseFloat(this.GordionData.data.cash.bir) +
        parseFloat(this.GordionData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.GordionData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.GordionData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.GordionData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.GordionData.data.avmKuponu) +
        parseFloat(this.GordionData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.GordionData.data.setCardGunSonu) +
        parseFloat(this.GordionData.data.multinetGunSonu) +
        parseFloat(this.GordionData.data.ceoCardGunSonu) +
        parseFloat(this.GordionData.data.metropolGunSonu) +
        parseFloat(this.GordionData.data.ticketGunSonu) +
        parseFloat(this.GordionData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.GordionData.programYemekCeki);

      this.NakitFark = this.Nakit - this.GordionData.programNakit;

      this.VisaFark = this.Visa - this.GordionData.programVisa;
      this.YemekSepetiFark =
        this.GordionData.data.yemekSepeti - this.GordionData.programYemekSepeti;
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
