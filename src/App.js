import './App.css';
import {
    Route, Routes
} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.conponent";
import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopComponent from "./pages/shop/shop.component";
import HeaderComponent from "./components/header/header.component";

function App() {
    return (
        <div>
            <HeaderComponent/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/signin' element={<SignInAndSignUpComponent/>}/>
                <Route path='/shop' element={<ShopComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
