import {Children, ButtonHTMLAttributes, type ReactNode} from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({children, className, width = "w-full", ...rest}: IProps) => {
  return (
    <button
      className={`${className} text-white ${width} p-2 rounded-md`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
