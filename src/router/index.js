import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Search from "../views/Search.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import AddForm from "../views/AddForm.vue";
import AddSummary from "../views/AddSummary.vue";
import Dashboard from "../views/Dashboard.vue";
import PaymentForm from "../views/PaymentForm.vue";
import PaymentFormResult from "../views/PaymentFormResult.vue";
import SignUpForm_1 from "../views/SignUpForm_1.vue";
import SignUpForm_2 from "../views/SignUpForm_2.vue";
import SignUpResult from "../views/SignUpResult.vue";
import NotFound from "../views/NotFound.vue";
import DeliveryReport from "../views/DeliveryReport.vue";
import Payments from "../views/PaymentTab.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "no-searchbar",
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/addform",
    name: "AddForm",
    component: AddForm,
  },
  {
    path: "/addsummary",
    name: "AddSummary",
    component: AddSummary,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  //Update Payment Form
  {
    path: "/paymentform",
    name: "PaymentForm",
    component: PaymentForm,
  },
  //Result of Payment Form
  {
    path: "/paymentformresult",
    name: "PaymentFormResult",
    component: PaymentFormResult,
  },
  {
    path: "/signup/info",
    name: "SignUpForm_1",
    component: SignUpForm_1,
  },
  {
    path: "/signup/payments",
    name: "SignUpForm_2",
    component: SignUpForm_2,
  },
  {
    path: "/signup/result",
    name: "SignUpResult",
    component: SignUpResult,
  },
  //404 page
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/delivery",
    name: "DeliveryReport",
    component: DeliveryReport,
  },
  {
    path: "/payments",
    name: "Payments",
    component: Payments,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
