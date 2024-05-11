import React from "react";
import "../../css/components/button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "outline"
    | "danger"
    | "warning"
    | "success";
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      onClick,
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        onClick={onClick}
        className={`button ${variant ? `button--${variant}` : ""} ${
          size ? `button--${size}` : ""
        } ${className ? className : ""}`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
