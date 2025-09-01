import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DriverAnalytic from './DriverAnalytic';
import Earning from './Earning';
import OverView from './OverView';
import RideAnalytics from './RideAnalytic';

const Analytics = () => {
    return (
        <div className='p-6 space-y-6'>
            <h1 className='text-3xl font-bold text-center'>
                Analytics Dashboard
            </h1>
            <p className='text-center text-gray-500'>
                View detailed analytics and reports here.
            </p>

            <Tabs className='mb-10' defaultValue='overview'>
                <TabsList className='flex justify-center space-x-4'>
                    <TabsTrigger value='overview'>Overview</TabsTrigger>
                    <TabsTrigger value='drivers'>Drivers</TabsTrigger>
                    <TabsTrigger value='riders'>Riders</TabsTrigger>
                    <TabsTrigger value='earnings'>Earnings</TabsTrigger>
                </TabsList>

                <TabsContent value='overview'>
                    <OverView />
                </TabsContent>
                <TabsContent value='drivers'>
                    <DriverAnalytic />
                </TabsContent>
                <TabsContent value='riders'>
                    <RideAnalytics />
                </TabsContent>
                <TabsContent value='earnings'>
                    <Earning />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Analytics;
