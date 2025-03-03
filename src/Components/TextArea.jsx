export const TextArea = ({ label, error, ...props }) => {
  return (
    <div className="w-full">
      <div
        className={`w-full border-1 rounded-lg p-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <label>
          <textarea
            placeholder={label}
            rows="4"
            cols="50"
            className=" rounded-lg w-full h-full py-2 px-3 text-gray-900  focus:outline-none border-0"
            {...props}
          />
        </label>
      </div>
      <div className="text-red-500">{error}</div>{" "}
    </div>
  );
};
