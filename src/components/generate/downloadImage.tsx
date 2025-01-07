import React from 'react';
import Button from '../common/button';
import Downl from '../../../public/Downl.svg';
import Plus from "../../../public/Plus.svg"
import Tick from '../../../public/Tick.svg';
import { useDispatch } from 'react-redux';
//import { saveAs } from 'file-saver';
import { setPhotos } from '@/store/photos/photoSlice';

const DownloadImage = () => {
    const dispatchPhotos = useDispatch()
    const download = () => {
        // props.images.forEach((img, index) => {
        //     //saveAs(img.image.url, `image-${index}.jpg`);
        // });
    }
    return (
        <div className="w-full h-full flex max-h-[350px] justify-center">
            <div className="flex flex-col items-center justify-center gap-6">
                <div className="flex flex-col items-center justify-center max-w-[400px]">
                    <img
                        src={Tick}
                        alt="tick"
                        className="bg-[#242940] border-2 border-gray-700 rounded-lg p-4 mb-4"
                    />
                    <h3 className="text-green-500">Criação concluída!</h3>
                    <p className="text-sm">Parabéns! Você criou a arte mais incrível do mundo!</p>
                </div>
                <div className="max-w-[400px] w-full flex flex-col gap-4">
                    <Button handleClick={() => download()} name="Download" img={Downl} />
                    <Button
                        handleClick={() => dispatchPhotos(setPhotos(null))}
                        bgColor="#252A41"
                        name="Criar novas imagens"
                        img={Plus}
                    />
                </div>
            </div>
        </div>

    )
}

export default DownloadImage;