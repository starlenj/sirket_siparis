import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div class="mb-2 menu-wrap" style={{ fontSize: 13 }}>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="...Arama"
            />
          </div>
        </form>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link red text-dark active"
              id="menu-tab"
              data-toggle="tab"
              href="#menu"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <b> Menü</b>
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link text-dark"
              id="bilgi-tab"
              data-toggle="tab"
              href="#bilgi"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <b> Bilgiler</b>
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active "
            id="menu"
            role="tabpanel"
            aria-labelledby="menu-tab"
          >
            <div className="table-responsive">
              <table className="table table-hover table-sm">
                <thead>
                  <tr>
                    <td style={{ width: "20%" }}></td>
                    <td style={{ width: "60%" }}>
                      <b>Büyük Boy Menüler</b>
                    </td>
                    <td style={{ width: "20%" }}></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        style={{ width: "30%" }}
                        id="inputsm"
                        type="text"
                      />
                      <button
                        className="btn btn-success btn-sm"
                        style={{
                          width: 25,
                          height: 25,
                          padding: 0,
                          marginLeft: 5,
                        }}
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </td>
                    <td>
                      <div className="row">
                        <p>Hmbrgr Büyük Menü</p>
                      </div>
                      <div className="row">
                        <p>Hmbrgr Büyük Açıklama</p>
                      </div>
                    </td>

                    <td className="text-danger">
                      <b>34,75 TL</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        style={{ width: "30%" }}
                        id="inputsm"
                        type="text"
                      />
                      <button
                        className="btn btn-success btn-sm"
                        style={{
                          width: 25,
                          height: 25,
                          padding: 0,
                          marginLeft: 5,
                        }}
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </td>
                    <td>
                      <div className="row">
                        <p>Hmbrgr Büyük Menü</p>
                      </div>
                      <div className="row">
                        <p>Hmbrgr Büyük Açıklama</p>
                      </div>
                    </td>

                    <td className="text-danger">
                      <b>34,75 TL</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="bilgi"
            role="tabpanel"
            aria-labelledby="bilgi-tab"
          >
            ...
          </div>
        </div>
      </div>
    );
  }
}
