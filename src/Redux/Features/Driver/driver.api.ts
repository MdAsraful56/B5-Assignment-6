import { baseApi } from '../../baseApi';

export const driverApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createDrive: builder.mutation({
            query: ({ rideInfo, rideId }) => ({
                url: `/driver/pick-up-ride/${rideId}`,
                method: 'PATCH',
                data: rideInfo,
            }),
            invalidatesTags: ['DRIVER'],
        }),

        // removeRide: builder.mutation({
        //     query: (rideId) => ({
        //         url: `/ride/${rideId}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['DRIVER'],
        // }),

        updateDrive: builder.mutation({
            query: ({ rideId, rideInfo }) => ({
                url: `/driver/update-ride-status/${rideId}`,
                method: 'PATCH',
                data: rideInfo,
            }),
            invalidatesTags: ['DRIVER'],
        }),

        getAvailableRide: builder.query({
            query: () => ({
                url: '/driver/available-rides',
                method: 'GET',
            }),
            providesTags: ['DRIVER'],
        }),

        getMyPick: builder.query({
            query: () => ({
                url: '/driver/my-rides',
                method: 'GET',
            }),
            providesTags: ['DRIVER'],
        }),
    }),
});

export const {
    useCreateDriveMutation,
    // useRemoveRideMutation,
    useUpdateDriveMutation,
    useGetAvailableRideQuery,
    useGetMyPickQuery,
} = driverApi;
