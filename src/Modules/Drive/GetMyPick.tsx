import { useGetMyPickQuery } from '../../Redux/Features/Driver/driver.api';
import Card from './Card';

const GetMyPick = () => {
    const { data, isLoading, isError } = useGetMyPickQuery(undefined);

    const picks = data?.data || [];

    return (
        <div className='p-6'>
            <div className='text-center my-10'>
                <h2 className='text-2xl font-bold mb-4'>My Pick</h2>
                <p className='text-gray-600'>
                    Details about my current pick will be displayed here.
                </p>
            </div>

            {isLoading && (
                <p className='text-center text-gray-500'>Loading...</p>
            )}
            {isError && (
                <p className='text-center text-red-500'>
                    Failed to load picks!
                </p>
            )}

            {!isLoading && !isError && (
                <>
                    {picks.length === 0 ? (
                        <p className='text-center text-gray-600 dark:text-gray-300'>
                            No Picks available at the moment.
                        </p>
                    ) : (
                        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                            {picks.map((pick: any) => (
                                <Card key={pick._id} pick={pick} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default GetMyPick;
