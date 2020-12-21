import SweetAlert from "sweetalert2-react";
import React, { Component } from "react";

export default class OdemeBasarili extends Component {
  state = { ShowAlert: false, Order: [] };

  render() {
    return (
      <div>
        <div className="form-group">
          <SweetAlert
            show={this.state.ShowAlert}
            title="Ödemeniz Alınamadı"
            text="Lütfen Kart Bilgilerinizi Kontrol Edin yada Bankanızla İletişime Geçin.."
            onConfirm={() => (window.location.href = "/")}
          />
        </div>
      </div>
    );
  }
}
