import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Resetpassword from './pages/Account/Resetpassword'
import Login from './pages/Account/Login'
import Forgotpassword from './pages/Account/Forgotpassword'
import MainLayout from './components/MainLayout';
import Enquiry from './pages/List/Enquiry';
import BlogList from './pages/List/BlogList';
import BlogCatList from './pages/List/BlogCatList';
import OrderList from './pages/List/OrderList';
import Customer from './pages/List/Customer';
import ColorList from './pages/List/ColorList';
import BrandList from './pages/List/BrandList';
import CategoryList from './pages/List/CategoryList';
import ProductList from './pages/List/ProductList';
import AddBlog from './pages/Add/AddBlog';
import AddBlogCategory from './pages/Add/AddBlogCategory';
import AddBrand from './pages/Add/AddBrand';
import AddCategory from './pages/Add/AddCategory';
import AddColor from './pages/Add/AddColor';
import AddProduct from './pages/Add/AddProduct';

function App() {
  return (
      <Router>
        <Routes>
          {/* login/password */}
          <Route path='/' element={<Login />} />
          <Route path='/reset-password' element={<Resetpassword />} />
          <Route path='/forgot-password' element={<Forgotpassword />} />
          <Route path='/admin' element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            {/* List route */}
            <Route path='customer' element={<Customer />} />
            <Route path='product-list' element={<ProductList />} />
            <Route path='brand-list' element={<BrandList />} />
            <Route path='category-list' element={<CategoryList />} />
            <Route path='color-list' element={<ColorList />} />
            <Route path='order' element={<OrderList />} />
            <Route path='blog-list' element={<BlogList />} />
            <Route path='blog-category-list' element={<BlogCatList />} />
            <Route path='enquiry' element={<Enquiry />} />
            {/* Add route */}
            <Route path='product' element={<AddProduct />} />
            <Route path='brand' element={<AddBrand />} />
            <Route path='category' element={<AddCategory />} />
            <Route path='color' element={<AddColor />} />
            <Route path='blog' element={<AddBlog />} />
            <Route path='blog-category' element={<AddBlogCategory />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
