import {ReactNode} from "react";
import Button from "../button";
import {Link, useNavigate} from "react-router-dom";

type NavButtonProps = {
  children: ReactNode,
  icon: ReactNode,
  href: string
}

function NavButton({children, icon, href }: NavButtonProps) {
  const navigate = useNavigate()

  return (
    <Button className='flex justify-start text-xl' icon={icon} onClick={() => navigate(href)}>
      {children}
    </Button>
  );
}

export default NavButton;