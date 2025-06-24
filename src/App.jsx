import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Setting from './Components/Setting';
import ReturnReasonComponent from './Components/ReturnReason';
import Company from './Components/Company';
import Site from './Components/Site';
import Mail from './Components/Mail';
import Location from './Components/Location';
import Shipping from './Components/Shipping';
import Notification from './Components/Notification';
import NotificationAlert from './Components/NotificationAlert';
import SocialMedia from './Components/SocialMedia';
import Cookies from './Components/Cookies';
// import LocationSetup from './Components/Location';
import OTPComponent from './Components/Otp';
import Analytics from './Components/Analytics';
import PaymentGateway from './Components/PaymentGateway';
import License from './Components/License';
import SmsGateway from './Components/Sms';

import LanguagesComponent from './Components/Language';
import RolePermissions from './Components/RolePermissions';
import Pages from './Components/Pages';
import PagesComponent from './Components/Pages';
import Taxes from './Components/Taxes';
import Units from './Components/Units';
import Benefits from './Components/Benefits';
import Outlets from './Components/Outlet';
import SupplierManagement from './Components/Suppliers';
import SupplierComponent from './Components/Suppliers';
import ThemeComponent from './Components/Theme';
import SliderComponent from './Components/Slider';
import Slider from './Components/Slider';
import CurrencyComponent from './Components/Currency';
import ProductCategoriesComponent from './Components/ProductCategories';
import ProductBrandsComponent from './Components/ProductBrands';
import ProductAttributes from './Components/ProductAttributes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="settings" element={<Setting />}>
            <Route path="return-reasons" element={<ReturnReasonComponent />} />
            <Route path="company" element={<Company />} />
            <Route path="site" element={<Site />} />
            <Route path="mail" element={<Mail />} />
            <Route path="location-setup" element={<Location />} />
            <Route path="shipping-setup" element={<Shipping />} />
            <Route path="Otp" element={<OTPComponent />} />
            <Route path="notification" element={<Notification />} />
            <Route path="notification-alert" element={<NotificationAlert/>} />
            <Route path="analytics" element={<Analytics/>} />
          <Route path="social-media" element={<SocialMedia/>} />
          <Route path="cookies" element={<Cookies/>} />
          <Route path="payment-gateway" element={<PaymentGateway/>} />
          <Route path="license" element={<License/>} />
          <Route path="sms-gateway" element={<SmsGateway/>} />
          <Route path="role-&-permissions" element={<RolePermissions/>} /> 
          <Route path="taxes" element={<Taxes/>} />
          <Route path="units" element={<Units/>} /> 
            {/* <Route index element={<div>Settings Dashboard Placeholder</div>} /> */}
            <Route path="languages" element={<LanguagesComponent/>} />
            <Route path="pages" element={<PagesComponent/>} />
            <Route path="benefits" element={<Benefits/>} />
            <Route path="outlets" element={<Outlets/>} />
            <Route path="suppliers" element={<SupplierComponent/>} />
            <Route path="theme" element={<ThemeComponent/>} />
            <Route path="sliders" element={<Slider/>} />
            <Route path="currencies" element={<CurrencyComponent/>} />
            <Route path="product-categories" element={<ProductCategoriesComponent/>} />
            <Route path="product-brands" element={<ProductBrandsComponent/>} />
             <Route path="product-attributes" element={<ProductAttributes/>} />
          </Route>
         
        </Route>
      </Routes>
    </Router>
  );
};

export default App;