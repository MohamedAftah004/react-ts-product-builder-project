import React from "react";

interface IProps {
  msg: string;
}

const ErrrorMessage = ({msg}: IProps) => {
  return msg ? (
    <span className="block text-amber-200 font-semibold text-sm">{msg}</span>
  ) : null;
};

export default ErrrorMessage;
