
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import News from "./Pages/News/News";
import PagesRouter from "./Pages/Pages-Router/Pages-Router";


import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DrawerTop from "./Components/Drawer-top/Drawer-top";
import {useDispatch, useSelector} from "react-redux";
import DrawerLeft from "./Components/Drawer-left/Drawer-left";
import CategoryPages from "./Pages/CategoryPages/CategoryPages";
import GoTop from "./Components/GoTop/GoTop";
import {Fragment, useEffect} from "react";
function App() {
 const{drawerTop,drawerLeft}=useSelector(state=>state)



  return (
    <div className="App">
          <BrowserRouter>
              {drawerTop?<DrawerTop/>:
            <Fragment>
                <DrawerLeft/>
                <div className={drawerLeft?'none':'block'}>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/category/:nameCategory' element={<CategoryPages/>}/>
                        <Route path='/main/:namePage' element={<PagesRouter/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </Fragment>
              }
          </BrowserRouter>

        <GoTop/>
    </div>
  );
}

export default App;
