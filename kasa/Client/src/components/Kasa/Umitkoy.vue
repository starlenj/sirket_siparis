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
              v-model="UmitkoyData.programVisa"
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
              v-model="UmitkoyData.programNakit"
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
              v-model="UmitkoyData.data.setCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="UmitkoyData.data.multinetGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="UmitkoyData.data.ceoCardGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="UmitkoyData.data.metropolGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="UmitkoyData.data.ticketGunSonu"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="UmitkoyData.data.sodexoGunSonu"
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
              v-model="UmitkoyData.programYemekCeki"
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
              v-model="UmitkoyData.data.yemekSepeti"
              currency="TRY"
              locale="tr"
              class="form-control"
              readonly="true"
            />
          </td>
          <td>
            <currency-input
              v-model="UmitkoyData.programYemekSepeti"
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
  props: ["tarihData", "UmitkoyData"],
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
      console.log("ÜMİTKÖY GET KASA ÇALIŞTI", this.UmitkoyData.data);
      this.ToplamMasraf =
        parseFloat(this.UmitkoyData.data.masraf.tutarBir) +
        parseFloat(this.UmitkoyData.data.masraf.tutarIki) +
        parseFloat(this.UmitkoyData.data.masraf.tutarUc) +
        parseFloat(this.UmitkoyData.data.masraf.tutarDort) +
        parseFloat(this.UmitkoyData.data.masraf.tutarBes) +
        parseFloat(this.UmitkoyData.data.masraf.tutarAlti);

      this.ToplamIade =
        parseFloat(this.UmitkoyData.data.iade.tutarBir) +
        parseFloat(this.UmitkoyData.data.iade.tutarIki) +
        parseFloat(this.UmitkoyData.data.iade.tutarUc) +
        parseFloat(this.UmitkoyData.data.iade.tutarDort) +
        parseFloat(this.UmitkoyData.data.iade.tutarBes) +
        parseFloat(this.UmitkoyData.data.iade.tutarAlti);

      this.YKSodexo =
        parseFloat(this.UmitkoyData.data.sodexo.yuz) * 100 +
        parseFloat(this.UmitkoyData.data.sodexo.ikiyuz) * 200 +
        parseFloat(this.UmitkoyData.data.sodexo.elli) * 50 +
        parseFloat(this.UmitkoyData.data.sodexo.yirmi) * 20 +
        parseFloat(this.UmitkoyData.data.sodexo.ontl) * 10 +
        parseFloat(this.UmitkoyData.data.sodexo.bes) * 5 +
        parseFloat(this.UmitkoyData.data.sodexo.bir) +
        parseFloat(this.UmitkoyData.data.sodexo.sifirbes) * 0.5 +
        parseFloat(this.UmitkoyData.data.sodexo.sifiryirmibes) * 0.25 +
        parseFloat(this.UmitkoyData.data.sodexo.sifirbir) * 0.1 +
        parseFloat(this.UmitkoyData.data.sodexo.sifirsifirbes) * 0.05;

      this.YKTicket =
        parseFloat(this.UmitkoyData.data.ticket.yuz) * 100 +
        parseFloat(this.UmitkoyData.data.ticket.ikiyuz) * 200 +
        parseFloat(this.UmitkoyData.data.ticket.elli) * 50 +
        parseFloat(this.UmitkoyData.data.ticket.yirmi) * 20 +
        parseFloat(this.UmitkoyData.data.ticket.ontl) * 10 +
        parseFloat(this.UmitkoyData.data.ticket.bes) * 5 +
        parseFloat(this.UmitkoyData.data.ticket.bir) +
        parseFloat(this.UmitkoyData.data.ticket.sifirbes) * 0.5 +
        parseFloat(this.UmitkoyData.data.ticket.sifiryirmibes) * 0.25 +
        parseFloat(this.UmitkoyData.data.ticket.sifirbir) * 0.1 +
        parseFloat(this.UmitkoyData.data.ticket.sifirsifirbes) * 0.05;
      this.Visa =
        parseFloat(this.UmitkoyData.data.credit.bir) +
        parseFloat(this.UmitkoyData.data.credit.iki) +
        parseFloat(this.UmitkoyData.data.credit.uc) +
        parseFloat(this.UmitkoyData.data.credit.dort) +
        parseFloat(this.UmitkoyData.data.credit.bes) +
        parseFloat(this.UmitkoyData.data.credit.alti) +
        parseFloat(this.UmitkoyData.data.credit.yedi);

      this.Nakit =
        parseFloat(this.UmitkoyData.data.cash.yuz) * 100 +
        parseFloat(this.UmitkoyData.data.cash.ikiyuz) * 200 +
        parseFloat(this.UmitkoyData.data.cash.elli) * 50 +
        parseFloat(this.UmitkoyData.data.cash.yirmi) * 20 +
        parseFloat(this.UmitkoyData.data.cash.ontl) * 10 +
        parseFloat(this.UmitkoyData.data.cash.bes) * 5 +
        parseFloat(this.UmitkoyData.data.cash.bir) +
        parseFloat(this.UmitkoyData.data.cash.sifirbes) * 0.5 +
        parseFloat(this.UmitkoyData.data.cash.sifiryirmibes) * 0.25 +
        parseFloat(this.UmitkoyData.data.cash.sifirbir) * 0.1 +
        parseFloat(this.UmitkoyData.data.cash.sifirsifirbes) * 0.05 +
        parseFloat(this.ToplamMasraf);

      this.YKDiger =
        parseFloat(this.UmitkoyData.data.avmKuponu) +
        parseFloat(this.UmitkoyData.data.sinemaBileti);
      this.ToplamGelenYemekCeki =
        parseFloat(this.UmitkoyData.data.setCardGunSonu) +
        parseFloat(this.UmitkoyData.data.multinetGunSonu) +
        parseFloat(this.UmitkoyData.data.ceoCardGunSonu) +
        parseFloat(this.UmitkoyData.data.metropolGunSonu) +
        parseFloat(this.UmitkoyData.data.ticketGunSonu) +
        parseFloat(this.UmitkoyData.data.sodexoGunSonu) +
        parseFloat(this.YKSodexo) +
        parseFloat(this.YKTicket);

      this.YKFark =
        parseFloat(this.ToplamGelenYemekCeki) -
        parseFloat(this.UmitkoyData.programYemekCeki);

      this.NakitFark = this.Nakit - this.UmitkoyData.programNakit;

      this.VisaFark = this.Visa - this.UmitkoyData.programVisa;
      this.YemekSepetiFark =
        this.UmitkoyData.data.yemekSepeti - this.UmitkoyData.programYemekSepeti;
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
<script>
