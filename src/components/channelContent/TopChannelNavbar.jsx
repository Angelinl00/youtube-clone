import React from 'react'

function TopChannelNavbar() {
  return (
    <div className='h-[100px] w-full px-[65px] pt-[16px] pb-[4px] flex flex-col items-start bg-zinc-900 '>
      <div className='h-full w-full relative '>

        <span className='absolute flex flex-col items-center justify-center h-full w-[124px] px-[4px] right-0'>
          <button className='text-[14px] px-[16px] py-[10px] bg-[#c00] font-bold '>SUBSCRIBES</button>
        </span>

        <div id="avatar" className=' h-full w-[247px] relative flex flex-row justify-start'>
        {/* eslint-disable-next-line */}
          <img src="./images/unnamed.png" className='h-[80px] w-[80px] flex flex-col justify-center items-center relative rounded-full mr-[24px] ' />
          <span className='h-[full] w-auto py-[18px] text-white flex flex-col items-start '>
            <p className='text-[24px]'>Marcus Levin</p>
            <p className='text-[14px] text-[#aaa]'>1.2M subscribers</p>
          </span>
        </div>

      </div>
    </div>
  )
}

export default TopChannelNavbar;