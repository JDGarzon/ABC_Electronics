import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import ProductList from '../pages/ProductList'
import OrderList from '../pages/OrderList'
import OrderDetailsList from '../pages/OrderDetailsList'
import CategoryList from '../pages/CategoryList'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login';



const  Router = ({isAuth,setIsAuth}) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setIsAuth={setIsAuth}/>}/>
            <Route path="/products" element={<ProductList />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/orderdetails" element={<OrderDetailsList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
)

export default Router