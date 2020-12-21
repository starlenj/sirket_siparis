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
              v-model="BilkentData.programVisa"
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
              v-model="BilkentData.programNakit"
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
              v-model="BilkentData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BilkentData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BilkentData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BilkentData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BilkentData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BilkentData.data.sodexoGunSonu"
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
              v-model="BilkentData.programYemekCeki"
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
              v-model="BilkentData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BilkentData.programYemekSepeti"
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
  props: ["tarihData", "BilkentData"],
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
      ToplamIade: 0
    };
  },
  methods: {
    async GetKasa() {
      // eslint-disable-next-line no-console
      console.log(this.BilkentData.data);
      this.ToplamMasraf =
        parseFloat(this.BilkentData.data.masraf.tutarBir) +
        parseFloat(this.BilkentData.data.masraf.tutarIki) +
        parseFloat(this.BilkentData.data.masraf.tutarUc) +
        parseFloat(this.BilkentData.data.masraf.tutarDort) +
        parseFloat(this.BilkentData.data.masraf.tutarBes) +
        parseFloat(this.BilkentData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.BilkentData.data.iade.tutarBir) +
        parseFloat(this.BilkentData.data.iade.tutarIki) +
        parseFloat(this.BilkentData.data.iade.tutarUc) +
        parseFloat(this.BilkentData.data.iade.tutarDort) +
        parseFloat(this.BilkentData.data.iade.tutarBes) +
        parseFloat(this.BilkentData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.BilkentData.data.sodexo.yuz) * 100 +
        parseFloat(this.BilkentData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.BilkentData.data.sodexo.elli) * 50 +
        parseFloat(this.BilkentData.data.sodexo.yirmi) * 20 +
        parseFloat(this.BilkentData.data.sodexo.ontl) * 10 +
        parseFloat(this.BilkentData.data.sodexo.bes) * 5 +
        parseFloat(this.BilkentData.data.sodexo.bir) +
        parseFloat(this.BilkentData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.BilkentData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.BilkentData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.BilkentData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.BilkentData.data.ticket.yuz) * 100 +
        parseFloat(this.BilkentData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.BilkentData.data.ticket.elli) * 50 +
        parseFloat(this.BilkentData.data.ticket.yirmi) * 20 +
        parseFloat(this.BilkentData.data.ticket.ontl) * 10 +
        parseFloat(this.BilkentData.data.ticket.bes) * 5 +
        parseFloat(this.BilkentData.data.ticket.bir) +
        parseFloat(this.BilkentData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.BilkentData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.BilkentData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.BilkentData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.BilkentData.data.credit.bir) +
        parseFloat(this.BilkentData.data.credit.iki) +
        parseFloat(this.BilkentData.data.credit.uc) +
        parseFloat(this.BilkentData.data.credit.dort) +
        parseFloat(this.BilkentData.data.credit.bes) +
        parseFloat(this.BilkentData.data.credit.alti) +
        parseFloat(this.BilkentData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.BilkentData.data.cash.yuz) * 100 +
        parseFloat(this.BilkentData.data.cash.ikiyuz) * 200 +
        parseFloat(this.BilkentData.data.cash.elli) * 50 +
        parseFloat(this.BilkentData.data.cash.yirmi) * 20 +
        parseFloat(this.BilkentData.data.cash.ontl) * 10 +
        parseFloat(this.BilkentData.data.cash.bes) * 5 +
        parseFloat(this.BilkentData.data.cash.bir) +
        parseFloat(this.BilkentData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.BilkentData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.BilkentData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.BilkentData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.BilkentData.data.avmKuponu) +
        parseFloat(this.BilkentData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.BilkentData.data.setCardGunSonu) +
        parseFloat(this.BilkentData.data.multinetGunSonu) +
        parseFloat(this.BilkentData.data.ceoCardGunSonu) +
        parseFloat(this.BilkentData.data.metropolGunSonu) +
        parseFloat(this.BilkentData.data.ticketGunSonu) +
        parseFloat(this.BilkentData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.BilkentData.programYemekCeki);

      this.NakitFark = this.Nakit - this.BilkentData.programNakit;

      this.VisaFark = this.Visa - this.BilkentData.programVisa;
      this.YemekSepetiFark =
        this.BilkentData.data.yemekSepeti - this.BilkentData.programYemekSepeti;
      this.Kontrol =
        this.YKFark +
        this.NakitFark +
        this.VisaFark +
        this.ToplamIade +
        this.YKDiger;
    }
  }
};
</script>