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
              v-model="BahceliData.programVisa"
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
              v-model="BahceliData.programNakit"
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
              v-model="BahceliData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BahceliData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BahceliData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BahceliData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BahceliData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BahceliData.data.sodexoGunSonu"
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
              v-model="BahceliData.programYemekCeki"
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
              v-model="BahceliData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="BahceliData.programYemekSepeti"
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
  props: ["tarihData", "BahceliData"],
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
      console.log("BAHÇELİ TEST", this.BahceliData.data);
      this.ToplamMasraf =
        parseFloat(this.BahceliData.data.masraf.tutarBir) +
        parseFloat(this.BahceliData.data.masraf.tutarIki) +
        parseFloat(this.BahceliData.data.masraf.tutarUc) +
        parseFloat(this.BahceliData.data.masraf.tutarDort) +
        parseFloat(this.BahceliData.data.masraf.tutarBes) +
        parseFloat(this.BahceliData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.BahceliData.data.iade.tutarBir) +
        parseFloat(this.BahceliData.data.iade.tutarIki) +
        parseFloat(this.BahceliData.data.iade.tutarUc) +
        parseFloat(this.BahceliData.data.iade.tutarDort) +
        parseFloat(this.BahceliData.data.iade.tutarBes) +
        parseFloat(this.BahceliData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.BahceliData.data.sodexo.yuz) * 100 +
        parseFloat(this.BahceliData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.BahceliData.data.sodexo.elli) * 50 +
        parseFloat(this.BahceliData.data.sodexo.yirmi) * 20 +
        parseFloat(this.BahceliData.data.sodexo.ontl) * 10 +
        parseFloat(this.BahceliData.data.sodexo.bes) * 5 +
        parseFloat(this.BahceliData.data.sodexo.bir) +
        parseFloat(this.BahceliData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.BahceliData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.BahceliData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.BahceliData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.BahceliData.data.ticket.yuz) * 100 +
        parseFloat(this.BahceliData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.BahceliData.data.ticket.elli) * 50 +
        parseFloat(this.BahceliData.data.ticket.yirmi) * 20 +
        parseFloat(this.BahceliData.data.ticket.ontl) * 10 +
        parseFloat(this.BahceliData.data.ticket.bes) * 5 +
        parseFloat(this.BahceliData.data.ticket.bir) +
        parseFloat(this.BahceliData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.BahceliData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.BahceliData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.BahceliData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.BahceliData.data.credit.bir) +
        parseFloat(this.BahceliData.data.credit.iki) +
        parseFloat(this.BahceliData.data.credit.uc) +
        parseFloat(this.BahceliData.data.credit.dort) +
        parseFloat(this.BahceliData.data.credit.bes) +
        parseFloat(this.BahceliData.data.credit.alti) +
        parseFloat(this.BahceliData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.BahceliData.data.cash.yuz) * 100 +
        parseFloat(this.BahceliData.data.cash.ikiyuz) * 200 +
        parseFloat(this.BahceliData.data.cash.elli) * 50 +
        parseFloat(this.BahceliData.data.cash.yirmi) * 20 +
        parseFloat(this.BahceliData.data.cash.ontl) * 10 +
        parseFloat(this.BahceliData.data.cash.bes) * 5 +
        parseFloat(this.BahceliData.data.cash.bir) +
        parseFloat(this.BahceliData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.BahceliData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.BahceliData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.BahceliData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.BahceliData.data.avmKuponu) +
        parseFloat(this.BahceliData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.BahceliData.data.setCardGunSonu) +
        parseFloat(this.BahceliData.data.multinetGunSonu) +
        parseFloat(this.BahceliData.data.ceoCardGunSonu) +
        parseFloat(this.BahceliData.data.metropolGunSonu) +
        parseFloat(this.BahceliData.data.ticketGunSonu) +
        parseFloat(this.BahceliData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.BahceliData.programYemekCeki);

      this.NakitFark = this.Nakit - this.BahceliData.programNakit;

      this.VisaFark = this.Visa - this.BahceliData.programVisa;
      this.YemekSepetiFark =
        this.BahceliData.data.yemekSepeti - this.BahceliData.programYemekSepeti;
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
