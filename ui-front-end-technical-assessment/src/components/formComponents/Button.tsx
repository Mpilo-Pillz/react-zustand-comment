import { FC, InputHTMLAttributes } from "react";

const ButtonInput: FC<
  InputHTMLAttributes<HTMLButtonElement> & {
    dataTestId: string;
    buttonText: string;
    buttonType: "button" | "submit" | "reset" | undefined;
    isDisabled: boolean;
    buttonClass?: string;
  }
> = ({ buttonText, buttonType, dataTestId, isDisabled, buttonClass }) => {
  return (
    <button
      className={`btn ${buttonClass}`}
      data-testid={dataTestId}
      type={buttonType}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};

export default ButtonInput;
