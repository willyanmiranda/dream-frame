import Slider from "react-slick";
import illustration from '../../../assets/illustration.png';
import spinner from '../../../assets/spinner.svg'
import Image from "../generate/image";
import { useSelector } from 'react-redux';

const Slide = () => {
    const photos = useSelector((state) => state.photos.value);
    const isLoading = useSelector((state) => state.photos.isLoading);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        photos != null ? (
            <Slider {...settings}>
                {photos.map((img) => (
                    <Image key={img.id} url={img.image.url} />
                ))}
            </Slider>
        ) : (
            <img src={isLoading ? spinner : illustration} alt="illustration" className="w-60 h-60" />
        )
    );
};

export default Slide;