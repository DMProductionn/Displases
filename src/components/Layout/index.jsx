import { Outlet } from "react-router-dom";
import Header from "./Header";
import Category from '../Category';
import Footer from './Footer';

export default function Layout() {
    return (
        <>
            <Header />
            <div className="wrapper max-w-[1200px] m-auto px-[15px]">
                <Category />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}