import { toast } from 'sonner';
import {
    useDeleteUserMutation,
    useGetAllUsersQuery,
    useUpdateUserMutation,
} from '../../Redux/Features/Auth/auth.api';
import AllUserDetailsCard from './AllUserDetailsCard';

const AllUser = () => {
    const { data, isLoading } = useGetAllUsersQuery(undefined);
    const [updateUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    // Role update function
    const handleUpdateRole = async (id: string, role: 'RIDER' | 'DRIVER') => {
        try {
            const res = await updateUser({ id, role }).unwrap();
            if (res.success) {
                toast.success('User role updated successfully');
            }
        } catch (error) {
            console.error('Failed to update role', error);
            toast.error('Failed to update role');
        }
    };

    // Delete function
    const handleDeleteUser = async (id: string) => {
        try {
            const res = await deleteUser(id).unwrap();
            if (res.success) {
                toast.success('User deleted successfully');
            }
        } catch (error) {
            console.error('Failed to delete user', error);
            toast.error('Failed to delete user');
        }
    };

    if (isLoading) return <p className='text-center py-10'>Loading users...</p>;

    return (
        <div>
            {data?.data ? (
                <AllUserDetailsCard
                    users={data.data}
                    onUpdateRole={handleUpdateRole}
                    onDeleteUser={handleDeleteUser}
                />
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

export default AllUser;
