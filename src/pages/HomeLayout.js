import { Navigate, Outlet, useOutlet } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';


import Nav from "../components/Nav";

export const HomeLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if(user){
        return <Navigate to="/dashboard/today" />
    }

    return(
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}