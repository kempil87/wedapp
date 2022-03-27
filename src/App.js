import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Lk/HomePage/HomePage";
import Auth from "./pages/Reg/Auth/Auth";
import Registration from "./pages/Reg/Registration/Registration";
import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./pages/Lk/Profile/Profile";
import News from "./pages/Lk/News/News";
import Dress from "./pages/Lk/Organization/Dress/Dress";
import Suit from "./pages/Lk/Organization/Suit/Suit";
import Ring from "./pages/Lk/Organization/Ring/Ring";
import Toast from "./pages/Lk/Organization/Toast/Toast";
import Restaurant from "./pages/Lk/Organization/Restaurant/Restaurant";
import OrganizationIn from "./pages/Lk/OrganizationIn/OrganizationIn";
import Header from "./components/Header/Header";
import Photograph from "./pages/Lk/Organization/Photograph/Photograph";
import Auto from "./pages/Lk/Organization/Auto/Auto";
import Footer from "./components/Footer/Footer";

function App() {
    const token = useSelector(state => state.token)
    const dispatch = useDispatch()

    const isAuth = () => {
      const t = localStorage.getItem("token")
        if (t){
            dispatch({
                type: "ADD_TOKEN",
                payload: t
            })
        }
    }


    useEffect(() =>{
        isAuth()
    },[])

  return (
    <div className="App">
        {token && (<Header/>)}
            <Routes>
                {token ? (
                    <>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/organization:id" element={<OrganizationIn/>}/>
                        <Route path="/DressScreen" element={<Dress/>}/>
                        <Route path="/SuitScreen" element={<Suit/>}/>
                        <Route path="/RingScreen" element={<Ring/>}/>
                        <Route path="/RestaurantScreen" element={<Restaurant/>}/>
                        <Route path="/ToastScreen" element={<Toast/>}/>
                        <Route path="/PhotoScreen" element={<Photograph/>}/>
                        <Route path="/AutoScreen" element={<Auto/>}/>
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Auth/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                    </>
                )}
            </Routes>
        {token && (<Footer/>)}
    </div>
  );
}

export default App;
