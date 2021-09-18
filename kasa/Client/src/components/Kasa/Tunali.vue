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
              v-model="TunaliData.programVisa"
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
              v-model="TunaliData.programNakit"
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
              v-model="TunaliData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="TunaliData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="TunaliData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="TunaliData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="TunaliData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="TunaliData.data.sodexoGunSonu"
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
              v-model="TunaliData.programYemekCeki"
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
              v-model="TunaliData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="TunaliData.programYemekSepeti"
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
  props: ["tarihData", "TunaliData"],
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
      console.log(this.TunaliData.data);
      this.ToplamMasraf =
        parseFloat(this.TunaliData.data.masraf.tutarBir) +
        parseFloat(this.TunaliData.data.masraf.tutarIki) +
        parseFloat(this.TunaliData.data.masraf.tutarUc) +
        parseFloat(this.TunaliData.data.masraf.tutarDort) +
        parseFloat(this.TunaliData.data.masraf.tutarBes) +
        parseFloat(this.TunaliData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.TunaliData.data.iade.tutarBir) +
        parseFloat(this.TunaliData.data.iade.tutarIki) +
        parseFloat(this.TunaliData.data.iade.tutarUc) +
        parseFloat(this.TunaliData.data.iade.tutarDort) +
        parseFloat(this.TunaliData.data.iade.tutarBes) +
        parseFloat(this.TunaliData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.TunaliData.data.sodexo.yuz) * 100 +
        parseFloat(this.TunaliData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.TunaliData.data.sodexo.elli) * 50 +
        parseFloat(this.TunaliData.data.sodexo.yirmi) * 20 +
        parseFloat(this.TunaliData.data.sodexo.ontl) * 10 +
        parseFloat(this.TunaliData.data.sodexo.bes) * 5 +
        parseFloat(this.TunaliData.data.sodexo.bir) +
        parseFloat(this.TunaliData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.TunaliData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.TunaliData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.TunaliData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.TunaliData.data.ticket.yuz) * 100 +
        parseFloat(this.TunaliData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.TunaliData.data.ticket.elli) * 50 +
        parseFloat(this.TunaliData.data.ticket.yirmi) * 20 +
        parseFloat(this.TunaliData.data.ticket.ontl) * 10 +
        parseFloat(this.TunaliData.data.ticket.bes) * 5 +
        parseFloat(this.TunaliData.data.ticket.bir) +
        parseFloat(this.TunaliData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.TunaliData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.TunaliData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.TunaliData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.TunaliData.data.credit.bir) +
        parseFloat(this.TunaliData.data.credit.iki) +
        parseFloat(this.TunaliData.data.credit.uc) +
        parseFloat(this.TunaliData.data.credit.dort) +
        parseFloat(this.TunaliData.data.credit.bes) +
        parseFloat(this.TunaliData.data.credit.alti) +
        parseFloat(this.TunaliData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.TunaliData.data.cash.yuz) * 100 +
        parseFloat(this.TunaliData.data.cash.ikiyuz) * 200 +
        parseFloat(this.TunaliData.data.cash.elli) * 50 +
        parseFloat(this.TunaliData.data.cash.yirmi) * 20 +
        parseFloat(this.TunaliData.data.cash.ontl) * 10 +
        parseFloat(this.TunaliData.data.cash.bes) * 5 +
        parseFloat(this.TunaliData.data.cash.bir) +
        parseFloat(this.TunaliData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.TunaliData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.TunaliData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.TunaliData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.TunaliData.data.avmKuponu) +
        parseFloat(this.TunaliData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.TunaliData.data.setCardGunSonu) +
        parseFloat(this.TunaliData.data.multinetGunSonu) +
        parseFloat(this.TunaliData.data.ceoCardGunSonu) +
        parseFloat(this.TunaliData.data.metropolGunSonu) +
        parseFloat(this.TunaliData.data.ticketGunSonu) +
        parseFloat(this.TunaliData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.TunaliData.programYemekCeki);

      this.NakitFark = this.Nakit - this.TunaliData.programNakit;

      this.VisaFark = this.Visa - this.TunaliData.programVisa;
      this.YemekSepetiFark =
        this.TunaliData.data.yemekSepeti - this.TunaliData.programYemekSepeti;
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
