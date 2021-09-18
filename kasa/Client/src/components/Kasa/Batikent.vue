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
              v-model="BatikentData.programVisa"
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
              v-model="BatikentData.programNakit"
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
              v-model="BatikentData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BatikentData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BatikentData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BatikentData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BatikentData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BatikentData.data.sodexoGunSonu"
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
              v-model="BatikentData.programYemekCeki"
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
              v-model="BatikentData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BatikentData.programYemekSepeti"
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
  props: ["tarihData", "BatikentData"],
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
      console.log(this.BatikentData.data);
      this.ToplamMasraf =
        parseFloat(this.BatikentData.data.masraf.tutarBir) +
        parseFloat(this.BatikentData.data.masraf.tutarIki) +
        parseFloat(this.BatikentData.data.masraf.tutarUc) +
        parseFloat(this.BatikentData.data.masraf.tutarDort) +
        parseFloat(this.BatikentData.data.masraf.tutarBes) +
        parseFloat(this.BatikentData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.BatikentData.data.iade.tutarBir) +
        parseFloat(this.BatikentData.data.iade.tutarIki) +
        parseFloat(this.BatikentData.data.iade.tutarUc) +
        parseFloat(this.BatikentData.data.iade.tutarDort) +
        parseFloat(this.BatikentData.data.iade.tutarBes) +
        parseFloat(this.BatikentData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.BatikentData.data.sodexo.yuz) * 100 +
        parseFloat(this.BatikentData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.BatikentData.data.sodexo.elli) * 50 +
        parseFloat(this.BatikentData.data.sodexo.yirmi) * 20 +
        parseFloat(this.BatikentData.data.sodexo.ontl) * 10 +
        parseFloat(this.BatikentData.data.sodexo.bes) * 5 +
        parseFloat(this.BatikentData.data.sodexo.bir) +
        parseFloat(this.BatikentData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.BatikentData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.BatikentData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.BatikentData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.BatikentData.data.ticket.yuz) * 100 +
        parseFloat(this.BatikentData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.BatikentData.data.ticket.elli) * 50 +
        parseFloat(this.BatikentData.data.ticket.yirmi) * 20 +
        parseFloat(this.BatikentData.data.ticket.ontl) * 10 +
        parseFloat(this.BatikentData.data.ticket.bes) * 5 +
        parseFloat(this.BatikentData.data.ticket.bir) +
        parseFloat(this.BatikentData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.BatikentData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.BatikentData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.BatikentData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.BatikentData.data.credit.bir) +
        parseFloat(this.BatikentData.data.credit.iki) +
        parseFloat(this.BatikentData.data.credit.uc) +
        parseFloat(this.BatikentData.data.credit.dort) +
        parseFloat(this.BatikentData.data.credit.bes) +
        parseFloat(this.BatikentData.data.credit.alti) +
        parseFloat(this.BatikentData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.BatikentData.data.cash.yuz) * 100 +
        parseFloat(this.BatikentData.data.cash.ikiyuz) * 200 +
        parseFloat(this.BatikentData.data.cash.elli) * 50 +
        parseFloat(this.BatikentData.data.cash.yirmi) * 20 +
        parseFloat(this.BatikentData.data.cash.ontl) * 10 +
        parseFloat(this.BatikentData.data.cash.bes) * 5 +
        parseFloat(this.BatikentData.data.cash.bir) +
        parseFloat(this.BatikentData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.BatikentData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.BatikentData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.BatikentData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.BatikentData.data.avmKuponu) +
        parseFloat(this.BatikentData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.BatikentData.data.setCardGunSonu) +
        parseFloat(this.BatikentData.data.multinetGunSonu) +
        parseFloat(this.BatikentData.data.ceoCardGunSonu) +
        parseFloat(this.BatikentData.data.metropolGunSonu) +
        parseFloat(this.BatikentData.data.ticketGunSonu) +
        parseFloat(this.BatikentData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.BatikentData.programYemekCeki);

      this.NakitFark = this.Nakit - this.BatikentData.programNakit;

      this.YemekSepetiFark =
        this.BatikentData.data.yemekSepeti -
        this.BatikentData.programYemekSepeti;
      this.VisaFark = this.Visa - this.BatikentData.programVisa;
      this.Kontrol =
        this.YKFark +
        this.NakitFark +
        this.VisaFark +
        this.ToplamIade +
        this.YemekSepetiFark +
        this.YemekSepetiFark +
        this.YKDiger;
    },
  },
};
</script>
