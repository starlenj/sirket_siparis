import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import {
  UPDATE_PRODUCT,
  GET_PRODUCTS,
  GET_CATEGORYS,
} from "../../../queries/index";
export default class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.CategoryId = "";
  }
  state = {
    Name: "",
    Info: "",
    Price: 0,
    Order: 0,
    Picture: "",
    Status: 0,
    id: "",
  };
  onChange = (e) => {
    if (e.target.name === "IsRequired") {
      if (e.target.value === "true") {
        this.setState({ IsRequired: true });
      } else {
        this.setState({ IsRequired: false });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  SetProduct(Product) {
    console.log(Product);
    this.setState({
      Picture: Product.Picture,
      id: Product.id,
    });
    this.CategoryId = Product.Category[0].id;
  }

  onSubmit = (e, UpdateProduct) => {
    if (!this.formValidate()) {
      this.setState({ Name: "" });
      UpdateProduct();
    }
  };

  formValidate = () => {
    const { Name } = this.state;
    return !Name;
  };
  render() {
    return (
      <div className="container">
        <div className="row col-md-12">
          <Mutation
            mutation={UPDATE_PRODUCT}
            variables={{
              Name: this.state.Name,
              Price: parseFloat(this.state.Price),
              Order: parseInt(this.state.Order),
              Status: parseInt(this.state.Status),
              Picture: this.state.Picture,
              CategoryId: this.CategoryId,
              Info: this.state.Info,
              id: this.state.id,
            }}
            refetchQueries={[{ query: GET_PRODUCTS }]}
          >
            {(UpdateProduct, { loading, error }) => (
              <form>
                <div className="form-group">
                  <label>Ürün Görseli</label>
                  <input
                    type="file"
                    name="Picture"
                    className="form-control-file"
                    value={this.state.Picture}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="button"
                    disabled={!this.formValidate}
                    onClick={(e) => {
                      e.preventDefault();
                      this.onSubmit(e, UpdateProduct);
                    }}
                    data-dismiss="modal"
                  >
                    Kaydet
                  </button>
                </div>
              </form>
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}
