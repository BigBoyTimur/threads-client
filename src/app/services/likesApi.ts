import {api} from "./api";
import {Like} from "../types";

export const likesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    likePost: builder.mutation<Like, { postId: string }>({
      query: (like) => ({
        url: '/likes',
        method: 'POST',
        body: like
      })
    }),
    unlikePost: builder.mutation<void, string>({
      query: (postId) => ({
        url: `/likes/${postId}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useLikePostMutation,
  useUnlikePostMutation
} = likesApi;

export const {
  endpoints: {likePost, unlikePost}
} = likesApi;