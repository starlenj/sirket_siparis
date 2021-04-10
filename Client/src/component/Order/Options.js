import React, { Component } from "react";
import { connect } from "react-redux";

class OptionList extends Component {
  onChange = (e) => {
    var arr = [];
    if (e.target.name === "Ekstra Malzemeler") {
      var target = e.target.options;
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          var value = JSON.parse(target[i].value);
          arr.push({
            Name: value.Name,
            Price: value.Price,
            id: value.id,
            Category: "Ekstra Malzemeler",
          });
        }
      }
      var Price = 0;
      for (var i = 0; i < arr.length; i++) {
        Price += arr[i].Price;
      }
      this.props.SetExtra({ Price });
      this.props.SetExtraOptions(arr);
    }

    if (e.target.name === "Ek Lezzetler") {
      var target = e.target.options;
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          var value = JSON.parse(target[i].value);
          arr.push({
            Name: value.Name,
            Price: value.Price,
            id: value.id,
            Category: "Ek Lezzetler",
          });
        }
      }
      this.props.SetEk(arr);
    }
    if (e.target.name === "Ekmek Seçimi") {

      var target = e.target.options;
      var arr = [];
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          if (target[i].value === '...Lütfen Seçiniz...') {
            alert('Lutfen gecerli bir secim yapiniz');
            this.props.SetEkmek([]);
            return;
          }
          var value = JSON.parse(target[i].value);
          arr.push({
            Name: value.Name,
            id: value.id,
            Price: value.Price,
            require: true
          });
        }
      }

      var Price = 0;
      for (var i = 0; i < arr.length; i++) {
        Price += arr[i].Price;
      }

      this.props.SetEkmek(arr);
    }

    if (e.target.name === "İçecek Seçimi") {
      var target = e.target.options;
      var arr = [];
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          if (target[i].value === '...Lütfen Seçiniz...') {
            alert('Lutfen gecerli bir secim yapiniz');
            this.props.SetIcecek([]);
            return;
          }
          var value = JSON.parse(target[i].value);
          arr.push({
            Name: value.Name,
            id: value.id,
            Price: value.Price,
            require: true
          });
        }
      }
      this.props.SetIcecek(arr);
    }




    if (e.target.name === "Promosyonlu İçecek") {
      var target = e.target.options;
      var arr = [];
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          if (target[i].value === '...Lütfen Seçiniz...') {
            alert('Lutfen gecerli bir secim yapiniz');
            this.props.SetIcecek([]);
            return;
          }
          var value = JSON.parse(target[i].value);
          arr.push({
            Name: value.Name,
            id: value.id,
            Price: value.Price
          });
        }
      }

      var Price = 0;
      for (var i = 0; i < arr.length; i++) {
        Price += arr[i].Price;
      }

      this.props.SetIcecekExtra({ Price })
      this.props.SetIcecek(arr);
    }

    if (e.target.name === "Sos Seçimi") {
      var target = e.target.options;
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          var value = JSON.parse(target[i].value);
          arr.push({
            Name: value.Name,
            Price: value.Price,
            id: value.id,
            Category: "Sos Seçimi",
          });
        }
      }
      this.props.SetSosSecimi(arr);
    }

    if (e.target.name === "Ürün Notları") {
      var target = e.target.options;
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          var value = JSON.parse(target[i].value);
          arr.push({
            Name: value.Name,
            Price: value.Price,
            id: value.id,
            Category: "Ürün Notları",
          });
        }
      }
      this.props.SetNotSecimi(arr);
    }
  };
  render() {
    return (
      <div className="flex-xl-left col-md-6" style={{ fontSize: 12 }}>
        {this.props.Product.Product.SelectOption.sort((a, b) =>
          a.Options[0].Order > b.Options[0].Order ? 1 : -1
        ).map((Options) => (
          <div className="row">
            <div
              style={{
                backgroundColor: "#e1e1e1",
                borderRadius: 10,
                marginBottom: 10,
                width: "100%",
                height: "100",
                padding: 10,
              }}
            >
              <span>
                <b>{Options.Options[0].Name}</b>
              </span>
              <div className="form-group">
                <select
                  className="form-control"
                  name={Options.Options[0].Name}
                  onChange={this.onChange}
                  multiple={Options.Options[0].SelectType === "Multiple"}
                >
                  <option
                    disabled={Options.Options[0].SelectType === "Multiple"}
                  >
                    ...Lütfen Seçiniz...
                  </option>
                  {Options.Options[0].OptionValues.sort((a, b) => a.Order > b.Order ? 1 : -1).map((Values) => (
                    <option value={JSON.stringify(Values)}>
                      {Values.Name} {Values.Price > 0 ? " + " : ""}
                      {Values.Price > 0
                        ? parseFloat(Values.Price).toFixed(2)
                        : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
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
    SetExtraOptions: (Options) =>
      dispatch({ type: "SET_EXTRA_OPTIONS", payload: Options }),
    SetExtra: (Extra) => dispatch({ type: "SET_EXTRA", payload: Extra }),
    SetOptions: (Options) =>
      dispatch({ type: "SET_OPTIONS", payload: Options }),
    SetEk: (Extra) => dispatch({ type: "SET_EK_OPTIONS", payload: Extra }),
    SetEkmek: (Options) => dispatch({ type: "SET_EKMEK", payload: Options }),
    SetIcecek: (Options) => dispatch({ type: "SET_ICECEK", payload: Options }),
    SetIcecekExtra: (Options) => dispatch({ type: "SET_ICECEK_EXTRA", payload: Options }),
    SetSosSecimi: (Options) => dispatch({ type: "SET_SOS", payload: Options }),
    SetNotSecimi: (Options) => dispatch({ type: "SET_NOT", payload: Options }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OptionList);
