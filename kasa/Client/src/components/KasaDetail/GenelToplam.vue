<template>
  <div class="col-md-12">
    <!--KASA GİRİŞ BİTİŞ-->

    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Nakit Gelen</th>
          <th>Visa Gelen</th>
          <th>Multinet Gelen</th>
          <th>Ticket Gelen</th>
          <th>Sodexo Gelen</th>
          <th>Set Card Gelen</th>
          <th>Cio Gelen</th>
          <th>Metropol Gelen</th>
          <th>Diğer Gelen</th>
          <th>Toplam</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>Arcadium</b>
          </td>
          <td>{{parseFloat(Arcadium.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Arcadium.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Arcadium.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Arcadium.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Arcadium.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Arcadium.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Arcadium.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Arcadium.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Arcadium.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Arcadium.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>
        <tr>
          <td>
            <b>Gordion</b>
          </td>
          <td>{{parseFloat(Gordion.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Gordion.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Gordion.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Gordion.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Gordion.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Gordion.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Gordion.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Gordion.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Gordion.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Gordion.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>

        <tr>
          <td>
            <b>Armada</b>
          </td>
          <td>{{parseFloat(Armada.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Armada.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Armada.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Armada.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Armada.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Armada.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Armada.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Armada.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Armada.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Armada.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>

        <tr>
          <td>
            <b>Bahçelievler</b>
          </td>
          <td>{{parseFloat(Bahceli.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Bahceli.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Bahceli.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Bahceli.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Bahceli.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Bahceli.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Bahceli.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Bahceli.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Bahceli.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Bahceli.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>
        <tr>
          <td>
            <b>Bilkent</b>
          </td>
          <td>{{parseFloat(Bilkent.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Bilkent.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Bilkent.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Bilkent.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Bilkent.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Bilkent.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Bilkent.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Bilkent.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Bilkent.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Bilkent.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>
        <tr>
          <td>
            <b>Ankamall</b>
          </td>
          <td>{{parseFloat(Ankamall.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Ankamall.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Ankamall.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Ankamall.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Ankamall.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Ankamall.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Ankamall.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Ankamall.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Ankamall.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Ankamall.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>
        <tr>
          <td>
            <b>Atakule</b>
          </td>
          <td>{{parseFloat(Atakule.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Atakule.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Atakule.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Atakule.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Atakule.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Atakule.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Atakule.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Atakule.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Atakule.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Atakule.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>
        <tr>
          <td>
            <b>Cepa</b>
          </td>
          <td>{{parseFloat(Cepa.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Cepa.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Cepa.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Cepa.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Cepa.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Cepa.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Cepa.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Cepa.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Cepa.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Cepa.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>

        <tr>
          <td>
            <b>Adana</b>
          </td>
          <td>{{parseFloat(Adana.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Adana.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Adana.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Adana.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Adana.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Adana.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Adana.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Adana.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Adana.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Adana.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>
        <tr>
          <td>
            <b>Mersin</b>
          </td>
          <td>{{parseFloat(Mersin.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Mersin.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Mersin.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Mersin.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Mersin.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Mersin.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Mersin.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Mersin.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Mersin.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Mersin.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>
        <tr>
          <td>
            <b>Ümitköy</b>
          </td>
          <td>{{parseFloat(Umitkoy.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Umitkoy.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Umitkoy.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Umitkoy.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Umitkoy.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Umitkoy.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Umitkoy.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Umitkoy.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Umitkoy.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Umitkoy.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>
        <tr>
          <td>
            <b>Batıkent</b>
          </td>
          <td>{{parseFloat(Batikent.Nakit).toFixed(2)}}</td>
          <td>{{parseFloat(Batikent.Credit).toFixed(2)}}</td>
          <td>{{parseFloat(Batikent.Multinet).toFixed(2)}}</td>
          <td>{{parseFloat(Batikent.Ticket).toFixed(2)}}</td>
          <td>{{parseFloat(Batikent.Sodexo).toFixed(2)}}</td>
          <td>{{parseFloat(Batikent.SetCard).toFixed(2)}}</td>
          <td>{{parseFloat(Batikent.Cio).toFixed(2)}}</td>
          <td>{{parseFloat(Batikent.Metropol).toFixed(2)}}</td>
          <td>{{parseFloat(Batikent.Diger).toFixed(2)}}</td>
          <td>
            <b>
              {{
              parseFloat(Batikent.YanToplam).toFixed(2)
              }}
            </b>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <b>{{NakitToplam | currency}}</b>
          </td>
          <td>
            <b>{{VisaToplam | currency}}</b>
          </td>
          <td>
            <b>{{MultinetToplam | currency}}</b>
          </td>
          <td>
            <b>{{TicketToplam | currency}}</b>
          </td>
          <td>
            <b>{{SodexoToplam | currency}}</b>
          </td>
          <td>
            <b>{{SetCardToplam | currency}}</b>
          </td>
          <td>
            <b>{{CioToplam | currency}}</b>
          </td>
          <td>
            <b>{{MetropolToplam | currency}}</b>
          </td>
          <td>
            <b>{{DigerToplam | currency}}</b>
          </td>
          <td>
            <b>{{AltToplam | currency}}</b>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { TotalKasa } from "../../Helpers/KasaSubeModel.js";
import { ReportTotal } from "../../Helpers/GetReportTools.js";
export default {
  props: ["GenelKasaData"],
  data() {
    return {
      Arcadium: {
        ...TotalKasa,
      },
      Gordion: {
        ...TotalKasa,
      },

      Armada: {
        ...TotalKasa,
      },

      Bahceli: {
        ...TotalKasa,
      },

      Bilkent: {
        ...TotalKasa,
      },

      Ankamall: {
        ...TotalKasa,
      },

      Atakule: {
        ...TotalKasa,
      },

      Cepa: {
        ...TotalKasa,
      },

      Adana: {
        ...TotalKasa,
      },

      Mersin: {
        ...TotalKasa,
      },

      Umitkoy: {
        ...TotalKasa,
      },

      Batikent: {
        ...TotalKasa,
      },
      NakitToplam: 0,
      VisaToplam: 0,
      TicketToplam: 0,
      MultinetToplam: 0,
      SodexoToplam: 0,
      SetCardToplam: 0,
      CioToplam: 0,
      MetropolToplam: 0,
      DigerToplam: 0,
      AltToplam: 0,
    };
  },
  methods: {
    async GetKasa() {
      this.Arcadium = await ReportTotal(this.GenelKasaData.Arcadium.data);
      this.Gordion = await ReportTotal(this.GenelKasaData.Gordion.data);
      this.Armada = await ReportTotal(this.GenelKasaData.Armada.data);
      this.Bahceli = await ReportTotal(this.GenelKasaData.Bahceli.data);
      this.Bilkent = await ReportTotal(this.GenelKasaData.Bilkent.data);
      this.Ankamall = await ReportTotal(this.GenelKasaData.Ankamall.data);
      this.Atakule = await ReportTotal(this.GenelKasaData.Atakule.data);
      this.Cepa = await ReportTotal(this.GenelKasaData.Cepa.data);
      this.Adana = await ReportTotal(this.GenelKasaData.Adana.data);
      this.Mersin = await ReportTotal(this.GenelKasaData.Mersin.data);
      this.Umitkoy = await ReportTotal(this.GenelKasaData.Umitkoy.data);
      this.Batikent = await ReportTotal(this.GenelKasaData.Batikent.data);

      this.NakitToplam = parseFloat(
        this.Arcadium.Nakit +
          this.Gordion.Nakit +
          this.Armada.Nakit +
          this.Bahceli.Nakit +
          this.Bilkent.Nakit +
          this.Ankamall.Nakit +
          this.Atakule.Nakit +
          this.Cepa.Nakit +
          this.Adana.Nakit +
          this.Mersin.Nakit +
          this.Umitkoy.Nakit +
          this.Batikent.Nakit
      ).toFixed(2);

      this.VisaToplam = parseFloat(
        this.Arcadium.Credit +
          this.Gordion.Credit +
          this.Armada.Credit +
          this.Bahceli.Credit +
          this.Bilkent.Credit +
          this.Ankamall.Credit +
          this.Atakule.Credit +
          this.Cepa.Credit +
          this.Adana.Credit +
          this.Mersin.Credit +
          this.Umitkoy.Credit +
          this.Batikent.Credit
      ).toFixed(2);

      this.MultinetToplam = parseFloat(
        this.Arcadium.Multinet +
          this.Gordion.Multinet +
          this.Armada.Multinet +
          this.Bahceli.Multinet +
          this.Bilkent.Multinet +
          this.Ankamall.Multinet +
          this.Atakule.Multinet +
          this.Cepa.Multinet +
          this.Adana.Multinet +
          this.Mersin.Multinet +
          this.Umitkoy.Multinet +
          this.Batikent.Multinet
      ).toFixed(2);
      this.TicketToplam = parseFloat(
        this.Arcadium.Ticket +
          this.Gordion.Ticket +
          this.Armada.Ticket +
          this.Bahceli.Ticket +
          this.Bilkent.Ticket +
          this.Ankamall.Ticket +
          this.Atakule.Ticket +
          this.Cepa.Ticket +
          this.Adana.Ticket +
          this.Mersin.Ticket +
          this.Umitkoy.Ticket +
          this.Batikent.Ticket
      ).toFixed(2);

      this.SodexoToplam = parseFloat(
        this.Arcadium.Sodexo +
          this.Gordion.Sodexo +
          this.Armada.Sodexo +
          this.Bahceli.Sodexo +
          this.Bilkent.Sodexo +
          this.Ankamall.Sodexo +
          this.Atakule.Sodexo +
          this.Cepa.Sodexo +
          this.Adana.Sodexo +
          this.Mersin.Sodexo +
          this.Umitkoy.Sodexo +
          this.Batikent.Sodexo
      ).toFixed(2);

      this.SetCardToplam = parseFloat(
        this.Arcadium.SetCard +
          this.Gordion.SetCard +
          this.Armada.SetCard +
          this.Bahceli.SetCard +
          this.Bilkent.SetCard +
          this.Ankamall.SetCard +
          this.Atakule.SetCard +
          this.Cepa.SetCard +
          this.Adana.SetCard +
          this.Mersin.SetCard +
          this.Umitkoy.SetCard +
          this.Batikent.SetCard
      ).toFixed(2);

      this.CioToplam = parseFloat(
        this.Arcadium.Cio +
          this.Gordion.Cio +
          this.Armada.Cio +
          this.Bahceli.Cio +
          this.Bilkent.Cio +
          this.Ankamall.Cio +
          this.Atakule.Cio +
          this.Cepa.Cio +
          this.Adana.Cio +
          this.Mersin.Cio +
          this.Umitkoy.Cio +
          this.Batikent.Cio
      ).toFixed(2);

      this.MetropolToplam = parseFloat(
        this.Arcadium.Metropol +
          this.Gordion.Metropol +
          this.Armada.Metropol +
          this.Bahceli.Metropol +
          this.Bilkent.Metropol +
          this.Ankamall.Metropol +
          this.Atakule.Metropol +
          this.Cepa.Metropol +
          this.Adana.Metropol +
          this.Mersin.Metropol +
          this.Umitkoy.Metropol +
          this.Batikent.Metropol
      ).toFixed(2);

      this.AltToplam = parseFloat(
        this.Arcadium.YanToplam +
          this.Gordion.YanToplam +
          this.Armada.YanToplam +
          this.Bahceli.YanToplam +
          this.Bilkent.YanToplam +
          this.Ankamall.YanToplam +
          this.Atakule.YanToplam +
          this.Cepa.YanToplam +
          this.Adana.YanToplam +
          this.Mersin.YanToplam +
          this.Umitkoy.YanToplam +
          this.Batikent.YanToplam
      ).toFixed(2);
    },
  },
};
</script>
