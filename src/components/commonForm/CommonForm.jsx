import CommonInput from "../commonInput/CommonInput";

const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formControls = [],
  buttonText,
  formData,
  setFormData,
  onSubmit,
}) => {
  function renderFormElement(getCurrentFormControl, getFormData) {
    let element = null;

    switch (getCurrentFormControl.componentType) {
      case formElementTypes.INPUT:
        element = (
          <div className="py-3">
            <label>{getCurrentFormControl.name}:</label>
            <CommonInput
              type={getCurrentFormControl.type}
              placeholder={getCurrentFormControl.placeholder}
              value={getFormData[getCurrentFormControl.name]}
              name={getCurrentFormControl.name}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getCurrentFormControl.name]: event.target.value,
                })
              }
            />
          </div>
        );
        break;

      //   case formElementTypes.SELECT:
      //     break;

      //   case formElementTypes.TEXTAREA:
      //     break;

      default:
        element = (
          <div className="py-3">
            <label>{getCurrentFormControl.label}</label>
            <CommonInput
              type={getCurrentFormControl.type}
              placeholder={getCurrentFormControl.placeholder}
              value={getFormData[getCurrentFormControl.name]}
              name={getCurrentFormControl.name}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getCurrentFormControl.name]: event.target.value,
                })
              }
            />
          </div>
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      {formControls.map((singleFormControl) =>
        renderFormElement(singleFormControl, formData)
      )}

      <button
        className="w-full block my-8 px-5 py-2 text-white border rounded-lg bg-[#3a7ef9] hover:bg-blue-600 shadow-lg transform transition hover:scale-105"
        type="submit"
      >
        {buttonText || "Submit"}
      </button>
    </form>
  );
};

export default CommonForm;
