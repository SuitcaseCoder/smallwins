import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import Nav from '../components/Nav';

export const ProtectedLayout = () => {
    const { user } = useAuth();

    if(!user) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    )

}