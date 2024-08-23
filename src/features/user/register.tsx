import {useForm} from "react-hook-form";
import {useLazyCurrentQuery, useLoginMutation, useRegisterMutation} from "../../app/services/userApi";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Input from "../../components/input";
import {Button, Link} from "@nextui-org/react";
import {hasErrorField} from "../../utils/has-error-field";
import ErrorMessage from "../../components/error-message";

type Register = {
  email: string
  name: string
  password: string
}

type Props = {
  setSelected: (value: string) => void
}


function Register({ setSelected }: Props) {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Register>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: '',
      password: '',
      name: ''
    }
  })

  const [register, { isLoading }] = useRegisterMutation()
  const [error, setError] = useState('')
  const [triggerCurrentQuery] = useLazyCurrentQuery();

  const onSubmit = async (data: Register) => {
    try {
      await register(data).unwrap()
      setSelected('login')
    } catch (err) {
      if(hasErrorField(err)) {
        setError(err.data.error)
      }
    }
  }
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <Input
        name='name'
        label='Имя'
        control={control}
        type='text'
        required='Обязательное поле'
      />
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
        Уже есть аккаунт?{` `}
        <Link
          size='sm'
          className='cursor-pointer'
          onPress={() => setSelected('login')}
        >
          Войдите
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color='primary' type='submit' isLoading={isLoading}>
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
}

export default Register;