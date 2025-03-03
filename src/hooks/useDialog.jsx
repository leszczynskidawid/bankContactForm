import { useState } from "react";

const useDialog = () => {
  const [open, setOpen] = useState(false);
  const handleOpenDialog = () => {
    setOpen(true);
    console.log(open);
  };
  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };
  return { open, handleOpenDialog, handleClose };
};
export default useDialog;
