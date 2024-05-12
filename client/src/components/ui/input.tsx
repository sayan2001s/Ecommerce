import React from "react";
import styles from "../../css/components/input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id = label, error, onChange, ...props }, ref) => {
    return (
      <div className={styles.input__container}>
        <label className={styles.input__label} htmlFor={id}>
          {label}
        </label>
        <input
          ref={ref}
          className={`${styles.input} ${
            error ? styles.input__error : ""
          } w-full`}
          id={id}
          onChange={onChange}
          {...props}
        />
        {error && <p className={styles.input__error}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
