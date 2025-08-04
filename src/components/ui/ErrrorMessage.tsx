import React from "react";

interface IProps {
  msg: string;
}

const ErrrorMessage = ({msg}: IProps) => {
  return msg ? (
    <span className="block ml-1 text-red-500 font-extralight  text-xs">{msg}</span>
  ) : null;
};

export default ErrrorMessage;
