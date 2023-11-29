import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../widgets/Header";
import { Home } from "../pages/Home";
import { CharList } from "../widgets/CharList/CharList";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<CharList/>} />
            </Routes>
        </BrowserRouter>
    );
};
