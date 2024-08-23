import {ReactNode} from "react";
import {useCurrentQuery} from "../../app/services/userApi";
import {Spinner} from "@nextui-org/react";

function AuthGuard({ children } : { children: ReactNode}) {
  const { isLoading } = useCurrentQuery();


  return isLoading ?
    <div className='h-screen flex justify-center items-center'>
      <Spinner />
    </div> :
    children
}

export default AuthGuard;