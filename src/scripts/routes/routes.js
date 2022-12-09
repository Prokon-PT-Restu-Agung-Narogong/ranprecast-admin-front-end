import dashboard from "../views/pages/dashboard";
import profile from "../views/pages/profile";
import indexProducts from "../views/pages/product/indexProducts";
import createProducts from "../views/pages/product/createProducts";
import updateProducts from "../views/pages/product/updateProducts";
import deleteProducts from "../views/pages/product/deleteProducts";
import feedback from "../views/pages/feedback";
import indexPortofolio from "../views/pages/portofolio/indexPortofolio";
import updatePortofolio from "../views/pages/portofolio/updatePortofolio";
import createPortofolio from "../views/pages/portofolio/createPortofolio";
import deletePortofolio from "../views/pages/portofolio/deletePortofolio";

const routes = {
  "/": dashboard,
  '/home' : dashboard,
  '/dashboard' : dashboard,
  '/profile' : profile,
  '/update-product/:id' : updateProducts,
  '/create-product' : createProducts,
  '/delete-product/:id' : deleteProducts,
  '/products' : indexProducts,
  '/portofolio' : indexPortofolio,
  '/update-portofolio/:id' : updatePortofolio,
  '/delete-portofolio/:id' : deletePortofolio,
  '/create-portofolio' : createPortofolio,
  '/feedback' : feedback,
};

export default routes;
