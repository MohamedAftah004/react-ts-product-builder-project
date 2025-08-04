import type { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLSpanElement>{
  colorHash:string;
}

function CircleItemColor({colorHash , ...rest }: IProps) {
  return <span className={`w-5 h-5 border border-black rounded-full cursor-pointer`}
   style={{backgroundColor: colorHash}}
  {...rest}
   />

}

export default CircleItemColor;

// الاستخدام:
