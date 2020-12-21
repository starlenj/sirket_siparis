import React, { Component } from "react";

export default class SideBar extends Component {
  state = {
    menuOpen: false,
    raporMenu: false,
    userOpen: false,
    restorantMenu: false,
  };
  constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu = (event) => {
    if (!this.state[event.target.id]) {
      this.setState({
        [event.target.id]: true,
      });
    } else {
      this.setState({
        [event.target.id]: false,
      });
    }
  };
  render() {
    const { ActiveUser } = this.props.session;
    return (
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" class="brand-link">
          <span class="brand-text font-weight-light">HMBRGR</span>
        </a>

        <div class="sidebar">
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img
                src="/dist/img/user2-160x160.jpg"
                class="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div class="info">
              <a href="#" class="d-block">
                {ActiveUser.Email}
              </a>
            </div>
          </div>

          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li class="nav-item">
                <a href="/" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>Anasayfa</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/orders" class="nav-link">
                  <i class="nav-icon fas fa-shopping-basket"></i>
                  <p>Şube Sipariş</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/OrderList" class="nav-link">
                  <i class="nav-icon fas fa-shopping-basket"></i>
                  <p> Sipariş Geçmişi</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/Personel" class="nav-link">
                  <i class="nav-icon fas fa-user"></i>
                  <p>Personel</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/CovidForm" class="nav-link">
                  <i class="nav-icon fas fa-user"></i>
                  <p>Covid Form</p>
                </a>
              </li>

              {this.props.session.ActiveUser.Sube === "Merkez" ? (
                <li class="nav-item">
                  <a href="/CovidFormList" class="nav-link">
                    <i class="nav-icon fas fa-user"></i>
                    <p>Covid Form Geçmişi</p>
                  </a>
                </li>
              ) : (
                <li class="nav-item">
                  <a href="/CovidFormSubeList" class="nav-link">
                    <i class="nav-icon fas fa-user"></i>
                    <p>Covid Form Geçmişi</p>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}
