import React, {
  Component,
  Fragment,
  createRef,
  useState,
  useEffect,
} from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { useQuery, useMutation } from "react-apollo";
import { gql } from "apollo-boost";
import Switch from "react-bootstrap-switch";
export default function Bolge({ session }) {
  const { loading, error, data } = useQuery(
    gql`
      query($SubeId: String!) {
        SubeBolge(SubeId: $SubeId) {
          id
          BolgeAdi
          Sehir
          SubeId
          Tutar
          Status
        }
      }
    `,
    { variables: { SubeId: session.ActiveUser.Sube } }
  );
  useEffect(() => {
    console.log(session);
  }, []);
  const CREATE_BOLGE = gql`
    mutation(
      $BolgeAdi: String!
      $Sehir: String!
      $SubeId: String!
      $Tutar: String!
    ) {
      CreateBolge(
        data: {
          BolgeAdi: $BolgeAdi
          Sehir: $Sehir
          SubeId: $SubeId
          Tutar: $Tutar
        }
      ) {
        BolgeAdi
        Tutar
      }
    }
  `;
  const BOLGE_STATUS = gql`
    mutation($id: String!, $Status: Int!) {
      BolgeStatus(data: { id: $id, Status: $Status }) {
        id
      }
    }
  `;
  const UPDATE_BOLGE = gql`
    mutation(
      $id: String!
      $BolgeAdi: String!
      $Tutar: String!
      $Sehir: String!
    ) {
      UpdateBolge(
        data: { id: $id, BolgeAdi: $BolgeAdi, Tutar: $Tutar, Sehir: $Sehir }
      ) {
        id
      }
    }
  `;
  const [CreateBolge] = useMutation(CREATE_BOLGE);
  const [BolgeStatus] = useMutation(BOLGE_STATUS);
  const [UpdateBolge] = useMutation(UPDATE_BOLGE);
  const [bolgeAdi, setBolgeAdi] = useState("");
  const [bolgeTutari, setBolgeTutari] = useState(0);
  const [sehir, setSehir] = useState("");
  const [bolge, setBolge] = useState([]);
  const saveBolge = () => {
    CreateBolge({
      variables: {
        BolgeAdi: bolgeAdi,
        Tutar: bolgeTutari,
        SubeId: session.ActiveUser.Sube,
        Sehir: sehir,
      },
    }).then((response) => {
      if (response) {
        window.location.reload();
      }
    });
  };

  const updateBolge = () => {
    UpdateBolge({
      variables: {
        BolgeAdi: bolgeAdi,
        Tutar: bolgeTutari,
        Sehir: sehir,
        id: bolge.id,
      },
    }).then((response) => {
      if (response) {
        window.location.reload();
      }
    });
  };
  const ChangeBolgeStatus = (state, id) => {
    BolgeStatus({
      variables: {
        id: id,
        Status: state === true ? 1 : 0,
      },
    });
  };
  if (loading) return <>...loading</>;
  return (
    <div>
      <Header session={session} />
      <SideBar session={session} />

      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <div class="row">
                  <h1>Bolgeler</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Bolge Listesi</h3>
            </div>

            <div class="card-body">
              <button
                className="btn btn-primary"
                style={{ float: "right" }}
                data-toggle="modal"
                data-target="#NewCategoryModal"
              >
                Yeni
              </button>
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <td>Bolge Adı</td>
                    <td>Sehir</td>
                    <td>Bolge Tutari</td>
                    <td>Durum</td>
                    <td>Düzenle</td>
                  </tr>
                </thead>
                <tbody>
                  {data.SubeBolge.length > 0 ? (
                    data.SubeBolge.map((item) => (
                      <tr>
                        <td>{item.BolgeAdi}</td>
                        <td>{item.Sehir}</td>
                        <td>{item.Tutar}</td>
                        <td>
                          <Switch
                            onChange={(el, state) =>
                              ChangeBolgeStatus(state, item.id)
                            }
                            name="test"
                            onText={"Acik"}
                            offText={"Kapali"}
                            offColor={"red"}
                            onColor={"green"}
                            defaultValue={item.Status === 1 ? true : false}
                          />
                        </td>
                        <td>
                          <button
                            class="btn btn-primary"
                            data-toggle="modal"
                            data-target="#UpdateCategoryModal"
                            onClick={() => {
                              setBolge(item);
                              setBolgeAdi(item.BolgeAdi);
                              setSehir(item.Sehir);
                              setBolgeTutari(item.Tutar);
                            }}
                          >
                            Duzenle
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <>Veri Yok</>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <div id="UpdateCategoryModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Bolge Guncelle</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="form-group">
                <label>Bolge Adi </label>
                <input
                  type="text"
                  className="form-control"
                  value={bolgeAdi}
                  onChange={(e) => setBolgeAdi(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Sehir </label>
                <select
                  className="form-control"
                  onChange={(e) => setSehir(e.target.value)}
                >
                  <option disabled={false}>---Sehir Seciniz---</option>
                  <option value="ankara" selected={sehir === "ankara"}>
                    Ankara
                  </option>
                  <option value="eskisehir" selected={sehir === "eskisehir"}>
                    Eskisehir
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label>Bolge Tutari </label>
                <input
                  type="number"
                  className="form-control"
                  value={bolgeTutari}
                  onChange={(e) => setBolgeTutari(e.target.value)}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => updateBolge()}
              >
                Kaydet
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Iptal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="NewCategoryModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Yeni Paket Bolgesi</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="form-group">
                <label>Bolge Adi </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setBolgeAdi(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Sehir </label>
                <select
                  className="form-control"
                  onChange={(e) => setSehir(e.target.value)}
                >
                  <option disabled={false}>---Sehir Seciniz---</option>
                  <option value="ankara">Ankara</option>
                  <option value="eskisehir">Eskisehir</option>
                </select>
              </div>
              <div className="form-group">
                <label>Bolge Tutari </label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setBolgeTutari(e.target.value)}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => saveBolge()}
              >
                Kaydet
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Iptal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
