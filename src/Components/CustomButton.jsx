const CustomButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        class="border-box flex antialiased cursor-pointer m-0  overflow-visible shadow-[0px_2px_0px_rgb(28,126,30)] bg-[#2d9e30] text-white border-2 border-solid border-[#2d9e30]  uppercase outline-none rounded-[7px] transition duration-[800ms] font-[12px_MYRIADPROREGULAR,sans-serif] p-[12px_4px] hover:bg-transparent hover:text-[#2d9e30] self-end"
      >
        Umów spotkanie
      </button>
    </div>
  );
};
export default CustomButton;
