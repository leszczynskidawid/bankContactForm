import emailjs from "@emailjs/browser";

import toast from "react-hot-toast";

export const sendEmail = async (ref, setLoading) => {
  setLoading(true);
  try {
    const send = await emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      ref.current,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    );
    console.log(ref.current);
    setLoading(false);
    toast.success("wiadomość wysłana");
    return send;
  } catch (error) {
    toast.error(error);
    setLoading(false);
  }
};
