export const TextField = ({ type, label, name, error, value, id, ...rest }) => {
  return (
    <div
      className={`border-1  ${
        error ? "border-red-500" : "border-gray-300 w-full"
      } rounded-lg h-[40px]  w-full  `}
    >
      <input
        type={type}
        name={name}
        value={value}
        placeholder={label}
        className=" rounded-lg w-full h-full py-2 px-3 text-gray-900  focus:outline-none border-0"
        id={name}
        {...rest}
      />
      <div className="text-red-500">{error}</div>
    </div>
  );
};
export default TextField;
