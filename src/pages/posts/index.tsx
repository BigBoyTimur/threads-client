import React from 'react';
import {useGetAllPostsQuery} from "../../app/services/postApi";
import CreatePost from "../../components/create-post";
import {Post} from "../../app/types";
import Card from "../../components/card";

function Posts() {
  const { data } = useGetAllPostsQuery()

  return (
    <>
      <div className="mb-10 w-full flex">
        <CreatePost />
      </div>
      {
        data && data.length > 0 ?
          data.map(({
            content,
            author,
            id,
            authorId,
            comments,
            likes,
            likedByUser,
            createdAt
          }: Post) => (
            <Card
              key={id}
              avatarUrl={author.avatarUrl ?? ''}
              content={content}
              name={author.name ?? ''}
              authorId={authorId}
              cardFor={'post'}
              id={id}
              likedByUser={likedByUser}
              createdAt={createdAt}
              likesCount={likes.length}
              commentsCount={comments.length}
            />
          )) : null
      }
    </>
  );
}

export default Posts;