import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import ProductList from '../pages/ProductList'
import OrderList from '../pages/OrderList'
import OrderDetailsList from '../pages/OrderDetailsList'
import CategoryList from '../pages/CategoryList'
import CustomerList from '../pages/CustomerList'
import DinamicForm from '../pages/DinamicForm'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login';
import FormularioEdicion from '../pages/EdiciónFormulario';

const  Router = ({isAuth,setIsAuth}) => (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setIsAuth={setIsAuth}/>}/>
            <Route path="/products" element={<ProductList />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/orderdetails" element={<OrderDetailsList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/customerDinamic" element={<DinamicForm />} />
            <Route path="/editForm" element={<FormularioEdicion/>} />
            <Route path="/*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
)

export default Router