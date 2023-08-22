import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import SignUp from './pages/register/SignUp';
import { useSelector } from 'react-redux';
import Footer from './components/footer/Footer';
import ConnectionSuggestions from './pages/connSuggestions/ConnectionSuggestions';
import Connections from './pages/connections/Connections';
import EditProfile from './pages/editPorfile/EditProfile';

function App() {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes >
            <Route path='/' element={user?.other?.verified === true ? <Home /> : <Navigate to={'/login'} replace={true}/>} />
            <Route path='/profile/:id' element={user?.other?.verified === true ? <Profile /> : <Navigate to={'/login'} replace={true}/>} />
            <Route path='/login' element={ user?.other?.verified === true ? <Navigate to={'/'} replace={true}/> : <Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/suggestions" element={user?.other?.verified === true ? <ConnectionSuggestions /> : <Navigate to={'/login'} replace={true}/>}></Route>
            <Route path="/connections" element={user?.other?.verified === true ? <Connections /> : <Navigate to={'/login'} replace={true}/>}></Route>
            <Route path="/edit/profile/:id" element={user?.other?.verified === true ? <EditProfile /> : <Navigate to={'/login'} replace={true}/>}></Route>
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </>
  );
}

export default App;
