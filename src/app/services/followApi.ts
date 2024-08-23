import {api} from "./api";
import {Like} from "../types";

export const followApi = api.injectEndpoints({
  endpoints: (builder) => ({
    followUser: builder.mutation<void, { followingId: string }>({
      query: (following) => ({
        url: '/follow',
        method: 'POST',
        body: following
      })
    }),
    unfollowUser: builder.mutation<void, string>({
      query: (postId) => ({
        url: `/unfollow/${postId}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useFollowUserMutation,
  useUnfollowUserMutation
} = followApi;

export const {
  endpoints: {followUser, unfollowUser}
} = followApi;