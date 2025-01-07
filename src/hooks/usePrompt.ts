import { useDispatch } from "react-redux";
import { setPhotos, setLoader } from "@/store/photos/photoSlice";
import { submitPrompt } from "@/services/clientService";

export const usePrompt = () => {
  const dispatch = useDispatch();

  const handleSubmitPrompt = async (formData: any) => {
    dispatch(setLoader());
    try {
      const data = await submitPrompt(formData);
      dispatch(setPhotos(data));
    } catch (error) {
      console.error("Erro ao enviar prompt:", error);
    } finally {
      dispatch(setLoader());
    }
  };

  return { handleSubmitPrompt };
};
