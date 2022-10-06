import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import Favorite from "./components/pages/Favorite";
import Basket from "./components/pages/Basket";
import SinglePage from "./components/pages/SinglePage";

function App() {
       return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Catalog/>}/>
                <Route path="/favorites" element={<Favorite/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path='/product-detail/:id' element={<SinglePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
