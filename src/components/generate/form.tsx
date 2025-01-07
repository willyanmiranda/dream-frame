"use client"

import { useReducer } from "react";
import { usePrompt } from "@/hooks/usePrompt";
import InputRange from "../common/inputRange";
import Button from "../common/button";
import { ExamplePromptType, PromptType } from "@/types/prompt";
import FormField from "../common/formField";

const initialValues: PromptType = {
  prompt: "",
  imageStyle: "2560 x 1440",
  promptNegative: "true",
  promptWidth: 1024,
  promptHeight: 1024,
};

const examplesPrompt: ExamplePromptType = {
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

const reducer = (state: PromptType, action: { type: string, payload: any }) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        ...action.payload, // Permite atualizar múltiplos campos
      };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const { handleSubmitPrompt } = usePrompt();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await handleSubmitPrompt({
      prompt: state.prompt,
      negative_prompt: state.prompt,
      use_negative_prompt: state.promptNegative,
      style: state.imageStyle,
      width: Number(state.promptWidth),
      height: Number(state.promptHeight),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", payload: { [name]: value } });
  };

  const handlePromptValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as keyof ExamplePromptType;
    const example = examplesPrompt[value];
    dispatch({ type: "SET_FIELD", payload: { prompt: example } });
  };

  return (
    <form className="flex flex-col justify-between h-full w-full">
      <FormField
        label="Prompt"
        type="text"
        name="prompt"
        id="prompt"
        placeholder="Digite o prompt..."
        value={state.prompt}
        onChange={handleChange}
      />

      <div className="flex items-center gap-5">
        <FormField
          label="Exemplos de prompts"
          as="select"
          name="promptExample"
          id="promptExample"
          value={state.imageStyle}
          onChange={handleChange}
        >
          <option value="default">Selecione um prompt</option>
          <option value="animals">Animais</option>
          <option value="tatoo">Tatuagens</option>
          <option value="macro">Fotos detalhadas</option>
          <option value="pixel">Pixel art</option>
          <option value="cartoon">Cartoon</option>
          <option value="picture">Pintura</option>
        </FormField>
      </div>

      <div className="flex items-center gap-5">
        <FormField
          label="Estilo da imagem"
          as="select"
          name="imageStyle"
          id="imageStyle"
          value={state.imageStyle}
          onChange={handleChange}
        >
          <option value="2560 x 1440">2560x1440</option>
          <option value="Photo">Foto</option>
          <option value="Cinematic">Cinema</option>
          <option value="Anime">Anime</option>
          <option value="3D Model">3D</option>
          <option value="(No style)">Sem modelo</option>
        </FormField>

        <div className="flex flex-col items-start w-full gap-2 max-w-[200px]">
          <label htmlFor="promptNegative">Prompt negativo</label>
          <select
            onChange={handleChange}
            value={state.promptNegative}
            name="promptNegative"
            id="promptNegative"
            className="border-2 border-gray-700 bg-[#1A1D2D] rounded-lg h-10 w-full px-4 text-white cursor-pointer"
          >
            <option value="true">Ativado</option>
            <option value="false">Desativado</option>
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
        handleClick={handleSubmit}
        name="Criar"
        img="/Plus.svg"
      />
    </form>
  );
};

export default Form;