import React from 'react'
import TopChannelNavbar from './TopChannelNavbar';
import BottomChannelNavbar from './BottomChannelNavbar';

function ChannelNavbar() {
  return (
    <div class="w-full h-[170px] relative bg-zinc-900">
      <TopChannelNavbar />
      <BottomChannelNavbar />
    </div>
  )
}

export default ChannelNavbar;