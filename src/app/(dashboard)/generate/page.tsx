import ImageGeneratedSection from "@/templates/generate-page/Image-generated-section";
import PromptSection from "@/templates/generate-page/prompt-section";

export default function GeneratePage() {
  return (
    <div className="h-full pl-16 flex gap-16">
      <ImageGeneratedSection/>
      <PromptSection/>
    </div>
  );
}