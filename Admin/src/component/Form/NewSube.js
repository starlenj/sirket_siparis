import { Component, React } from "react";
import { Field, reduxForm } from "redux-form";
class SubeNewForm extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Adı :</label>
          <Field
            name="Name"
            component="input"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Paket Servis :</label>
          <Field
            name="PaketServis"
            component="input"
            className="form-control"
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Kaydet
        </button>
        <br />
      </form>
    );
  }
}

SubeNewForm = reduxForm({
  form: "Yeni-Sube-Ekle"
})(SubeNewForm);
export default SubeNewForm;
