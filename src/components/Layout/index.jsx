import { Outlet } from "react-router-dom";
import Header from "./Header";
import Category from '../CategoryBtn';
import Footer from './Footer';

export default function Layout() {
    return (
        <>
            <Header />
            {/* flex flex-col nowrap justify-center items-center - delete */}
            <div className="wrapper w-full max-w-[1200px] m-auto px-[15px]">
                <Category />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}