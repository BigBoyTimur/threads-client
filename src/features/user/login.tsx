import {useForm} from "react-hook-form";
import Input from "../../components/input";
import {Link, Button} from '@nextui-org/react'
import {useLazyCurrentQuery, useLoginMutation} from "../../app/services/userApi";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ErrorMessage from "../../components/error-message";
import {hasErrorField} from "../../utils/has-error-field";

type Login = {
  email: string
  password: string
}

type Props = {
  setSelected: (value: string) => void
}

function Login({setSelected}: Props) {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Login>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [triggerCurrentQuery] = useLazyCurrentQuery()

  const onSubmit = async (data: Login) => {
    try {
      await login(data).unwrap()
      await triggerCurrentQuery().unwrap()
      navigate('/')
    } catch (err) {
      if(hasErrorField(err)) {
        setError(err.data.error)
      }
    }
  }
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <Input
        name='email'
        label='Email'
        control={control}
        type='email'
        required='Обязательное поле'
      />
      <Input
        name='password'
        label='Пароль'
        control={control}
        type='password'
        required='Обязательное поле'
      />
      <ErrorMessage error={error} />
      <p className="text-center text-small">
        Нет аккаунта?{` `}
        <Link
          size='sm'
          className='cursor-pointer'
          onPress={() => setSelected('sign-up')}
        >
          Зарегистрируйтесь
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color='primary' type='submit' isLoading={isLoading}>
          Войти
        </Button>
      </div>
    </form>
  );
}

export default Login;