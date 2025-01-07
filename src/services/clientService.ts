import { Client } from "@gradio/client";

export const submitPrompt = async (data: any) => {
  const client = await Client.connect("mukaist/Midjourney");
  const result = await client.predict("/run", {
    ...data,
    seed: 0,
    guidance_scale: 0.1,
    randomize_seed: true,
  });
  return result.data;
};