import React from 'react'
import SmalVideo from './SmalVideo';
import PlayList from './PlayList';

function MainChannelPageContent() {
  return (
    <div className='bg-black w-full h-auto flex flex-col items-start'>
      <SmalVideo />

      <PlayList />
      <PlayList />
      <PlayList />
      <PlayList />
    </div>
  )
}

export default MainChannelPageContent;