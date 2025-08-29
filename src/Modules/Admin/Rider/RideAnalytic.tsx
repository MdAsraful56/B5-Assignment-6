import { FaCar, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useGetAllRideQuery } from '../../../Redux/Features/Ride/ride.api';

function RideAnalytics() {
    const { data, isLoading } = useGetAllRideQuery(undefined);
    const rides = data?.data?.result || [];

    if (isLoading) {
        return (
            <div className='p-6 text-center text-gray-500'>
                Loading rider analytics...
            </div>
        );
    }

    if (!rides || rides.length === 0) {
        return (
            <div className='p-6 text-center text-gray-500'>
                No rides found 🚫
            </div>
        );
    }

    // Calculate ride stats
    const completedRides = rides.filter((r) => r.status === 'COMPLETED').length;
    const cancelledRides = rides.filter((r) => r.status === 'CANCELLED').length;
    const totalRides = rides.length;

    const totalPayment = rides.reduce(
        (sum: number, ride) =>
            ride.status !== 'CANCELLED' ? sum + (ride.payment || 0) : sum,
        0
    );

    // Pie chart data
    const pieData = [
        { name: 'Completed', value: completedRides, color: '#10B981' },
        { name: 'Cancelled', value: cancelledRides, color: '#EF4444' },
    ];

    return (
        <div className='p-6'>
            {/* Header */}
            <div className='mb-8 text-center'>
                <h1 className='text-3xl font-bold text-gray-800'>
                    🚖 Rider Analytics
                </h1>
                <p className='text-gray-500 mt-2'>
                    Quick summary of your ride performance
                </p>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8'>
                {/* Total Rides */}
                <div className='bg-white rounded-xl shadow p-6 hover:shadow-md transition text-center'>
                    <div className='flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-indigo-100 text-indigo-600'>
                        <FaCar className='text-2xl' />
                    </div>
                    <h2 className='mt-4 text-lg font-semibold text-gray-700'>
                        Total Rides
                    </h2>
                    <p className='mt-1 text-3xl font-bold text-gray-900'>
                        {totalRides}
                    </p>
                </div>

                {/* Completed Rides */}
                <div className='bg-white rounded-xl shadow p-6 hover:shadow-md transition text-center'>
                    <div className='flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600'>
                        <FaCheckCircle className='text-2xl' />
                    </div>
                    <h2 className='mt-4 text-lg font-semibold text-gray-700'>
                        Completed Rides
                    </h2>
                    <p className='mt-1 text-3xl font-bold text-gray-900'>
                        {completedRides}
                    </p>
                </div>

                {/* Cancelled Rides */}
                <div className='bg-white rounded-xl shadow p-6 hover:shadow-md transition text-center'>
                    <div className='flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-rose-100 text-rose-600'>
                        <FaTimesCircle className='text-2xl' />
                    </div>
                    <h2 className='mt-4 text-lg font-semibold text-gray-700'>
                        Cancelled Rides
                    </h2>
                    <p className='mt-1 text-3xl font-bold text-gray-900'>
                        {cancelledRides}
                    </p>
                </div>
            </div>

            {/* Pie Chart */}
            <div className='flex justify-center'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={pieData}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={120}
                        label={(entry) => entry.name + ` (${entry.value})`}
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign='bottom' height={36} />
                </PieChart>
            </div>

            {/* Total Payment */}
            <div className='mt-8 bg-white rounded-xl shadow p-6 text-center'>
                <h2 className='text-lg font-semibold text-gray-700'>
                    Total Payment Collected
                </h2>
                <p className='mt-1 text-3xl font-bold text-gray-900'>
                    ${totalPayment.toFixed(2)}
                </p>
            </div>
        </div>
    );
}

export default RideAnalytics;
