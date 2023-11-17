import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import AuthorList from '../pages/AuthorList'
import BooksList from '../pages/BooksList'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login';
import ProtectedRoute from "../utils/ProtectedRoute";

const  Router = ({isAuth,setIsAuth}) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setIsAuth={setIsAuth}/>}/>
            <Route path="/authors" element={<AuthorList />}/>
            <Route path="/books" element={<BooksList />} />
            <Route path="/*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
)

export default Router