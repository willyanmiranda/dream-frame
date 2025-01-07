"use client";

import Header from './header';
import Form from './form';
import DownloadImage from './downloadImage';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Prompt = () => {
  const photos = useSelector((state: RootState) => state.photos.value);
  return (
    <div className='flex flex-col items-start w-full gap-16'>
      <Header hasPhotos={!!photos}/>
      {!photos ? (<Form/>) : (<DownloadImage/>)}
    </div>
  )
}

export default Prompt;