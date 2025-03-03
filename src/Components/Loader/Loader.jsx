import { useLoader } from "../../context/Loader";

export const Loader = () => {
  const { loader } = useLoader();

  return (
    <>
      {loader && (
        <div id="spinner-container" class="space-y-10">
          <div class="flex justify-center">
            <div
              class="w-16 h-16 border-4 border-blue-500
                        border-t-transparent rounded-full 
                        animate-spin"
            ></div>
          </div>
        </div>
      )}
    </>
  );
};
