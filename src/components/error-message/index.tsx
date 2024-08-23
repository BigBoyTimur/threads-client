type ErrorMessageProps = {
  error: string
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return error && <p className='text-red-500 mt-2 mb-5 text-small'>{error}</p>
}

export default ErrorMessage;