import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Search from "../views/Search.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import MyRentals from "../views/MyRentals.vue";
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
import EmailReservationConfirmed from "../views/EmailReservationConfirmed.vue";
import EmailReservationCanceled from "../views/EmailReservationCanceled.vue";
import ReservationReview from "../views/ReservationReview.vue";
import ReservationResult from "../views/ReservationResult.vue";
import Payments from "../views/PaymentTab.vue";
import Edit from "../views/Edit.vue";
import EditSummary from "../views/EditSummary.vue";
import ReservationSummaryGuest from "../views/ReservationSummaryGuest.vue";
import ReservationSummaryLoggedin from "../views/ReservationSummaryLoggedin.vue";
import ReservationSummaryLoggedinCanceled from "../views/ReservationSummaryLoggedinCanceled.vue";

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
    path: "/my-rentals",
    name: "MyRentals",
    component: MyRentals,
  },
  {
    path: "/add/new",
    name: "AddForm",
    component: AddForm,
  },
  {
    path: "/add/summary",
    name: "AddSummary",
    component: AddSummary,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/payments/:id",
    name: "EditPayment",
    component: PaymentForm,
  },
  {
    path: "/payments/new",
    name: "AddPayment",
    component: PaymentForm,
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
    path: "/emailreservation/confirmed",
    name: "EmailReservationConfirmed",
    meta: {
      layout: "no-navbar-footer",
    },
    component: EmailReservationConfirmed,
  },
  {
    path: "/emailreservation/canceled",
    name: "EmailReservationCanceled",
    meta: {
      layout: "no-navbar-footer",
    },
    component: EmailReservationCanceled,
  },
  {
    path: "/reservation/review",
    name: "ReservationReview",
    component: ReservationReview,
  },
  {
    // TODO - get url by id
    path: "/reservation/result",
    name: "ReservationResult",
    component: ReservationResult,
  },
  {
    path: "/payments",
    name: "Payments",
    component: Payments,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/edit/summary/:id",
    name: "EditSummary",
    component: EditSummary,
  },
  {
    path: "/reservation/summary/guest",
    name: "ReservationSummaryGuest",
    component: ReservationSummaryGuest,
  },
  {
    path: "/reservation/summary/loggedin",
    name: "ReservationSummaryLoggedin",
    component: ReservationSummaryLoggedin,
  },
  {
    path: "/reservation/summary/loggedin/canceled",
    name: "ReservationSummaryLoggedinCanceled",
    component: ReservationSummaryLoggedinCanceled,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
