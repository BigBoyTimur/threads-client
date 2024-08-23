import {useCreatePostMutation, useLazyGetAllPostsQuery} from "../../app/services/postApi";
import {Controller, useForm} from "react-hook-form";
import {Button, Textarea} from "@nextui-org/react";
import ErrorMessage from "../error-message";
import {IoMdCreate} from "react-icons/io";

function CreatePost() {
  const [createPost] = useCreatePostMutation()
  const [triggerAllPosts] = useLazyGetAllPostsQuery()

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createPost({content: data.post}).unwrap()
      setValue('post', '')
      await triggerAllPosts().unwrap()
    } catch (err) {
      console.error(err)
    }
  })

  const error = errors?.post?.message as string
  return (
    <form className="flex-grow" onSubmit={onSubmit}>
      <Controller
        control={control}
        name='post'
        defaultValue=''
        rules={{
          required: 'Обязательное поле'
        }}
        render={({ field }) => (
          <Textarea
            { ...field }
            labelPlacement='outside'
            placeholder='О чем думаете?'
            className='mb-5'
          />
        )}
      />
      { errors && <ErrorMessage error={ error } />}
      <Button
        color='success'
        className='flex-end'
        endContent={<IoMdCreate />}
        type='submit'
      >
        Добавить пост
      </Button>
    </form>
  );
}

export default CreatePost;