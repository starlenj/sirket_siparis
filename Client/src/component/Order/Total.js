import React, { Component } from "react";
import { connect } from "react-redux";
class Total extends Component {
  state = { ExtraPrice: 0, Quantity: 1 };

  render() {
    return (
      <p>
        {(
          (parseFloat(this.props.Price) +
            parseFloat(this.props.IcecekExtra) +
            parseFloat(this.props.Order.ExtraPrice)) *
          this.props.Order.Quantity
        ).toFixed(2)}
      </p>
    );
  }
}
const mapStateToProps = ({ Order }) => {
  return {
    Order
  };
};
export default connect(mapStateToProps)(Total);
