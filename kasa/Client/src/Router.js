import Vue from "vue";
import Router from "vue-router";
import Home from "./Pages/Home.vue";

//şube
import Sube from "./Pages/Sube/List.vue";
import SubeNew from "./Pages/Sube/New.vue";

//üretim
import SubeUretim from "./Pages/Uretim/List.vue";
import UretimSube from "./Pages/Uretim/SubeUretim.vue";
import UretimKalan from "./Pages/Uretim/SubeKalan.vue";
import SubeKalanDetayli from "./Pages/Uretim/SubeKalanDetayli.vue";
import GidecekOlan from "./Pages/Uretim/GidecekOlan.vue";

//kullanıcı
import Login from "./Pages/User/Login.vue";
import User from "./Pages/User/List.vue";
import RoleService from "./utils/CheckPermission";

//User Home
import UserHome from "./Pages/Users/Home.vue";
// import SubeKalanUpdate from "./Pages/Uretim/SubeKalanUpdate.vue";

//kasa
import KasaDurum from "./Pages/Kasa/Durum.vue";
import KasaRaporuSubeBazli from "./Pages/Kasa/KasaRaporuSubeBazli.vue";
import kasaKontrol from "./Pages/Kasa/KasaKontrol.vue";
import SubeKasaRaporu from "./Pages/Kasa/SubeKasaRaporu.vue";
import KasaRaporu from "./Pages/Kasa/KasaRaporu.vue";
import TestKasa from "./Pages/Kasa/TestKasa.vue";

//CheckList
import ChecklistIndex from "./Pages/CheckList/checklist.index.vue";
import ChecklistNew from "./Pages/CheckList/checklist.new.vue";
import ChecklistValue from "./Pages/CheckList/checklist.addvalue.vue";
import ChecklistUpdate from "./Pages/CheckList/checklist.update.vue";
import ChecklistSube from "./Pages/CheckList/checklist.sube.vue";
import ChecklistWizard from "./Pages/CheckList/checklist.wizard.vue";
import ChecklistReport from "./Pages/CheckList/checklist.report.vue";
import ChecklistReportDetail from "./Pages/CheckList/checklist.reportdetails.vue";
import CheckListShow from "./Pages/CheckList/checklist.show.vue";
import CheckListOnay from "./Pages/CheckList/checklist.onay.vue";

//onay list
import OnayList from "./Pages/Onay/OnayList.vue";
import OnayListNew from "./Pages/Onay/OnayList.add.vue";
import OnayAddUser from "./Pages/Onay/Onay.adduser.vue";
import OnayBekleyen from "./Pages/Onay/Onay.bekleyen.vue";
//raporlar
import UrunBazliSatis from "./Pages/Rapor/UrunBazliSatis.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/Rapor/TestKasa",
      name: "UrunBazliSatis",
      component: TestKasa,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Rapor/UrunBazliSatis",
      name: "UrunBazliSatis",
      component: UrunBazliSatis,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/CheckList/Onay/:id/:onayId",
      name: "CheckListOnay",
      component: CheckListOnay,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/CheckList/Show/:id/:onayId",
      name: "CheckListShow",
      component: CheckListShow,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Onay/Bekleyen",
      name: "OnayBekleyen",
      component: OnayBekleyen,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Onay/AddUser/:id",
      name: "OnayAddUser",
      component: OnayAddUser,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Onay/New",
      name: "OnayListNew",
      component: OnayListNew,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/Onay/Index",
      name: "OnayList",
      component: OnayList,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/Checklist/Report/Details/:id",
      name: "ChecklistReportDetails",
      component: ChecklistReportDetail,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Checklist/Report",
      name: "ChecklistReport",
      component: ChecklistReport,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Checklist/SubeCheck/:id",
      name: "ChecklistWizard",
      component: ChecklistWizard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Checklist/Sube",
      name: "ChecklistSube",
      component: ChecklistSube,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Checklist/Update/:id",
      name: "ChecklistUpdate",
      component: ChecklistUpdate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Checklist/Index",
      name: "ChecklistIndex",
      component: ChecklistIndex,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/Checklist/CheckValue/:id",
      name: "ChecklistValue",
      component: ChecklistValue,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Checklist/New",
      name: "ChecklistNew",
      component: ChecklistNew,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/KasaDurumSubeBazli",
      name: "KasaMasraf",
      component: KasaRaporuSubeBazli,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/KasaDurum",
      name: "kasaDurum",
      component: KasaDurum,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/kasaKontrol",
      name: "login",
      component: kasaKontrol,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/KasaRaporu",
      name: "order",
      component: KasaRaporu,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/SubeKasaRaporu",
      name: "order",
      component: SubeKasaRaporu,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/",
      name: "login",
      component: Home,
      meta: {
        requiresAuth: true,
      },
      beforeEnter: (to, from, next) => {
        RoleService.CheckPermission("admin").then((response) => {
          if (response !== undefined) {
            next();
          } else {
            next("/user/home");
          }
        });
      },
    },
 
    {
      path: "/home",
      name: "login",
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/Uretim/SubeKalan",
      name: "login",
      component: UretimKalan,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/Sube",
      name: "Sube",
      component: Sube,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Sube/New",
      name: "Sube",
      component: SubeNew,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Uretim",
      name: "Sube",
      component: SubeUretim,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/User",
      name: "Sube",
      component: User,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/User/Logout",
      name: "UserLogout",
      component: () => {
        localStorage.removeItem("TOKEN");
        window.location.href = "/login";
      },
    },
    {
      path: "/User/Home",
      name: "Sube",
      component: UserHome,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Uretim/SubeKalanDetayli",
      name: "Sube",
      component: SubeKalanDetayli,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Uretim/GidecekOlan",
      name: "Sube",
      component: GidecekOlan,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
