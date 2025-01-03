import { React, useState } from 'react'
import Header from './header';
import Form from './form';
import DownloadImage from './download-image/DownloadImage';
import { useSelector } from 'react-redux';
import './Prompt.css'

const Prompt = () => {
  const photos = useSelector((state) => state.photos.value);
  return (
    <div className='flex flex-col items-start w-full gap-16'>
      <Header hasPhotos={!!photos}/>
      {!photos ? (<Form/>) : (<DownloadImage images={photos}/>)}
    </div>
  )
}

export default Prompt;