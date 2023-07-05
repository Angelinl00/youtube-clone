import React from 'react'

function VideoPlayList({avatar}) {
  return (
    <div class="text-white w-[214px] h-[194px] flex flex-col pb-[18px] flex-shrink-0 relative mr-5">
      <div class="w-[210px] h-[118px] flex relative">
        {/* eslint-disable-next-line */}
        <img src={avatar} class="h-full w-full"/>
        <span class="w-auto h-auto py-[3px] flex absolute bottom-1 bg-black right-1 text-sm">23:45</span>
      </div>

      <div class="flex flex-row relative">
        <span class="flex flex-col w-auto h-auto relative pt-[8px]">
          <span class=" flex flex-col h-[28px] w-[204px] text-white relative items-start justify-start text-start text-[14px]">
            <p class="text-[14px] mb-1">Lorem ipsum dolor sit amet, consecte...</p>
          </span>
          <span class=" flex flex-col h-[28px] w-[204px] relative mt-[12px]">
            <p class="text-[12px] text-zinc-500 items-start justify-start text-start">Marcus Levin</p>
            <p class="text-[12px] text-zinc-500 items-start justify-start text-start">329K views . 1 month ago</p>
          </span>
        </span>
      </div>
    </div>
  )
}

export default VideoPlayList;