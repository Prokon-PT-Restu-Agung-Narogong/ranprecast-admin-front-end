import dashboard from "../views/pages/dashboard";
import profile from "../views/pages/profile";
import products from "../views/pages/product/products";
import createProducts from "../views/pages/product/createProducts";


const routes = {
  "/": dashboard,
  '/home' : dashboard,
  '/dashboard' : dashboard,
  '/profile' : profile,
  '/products' : products,
  '/create-product' : createProducts 
};

export default routes;
