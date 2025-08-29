import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // 👁 আইকন
import { toast } from 'sonner';
import {
    useUpdateUserMutation,
    useUserInfoQuery,
} from '../Redux/Features/Auth/auth.api';

const MePage = () => {
    const { data, isLoading } = useUserInfoQuery(undefined);
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

    const user = data?.data?.data;

    const [name, setName] = useState(user?.name || '');

    const [phone, setPhone] = useState(user?.phone || '');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    if (isLoading)
        return <p className='text-center text-lg'>Loading profile...</p>;

    const handleUpdate = async (field: string) => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let payload: Record<string, any> = { id: user?._id };
            if (field === 'name') payload = { id: user?._id, name };
            if (field === 'phone') payload = { id: user?._id, phone };
            if (field === 'password') {
                if (newPassword !== confirmPassword) {
                    toast.error(
                        'New password and confirm password do not match!'
                    );
                    return;
                }
                payload = { oldPassword, newPassword, id: user?._id };
            }

            await updateUser(payload).unwrap();
            toast.success(`${field} updated successfully!`);
        } catch (error) {
            console.error(error);
            toast.error('Update failed!');
        }
    };

    return (
        <div className='max-w-2xl mx-auto p-6 space-y-8'>
            {/* Profile Info Card */}
            <div className='bg-gray-100 rounded-lg shadow p-6'>
                <h1 className='text-2xl font-bold mb-4 text-gray-800'>
                    My Profile
                </h1>
                <div className='space-y-2 text-gray-700'>
                    <p>
                        <span className='font-semibold'>Name:</span>{' '}
                        {user?.name}
                    </p>
                    <p>
                        <span className='font-semibold'>Email:</span>{' '}
                        {user?.email}
                    </p>
                    <p>
                        <span className='font-semibold'>Phone:</span>{' '}
                        {user?.phone || 'Not Added'}
                    </p>
                    <p>
                        <span className='font-semibold'>Role:</span>{' '}
                        {user?.role}
                    </p>
                    <p>
                        <span className='font-semibold'>Status:</span>{' '}
                        {user?.isActive}
                    </p>
                </div>
            </div>
            {/* Update Name */}{' '}
            <div className='bg-white rounded-lg shadow p-6 border'>
                {' '}
                <h2 className='text-lg font-semibold mb-3 text-gray-700'>
                    {' '}
                    Update Name{' '}
                </h2>{' '}
                <div className='flex gap-2'>
                    {' '}
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border rounded w-full p-2 focus:ring-1 focus:ring-blue-400'
                    />{' '}
                    <button
                        onClick={() => handleUpdate('name')}
                        disabled={isUpdating}
                        className='bg-blue-600 text-white px-4 rounded hover:bg-blue-700'
                    >
                        {' '}
                        Save{' '}
                    </button>{' '}
                </div>{' '}
            </div>{' '}
            {/* Update Phone */}{' '}
            <div className='bg-white rounded-lg shadow p-6 border'>
                {' '}
                <h2 className='text-lg font-semibold mb-3 text-gray-700'>
                    {' '}
                    Update Phone{' '}
                </h2>{' '}
                <div className='flex gap-2'>
                    {' '}
                    <input
                        type='number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='border rounded w-full p-2 focus:ring-1 focus:ring-green-400'
                    />{' '}
                    <button
                        onClick={() => handleUpdate('phone')}
                        disabled={isUpdating}
                        className='bg-green-600 text-white px-4 rounded hover:bg-green-700'
                    >
                        {' '}
                        Save{' '}
                    </button>{' '}
                </div>{' '}
            </div>
            {/* Update Password */}
            <div className='bg-white rounded-lg shadow p-6 border'>
                <h2 className='text-lg font-semibold mb-3 text-gray-700'>
                    Change Password
                </h2>
                <div className='space-y-3'>
                    {/* Old Password */}
                    <div className='relative'>
                        <input
                            type={showOld ? 'text' : 'password'}
                            placeholder='Old Password'
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className='border rounded w-full p-2 focus:ring-1 focus:ring-red-400 pr-10'
                        />
                        <button
                            type='button'
                            onClick={() => setShowOld(!showOld)}
                            className='absolute inset-y-0 right-2 flex items-center text-gray-600 text-xl'
                        >
                            {showOld ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* New Password */}
                    <div className='relative'>
                        <input
                            type={showNew ? 'text' : 'password'}
                            placeholder='New Password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='border rounded w-full p-2 focus:ring-1 focus:ring-red-400 pr-10'
                        />
                        <button
                            type='button'
                            onClick={() => setShowNew(!showNew)}
                            className='absolute inset-y-0 right-2 flex items-center text-gray-600 text-xl'
                        >
                            {showNew ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className='relative'>
                        <input
                            type={showConfirm ? 'text' : 'password'}
                            placeholder='Confirm New Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='border rounded w-full p-2 focus:ring-1 focus:ring-red-400 pr-10'
                        />
                        <button
                            type='button'
                            onClick={() => setShowConfirm(!showConfirm)}
                            className='absolute inset-y-0 right-2 flex items-center text-gray-600 text-xl'
                        >
                            {showConfirm ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button
                        onClick={() => handleUpdate('password')}
                        disabled={isUpdating}
                        className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'
                    >
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MePage;
