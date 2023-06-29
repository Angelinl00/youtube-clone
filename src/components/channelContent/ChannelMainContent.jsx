import React from 'react'
import ChannelNavbar from './ChannelNavbar';
import MainChannelPageContent from './MainChannelPageContent';

function ChannelMainContent() {
  return (
    <div class="w-[86%] h-full overflow-x-hidden overflow-y-scroll flex flex-col justify-start items-start text-white relative ">
      <img src="./images/unnamed.png" class="w-full h-[192px]" alt="" />
      <ChannelNavbar />
      <MainChannelPageContent />
    </div>
  )
}

export default ChannelMainContent;