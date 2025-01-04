import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormContext = createContext(null);

function FormProvider({ children }) {
  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
  });

  function onSubmit() {}

  const navigate = useNavigate();

  return (
    <FormContext.Provider
      value={{
        signUpFormData,
        setSignUpFormData,
        signInFormData,
        setSignInFormData,
        onSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
