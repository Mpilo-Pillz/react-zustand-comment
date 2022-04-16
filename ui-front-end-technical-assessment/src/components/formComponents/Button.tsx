import { FC, InputHTMLAttributes } from "react";

const Button: FC<
  InputHTMLAttributes<HTMLButtonElement> & {
    dataTestId: string;
    buttonText: string;
    buttonType: "button" | "submit" | "reset" | undefined;
    isDisabled: boolean;
  }
> = ({ buttonText, buttonType, dataTestId, isDisabled }) => {
  return (
    <button data-testid={dataTestId} type={buttonType} disabled={isDisabled}>
      {buttonText}
    </button>
  );
};

export default Button;
