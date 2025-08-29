import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { RxUpdate } from 'react-icons/rx';

type User = {
    _id: string;
    name: string;
    email: string;
    role: 'ADMIN' | 'RIDER' | 'DRIVER';
    picture?: string;
};

interface UserTableProps {
    users: User[];
    onUpdateRole: (id: string, role: 'RIDER' | 'DRIVER') => void;
    onDeleteUser: (id: string) => void;
}

export default function AllUserDetailsCard({
    users,
    onUpdateRole,
    onDeleteUser,
}: UserTableProps) {
    const [selectedRole, setSelectedRole] = useState<
        Record<string, 'RIDER' | 'DRIVER'>
    >({});

    const handleChange = (id: string, value: 'RIDER' | 'DRIVER') => {
        setSelectedRole((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <section className='w-full min-h-screen bg-gray-50 py-12'>
            <div className='max-w-6xl mx-auto px-6'>
                <h1 className='text-3xl font-bold mb-6'>User Management</h1>

                <Card>
                    <CardContent className='overflow-x-auto'>
                        <table className='w-full border-collapse'>
                            <thead>
                                <tr className='bg-gray-100 text-left'>
                                    <th className='p-3'>Picture</th>
                                    <th className='p-3'>Name</th>
                                    <th className='p-3'>Email</th>
                                    <th className='p-3'>Role</th>
                                    <th className='p-3'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user._id} className='border-b'>
                                        <td className='p-3'>
                                            {user.picture ? (
                                                <img
                                                    src={user?.picture}
                                                    alt={user.name}
                                                    className='w-10 h-10 rounded-full object-cover'
                                                />
                                            ) : (
                                                <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center'>
                                                    {user.name.charAt(0)}
                                                </div>
                                            )}
                                        </td>
                                        <td className='p-3'>{user.name}</td>
                                        <td className='p-3'>{user.email}</td>
                                        <td className='p-3 font-medium'>
                                            {user.role}
                                        </td>
                                        <td className='p-3'>
                                            {user.role !== 'ADMIN' ? (
                                                <div className='flex items-center gap-2'>
                                                    <Select
                                                        onValueChange={(
                                                            val:
                                                                | 'RIDER'
                                                                | 'DRIVER'
                                                        ) =>
                                                            handleChange(
                                                                user._id,
                                                                val
                                                            )
                                                        }
                                                    >
                                                        <SelectTrigger className='w-[120px]'>
                                                            <SelectValue
                                                                placeholder={
                                                                    user.role
                                                                }
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value='RIDER'>
                                                                Rider
                                                            </SelectItem>
                                                            <SelectItem value='DRIVER'>
                                                                Driver
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    <Button
                                                        variant='secondary'
                                                        size='sm'
                                                        onClick={() =>
                                                            selectedRole[
                                                                user._id
                                                            ] &&
                                                            onUpdateRole(
                                                                user._id,
                                                                selectedRole[
                                                                    user._id
                                                                ]
                                                            )
                                                        }
                                                    >
                                                        <RxUpdate />
                                                    </Button>

                                                    <Button
                                                        size='sm'
                                                        variant='destructive'
                                                        onClick={() =>
                                                            onDeleteUser(
                                                                user._id
                                                            )
                                                        }
                                                    >
                                                        <Trash2 />
                                                    </Button>
                                                </div>
                                            ) : (
                                                <span className='text-gray-500'>
                                                    Super Admin
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
