import { Outlet } from "react-router-dom";
import Header from "../Header";
import Category from '../Category';
import Footer from '../Footer';

export default function Layout() {
    return (
        <>
            <Header />
            <div className="wrapper max-w-[1270px] m-auto px-[35px]">
                <Category />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
