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
              v-model="ArmadaData.programVisa"
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
              v-model="ArmadaData.programNakit"
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
              v-model="ArmadaData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArmadaData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArmadaData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArmadaData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArmadaData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArmadaData.data.sodexoGunSonu"
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
              v-model="ArmadaData.programYemekCeki"
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
              v-model="ArmadaData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArmadaData.programYemekSepeti"
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
  props: ["tarihData", "ArmadaData"],
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
      console.log(this.ArmadaData.data);
      this.ToplamMasraf =
        parseFloat(this.ArmadaData.data.masraf.tutarBir) +
        parseFloat(this.ArmadaData.data.masraf.tutarIki) +
        parseFloat(this.ArmadaData.data.masraf.tutarUc) +
        parseFloat(this.ArmadaData.data.masraf.tutarDort) +
        parseFloat(this.ArmadaData.data.masraf.tutarBes) +
        parseFloat(this.ArmadaData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.ArmadaData.data.iade.tutarBir) +
        parseFloat(this.ArmadaData.data.iade.tutarIki) +
        parseFloat(this.ArmadaData.data.iade.tutarUc) +
        parseFloat(this.ArmadaData.data.iade.tutarDort) +
        parseFloat(this.ArmadaData.data.iade.tutarBes) +
        parseFloat(this.ArmadaData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.ArmadaData.data.sodexo.yuz) * 100 +
        parseFloat(this.ArmadaData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.ArmadaData.data.sodexo.elli) * 50 +
        parseFloat(this.ArmadaData.data.sodexo.yirmi) * 20 +
        parseFloat(this.ArmadaData.data.sodexo.ontl) * 10 +
        parseFloat(this.ArmadaData.data.sodexo.bes) * 5 +
        parseFloat(this.ArmadaData.data.sodexo.bir) +
        parseFloat(this.ArmadaData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.ArmadaData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.ArmadaData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.ArmadaData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.ArmadaData.data.ticket.yuz) * 100 +
        parseFloat(this.ArmadaData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.ArmadaData.data.ticket.elli) * 50 +
        parseFloat(this.ArmadaData.data.ticket.yirmi) * 20 +
        parseFloat(this.ArmadaData.data.ticket.ontl) * 10 +
        parseFloat(this.ArmadaData.data.ticket.bes) * 5 +
        parseFloat(this.ArmadaData.data.ticket.bir) +
        parseFloat(this.ArmadaData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.ArmadaData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.ArmadaData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.ArmadaData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.ArmadaData.data.credit.bir) +
        parseFloat(this.ArmadaData.data.credit.iki) +
        parseFloat(this.ArmadaData.data.credit.uc) +
        parseFloat(this.ArmadaData.data.credit.dort) +
        parseFloat(this.ArmadaData.data.credit.bes) +
        parseFloat(this.ArmadaData.data.credit.alti) +
        parseFloat(this.ArmadaData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.ArmadaData.data.cash.yuz) * 100 +
        parseFloat(this.ArmadaData.data.cash.ikiyuz) * 200 +
        parseFloat(this.ArmadaData.data.cash.elli) * 50 +
        parseFloat(this.ArmadaData.data.cash.yirmi) * 20 +
        parseFloat(this.ArmadaData.data.cash.ontl) * 10 +
        parseFloat(this.ArmadaData.data.cash.bes) * 5 +
        parseFloat(this.ArmadaData.data.cash.bir) +
        parseFloat(this.ArmadaData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.ArmadaData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.ArmadaData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.ArmadaData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.ArmadaData.data.avmKuponu) +
        parseFloat(this.ArmadaData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.ArmadaData.data.setCardGunSonu) +
        parseFloat(this.ArmadaData.data.multinetGunSonu) +
        parseFloat(this.ArmadaData.data.ceoCardGunSonu) +
        parseFloat(this.ArmadaData.data.metropolGunSonu) +
        parseFloat(this.ArmadaData.data.ticketGunSonu) +
        parseFloat(this.ArmadaData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.ArmadaData.programYemekCeki);

      this.NakitFark = this.Nakit - this.ArmadaData.programNakit;

      this.VisaFark = this.Visa - this.ArmadaData.programVisa;
      this.YemekSepetiFark =
        this.ArmadaData.data.yemekSepeti - this.ArmadaData.programYemekSepeti;
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