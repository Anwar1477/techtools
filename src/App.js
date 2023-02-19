import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import useAdmin from './CustomHook/useAdmin';
import auth from './firebase.init';
import AllParts from './pages/AllParts';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import AddProduct from './pages/Dashboard/Admin/AddProduct';
import MakeAdmin from './pages/Dashboard/Admin/MakeAdmin';
import ManageOrder from './pages/Dashboard/Admin/ManageOrder';
import ManageProducts from './pages/Dashboard/Admin/ManageProducts';
import Dashboard from './pages/Dashboard/Dashboard';
import EditProfile from './pages/Dashboard/EditProfile';
import MyProfile from './pages/Dashboard/MyProfile';
import AddReview from './pages/Dashboard/Users/AddReview';
import MyOrders from './pages/Dashboard/Users/MyOrders';
import Payment from './pages/Dashboard/Users/Payment';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio/Portfolio';
import PurchaseParts from './pages/PurchaseParts/PurchaseParts';
import RequireAdmin from './pages/RequireAdmin';
import RequireAuth from './pages/RequireAuth';
import Signup from './pages/Signup';
import Footer from './Shared/Footer';
import Header from './Shared/Header';
AOS.init();

function App() {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);

  if (loading) {
    <p>Loading...</p>
  }
  return (
    <div className="App leading-7">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/allParts' element={<AllParts />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth> <PurchaseParts /> </RequireAuth>
        }></Route>
        <Route path='/*' element={<NotFound />}></Route>

        <Route path='dashboard' element={
          <RequireAuth> <Dashboard /> </RequireAuth>}>
          {
            admin &&
              <Route element={
              <RequireAdmin><ManageProducts /></RequireAdmin>
              }> </Route>
          }
              <Route path='manageOrders' element={
              <RequireAdmin><ManageOrder /> </RequireAdmin>
              }> </Route>

              <Route path='addProduct' element={
              <RequireAdmin> <AddProduct /> </RequireAdmin>
              }> </Route>
              <Route path='makeAdmin' element={
              <RequireAdmin> <MakeAdmin /> </RequireAdmin> 
              }> </Route>
            
          {
            !admin &&
            <>
              <Route element={<MyOrders />}> </Route>
              <Route path='review' element={<AddReview />}> </Route>
              <Route path='payment/:id' element={<Payment />}></Route>
            </>
          }
          <Route path='myProfile' element={<MyProfile />}></Route>
          <Route path='editProfile/:email' element={<EditProfile />}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
