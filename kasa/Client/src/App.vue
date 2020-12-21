<template>
  <div id="app">
    <div v-show="IsLoggedIn">
      <notifications group="foo" />
      <Header />
      <div class="page-content">
        <SideBar />
        <div class="content-wrapper">
          <router-view />
        </div>
      </div>
    </div>
    <div v-show="!IsLoggedIn">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Heade";
import SideBar from "./components/SideBar";
export default {
  name: "app",
  components: { Header, SideBar },
  data() {
    return {
      IsLoggedIn: false
    };
  },
  async mounted() {
    if (localStorage.getItem("TOKEN") === null) this.IsLoggedIn = false;
    else this.IsLoggedIn = true;
    var path = location.pathname.split('/');
    if(localStorage.getItem("TOKEN") === null && path[1] !=='login') 
     window.location.href="/login"
     // eslint-disable-next-line no-console
    //console.log()
   // window.location.href="/login"

  }
};
</script>

