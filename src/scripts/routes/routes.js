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
import about from "../views/pages/about/about";
import updateabout from "../views/pages/about/updateabout";
import contact from "../views/pages/contact/contact";
import updatecontact from "../views/pages/contact/updatecontact";
import superiority from "../views/pages/superiority/superiority";
import updateSuperiority from "../views/pages/superiority/updateSuperiority";


const routes = {
  "/": dashboard,
  "/home": dashboard,
  "/dashboard": dashboard,
  "/profile": profile,
  "/products": indexProducts,
  "/create-product": createProducts,
  "/update-product/:id": updateProducts,
  "/delete-product/:id": deleteProducts,
  "/portofolio": indexPortofolio,
  "/update-portofolio/:id": updatePortofolio,
  "/delete-portofolio/:id": deletePortofolio,
  "/create-portofolio": createPortofolio,
  "/feedback": feedback,
  "/about": about,
  "/update-about": updateabout,
  "/contact": contact,
  "/update-contact": updatecontact,
  "/superiority": superiority,
  "/update-superiority/:id": updateSuperiority,
};

export default routes;
