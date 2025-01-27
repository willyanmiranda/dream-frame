"use client";

//import Slider from "react-slick";
import illustration from '../../../public/illustration.png';
import spinner from '../../../public/spinner.svg'
import Image from "../generate/image";
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";

const Slide = () => {
    const photos = useSelector((state: RootState) => state.photos.value);
    const isLoading = useSelector((state: RootState) => state.photos.isLoading);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        // photos != null ? (
        //     <Slider {...settings}>
        //         {photos.map((img) => (
        //             <Image key={img.id} url={img.image.url} />
        //         ))}
        //     </Slider>
        // ) : (
        //     <img src={isLoading ? spinner : illustration} alt="illustration" className="w-60 h-60" />
        // )
        
        <img
            src={isLoading ? "/spinner.svg" : "/illustration.png"}
            alt="illustration"
            className="w-60 h-60"
        />
    );
};

export default Slide;