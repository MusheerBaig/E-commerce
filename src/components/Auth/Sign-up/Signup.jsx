import { useContext } from "react";
import CommonForm from "../../commonForm/CommonForm";
import { signUpFormControls } from "../../../config";
import { FormContext } from "../../../context/FormContext";

const Signup = () => {
  const { signUpFormData, setSignUpFormData, onSubmit } =
    useContext(FormContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f6f7f9]">
      <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white shadow-lg">
        <div className="px-8 py-6">
          <h3 className="text-3xl font-semibold text-gray-900 py-4">Sign Up</h3>
          <CommonForm
            formControls={signUpFormControls}
            formData={signUpFormData}
            setFormData={setSignUpFormData}
            onSubmit={onSubmit}
            buttonText={"Sign up"}
          />
          <p className="text-sm text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <a className="text-[#3a7ef9] underline" href="/signin">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
