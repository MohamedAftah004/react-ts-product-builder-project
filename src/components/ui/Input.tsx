import {type InputHTMLAttributes} from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({...rest}: IProps) => {
  return (
    <input
      className="w-full border-[1px] border-gray-300 shadow-md focus:border-indigo-700 focus:outline-none focus:ring-0 focus:ring-indigo-500 rounded-lg px-3 py-3 text-sm font-extralight"
      {...rest}
    />
  );
};

export default Input;
