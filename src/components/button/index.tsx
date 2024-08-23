import {ReactNode} from "react";
import { Button as NextButton } from "@nextui-org/react";

type Props = {
  children: ReactNode,
  icon?: ReactNode,
  className?: string,
  type?: 'submit' | 'button' | 'reset',
  fullWidth?: boolean,
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined,
  onClick?: () => any
}

function Button({
  children,
  icon,
  className,
  type,
  fullWidth,
  color,
  onClick
} : Props) {
  return (
    <NextButton
      startContent={icon}
      size='lg'
      color={color}
      variant='light'
      className={className}
      type={type}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      { children }
    </NextButton>
  );
}

export default Button;