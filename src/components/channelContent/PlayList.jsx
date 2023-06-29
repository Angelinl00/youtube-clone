import React from 'react'
import VideoPlayList from './VideoPlayList';

function PlayList() {
  return (
    <div className='w-full h-auto flex pl-[65px]'>
      <div className='w-auto h-auto pt-[8px] flex flex-col items-start justify-start border-t border-zinc-500 '>

        <div className='flex flex-row h-auto w-full'>
          <span className='flex flex-col h-full w-auto pr-[8px] pt-[9px] pb-[8px] font-bold items-center justify-center'>
            <p className='text-[16px]'>Search On ‘21</p>
          </span>
          <span className='flex flex-row h-full w-auto px-[16px] pt-[9px] pb-[8px] text-[#aaa]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-play-fill mr-[8px] " viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
            <p className='text-[16px] font-bold'>Play all</p>
          </span>
        </div>

        <div className=' py-[24px] flex flex-row flex-nowrap w-[1200px] overflow-x-scroll'>
          <VideoPlayList />
          <VideoPlayList />
          <VideoPlayList />
          <VideoPlayList />
          <VideoPlayList />
          <VideoPlayList />
          <VideoPlayList />
          <VideoPlayList />
        </div>
      </div>
    </div>
  )
}

export default PlayList;