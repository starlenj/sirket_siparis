import React, { createRef } from "react";
import { connect } from "react-redux";
import CurrencyFormat from "react-currency-format";
import Total from "./Total";
import { SetQuantity } from "../../Actions/Order";
import OptionList from "./Options";
class NewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.TotalComponent = createRef();
  }
  state = {
    EkmekTamammi: true,
    IcecekTamammi: true,
    Quantity: 1,
    Price: 0,
    Options: [],
    ServicePrice: 5.0,
    Total: 0,
    ExtraPrice: 0,
  };
  SetOrder = () => {
    var OrderArray = [];
    OrderArray.push({
      ProductId: this.props.Product.Product.id,
      EkmekOption: this.props.Order.EkmekOption,
      ExtraPrice: this.props.Order.ExtraPrice,
      IcecekOption: this.props.Order.IcecekOption,
      EkLezzetOption: this.props.Order.EkOptions,
      Price: this.props.Product.Product.Price,
      ProductName: this.props.Product.Product.Name,
      Quantity: this.props.Order.Quantity,
      ExtraOptions: this.props.Order.ExtraOptions,
      ExtraIcecek: this.props.Order.ExtraIcecek,
      IndirimFiyati: this.props.Product.Product.YemekSepetiPrice !== this.props.Product.Product.Price ? parseFloat(this.props.Product.Product.YemekSepetiPrice - this.props.Product.Product.Price).toFixed(2) * this.props.Order.Quantity : 0
    });
    this.props.Product.Product.SelectOption.map((options) => {
      if (options.Options[0].Name === "Ekmek Seçimi") {
        if (this.props.Order.EkmekOption.length === 0) {
          alert("Ekmek Seçimi Zorunludur..");
        }
      }
    });
    if (localStorage.getItem("siparis_turu") !== "Paket") {
      this.props.Product.Product.SelectOption.map((options) => {
        if (options.Options[0].Name === "İçecek Seçimi") {
          if (this.props.Order.IcecekOption.length === 0) {
            alert("İçecek Seçimi Zorunludur");
            return false;
          }
        }
      });
    }

    var SepetYeni = [];
    let Sepet = JSON.parse(localStorage.getItem("Sepet"));
    if (Sepet !== null) {
      if (Sepet.length > 0) {
        for (var i = 0; i < Sepet.length; i++) {
          SepetYeni.push(Sepet[i]);
        }
      }

      SepetYeni.push(OrderArray[0]);

      localStorage.setItem("Sepet", JSON.stringify(SepetYeni));
      localStorage.removeItem("URUN_ID");
      window.location.reload();
    }
  };
  render() {
    return (
      <div className="container" style={{ fontSize: 12 }}>
        <div className="row">
          {this.props.Product.Product.Picture !== "" ? (
            <div className="flex-xl-left col-md-6">
              <img
                src={this.props.Product.Product.Picture}
                width="100%"
                height="70%"
                style={{ objectFit: "contain" }}
              />
              <div className="row" style={{ fontSize: 15 }}>
                <span style={{ color: "gray" }}>
                  <b>{this.props.Product.Product.Name}</b>
                </span>
              </div>
              <div className="row" style={{ fontSize: 17 }}>
                <Total
                  ref={this.TotalComponent}
                  Price={parseFloat(this.props.Product.Product.Price)}
                  IcecekExtra={parseFloat(this.props.Order.ExtraIcecek)}
                />
              </div>
              <div className="row">{this.props.Product.Product.Info}</div>
            </div>
          ) : (
              <div></div>
            )}

          {this.props.Product.Product > [] ? (
            <OptionList />
          ) : (
              <div>Sonuç Yok Hatalı !!!</div>
            )}
        </div>
        <div className="row">
          <button className="btn btn-primary" onClick={this.props.SetQuantity}>
            <i class="fa fa-plus"></i>
          </button>
          <input
            type="number"
            className="form-control"
            name="Quantity"
            min={1}
            value={this.props.Order.Quantity}
            style={{
              width: 50,
              borderWidth: 0.5,
              borderColor: "#e1e1e1",
            }}
          />
          <button
            className="btn btn-primary"
            style={{ marginRight: 20 }}
            onClick={this.props.UnSetQuantity}
          >
            <i class="fa fa-minus"></i>
          </button>
          <button className="btn btn-primary" onClick={() => this.SetOrder()}>
            Sepete Ekle
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ Product, Order }) => {
  return {
    Product,
    Order,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SetQuantity: (Quantity) => dispatch({ type: "SET_QUANTITY" }),

    UnSetQuantity: (Quantity) => dispatch({ type: "UNSET_QUANTITY" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);
