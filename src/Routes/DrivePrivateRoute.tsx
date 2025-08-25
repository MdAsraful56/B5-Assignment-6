import { Navigate, Outlet } from 'react-router';
import { useUserInfoQuery } from '../Redux/Features/Auth/auth.api';

const DrivePrivateRoute = () => {
    const { data, isLoading } = useUserInfoQuery(undefined);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const user = data?.data?.data;

    if (!user?.email) {
        return <Navigate to='/login' replace />;
    }
    if (user?.role !== 'DRIVER' && user?.role !== 'ADMIN') {
        return <Navigate to='/unauthorized' replace />;
    }

    return <Outlet />;
};

export default DrivePrivateRoute;
