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
              v-model="MersinData.programVisa"
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
              v-model="MersinData.programNakit"
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
              v-model="MersinData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="MersinData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="MersinData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="MersinData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="MersinData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="MersinData.data.sodexoGunSonu"
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
              v-model="MersinData.programYemekCeki"
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
              v-model="MersinData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="MersinData.programYemekSepeti"
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
  props: ["tarihData", "MersinData"],
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
      console.log(this.MersinData.data);
      this.ToplamMasraf =
        parseFloat(this.MersinData.data.masraf.tutarBir) +
        parseFloat(this.MersinData.data.masraf.tutarIki) +
        parseFloat(this.MersinData.data.masraf.tutarUc) +
        parseFloat(this.MersinData.data.masraf.tutarDort) +
        parseFloat(this.MersinData.data.masraf.tutarBes) +
        parseFloat(this.MersinData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.MersinData.data.iade.tutarBir) +
        parseFloat(this.MersinData.data.iade.tutarIki) +
        parseFloat(this.MersinData.data.iade.tutarUc) +
        parseFloat(this.MersinData.data.iade.tutarDort) +
        parseFloat(this.MersinData.data.iade.tutarBes) +
        parseFloat(this.MersinData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.MersinData.data.sodexo.yuz) * 100 +
        parseFloat(this.MersinData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.MersinData.data.sodexo.elli) * 50 +
        parseFloat(this.MersinData.data.sodexo.yirmi) * 20 +
        parseFloat(this.MersinData.data.sodexo.ontl) * 10 +
        parseFloat(this.MersinData.data.sodexo.bes) * 5 +
        parseFloat(this.MersinData.data.sodexo.bir) +
        parseFloat(this.MersinData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.MersinData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.MersinData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.MersinData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.MersinData.data.ticket.yuz) * 100 +
        parseFloat(this.MersinData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.MersinData.data.ticket.elli) * 50 +
        parseFloat(this.MersinData.data.ticket.yirmi) * 20 +
        parseFloat(this.MersinData.data.ticket.ontl) * 10 +
        parseFloat(this.MersinData.data.ticket.bes) * 5 +
        parseFloat(this.MersinData.data.ticket.bir) +
        parseFloat(this.MersinData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.MersinData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.MersinData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.MersinData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.MersinData.data.credit.bir) +
        parseFloat(this.MersinData.data.credit.iki) +
        parseFloat(this.MersinData.data.credit.uc) +
        parseFloat(this.MersinData.data.credit.dort) +
        parseFloat(this.MersinData.data.credit.bes) +
        parseFloat(this.MersinData.data.credit.alti) +
        parseFloat(this.MersinData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.MersinData.data.cash.yuz) * 100 +
        parseFloat(this.MersinData.data.cash.ikiyuz) * 200 +
        parseFloat(this.MersinData.data.cash.elli) * 50 +
        parseFloat(this.MersinData.data.cash.yirmi) * 20 +
        parseFloat(this.MersinData.data.cash.ontl) * 10 +
        parseFloat(this.MersinData.data.cash.bes) * 5 +
        parseFloat(this.MersinData.data.cash.bir) +
        parseFloat(this.MersinData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.MersinData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.MersinData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.MersinData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.MersinData.data.avmKuponu) +
        parseFloat(this.MersinData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.MersinData.data.setCardGunSonu) +
        parseFloat(this.MersinData.data.multinetGunSonu) +
        parseFloat(this.MersinData.data.ceoCardGunSonu) +
        parseFloat(this.MersinData.data.metropolGunSonu) +
        parseFloat(this.MersinData.data.ticketGunSonu) +
        parseFloat(this.MersinData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.MersinData.programYemekCeki);

      this.NakitFark = this.Nakit - this.MersinData.programNakit;

      this.VisaFark = this.Visa - this.MersinData.programVisa;
      this.YemekSepetiFark =
        this.MersinData.data.yemekSepeti - this.MersinData.programYemekSepeti;
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
