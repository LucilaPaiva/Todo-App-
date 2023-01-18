import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  variant: "primary" | "secondary" | "default" | "dark" | "danger" | "outline-danger" | "outline-primary";
  icon?: "alarm" | "x-circle" | "trash" | "pencil" ;
  handleClick: () => void;
};

const Button: FC<Props> = ({ children, variant, icon, handleClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={handleClick}>
      {children}
      {icon && <i className={`bi bi-${icon} ${children ? "ms-2" : ""}`}></i>}
    </button>
  );
};

export { Button };

