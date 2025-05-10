import { ReactNode, type ButtonHTMLAttributes } from "react";


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  className?:string;
width?: string;
}


const Button = ({children , className , width = "w-full" ,...rest} : IProps) => {
  return <button className= {`${className} ${width} rounded-md text-white p-2 cursor-pointer` 
}{...rest}
 >{children}</button>
  
}

export default Button



    //  <button type ={type}
    //   className={className}>
    //   {text}
    //   </button>
