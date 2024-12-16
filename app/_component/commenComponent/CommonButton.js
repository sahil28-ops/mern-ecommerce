import React from "react";
import { Button } from "react-bootstrap";

const CommonButton = ({  clickme = {}, title, className }) => {
  return <Button varient={''} onClick={clickme} className={className}>{title}</Button>;
};

export default CommonButton;
