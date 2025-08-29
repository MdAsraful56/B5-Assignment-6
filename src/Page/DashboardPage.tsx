import { Outlet } from 'react-router';

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
};

export default DashboardPage;
