import React, { useEffect } from 'react';
import TopChannelNavbar from './TopChannelNavbar';
import BottomChannelNavbar from './BottomChannelNavbar';
import {useState} from "react";

function ChannelNavbar({channel}) {

  const [channelId , setChannelId] = useState(channel);

  return (
    <div class="w-full h-[170px] relative bg-zinc-900">
      <TopChannelNavbar channel={channelId} />
      <BottomChannelNavbar />
    </div>
  )
}

export default ChannelNavbar;