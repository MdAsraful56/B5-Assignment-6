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

        getRide: builder.query({
            query: () => ({
                url: '/ride/my-rides',
                method: 'GET',
            }),
            providesTags: ['RIDE'],
        }),
    }),
});

export const { useCreateRideMutation, useGetRideQuery } = rideApi;
