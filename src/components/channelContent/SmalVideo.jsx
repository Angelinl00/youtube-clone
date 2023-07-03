import React, { useEffect } from 'react'

function SmalVideo({smalVideo}) {

  useEffect(() => {
    console.log(smalVideo)
  })

  return (
    <div className='h-auto w-full pl-[65px] py-[24px] flex '>
      <div className='h-auto w-auto relative flex flex-row '>
        <div className='h-auto w-auto relative'>
          <img src={smalVideo.thumbnails[0].url} alt="" className='relative w-[424px] h-[238px] mr-[24px] ' />
        </div>

        <div className='relative w-[424px] h-[238px]  flex flex-col items-start justify-start'>
          <p className='text-[14px] mb-[20px] '>{smalVideo.title}</p>
          <p className='text-[13px] text-[#aaa] mb-[19px] '>{smalVideo.viewCountText} . {smalVideo.publishedTimeText}</p>
          {/* <p className='text-start text-[14px] '>Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.</p> */}
        </div>
      </div>
    </div>
  )
}

export default SmalVideo;