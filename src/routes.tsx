import { Routes, Route } from 'react-router-dom';
import { ProtectRoute } from './components/ProtectRoute';
import { CartProvider } from './contexts/CartContext/CartContext';
import { UserProvider } from './contexts/UserContext/UserContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const  Router = () => (
    <UserProvider> 
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/shop' element={<ProtectRoute/>}>
            <CartProvider>
              <Route index element={<ShopPage />}/>
            </CartProvider>
          </Route> 
        </Routes>   
    </UserProvider>
    
  );

export default Router;
