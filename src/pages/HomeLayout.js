import { Navigate, Outlet, useOutlet } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2



import Nav from "../components/Nav";

export const HomeLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if(user){
        return <Navigate to="/dashboard/today" />
    }

    return(
        <>
        <Nav />
        <Outlet />
        </>
    )
}