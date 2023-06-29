import React from 'react'
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import ChannelMainContent from './components/channelContent/ChannelMainContent';

function Channel() {
  return (
    <div class="w-screen h-screen flex flex-col flex-shrink-0 relative justify-items-center bg-[#212121] ">
      <TopBar/>

      <div class="flex flex-row w-screen h-full relative mr-80 overflow-hidden">
        <SideBar />
        <ChannelMainContent />
      </div>

    </div>
  )
}

export default Channel;