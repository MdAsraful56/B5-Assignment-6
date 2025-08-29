import { baseApi } from '../../baseApi';

export const rideApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createRide: builder.mutation({
            query: (userInfo) => ({
                url: '/ride/create',
                method: 'POST',
                data: userInfo,
            }),
            invalidatesTags: ['RIDE'],
        }),

        removeRide: builder.mutation({
            query: (rideId) => ({
                url: `/ride/${rideId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['RIDE'],
        }),

        updateRide: builder.mutation({
            query: ({ rideId, rideInfo }) => ({
                url: `/ride/${rideId}`,
                method: 'PATCH',
                data: rideInfo,
            }),
            invalidatesTags: ['RIDE'],
        }),

        getRide: builder.query({
            query: () => ({
                url: '/ride/my-rides',
                method: 'GET',
            }),
            providesTags: ['RIDE'],
        }),

        getAllRide: builder.query({
            query: () => ({
                url: '/ride/all-rides',
                method: 'GET',
            }),
            providesTags: ['RIDE'],
        }),
    }),
});

export const {
    useCreateRideMutation,
    useRemoveRideMutation,
    useUpdateRideMutation,
    useGetRideQuery,
    useGetAllRideQuery,
} = rideApi;
