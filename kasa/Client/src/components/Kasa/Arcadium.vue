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
              v-model="ArcadiumData.programVisa"
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
              v-model="ArcadiumData.programNakit"
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
              v-model="ArcadiumData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArcadiumData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArcadiumData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArcadiumData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArcadiumData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArcadiumData.data.sodexoGunSonu"
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
              v-model="ArcadiumData.programYemekCeki"
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
              v-model="ArcadiumData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="ArcadiumData.programYemekSepeti"
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
  props: ["tarihData", "ArcadiumData"],
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
      console.log(this.ArcadiumData.data);
      this.ToplamMasraf =
        parseFloat(this.ArcadiumData.data.masraf.tutarBir) +
        parseFloat(this.ArcadiumData.data.masraf.tutarIki) +
        parseFloat(this.ArcadiumData.data.masraf.tutarUc) +
        parseFloat(this.ArcadiumData.data.masraf.tutarDort) +
        parseFloat(this.ArcadiumData.data.masraf.tutarBes) +
        parseFloat(this.ArcadiumData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.ArcadiumData.data.iade.tutarBir) +
        parseFloat(this.ArcadiumData.data.iade.tutarIki) +
        parseFloat(this.ArcadiumData.data.iade.tutarUc) +
        parseFloat(this.ArcadiumData.data.iade.tutarDort) +
        parseFloat(this.ArcadiumData.data.iade.tutarBes) +
        parseFloat(this.ArcadiumData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.ArcadiumData.data.sodexo.yuz) * 100 +
        parseFloat(this.ArcadiumData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.ArcadiumData.data.sodexo.elli) * 50 +
        parseFloat(this.ArcadiumData.data.sodexo.yirmi) * 20 +
        parseFloat(this.ArcadiumData.data.sodexo.ontl) * 10 +
        parseFloat(this.ArcadiumData.data.sodexo.bes) * 5 +
        parseFloat(this.ArcadiumData.data.sodexo.bir) +
        parseFloat(this.ArcadiumData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.ArcadiumData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.ArcadiumData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.ArcadiumData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.ArcadiumData.data.ticket.yuz) * 100 +
        parseFloat(this.ArcadiumData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.ArcadiumData.data.ticket.elli) * 50 +
        parseFloat(this.ArcadiumData.data.ticket.yirmi) * 20 +
        parseFloat(this.ArcadiumData.data.ticket.ontl) * 10 +
        parseFloat(this.ArcadiumData.data.ticket.bes) * 5 +
        parseFloat(this.ArcadiumData.data.ticket.bir) +
        parseFloat(this.ArcadiumData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.ArcadiumData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.ArcadiumData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.ArcadiumData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.ArcadiumData.data.credit.bir) +
        parseFloat(this.ArcadiumData.data.credit.iki) +
        parseFloat(this.ArcadiumData.data.credit.uc) +
        parseFloat(this.ArcadiumData.data.credit.dort) +
        parseFloat(this.ArcadiumData.data.credit.bes) +
        parseFloat(this.ArcadiumData.data.credit.alti) +
        parseFloat(this.ArcadiumData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.ArcadiumData.data.cash.yuz) * 100 +
        parseFloat(this.ArcadiumData.data.cash.ikiyuz) * 200 +
        parseFloat(this.ArcadiumData.data.cash.elli) * 50 +
        parseFloat(this.ArcadiumData.data.cash.yirmi) * 20 +
        parseFloat(this.ArcadiumData.data.cash.ontl) * 10 +
        parseFloat(this.ArcadiumData.data.cash.bes) * 5 +
        parseFloat(this.ArcadiumData.data.cash.bir) +
        parseFloat(this.ArcadiumData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.ArcadiumData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.ArcadiumData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.ArcadiumData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.ArcadiumData.data.avmKuponu) +
        parseFloat(this.ArcadiumData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.ArcadiumData.data.setCardGunSonu) +
        parseFloat(this.ArcadiumData.data.multinetGunSonu) +
        parseFloat(this.ArcadiumData.data.ceoCardGunSonu) +
        parseFloat(this.ArcadiumData.data.metropolGunSonu) +
        parseFloat(this.ArcadiumData.data.ticketGunSonu) +
        parseFloat(this.ArcadiumData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.ArcadiumData.programYemekCeki);

      this.NakitFark = this.Nakit - this.ArcadiumData.programNakit;

      this.VisaFark = this.Visa - this.ArcadiumData.programVisa;
      this.YemekSepetiFark =
        this.ArcadiumData.data.yemekSepeti -
        this.ArcadiumData.programYemekSepeti;
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