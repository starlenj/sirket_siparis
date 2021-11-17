<template>
  <div class="col-md-12">
    <h2>Visa</h2>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Gelen</th>
          <th>Program</th>
          <th>Fark</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in AdanaData.data" :key="item._id">
          <th>{{ item._id | formatDate }}</th>
          <td>{{ item.credit.toFixed(2) }}</td>
          <td>
            {{
              AdanaData.programData[index] === undefined
                ? 0
                : AdanaData.programData[index]["KREDI"]
            }}
          </td>
          <td>
            {{
              (
                parseFloat(item.credit) -
                (AdanaData.programData[index] === undefined
                  ? 0
                  : AdanaData.programData[index]["KREDI"])
              ).toFixed(2)
            }}
          </td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top: 50px">
      <h2>Nakit</h2>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Gelen</th>
            <th>Program</th>
            <th>Fark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in AdanaData.data" :key="item._id">
            <th>{{ item._id | formatDate }}</th>
            <td>{{ parseFloat(item.cash).toFixed(2) }}</td>
            <td>
              {{
                AdanaData.programData[index] === undefined
                  ? 0
                  : AdanaData.programData[index]["NAKIT"]
              }}
            </td>
            <td>
              {{
                (
                  parseFloat(item.cash) -
                  (AdanaData.programData[index] === undefined
                    ? 0
                    : AdanaData.programData[index]["NAKIT"])
                ).toFixed(2)
              }}
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Yemek Sepeti</h2>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Gelen</th>
            <th>Program</th>
            <th>Fark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in AdanaData.data" :key="item._id">
            <th>{{ item._id | formatDate }}</th>
            <td>{{ item.yemekSepeti }}</td>
            <td>
              {{
                AdanaData.programData[index] === undefined
                  ? 0
                  : AdanaData.programData[index]["YEMEKSEPETI"]
              }}
            </td>
            <td>
              {{
                parseFloat(
                  item.yemekSepeti -
                    parseFloat(
                      AdanaData.programData[index] === undefined
                        ? 0
                        : AdanaData.programData[index]["YEMEKSEPETI"]
                    )
                ).toFixed(2)
              }}
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Yemek Kartı</h2>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Set Kart</th>
            <th>Multinet</th>
            <th>Cio Kart</th>
            <th>Metropol</th>
            <th>Ticket</th>
            <th>Sodexo</th>
            <th>Y.K Ticket</th>
            <th>Y.K Sodexo</th>
            <th>Toplam Gelen</th>
            <th>Program</th>
            <th>Fark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in AdanaData.data" :key="item._id">
            <th>{{ item._id | formatDate }}</th>
            <td>{{ item.setCardGunSonu }}</td>
            <td>{{ item.multinetGunSonu }}</td>
            <td>{{ item.ceoCardGunSonu }}</td>
            <td>{{ item.metropolGunSonu }}</td>
            <td>{{ item.ticketGunSonu }}</td>
            <td>{{ item.sodexoGunSonu }}</td>
            <td>{{ item.ticketYK }}</td>
            <td>{{ item.sodexoYK }}</td>
            <td>{{ parseFloat(item.yemekCeki).toFixed(2) }}</td>
            <td>
              {{
                AdanaData.programData[index] === undefined
                  ? 0
                  : AdanaData.programData[index]["YEMEKCEKI"]
              }}
            </td>
            <td>
              {{
                (
                  parseFloat(item.yemekCeki) -
                  (AdanaData.programData[index] === undefined
                    ? 0
                    : AdanaData.programData[index]["YEMEKCEKI"])
                ).toFixed(2)
              }}
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Sonuç</h2>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Sonuç</th>
            <th>Masraf</th>
            <th>Vega Masraf</th>

            <th>İptal/Iade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in AdanaData.data" :key="item._id">
            <th>{{ item._id | formatDate }}</th>
            <th>
       {{
                (
                  parseFloat(item.iade.tutarBir) +
                  parseFloat(item.iade.tutarIki) +
                  parseFloat(item.iade.tutarUc) +
                  parseFloat(item.iade.tutarDort) +
                  parseFloat(item.iade.tutarBes) +
                  parseFloat(item.iade.tutarAlti) +
                  (parseFloat(item.credit) -
                    (AdanaData.programData[index] === undefined
                      ? 0
                      : AdanaData.programData[index]["KREDI"])) +
                  (parseFloat(item.cash) -
                    (AdanaData.programData[index] === undefined
                      ? 0
                      : AdanaData.programData[index]["NAKIT"])) +
                  (parseFloat(item.yemekCeki) -
                    (AdanaData.programData[index] === undefined
                      ? 0
                      : AdanaData.programData[index]["YEMEKCEKI"])) +
                  (parseFloat(item.yemekSepeti) -
                    parseFloat(
                      AdanaData.programData[index] === undefined
                        ? 0
                        : AdanaData.programData[index]["YEMEKSEPETI"]
                    ))
                ).toFixed(2)
              }}
            </th>
            <td>
              {{
                (parseFloat(item.masraf.tutarBir) +
                  parseFloat(item.masraf.tutarIki) +
                  parseFloat(item.masraf.tutarUc) +
                  parseFloat(item.masraf.tutarDort) +
                  parseFloat(item.masraf.tutarBes) +
                  parseFloat(item.masraf.tutarAlti))
                  | currency
              }}
            </td>
            <td>
              {{
                parseFloat(
                  AdanaData.VegaKasa[index] === undefined
                    ? 0
                    : AdanaData.VegaKasa[index].TLGIDER
                ).toFixed(2)
              }}
            </td>
            <td>
              {{
                (parseFloat(item.iade.tutarBir) +
                  parseFloat(item.iade.tutarIki) +
                  parseFloat(item.iade.tutarUc) +
                  parseFloat(item.iade.tutarDort) +
                  parseFloat(item.iade.tutarBes) +
                  parseFloat(item.iade.tutarAlti))
                  | currency
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { DetailKasa } from "../../Helpers/KasaSubeModel";
export default {
  props: ["tarihData", "AdanaData"],
  data() {
    return {
      ...DetailKasa,
    };
  },
  methods: {
    async GetKasa() {
      // eslint-disable-next-line no-console
      console.log("BAHÇELİ PROGRAM DATA", this.AdanaData);
    },
  },
};
</script>
