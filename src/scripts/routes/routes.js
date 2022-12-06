import dashboard from "../views/pages/dashboard";
import profile from "../views/pages/profile";
import products from "../views/pages/product/products";
import createProducts from "../views/pages/product/createProducts";
import updateProducts from "../views/pages/product/updateProducts";
import feedback from "../views/pages/feedback";

const routes = {
  "/": dashboard,
  '/home' : dashboard,
  '/dashboard' : dashboard,
  '/profile' : profile,
  '/products' : products,
  '/create-product' : createProducts,
  '/update-product' : updateProducts,
  '/feedback' : feedback,
};

export default routes;
