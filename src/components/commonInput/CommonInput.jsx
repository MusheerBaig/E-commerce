const CommonInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <div>
      <input
        type={type || "text"}
        placeholder={placeholder || "Enter Value here"}
        value={value}
        onChange={onChange}
        name={name}
        className={
          className ||
          "w-full block px-5 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      />
    </div>
  );
};

export default CommonInput;
