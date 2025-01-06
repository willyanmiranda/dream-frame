import Image from "next/image"

const ImageItem = (props: { url: string }) => {
    return (
      <Image 
      className="slide-image"
      key={props.url} 
      src={props.url} 
      alt="Foto" 
      style={{ maxWidth: '100%'}} 
      />
    )
  }
  
  export default ImageItem;