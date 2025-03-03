import ContactForm from "./ContactForm/Form";
import { useRef } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { sendEmail } from "./Services/Email";
import { Toaster } from "react-hot-toast";
import { useLoader } from "../context/Loader";

const Dialogs = ({ open, handleClose }) => {
  const ref = useRef();
  const { setLoaderStatus } = useLoader();

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10 ">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-auto">
        <div className="flex min-h-full items-end justify-center p-3 text-center sm:items-center sm:p-0  ">
          <DialogPanel
            transition
            className="relative transform rounded-lg h-180 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-[#2d9e30] flex  p-2 overflow-auto ">
              <div className="w-full   ">
                <DialogTitle
                  as="h1"
                  className=" font-semibold text-white text-2xl  flex justify-center items-center relative  pb-3"
                >
                  Umów spotkanie
                  <div className="absolute  right-4 top-1 cursor-pointer flex justify-center items-center z-10  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="size-9 font-medium"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </DialogTitle>

                <ContactForm
                  ref={ref}
                  onSubmit={() => sendEmail(ref, setLoaderStatus)}
                />
                <Toaster position="bottom-center" reverseOrder={false} />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
export default Dialogs;
