import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import {
  GET_OPTIONS,
  GET_SELECTOPTONS,
  CREATE_SELECTOPTION,
  DELETE_SELECTOPTIONS,
} from "../../../queries/index";
export default class SelectOptions extends Component {
  state = { Product: [], SelectOptions: [] };
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
  }
  onChange = (e) => {
    this.setState({ Name: e.target.value });
  };
  SetProductOptions(Product) {
    this.setState({ Product: Product });
  }

  GetData(orders) {
    window.jQuery(this.gridRef.current).DataTable({
      responsive: true,
      autoWidth: false,
    });
  }
  SelectOption = (e, Option) => {
    this.setState({ SelectOptions: Option[0].id });
  };
  DeleteOptions = (e, DeleteSelectOptions) => {
    DeleteSelectOptions();
  };
  onSubmit = (e, CreateSelectOption) => {
    CreateSelectOption();
  };
  handleOptions = (e, Options) => {
    console.log(Options);
  };
  render() {
    return (
      <div>
        <div className="row col-md-12">
          <form>
            <div className="form-group">
              <label>Seçenek </label>

              <Query
                query={GET_OPTIONS}
                onCompleted={(data) => this.GetData(data)}
              >
                {({ loading, data, error }) => {
                  if (loading) return <div className="loading">Loading...</div>;
                  if (error) return <div>Error</div>;
                  return (
                    <select
                      className="form-control"
                      onChange={(e) => this.SelectOption(e, data.Options)}
                    >
                      <option>Seçeneği Seçiniz..</option>
                      {data.Options.map((option) => (
                        <option>{option.Name}</option>
                      ))}
                    </select>
                  );
                }}
              </Query>
            </div>
            <Mutation
              mutation={CREATE_SELECTOPTION}
              variables={{
                OptionsId: this.state.SelectOptions,
                ProductId: this.state.Product.id,
              }}
              refetchQueries={GET_SELECTOPTONS}
            >
              {(CreateSelectOption, { loading, error }) => (
                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={(e) => this.onSubmit(e, CreateSelectOption)}
                  >
                    Ekle
                  </button>
                </div>
              )}
            </Mutation>
          </form>

          <Query
            query={GET_SELECTOPTONS}
            variables={{ ProductId: this.state.Product.id }}
          >
            {({ loading, data, error }) => {
              if (loading) return <div className="loading">Loading...</div>;
              if (error) return <div>Error</div>;
              return (
                <div className="row" style={{ marginLeft: 20 }}>
                  <table
                    class="table table-bordered table-hover"
                    ref={this.gridRef}
                  >
                    <thead>
                      <tr>
                        <td>Yetki Adı</td>
                        <td>Sil</td>
                      </tr>
                    </thead>
                    <tbody>
                      {data.ProductSelectOption.map((option) => (
                        <tr key={Math.random(0, 200)}>
                          <td>{option.Options[0].Name}</td>
                          <td>
                            <Mutation
                              mutation={DELETE_SELECTOPTIONS}
                              refetchQueries={GET_SELECTOPTONS}
                              variables={{ id: option.id }}
                              onCompleted={(data) =>
                                window.toastr.success(
                                  "Seçenek Silme",
                                  "İşlem Başarılı"
                                )
                              }
                            >
                              {(DeleteSelectOptions, { loading, error }) => (
                                <button
                                  class="btn btn-danger"
                                  onClick={(e) =>
                                    this.DeleteOptions(e, DeleteSelectOptions)
                                  }
                                >
                                  Sil
                                </button>
                              )}
                            </Mutation>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}
