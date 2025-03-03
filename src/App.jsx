import "./App.css";
import CustomButton from "./Components/CustomButton";
import Dialogs from "./Components/Dialog";
import useDialog from "./hooks/useDialog";
import { LoaderProvider } from "./context/Loader";

function App() {
  const { open, handleClose, handleOpenDialog } = useDialog();

  return (
    <LoaderProvider>
      <div className="justify-center  content-center min-h-screen  ">
        <div class="bg-[url(./assets/zegar.png)] bg-center p-2 min-h-[140px] flex justify-between items-center pl-10 pr-10 max-md:flex-col ">
          <div className="justify-center content-center  max-md:text-center  ">
            <h1 className="text-4xl">Umów sie na spotkanie w 2 minuty</h1>
            <span className="text-md italic text-gray-600">
              Zaprosimy Cię do najbliższej placówki i odpowiemy na wszelkie
              pytania
            </span>
          </div>
          <div className="justify-center content-center ">
            <CustomButton onClick={() => handleOpenDialog()} />
          </div>
        </div>

        <Dialogs open={open} handleClose={handleClose} />
      </div>
    </LoaderProvider>
  );
}

export default App;
