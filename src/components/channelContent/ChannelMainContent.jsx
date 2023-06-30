import React, { useEffect, useState } from 'react'
import ChannelNavbar from './ChannelNavbar';
import MainChannelPageContent from './MainChannelPageContent';
import { useLocation } from 'react-router-dom';

function ChannelMainContent() {

  const location = useLocation();

  const [channelId , setChannelId] = useState(location.pathname.split('/')[2]);

  return (
    <div class="w-[86%] h-full overflow-x-hidden overflow-y-scroll flex flex-col justify-start items-start text-white relative ">
      <img src="./images/unnamed.png" class="w-full h-[192px]" alt="" />
      <ChannelNavbar channel={channelId} />
      <MainChannelPageContent channel={channelId} />
    </div>
  )
}

export default ChannelMainContent;