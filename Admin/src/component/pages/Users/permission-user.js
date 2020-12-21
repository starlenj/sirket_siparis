import React, { Component } from "react";
import { Mutation } from "react-apollo";
import {
  GET_USERS,
  CREATE_PERMISSION,
  DELETE_PERMISSION,
} from "../../../queries/index";
export default class NewCategory extends Component {
  state = { User: [], Name: "", Permission: [], SelectPermission: [] };
  constructor(props) {
    super(props);
  }
  onChange = (e) => {
    this.setState({ Name: e.target.value });
  };
  SetPermissionUser(User) {
    this.setState({ User: User });
  }

  SelectPermission = (e, Permissions, DeletePermission) => {
    this.setState({ SelectPermission: Permissions });
    if (this.state.SelectPermission.id !== undefined) DeletePermission();
    console.log(this.state.SelectPermission.id);
  };

  onSubmit = (e, CreatePermission) => {
    CreatePermission();
  };
  render() {
    return (
      <div>
        <div className="row col-md-12">
          <Mutation
            mutation={CREATE_PERMISSION}
            variables={{
              Name: this.state.Name,
              UserId: this.state.User.id,
            }}
          >
            {(UpdateUser, { loading, error }) => (
              <form>
                <div className="form-group">
                  <label>Yetki Türü </label>
                  <select className="form-control" onChange={this.onChange}>
                    <option>Yetki Seçiniz..</option>
                    <optgroup label="Modül Yetkileri">
                      <option value="Customer">Müşteri</option>
                      <option value="Order">Sipariş</option>
                      <option value="User">Kullanıcı</option>
                      <option value="Raporlar">Raporlar</option>
                    </optgroup>
                    <optgroup label="Kullanıcı">
                      <option value="User.New">Kullanıcı Ekleme</option>
                      <option value="User.Edit">Kullanıcı Düzenleme</option>
                      <option value="User.Delete">Kullanıcı Silme</option>
                    </optgroup>
                    <optgroup label="Sipariş">
                      <option value="Order.Edit"> Sipariş Düzenleme</option>
                      <option value="Order.View">Sipariş Görüntüleme</option>
                      <option value="Order.Cancel">Sipariş İptal</option>
                    </optgroup>
                    <optgroup label="Müşteri">
                      <option value="Customer.View">Müşteri Görüntüleme</option>
                      <option value="Customer.Edit">Müşteri Düzenleme</option>
                      <option value="Customer.Delete">Müşteri Silme</option>
                    </optgroup>
                    <option value="SystemAdmin">Admin</option>
                  </select>
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      this.onSubmit(e, UpdateUser);
                    }}
                  >
                    Ekle
                  </button>
                </div>
              </form>
            )}
          </Mutation>
          {this.state.User.UserPermissions !== undefined ? (
            <table
              id="example2"
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
                {this.state.User.UserPermissions.map((Permissions) => (
                  <tr key={Math.random(0, 200)}>
                    <td>{Permissions.Name}</td>
                    <td>
                      <Mutation
                        mutation={DELETE_PERMISSION}
                        variables={{ id: this.state.SelectPermission.id }}
                        onCompleted={(data) =>
                          window.toastr.success("Yetki Silme", "İşlem Başarılı")
                        }
                      >
                        {(DeletePermission, { loading, error }) => (
                          <button
                            class="btn btn-danger"
                            onClick={(e) =>
                              this.SelectPermission(
                                e,
                                Permissions,
                                DeletePermission
                              )
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
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
