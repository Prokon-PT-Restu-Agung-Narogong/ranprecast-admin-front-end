import dashboard from "../views/pages/dashboard";
import profile from "../views/pages/profile";
import products from "../views/pages/product/products";
import createProducts from "../views/pages/product/createProducts";
import updateProducts from "../views/pages/product/updateProducts";
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
  '/products' : products,
  '/create-product' : createProducts,
  '/update-product' : updateProducts,
  '/portofolio' : indexPortofolio,
  '/update-portofolio/:id' : updatePortofolio,
  '/delete-portofolio/:id' : deletePortofolio,
  '/create-portofolio' : createPortofolio,
  '/feedback' : feedback,
};

export default routes;
