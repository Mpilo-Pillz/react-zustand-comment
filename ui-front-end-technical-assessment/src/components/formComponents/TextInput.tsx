import { Input } from "antd";
import { useField } from "formik";
import { FC, ChangeEvent, InputHTMLAttributes } from "react";

const TextInput: FC<
  InputHTMLAttributes<HTMLInputElement> & { dataTestId: string; name: string }
> = ({ name, placeholder, type = "text", dataTestId }) => {
  const [field, { error }] = useField<string>(name);

  const handleChange = (e: ChangeEvent) => field.onChange(e);

  return (
    <>
      <Input
        data-testid={dataTestId}
        type={type}
        name={field.name}
        value={field.value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && <p data-testid={`${dataTestId}-error`}>{error}</p>}
    </>
  );
};

export default TextInput;
