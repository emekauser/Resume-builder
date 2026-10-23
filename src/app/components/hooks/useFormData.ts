import { useState } from 'react';

type Options = {
  removeWhiteSpace?: boolean;
};
const optionDefaults = { removeWhiteSpace: true };
function useFormData<Type>(
  formFields: Type,
  options: Options = optionDefaults
) {
  const [formData, setFormData] = useState<Type>(formFields);
  const { removeWhiteSpace } = options as Options;

  const handleFormData = (e: any, options?: { removeWhiteSpace: true }) => {
    const { value, name } = e.target;
    const name_ = name.trim();

    setFormData((oldState) => ({
      ...oldState,
      [name_]:
        options?.removeWhiteSpace || removeWhiteSpace ? value.trim() : value,
    }));

    setFormData((oldState) => ({
      ...oldState,
      [name_]:
        options?.removeWhiteSpace || removeWhiteSpace ? value.trim() : value,
    }));
  };
  const resetForm = () => {
    setFormData(formFields);
  };

  // setFormData --> allows you to manually set the formdata
  return { formInputs: formData, handleFormData, setFormData, resetForm };
}

export default useFormData;
