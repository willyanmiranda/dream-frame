import { useReducer, useRef } from "react";
import { Client } from "@gradio/client";
import { useDispatch } from "react-redux";
import { setPhotos, setLoader } from "@/store/photos/photoSlice";
import InputRange from "../common/inputRange";
import Button from "../common/button";
import { PromptType } from "@/types/prompt";

const initialValues: PromptType = {
  prompt: "",
  imageStyle: "2560 x 1440",
  promptNegative: true,
  promptWidth: 1024,
  promptHeight: 1024,
};

const examplesPrompt = {
  default: "",
  animals:
    "[Jaguar with green eyes stalking prey]::7 [detailed vegetation and waterfall in amazon rainforest background, cinematic shoot, ultrareal, morning light]::3 --ar 16:9 --s 400",
  tatoo: "yakuza arm tattoo, ultrareal, photorealisitic, close-up, centered, Nikon D850 105mm --ar 2:1",
  macro:
    "Extreme close-up by Oliver Dum, magnified view of a dewdrop on a spider web occupying the frame, the camera focuses closely on the object with the background blurred. The image is lit with natural sunlight, enhancing the vivid textures and contrasting colors.",
  pixel:
    "A cozy pixel art café with steaming coffee cups and patrons, viewed through a rainy window, 32-bit point and click.",
  cartoon:
    "a puppy happy with excitement, in the style of cartoon realism, disney animation, hyper-realistic portraits, 32k uhd, cute cartoonish designs, wallpaper, luminous brushwork --ar 2:1",
  picture:
    "A serene lakeside scene at sunset with visible brushwork. Impasto texture and chiaroscuro lighting, emulating the style of a classical oil painting --ar 2:1",
};

const reducer = (state: PromptType, action: { type: string, field: string, value: string }) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const dispatchPhotos = useDispatch();
  const buttonRef = useRef(null);

  const handleChange = (e) => {
    dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatchPhotos(setLoader());
    buttonRef.current.disabled = true;
    const client = await Client.connect("mukaist/DALLE-4K");
    const result = await client.predict("/run", {
      prompt: state.prompt,
      negative_prompt: state.prompt,
      use_negative_prompt: state.promptNegative,
      style: state.imageStyle,
      seed: 0,
      width: parseInt(state.promptWidth),
      height: parseInt(state.promptHeight),
      guidance_scale: 0.1,
      randomize_seed: true,
    });
    dispatchPhotos(setLoader());
    dispatchPhotos(setPhotos(result.data[0]));
  };

  const handlePromptValue = (e) => {
    let example = examplesPrompt[e.target.value];
    console.log(example);
    dispatch({ type: "SET_FIELD", field: "prompt", value: example });
  };

  return (
    <form className="flex flex-col justify-between h-full w-full">
      <div className="flex flex-col items-start w-full gap-2">
        <label htmlFor="prompt">Prompt</label>
        <input
          type="text"
          onChange={handleChange}
          value={state.prompt}
          name="prompt"
          id="prompt"
          placeholder="Digite o prompt..."
          className="border-2 border-gray-700 bg-[#1A1D2D] rounded-lg h-11 w-full px-4 text-white placeholder-white"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="flex flex-col items-start w-full gap-2">
          <label htmlFor="promptExample">Exemplos de prompts</label>
          <select
            onChange={handlePromptValue}
            name="promptExample"
            id="promptExample"
            className="border-2 border-gray-700 bg-[#1A1D2D] rounded-lg h-10 w-full px-4 text-white cursor-pointer"
          >
            <option value="default">Selecione um prompt</option>
            <option value="animals">Animais</option>
            <option value="tatoo">Tatuagens</option>
            <option value="macro">Fotos detalhadas</option>
            <option value="pixel">Pixel art</option>
            <option value="cartoon">Cartoon</option>
            <option value="picture">Pintura</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex flex-col items-start w-full gap-2">
          <label htmlFor="imageStyle">Estilo da imagem</label>
          <select
            onChange={handleChange}
            value={state.imageStyle}
            name="imageStyle"
            id="imageStyle"
            className="border-2 border-gray-700 bg-[#1A1D2D] rounded-lg h-10 w-full px-4 text-white cursor-pointer"
          >
            <option value="2560 x 1440">2560x1440</option>
            <option value="Photo">Foto</option>
            <option value="Cinematic">Cinema</option>
            <option value="Anime">Anime</option>
            <option value="3D Model">3D</option>
            <option value="(No style)">Sem modelo</option>
          </select>
        </div>

        <div className="flex flex-col items-start w-full gap-2 max-w-[200px]">
          <label htmlFor="promptNegative">Prompt negativo</label>
          <select
            onChange={handleChange}
            value={state.promptNegative}
            name="promptNegative"
            id="promptNegative"
            className="border-2 border-gray-700 bg-[#1A1D2D] rounded-lg h-10 w-full px-4 text-white cursor-pointer"
          >
            <option value={true}>Ativado</option>
            <option value={false}>Desativado</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <InputRange
          handleRange={handleChange}
          rangeValue={state.promptWidth}
          name="promptWidth"
          label="Largura"
        />
        <InputRange
          handleRange={handleChange}
          rangeValue={state.promptHeight}
          name="promptHeight"
          label="Altura"
        />
      </div>

      <Button
        ref={buttonRef}
        handleClick={handleSubmit}
        name="Criar"
        img={Plus}
      />
    </form>
  );
};

export default Form;