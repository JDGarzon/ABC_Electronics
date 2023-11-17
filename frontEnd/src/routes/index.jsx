import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import ProductList from '../pages/ProductList'
import OrderList from '../pages/OrderList'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login';


const  Router = ({isAuth,setIsAuth}) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setIsAuth={setIsAuth}/>}/>
            <Route path="/products" element={<ProductList />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
)

export default Router