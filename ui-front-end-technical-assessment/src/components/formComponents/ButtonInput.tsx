import { FC, InputHTMLAttributes } from "react";

const ButtonInput: FC<
  InputHTMLAttributes<HTMLButtonElement> & {
    dataTestId: string;
    buttonText: string;
    buttonType: "button" | "submit" | "reset" | undefined;
    isDisabled: boolean;
    buttonClass?: string;
    handleClick?: () => void;
  }
> = ({
  buttonText,
  buttonType,
  dataTestId,
  isDisabled,
  buttonClass,
  handleClick,
}) => {
  return (
    <button
      className={`btn ${buttonClass}`}
      data-testid={dataTestId}
      type={buttonType}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonInput;
