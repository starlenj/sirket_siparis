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
              v-model="GenelData.programVisa"
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
              v-model="GenelData.programNakit"
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
              v-model="GenelData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GenelData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GenelData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GenelData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GenelData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GenelData.data.sodexoGunSonu"
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
              v-model="GenelData.programYemekCeki"
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
              v-model="GenelData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="GenelData.programYemekSepeti"
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
  props: ["tarihData", "GenelData"],
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
      console.log(this.GenelData.data);
      this.ToplamMasraf =
        parseFloat(this.GenelData.data.masraf.tutarBir) +
        parseFloat(this.GenelData.data.masraf.tutarIki) +
        parseFloat(this.GenelData.data.masraf.tutarUc) +
        parseFloat(this.GenelData.data.masraf.tutarDort) +
        parseFloat(this.GenelData.data.masraf.tutarBes) +
        parseFloat(this.GenelData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.GenelData.data.iade.tutarBir) +
        parseFloat(this.GenelData.data.iade.tutarIki) +
        parseFloat(this.GenelData.data.iade.tutarUc) +
        parseFloat(this.GenelData.data.iade.tutarDort) +
        parseFloat(this.GenelData.data.iade.tutarBes) +
        parseFloat(this.GenelData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.GenelData.data.sodexo.yuz) * 100 +
        parseFloat(this.GenelData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.GenelData.data.sodexo.elli) * 50 +
        parseFloat(this.GenelData.data.sodexo.yirmi) * 20 +
        parseFloat(this.GenelData.data.sodexo.ontl) * 10 +
        parseFloat(this.GenelData.data.sodexo.bes) * 5 +
        parseFloat(this.GenelData.data.sodexo.bir) +
        parseFloat(this.GenelData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.GenelData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.GenelData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.GenelData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.GenelData.data.ticket.yuz) * 100 +
        parseFloat(this.GenelData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.GenelData.data.ticket.elli) * 50 +
        parseFloat(this.GenelData.data.ticket.yirmi) * 20 +
        parseFloat(this.GenelData.data.ticket.ontl) * 10 +
        parseFloat(this.GenelData.data.ticket.bes) * 5 +
        parseFloat(this.GenelData.data.ticket.bir) +
        parseFloat(this.GenelData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.GenelData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.GenelData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.GenelData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.GenelData.data.credit.bir) +
        parseFloat(this.GenelData.data.credit.iki) +
        parseFloat(this.GenelData.data.credit.uc) +
        parseFloat(this.GenelData.data.credit.dort) +
        parseFloat(this.GenelData.data.credit.bes) +
        parseFloat(this.GenelData.data.credit.alti) +
        parseFloat(this.GenelData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.GenelData.data.cash.yuz) * 100 +
        parseFloat(this.GenelData.data.cash.ikiyuz) * 200 +
        parseFloat(this.GenelData.data.cash.elli) * 50 +
        parseFloat(this.GenelData.data.cash.yirmi) * 20 +
        parseFloat(this.GenelData.data.cash.ontl) * 10 +
        parseFloat(this.GenelData.data.cash.bes) * 5 +
        parseFloat(this.GenelData.data.cash.bir) +
        parseFloat(this.GenelData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.GenelData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.GenelData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.GenelData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.GenelData.data.avmKuponu) +
        parseFloat(this.GenelData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.GenelData.data.setCardGunSonu) +
        parseFloat(this.GenelData.data.multinetGunSonu) +
        parseFloat(this.GenelData.data.ceoCardGunSonu) +
        parseFloat(this.GenelData.data.metropolGunSonu) +
        parseFloat(this.GenelData.data.ticketGunSonu) +
        parseFloat(this.GenelData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.GenelData.programYemekCeki);

      this.NakitFark = this.Nakit - this.GenelData.programNakit;

      this.VisaFark = this.Visa - this.GenelData.programVisa;
      this.YemekSepetiFark =
        this.GenelData.data.yemekSepeti - this.GenelData.programYemekSepeti;
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
