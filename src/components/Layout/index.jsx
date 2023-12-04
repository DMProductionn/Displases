import { Outlet } from "react-router-dom";
import Header from "./Header";
import CategoryBtn from '../Category';
import Footer from './Footer';

export default function Layout() {
    return (
        <>
            <Header />
            <div className="wrapper w-full max-w-[1200px] m-auto px-[15px]">
                <CategoryBtn />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}