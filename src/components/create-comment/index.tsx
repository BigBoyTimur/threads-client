import {useCreatePostMutation, useLazyGetAllPostsQuery, useLazyGetPostByIdQuery} from "../../app/services/postApi";
import {Controller, useForm} from "react-hook-form";
import {Button, Textarea} from "@nextui-org/react";
import ErrorMessage from "../error-message";
import {IoMdCreate} from "react-icons/io";
import {useParams} from "react-router-dom";
import {useCreateCommentMutation} from "../../app/services/commentsApi";

function CreateComment() {
  const { id } = useParams<{id: string}>()
  const [createComment] = useCreateCommentMutation()
  const [triggerGetPostById] = useLazyGetPostByIdQuery()

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (id) {
        await createComment({content: data.comment, postId: id}).unwrap()
        await triggerGetPostById(id).unwrap()
        setValue('comment', '')
      }
    } catch (err) {
      console.error(err)
    }
  })

  const error = errors?.post?.message as string
  return (
    <form className="flex-grow" onSubmit={onSubmit}>
      <Controller
        control={control}
        name='comment'
        defaultValue=''
        rules={{
          required: 'Обязательное поле'
        }}
        render={({ field }) => (
          <Textarea
            { ...field }
            labelPlacement='outside'
            placeholder='Напишите свой комментарий?'
            className='mb-5'
          />
        )}
      />
      { errors && <ErrorMessage error={ error } />}
      <Button
        color='primary'
        className='flex-end'
        endContent={<IoMdCreate />}
        type='submit'
      >
        Ответить
      </Button>
    </form>
  );
}

export default CreateComment;